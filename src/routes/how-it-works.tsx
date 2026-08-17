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
    a: "It is a record of how your application actually ran: function calls, SQL queries, HTTP traffic, exceptions, and the relationships between them. Every map, view, and review is drawn from those traces. Captured via a language agent (Java -javaagent, Python, Ruby, Node) from tests, requests, or a running process.",
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
    a: "AppMap does not send traces to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and AppMap traces are recorded locally. AppMap's skills and your coding agent build and maintain the Gold Trace set, sanitized before commit, and you version it with the code. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
    doc: { href: "https://appmap.io/security", label: "AppMap security" },
  },
  {
    q: "Where does AppMap store runtime behavior?",
    a: "Traces are recorded locally, typically to a tmp/appmap directory in the project. The Gold Traces AppMap keeps live in the gold_traces directory in the repository and are versioned like any other file. Gold Traces are sanitized before they are committed.",
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
  { name: "get_call_tree", body: "The execution path for a trace. The coding agent used it in almost every study run. One call returns the answer." },
  { name: "find_calls", body: "Every invocation of a function across the active traces." },
  { name: "find_queries", body: "Executed SQL with its bindings." },
  { name: "find_requests", body: "The HTTP boundaries in the run." },
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

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1120px]">
            <p className="max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              AppMap fits into the development loop your coding agent already runs. Tests execute, AppMap records fresh traces, and AppMap compares the behavior before merge.
            </p>
            <img
              src="/marketing-assets/img/workflow/appmap-runtime-review.png"
              alt="AppMap workflow: the coding agent runs the tests, AppMap records fresh traces, and AppMap compares Gold Traces for the head and base revisions before merge"
              width={2000}
              height={974}
              loading="lazy"
              decoding="async"
              className="mt-8 w-full rounded-2xl border border-[#2c2353] bg-[#0d0a1a]"
            />
            <p className="mt-4 max-w-[820px] text-[13px] leading-[1.6] text-[#a99fc7]">
              Developers see the maps. Coding agents query the same traces. AppMap compares Gold Traces for the head revision with Gold Traces for the base revision.
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
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mcp.map((m) => (
                <div key={m.name} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <code className="font-mono text-[15px] font-bold text-[#ff07aa]">{m.name}</code>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{m.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[720px] text-[16px] font-semibold text-[#f2effb]">
              Developers use the maps. Coding agents query the same traces.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-[#ff07aa]/40 bg-[#1c1538] shadow-[0_0_60px_rgba(255,7,170,0.12)_inset]">
                <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
                  <span className="ml-auto font-semibold text-[#ff07aa]">1 query · get_call_tree</span>
                </div>
                <div className="bg-[#0d0a1a] p-5 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
                  <div className="text-[#a78bfa]">POST /charge</div>
                  <div className="ml-3">PaymentController#charge</div>
                  <div className="ml-6 text-[#a99fc7]">ChargeService#authorize</div>
                  <div className="ml-9 text-[#a99fc7]">RetryPolicy#wrap</div>
                  <div className="ml-12 text-[#ff07aa]">LedgerService#write</div>
                  <div className="ml-[60px] text-[#a78bfa]">SQL INSERT INTO ledger ...</div>
                  <div className="ml-6 text-[#a99fc7]">IdempotencyStore#check</div>
                  <div className="ml-9 text-[#a78bfa]">SQL SELECT id FROM idempotency ...</div>
                  <div className="ml-3 text-[#a99fc7]">→ 200 OK · 142ms</div>
                  <div className="mt-3 text-[#a78bfa]">// returned by 1 get_call_tree call</div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#2c2353] bg-[#1c1538]">
                <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
                  <span className="ml-auto font-semibold text-[#fb7185]">~15 searches · static trajectory</span>
                </div>
                <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
{`# the coding agent gropes for the same picture
grep -r "payment" src/        # 214 hits
read PaymentController.java
grep -r "retry" src/          # 38 hits
read RetryHandler.java
grep -rn "charge(" src/
read ChargeService.java
grep -r "idempotency" src/    # 0 hits
read LedgerService.java
grep -rn "INSERT" src/
read LedgerRepository.java
grep -r "@Transactional" src/
read RetryPolicy.java
grep -rn "ledger.write" src/
`}
                  <span className="font-bold text-[#fb7185]">... budget exhausted. still guessing.</span>
                </pre>
              </div>
            </div>

            <p className="mt-4 text-center text-[13px] text-[#a99fc7]">
              One get_call_tree query returns the whole path. Representative source-only search path: 15+ calls.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">See what your agent read</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              AppMap shows the evidence behind each inference as the same visuals you inspect in the editor. You see exactly what the coding agent reasoned over instead of trusting the output.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/benchmarks" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                See the Benchmark
              </Link>
              <Link to="/architecture" className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]">
                Where traces live →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What is AppMap?</h2>
            <p className="mt-4 max-w-[820px] text-[18px] leading-[1.6] text-[#a99fc7]">
              AppMap helps developers and coding agents understand what software actually does at runtime. It records the application in the editor and turns that run into diagrams you can review and a trace your coding agent can query over MCP.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">AppMap Gold Traces make behavior reviewable</h2>
            <p className="mt-4 max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              A Gold Trace is a recorded run of an important path in your software, kept as the reference for what that path does. AppMap's skills and your coding agent build and maintain the set as the code changes. You review what changed and decide whether it is right.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                <div className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">CODE CHANGED · BEHAVIOR HELD</div>
                <h3 className="mt-3 text-[19px] font-bold text-[#f2effb]">Invariant behavior</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                  For a security patch, dependency upgrade, or refactor, behavior should not change. If the new trace diverges from the Gold Trace, AppMap flags a regression, even when the tests stay green.
                </p>
                <img
                  src="/marketing-assets/img/appmap/waltzbehaviorheld_branded.svg"
                  alt="AppMap traces of FINOS Waltz: GET /api/involvement-kind, Gold Trace vs after an unrelated change, status, auth path, and query count match."
                  loading="lazy"
                  decoding="async"
                  className="mt-5 w-full h-auto rounded-lg border border-[#2c2353] bg-[#0d0a1a]"
                />
                <p className="mt-2 text-[12px] text-[#a99fc7]">Real AppMap trace · FINOS Waltz</p>
              </div>
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

            <p className="mt-8 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              You do not need to run the full stack to get a Gold Trace. A local run, a focused test, a smoke script, an API call, or a QA environment is enough.
            </p>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              Gold Traces are useful to you locally as soon as they exist. Committing them is what lets your team and CI compare the head revision against the base revision.
            </p>
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