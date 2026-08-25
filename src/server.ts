import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

// The legacy Jekyll site (docs, blog, and not-yet-ported pages) stays deployed
// on Render. Any GET/HEAD request this app 404s on is retried against that
// origin, so all pre-existing appmap.io URLs keep working unchanged.
// Preview deploys can override the origin (e.g. to a Render branch preview)
// with a LEGACY_ORIGIN var; production uses the default.
const DEFAULT_LEGACY_ORIGIN = "https://appland-com.onrender.com";

function legacyOrigin(env: unknown): string {
  const value = (env as { LEGACY_ORIGIN?: unknown } | undefined)?.LEGACY_ORIGIN;
  return typeof value === "string" && value !== "" ? value.replace(/\/$/, "") : DEFAULT_LEGACY_ORIGIN;
}

function shouldTryLegacyFallback(request: Request, response: Response): boolean {
  if (response.status !== 404) return false;
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  const { pathname } = new URL(request.url);
  // Our own namespaces: a 404 here is a genuine 404, never legacy content.
  return !pathname.startsWith("/marketing-assets/") && !pathname.startsWith("/_server");
}

async function fetchFromLegacySite(request: Request, origin: string): Promise<Response | undefined> {
  const url = new URL(request.url);
  try {
    // redirect: "manual" passes the legacy site's redirects (e.g. Render's
    // .html-stripping 301s) through to the browser on our own domain.
    const response = await fetch(new Request(origin + url.pathname + url.search, request), {
      redirect: "manual",
    });
    if (response.status === 404) return undefined;

    const location = response.headers.get("location");
    if (location?.startsWith(origin)) {
      const headers = new Headers(response.headers);
      headers.set("location", location.slice(origin.length) || "/");
      return new Response(response.body, { status: response.status, headers });
    }
    return response;
  } catch (error) {
    console.error("legacy origin fetch failed", error);
    return undefined;
  }
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      if (shouldTryLegacyFallback(request, normalized)) {
        const legacy = await fetchFromLegacySite(request, legacyOrigin(env));
        if (legacy) return legacy;
      }
      return normalized;
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
