import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "How AppMap works";
const description =
  "AppMap records application runs as traces in development and CI, then compares them before merge. Here is what a trace captures and how a coding agent reads it.";

const faqs = [
  {
    q: "What does AppMap do?",
    a: "AppMap helps developers and coding agents understand what software actually does at runtime. It records the application in the editor and turns that run into diagrams you can review and a trace your coding agent can query over MCP.",
  },
  {
    q: "How does AppMap help review AI-generated code?",
    a: "AppMap records the change as it runs and shows the call tree, queries, and data behind it. You review the behavior, not just the diff, and the same evidence travels with the pull request.",
  },
  {
    q: "What does an AppMap trace contain?",
    a: "It is a record of how your application actually ran: function calls, SQL queries, HTTP traffic, exceptions, and the relationships between them. Every map, view, and review is drawn from those traces. AppMap records traces from tests, application requests, or running processes in development and QA.",
    doc: { href: "https://appmap.io/docs/get-started-with-appmap/making-appmap-data.html", label: "How AppMap data is made" },
  },
  {
    q: "How does AppMap work with MCP?",
    a: "AppMap exposes the traces over the Model Context Protocol. Coding agents call get_call_tree, find_calls, find_queries, and find_requests over the AppMap MCP server to read the same evidence you see in your editor.",
    doc: { href: "https://appmap.io/docs/reference/appmap-mcp.html", label: "AppMap MCP reference" },
  },
  {
    q: "Does AppMap replace Cursor, Copilot, Claude Code, or Windsurf?",
    a: "No. AppMap works alongside the coding agent you already use. Any MCP-capable client can read AppMap traces, regardless of the underlying model.",
  },
  {
    q: "Does AppMap send code or runtime data to the cloud?",
    a: "AppMap does not send traces to an AppMap-operated cloud. AppMap records, sanitizes, and compares traces in your developer environment or CI, and working traces stay in the developer environment. AppMap's skills and your coding agent build and maintain the Gold Trace set. Gold Traces can be used locally during development. When a team versions the Gold Trace set with the code, it is stored in the repository and follows the team's existing Git workflow. Gold Traces are sanitized before they are committed. If the developer uses a hosted coding agent, selected context may be sent to that provider under its configuration and terms.",
    doc: { href: "https://appmap.io/security", label: "AppMap security" },
  },
  {
    q: "Where does AppMap store runtime behavior?",
    a: "Traces are captured locally, typically to a tmp/appmap directory in the project. Gold Traces can be used locally during development. When a team versions the Gold Trace set with the code, it is stored in the repository and follows the team's existing Git workflow. Gold Traces are sanitized before they are committed.",
    doc: { href: "https://appmap.io/docs/reference/appmap-client-cli.html", label: "AppMap client CLI reference" },
  },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/how-it-works" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/how-it-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HowItWorksPage,
});

const capture = [
  {
    title: "Function calls",
    descriptor: "Params and returns",
    image: "/marketing-assets/img/appmap/call-tree.webp",
    objectPosition: "left top",
    side: "top" as const,
  },
  {
    title: "SQL queries",
    descriptor: "Bindings and source",
    image: "/marketing-assets/img/appmap/queries.jpg",
    objectPosition: "left top",
    side: "bottom" as const,
  },
  {
    title: "HTTP traffic",
    descriptor: "Requests and responses",
    image: "/marketing-assets/img/appmap/sequence.jpg",
    objectPosition: "left top",
    side: "top" as const,
  },
  {
    title: "Exceptions",
    descriptor: "Class, message, source",
    image: "/marketing-assets/img/appmap/sequence.jpg",
    objectPosition: "right center",
    side: "bottom" as const,
  },
  {
    title: "Code structure",
    descriptor: "Packages and classes",
    image: "/marketing-assets/img/appmap/code-map.jpg",
    objectPosition: "center",
    side: "top" as const,
  },
  {
    title: "Full path",
    descriptor: "Request to database",
    image: "/marketing-assets/img/appmap/dependency-map.webp",
    objectPosition: "center",
    side: "bottom" as const,
  },
];

const views = [
  {
    title: "Dependency map",
    body: "The whole running app at a glance: services, code, SQL, and how they connect.",
    image: "/marketing-assets/img/appmap/dependency-map.webp",
    alt: "AppMap dependency map of a running application.",
  },
  {
    title: "SQL inspection",
    body: "Every query the run made, with its bindings and where it came from.",
    image: "/marketing-assets/img/appmap/queries.jpg",
    alt: "AppMap SQL inspection view of executed queries.",
  },
  {
    title: "Code Objects",
    body: "Packages, classes, and functions, navigable from the same trace.",
    image: "/marketing-assets/img/appmap/code-map.jpg",
    alt: "AppMap code map of packages, classes, and functions.",
  },
];

