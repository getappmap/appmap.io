import "./lib/error-capture";

import { env as workersEnv } from "cloudflare:workers";

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
  // The nitro cloudflare entry does not pass `env` through to this handler
  // (it arrives undefined in the deployed worker), so fall back to the
  // cloudflare:workers env import, which is populated in both dev and deploy.
  let value = (env as { LEGACY_ORIGIN?: unknown } | undefined)?.LEGACY_ORIGIN;
  if (typeof value !== "string" || value === "") value = workersEnv?.LEGACY_ORIGIN;
  return typeof value === "string" && value !== "" ? value.replace(/\/$/, "") : DEFAULT_LEGACY_ORIGIN;
}

// Pages removed from the legacy site whose URLs must keep working. Keys are
// normalized paths (no trailing slash, no .html suffix); values are the
// replacement location. Prefix rules below handle whole removed sections.
const LEGACY_REDIRECTS: Record<string, string> = {
  // get-appmap.html aliases
  "/download": "/get-appmap",
  "/get-early-access": "/get-appmap",
  "/sign-up-for-updates": "/get-appmap",
  // contact surfaces
  "/contact": "/book-a-demo",
  "/contact/sales": "/book-a-demo",
  "/contact-enterprise-sales": "/enterprise",
  "/talk-to-an-expert": "/book-a-demo",
  "/company/contact-us": "/book-a-demo",
  // company pages folded into /team (the app 301s /company there too)
  "/company/about-appmap": "/team",
  "/company/careers": "/team",
  "/company/view-demos": "/how-it-works",
  // one-off / retired pages
  "/appmap-analysis": "/how-it-works",
  "/disrupt": "/",
  "/search": "/",
  // aliases the old home page carried via redirect_from
  "/appmap-framework": "/",
  "/status": "/",
  "/blog/2020/10/14/framework-for-monitoring-end-to-end-code-and-data-flows": "/",
  // retired resources
  "/blog/gallery": "/blog",
  // slack.html was a meta-refresh to the community Slack invite
  "/slack":
    "https://join.slack.com/t/appmap-group/shared_invite/zt-2n67m4fdi-mclN_VDZCKTll8VX5oc7FQ",
};

// The Navie how-to demo pages moved into the blog at their original post
// dates. Handled here (before SSR) so the app's blanket /navie/* ->
// /how-it-works route doesn't swallow them.
const NAVIE_HOWTO_DATES: Record<string, string> = {
  "fixing-performance-issues-with-mongodb-in-a-mern-app": "2024/04/06",
  "improve-db-performance-with-a-caching-key-design": "2024/04/06",
  "adding-a-new-feature-to-a-complex-python-application": "2024/04/07",
  "find-and-fix-a-database-performance-issue-in-ruby-on-rails": "2024/04/08",
  "fix-slow-api-endpoints-in-a-fastapi-app-with-navie": "2024/04/09",
  "automate-openapi-publishing-to-swaggerhub": "2024/05/01",
  "using-appmap-and-smartbear-to-fail-a-ci-build-with-api-differences": "2024/05/01",
  "using-appmap-diagrams-to-learn-how-unfamiliar-code-works": "2024/05/02",
  "visualize-java-spring-application-behavior-in-vs-code": "2024/05/02",
  "understand-complex-data-flows-and-add-new-features-in-java-spring": "2024/05/06",
  "adding-stripe-integration-to-a-ruby-on-rails-app": "2024/05/22",
};

// Pages this app serves whose legacy .html address should normalize to the
// extensionless route (e.g. /pricing.html -> /pricing).
const HTML_TO_ROUTE = new Set(["/pricing", "/get-appmap", "/security"]);

// Legacy pages that still live on the old site but are shadowed by an app
// route (the app 301s all of /company/* to /team, which would beat the 404
// fallback). These proxy straight through instead.
// /company/brand-assets stays on the legacy site pending an owner decision.
const LEGACY_PASSTHROUGH = new Set(["/company/brand-assets"]);

function normalizeLegacyPath(pathname: string): string {
  let path = pathname.replace(/\.html$/, "");
  if (path.length > 1) path = path.replace(/\/$/, "");
  return path;
}

function legacyRedirectLocation(pathname: string): string | undefined {
  const path = normalizeLegacyPath(pathname);
  const mapped = LEGACY_REDIRECTS[path];
  if (mapped) return mapped;
  if (path.startsWith("/navie/how-to/")) {
    const slug = path.slice("/navie/how-to/".length);
    const date = NAVIE_HOWTO_DATES[slug];
    return date ? `/blog/${date}/${slug}` : "/blog";
  }
  if (path !== pathname && HTML_TO_ROUTE.has(path)) return path;
  // The product feedback form is gone, but IntelliJ plugin builds bundling
  // pre-2024 @appland/components still show a "Send your feedback" sidebar
  // link to it. Send those users to the docs Community page (Slack +
  // support email) rather than a marketing page.
  if (path === "/product/feedback" || path.startsWith("/product/feedback/"))
    return "/docs/community";
  // The rest of the /product section (incl. Navie product pages and
  // examples) is retired in favor of the new marketing pages.
  if (path === "/product" || path.startsWith("/product/")) return "/how-it-works";
  // Old home-page aliases and retired sections.
  if (path === "/products" || path.startsWith("/products/")) return "/";
  if (path === "/use-cases" || path.startsWith("/use-cases/")) return "/how-it-works";
  if (path === "/resources" || path.startsWith("/resources/")) return "/";
  return undefined;
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
    // The origin may send absolute or relative Location headers; resolve
    // either form and rewrite same-origin redirects onto our own domain.
    const resolved = location ? new URL(location, origin) : undefined;
    if (resolved && resolved.origin === new URL(origin).origin) {
      const target = (resolved.pathname || "/") + resolved.search;
      // A redirect that only adds/removes a trailing slash or .html would
      // ping-pong against the app's own slash-stripping redirect (e.g.
      // /blog -> origin 308 /blog/ -> app 307 /blog -> ...). Serve the
      // target's content directly instead of bouncing the browser.
      if (normalizeLegacyPath(resolved.pathname) === normalizeLegacyPath(url.pathname)) {
        const followed = await fetch(origin + target, {
          method: request.method,
          redirect: "manual",
        });
        if (followed.status < 300) return followed;
      }
      const headers = new Headers(response.headers);
      headers.set("location", target);
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
      const { pathname } = new URL(request.url);
      const location = legacyRedirectLocation(pathname);
      if (location) {
        return new Response(null, { status: 301, headers: { location } });
      }
      if (LEGACY_PASSTHROUGH.has(normalizeLegacyPath(pathname))) {
        const legacy = await fetchFromLegacySite(request, legacyOrigin(env));
        if (legacy) return legacy;
      }
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