const mcp = [
  { name: "get_call_tree", body: "The execution path for a trace." },
  { name: "find_calls", body: "Function calls across the active traces." },
  { name: "find_queries", body: "SQL queries across the active traces." },
  { name: "find_requests", body: "HTTP requests across the active traces." },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">How it works</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              How AppMap works.
            </h1>
            <p className="mt-6 max-w-[820px] text-[22px] font-semibold leading-[1.35] tracking-[-0.4px] text-[#f2effb] sm:text-[26px]">
              Source code tells you what software could do. Runtime behavior tells you what it actually did.
            </p>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              AppMap runs in development and CI. It records application runs as traces that developers inspect as maps and coding agents query directly.
            </p>
          </div>
        </section>

        <section className="px-6 pt-8 pb-20">
          <div className="mx-auto max-w-[1120px]">
            <img
              src="/marketing-assets/img/workflow/appmap-runtime-review.png"
              alt="AppMap workflow: the coding agent runs the tests, AppMap records fresh traces, and AppMap compares Gold Traces for the head and base revisions before merge"
              width={2000}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-[#2c2353] bg-[#0d0a1a]"
            />
            <p className="mt-4 max-w-[820px] text-[13px] leading-[1.6] text-[#a99fc7]">
              AppMap fits into the development loop your coding agent already runs. Tests execute, AppMap records fresh traces, and AppMap compares the behavior before merge.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Every run, fully captured</h2>
            <p className="mt-3 max-w-[720px] text-[15px] text-[#a99fc7]">
              An AppMap trace records the calls, SQL queries, HTTP traffic, exceptions, and code paths from a run. Each recorded run adds another trace to the local set.
            </p>

            {/* Desktop flow: spine + 3-above / 3-below nodes */}
            <div className="relative mt-12 hidden lg:block">
              {/* spine */}
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <div className="mx-12 flex items-center gap-3">
                  <span className="rounded-md border border-[#ff07aa]/40 bg-[#1c1538] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">Request</span>
                  <span className="h-[2px] flex-1 bg-gradient-to-r from-[#ff07aa] via-[#a21caf] to-[#ff07aa] shadow-[0_0_18px_rgba(255,7,170,0.45)]" />
                  <span className="rounded-md border border-[#ff07aa]/40 bg-[#1c1538] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">Response</span>
                </div>
              </div>

              <div className="relative grid grid-cols-3 gap-x-6">
                {/* top row */}
                {capture.filter((c) => c.side === "top").map((c) => (
                  <FlowNode key={c.title} c={c} side="top" />
                ))}
              </div>
              <div className="h-[88px]" aria-hidden />
              <div className="relative grid grid-cols-3 gap-x-6">
                {capture.filter((c) => c.side === "bottom").map((c) => (
                  <FlowNode key={c.title} c={c} side="bottom" />
                ))}
              </div>
            </div>

            {/* Mobile/tablet: vertical stack */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden">
              {capture.map((c) => (
                <div key={c.title} className="flex items-center gap-3 rounded-xl border border-[#2c2353] bg-[#1c1538] p-3">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: c.objectPosition }}
                    className="h-[60px] w-[100px] flex-shrink-0 rounded-md border border-[#2c2353] bg-[#16112b] object-cover"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-[#f2effb]">{c.title}</div>
                    <div className="text-[12.5px] text-[#a99fc7]">{c.descriptor}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">AppMap finds the paths your tests are missing.</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              The Gold Traces skill analyzes the codebase and existing tests to identify important application paths. When an important path is already covered, AppMap records it. When coverage is missing, AppMap suggests a new test case and the coding agent can create it. AppMap then records the path and adds the trace to the Gold Trace set.
            </p>
            <p className="mt-6 text-center text-[14px] text-[#a99fc7]">
              Important path → Existing test or suggested test → AppMap trace
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">See the trace as a map.</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              The same trace can be viewed as a dependency map, sequence diagram, SQL activity, or code objects. Each view shows the same recorded behavior from a different angle.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {views.map((v) => (
                <div key={v.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <img
                    src={v.image}
                    alt={v.alt}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="mb-4 aspect-[16/9] w-full rounded-lg border border-[#2c2353] bg-[#16112b] object-cover"
                  />
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">How the traces reach your agent</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              Coding agents query the traces instead of reconstructing the execution path from source. AppMap exposes the recorded calls, queries, and requests through MCP.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mcp.map((m) => (
                <div key={m.name} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <code className="font-mono text-[15px] font-bold text-[#ff07aa]">{m.name}</code>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compatibility" className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Works with the coding agent you already use</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              AppMap exposes traces over MCP, so the coding agent can change without changing the runtime context. Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, and other MCP clients can query the same AppMap traces.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {["Claude Code", "Cursor", "GitHub Copilot", "Windsurf", "Cline", "Other MCP clients"].map((name) => (
                <div key={name} className="flex items-center justify-center gap-2 rounded-xl border border-[#2c2353] bg-[#1c1538] px-4 py-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff07aa]" style={{ boxShadow: "0 0 10px #ff07aa" }} />
                  <span className="text-[13.5px] font-semibold text-[#f2effb]">{name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[820px] text-[14px] leading-[1.6] text-[#a99fc7]">
              The model can change too. AppMap traces provide the same runtime context to hosted, self-hosted, frontier, and compact models.
            </p>
            <p className="mt-4 text-[15px] font-semibold text-[#ff07aa]">
              The agent can change. The evidence does not have to.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Gold Traces make behavior comparable</h2>
            <p className="mt-4 max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              AppMap Gold Traces are a representative set of traces maintained as the code changes. AppMap compares the Gold Traces for the head revision with the Gold Traces for the base revision and reports what changed.
            </p>
            <p className="mt-3 max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              The Gold Traces skill uses existing tests to cover important application paths and suggests new test cases when coverage is missing.
            </p>
            <div className="mt-5">
              {/* TODO: point to /gold-traces when that page ships */}
              <Link to="/architecture" className="text-[15px] font-semibold text-[#ff07aa] hover:underline">
                Learn about AppMap Gold Traces →
              </Link>
            </div>

            <div className="mt-8 max-w-[720px]">
              <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                <div className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">CODE CHANGED · BEHAVIOR CHANGED</div>
                <h3 className="mt-3 text-[19px] font-bold text-[#f2effb]">Changed as intended</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                  For an N+1 fix, a new timeout, a circuit breaker, or added audit logging, behavior should change in a specific way. If the trace does not change, the fix did not land.
                </p>
                <img
                  src="/marketing-assets/img/appmap/waltzbeforeafter_branded.svg"
                  alt="AppMap traces of FINOS Waltz involvement-kind permission lookup: 7 per-id SELECTs replaced by a single batched findAll, 6 fewer round-trips."
                  loading="lazy"
                  decoding="async"
                  className="mt-5 w-full h-auto rounded-lg border border-[#2c2353] bg-[#0d0a1a]"
                />
                <p className="mt-2 text-[12px] text-[#a99fc7]">Real AppMap trace · FINOS Waltz</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-[#2c2353] rounded-2xl border border-[#2c2353] bg-[#1c1538]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-[16px] font-semibold text-[#f2effb] marker:hidden">
                    <span className="mr-2 text-[#ff07aa] group-open:rotate-90 inline-block transition-transform">›</span>
                    {f.q}
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[#a99fc7]">{f.a}</p>
                  {f.doc ? (
                    <a
                      href={f.doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[13.5px] font-semibold text-[#ff07aa] hover:underline"
                    >
                      Read: {f.doc.label} →
                    </a>
                  ) : null}
                </details>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <a
                href="https://appmap.io/docs/appmap-docs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#ff07aa] hover:underline"
              >
                Full technical documentation →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FlowNode({
  c,
  side,
}: {
  c: { title: string; descriptor: string; image: string; objectPosition: string };
  side: "top" | "bottom";
}) {
  return (
    <div className="relative flex flex-col items-center">
      {side === "bottom" ? (
        <div className="mb-2 h-10 w-px bg-gradient-to-b from-transparent to-[#8b5cf6]" aria-hidden />
      ) : null}
      <div className="w-full max-w-[220px] rounded-lg border border-[#2c2353] bg-[#16112b] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={c.image}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ objectPosition: c.objectPosition }}
          className="h-[72px] w-full rounded-md border border-[#2c2353] bg-[#1c1538] object-cover"
        />
        <div className="mt-2 text-center text-[13.5px] font-bold text-[#f2effb]">{c.title}</div>
        <div className="text-center text-[12px] text-[#a99fc7]">{c.descriptor}</div>
      </div>
      {side === "top" ? (
        <div className="mt-2 h-10 w-px bg-gradient-to-b from-[#8b5cf6] to-transparent" aria-hidden />
      ) : null}
    </div>
  );
}