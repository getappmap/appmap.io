import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageCoverage } from "@/components/common/LanguageCoverage";
import { Header } from "@/components/layout/Header";
import { ReviewStepStrip } from "@/components/sections/common/ReviewStepStrip";

const title = "How AppMap works";
const description =
  "AppMap records traces from tests, requests, and running processes in development and CI, then compares them before merge. Here is what a trace captures and how a coding agent reads it.";

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
    a: "AppMap does not send traces to an AppMap-operated cloud. AppMap records, sanitizes, and compares traces in your developer environment or CI, and working traces stay in the developer environment. AppMap's skills and your coding agent build and maintain the Gold Trace set. Gold Traces can be used locally during development. When a team versions the Gold Trace set with the code, it is stored in the repository and follows the team's existing Git workflow. Gold Traces are sanitized before they are committed. If the developer uses a hosted coding agent, some context goes to that provider. The provider's configuration and terms apply.",
    doc: { href: "https://appmap.io/security", label: "AppMap security" },
  },
  {
    q: "Where does AppMap store runtime behavior?",
    a: "Traces are captured locally, typically to a tmp/appmap directory in the project. Gold Traces can be used locally during development. When a team versions the Gold Trace set with the code, it is stored in the repository and follows the team's existing Git workflow. Gold Traces are sanitized before they are committed.",
    doc: { href: "https://appmap.io/docs/reference/appmap-client-cli.html", label: "AppMap client CLI reference" },
  },
  {
    q: "What are AppMap Gold Traces?",
    a: "Gold Traces are the recorded runtime behaviors a team has approved, committed to the repository in a gold_traces/ directory. They give coding agents and developers recorded runtime behavior they could not otherwise obtain, current at every commit, on every branch, and usable as the baseline every change is verified against.",
    doc: { href: "/gold-traces", label: "AppMap Gold Traces" },
  },
  {
    q: "What issues does the behavioral review find?",
    a: "Not issues from a list. A linter carries a catalog of known-bad patterns and finds instances of them. A behavioral review compares the change against the recorded behavior the team has approved and reports what departed from it. It finds the defects specific to your application, produced by parts that are each correct alone. A catalog of known-bad patterns finds what everyone's code gets wrong. A baseline of known-good behavior finds what your change got wrong.",
    doc: { href: "/gold-traces", label: "What the review finds" },
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
    alt: "AppMap call tree showing function calls, parameters, and return values.",
    objectPosition: "left top",
    side: "top" as const,
  },
  {
    title: "SQL queries",
    descriptor: "Bindings and source",
    image: "/marketing-assets/img/appmap/queries.jpg",
    alt: "AppMap SQL query view showing executed queries, bindings, and source locations.",
    objectPosition: "left top",
    side: "bottom" as const,
  },
  {
    title: "HTTP traffic",
    descriptor: "Requests and responses",
    image: "/marketing-assets/img/appmap/sequence.jpg",
    alt: "AppMap sequence diagram showing HTTP requests and responses.",
    objectPosition: "left top",
    side: "top" as const,
  },
  {
    title: "Exceptions",
    descriptor: "Class, message, source",
    image: "/marketing-assets/img/appmap/sequence.jpg",
    alt: "AppMap exception view showing exception class, message, and source location.",
    objectPosition: "right center",
    side: "bottom" as const,
  },
  {
    title: "Code structure",
    descriptor: "Packages and classes",
    image: "/marketing-assets/img/appmap/code-map.jpg",
    alt: "AppMap code structure map of packages, classes, and functions.",
    objectPosition: "center",
    side: "top" as const,
  },
  {
    title: "Full path",
    descriptor: "Request to database",
    image: "/marketing-assets/img/appmap/dependency-map.webp",
    alt: "AppMap dependency map tracing the full request path from endpoint to database.",
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
    body: "Every query in the trace, with its bindings and where it came from.",
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

const agentChips = ["Claude Code", "Cursor", "GitHub Copilot", "Windsurf", "Any MCP client"];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">How it works</div>
            <h1 className="mt-4 max-w-[820px] text-[22px] font-semibold leading-[1.35] tracking-[-0.4px] text-[#f2effb] sm:text-[26px]">
              Source code tells you what software <span className="italic text-[#ff07aa]">could do</span>. Runtime behavior tells you what it <span className="italic text-[#ff07aa]">actually does</span>.
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              AppMap runs in development and CI. It records traces from tests, requests, and running processes. Coding agents query them directly, and developers inspect them as maps.
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
            <ReviewStepStrip className="mt-10" />

            <h3 className="mt-14 text-[22px] font-extrabold tracking-[-0.6px] text-[#f2effb] sm:text-[26px]">
              Every pull request explains its behavior and impact.
            </h3>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              A pull request should show more than what code changed. AppMap adds visual runtime evidence and a behavioral write-up: what ran, what changed, and whether the change behaved as intended.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Every detail of the paths that matter</h2>
            <p className="mt-3 max-w-[720px] text-[15px] text-[#a99fc7]">
              An AppMap trace records the calls, SQL queries, HTTP traffic, exceptions, and code paths from a run. Each recorded run adds another trace to the local set. The goal is not to record everything. It is to capture the behavior the application depends on, in full detail.
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
                    alt={c.alt}
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
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">AppMap suggests recording paths your tests are missing.</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              The Gold Traces skill analyzes the codebase and existing tests to identify the paths that matter. When an important path is already covered, AppMap records it. When coverage is missing, AppMap suggests a focused test case and the coding agent can create it. AppMap then records the path and adds the trace to the Gold Trace set.
            </p>
            <CoverageChips />

            <div className="mx-auto mt-8 max-w-[820px] rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <div className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">Example</div>
              <h3 className="mt-2 text-[18px] font-bold text-[#f2effb]">The password reset that has no test</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                A password reset touches the user table, token generation, and email delivery. The happy path has a test. The expired-token path does not. The Gold Traces skill identifies the expired-token path as important and uncovered and suggests the test case. The coding agent writes the test. AppMap records the run, and the expired-token behavior joins the set.
              </p>
              <img
                src="/marketing-assets/img/appmap/queries.jpg"
                alt="A real AppMap trace of the password reset flow, showing the queries it ran with their bindings and sources"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="mt-5 w-full rounded-xl border border-[#2c2353] bg-[#16112b]"
              />
              <p className="mt-3 text-[13px] text-[#a99fc7]/70">A real AppMap trace of this flow.</p>
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
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              Coding agents read the traces alongside the source, and answer from what the code did. AppMap exposes the recorded calls, queries, and requests through MCP.
            </p>
            <div className="mt-10 rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-6 sm:p-8">
              <div className="relative rounded-2xl border-2 border-dashed border-[#3f3566] bg-[#0d0a1a]/50 p-6 pt-8 sm:p-8 sm:pt-9">
                <div className="absolute -top-[11px] left-4 bg-[#0d0a1a] px-2 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]/70 sm:left-6">Your environment</div>
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
                  <div className="grid gap-2.5">
                    {agentChips.map((a) => (
                      <div key={a} className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-4 py-2.5 text-center text-[14px] font-semibold text-[#f2effb] lg:text-right">
                        {a}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="hidden items-center gap-2 lg:flex" aria-hidden>
                      <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">query</span>
                      <span className="h-[2px] w-16 bg-gradient-to-r from-[#2c2353] to-[#ff07aa]" />
                      <span className="text-[#ff07aa]">▶</span>
                    </div>
                    <div className="flex items-center gap-2 lg:hidden" aria-hidden>
                      <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">query</span>
                      <span className="text-[#ff07aa]">▼</span>
                    </div>
                    <div className="rounded-2xl border border-[#ff07aa]/50 bg-[#1c1538] px-6 py-5 text-center shadow-[0_0_28px_rgba(255,7,170,0.18)]">
                      <div className="text-[15px] font-extrabold text-[#f2effb]">MCP</div>
                    </div>
                    <div className="hidden items-center gap-2 lg:flex" aria-hidden>
                      <span className="text-[#ff07aa]">◀</span>
                      <span className="h-[2px] w-16 bg-gradient-to-l from-[#2c2353] to-[#ff07aa]" />
                    </div>
                    <div className="flex items-center gap-2 lg:hidden" aria-hidden>
                      <span className="text-[#ff07aa]">▼</span>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-4 py-3">
                      <code className="font-mono text-[14px] font-bold text-[#ff07aa]">tmp/appmap</code>
                      <div className="mt-1 text-[13px] text-[#a99fc7]">Working traces, local</div>
                    </div>
                    <div className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-4 py-3">
                      <code className="font-mono text-[14px] font-bold text-[#ff07aa]">gold_traces/</code>
                      <div className="mt-1 text-[13px] text-[#a99fc7]">Gold Traces, in the repository checkout</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-[820px] text-[14px] leading-[1.6] text-[#a99fc7]">
                Everything here runs in the developer environment. The coding agent queries over MCP locally, and AppMap answers from the working traces and the Gold Traces in the repository checkout. AppMap sends nothing off the machine. The traces carry runtime facts an agent cannot infer from source, current at the commit it checked out. They are also the baseline the change is verified against, evidence the agent did not create.
              </p>
              <p className="mt-2 text-[12.5px] text-[#a99fc7]/70">
                MCP tools: get_call_tree, find_calls, find_queries, find_requests. Details in Docs.
              </p>
            </div>
          </div>
        </section>

        <section id="compatibility" className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-12">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Works with the coding agent you already use</h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-[#a99fc7]">
              AppMap exposes traces over MCP, so the coding agent can change without changing the runtime context. The model can change too: hosted, self-hosted, frontier, and compact models all read the same traces.
            </p>
            <p className="mt-4 text-[15px] font-semibold text-[#ff07aa]">
              The agent can change. The evidence does not have to.
            </p>
            <LanguageCoverage className="mt-6 max-w-[820px]" />

          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Ground truth behavior, versioned with the code</h2>
            <p className="mt-4 max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              Gold Traces are the team's shared record of how the application behaves. The set lives in the repository, so developers, coding agents, and CI all read from the same place.
            </p>
            <p className="mt-3 max-w-[820px] text-[17px] leading-[1.6] text-[#a99fc7]">
              When AppMap compares a change against the set, everyone judges the change against the same behavior. The Gold Traces skill uses existing tests to cover the paths that matter and suggests new test cases when coverage is missing.
            </p>
            <LifecycleStrip />
            <div className="mt-5">
              {/* TODO: point to /gold-traces when that page ships */}
              <Link to="/gold-traces" className="text-[15px] font-semibold text-[#ff07aa] hover:underline">
                Learn about AppMap Gold Traces →
              </Link>
            </div>

            <div className="mt-8 max-w-[720px]">
              <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                <div className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">CODE CHANGES · BEHAVIOR CHANGES</div>
                <h3 className="mt-3 text-[19px] font-bold text-[#f2effb]">Changes as intended</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                  For an N+1 fix, a new timeout, a circuit breaker, or added audit logging, behavior should change in a specific way. If the trace does not change, the fix is not there.
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
                    f.doc.href.startsWith("/") ? (
                      <a
                        href={f.doc.href}
                        className="mt-2 inline-block text-[13.5px] font-semibold text-[#ff07aa] hover:underline"
                      >
                        Read: {f.doc.label} →
                      </a>
                    ) : (
                      <a
                        href={f.doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[13.5px] font-semibold text-[#ff07aa] hover:underline"
                      >
                        Read: {f.doc.label} →
                      </a>
                    )
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
  c: { title: string; descriptor: string; image: string; alt: string; objectPosition: string };
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
          alt={c.alt}
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
function TraceGlyph({ scale = 1 }: { scale?: number }) {
  const bars: Array<[number, number, number]> = [
    [3, 3, 22],
    [7, 8, 17],
    [11, 13, 12],
    [7, 18, 15],
  ];
  return (
    <svg width={30 * scale} height={22 * scale} viewBox="0 0 30 22" aria-hidden="true">
      {bars.map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x + 4} y={y - 1.6} width={w - 4} height={3.2} rx={1.4} fill="#3a3068" />
          <circle cx={x + 1.5} cy={y} r={1.4} fill="#FF07AA" />
        </g>
      ))}
    </svg>
  );
}

function TraceChip({ gold = false, scale = 1 }: { gold?: boolean; scale?: number }) {
  return (
    <span
      className="inline-flex items-center rounded-[6px] px-1.5 py-1"
      style={{
        border: gold ? "1.4px solid rgba(255,7,170,.55)" : "1px solid #2c2353",
        background: gold ? "rgba(255,7,170,.08)" : "#0f0b1d",
      }}
    >
      <TraceGlyph scale={scale} />
    </span>
  );
}

function StageArrow() {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true" className="flex-shrink-0">
      <path d="M0 6 H15" stroke="#FF07AA" strokeWidth="1.6" />
      <path d="M14 2 L20 6 L14 10 z" fill="#FF07AA" />
    </svg>
  );
}

function Stage({ visual, title, sub }: { visual: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex w-[132px] flex-shrink-0 flex-col items-center text-center">
      <div className="flex h-[40px] items-center justify-center">{visual}</div>
      <div className="mt-2 text-[13px] font-bold text-[#f2effb]">{title}</div>
      <div className="text-[11.5px] text-[#6d6395]">{sub}</div>
    </div>
  );
}

function LifecycleStrip() {
  return (
    <div className="mt-8 max-w-[900px]">
      <div className="overflow-x-auto rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-5">
        <div className="flex min-w-[760px] items-start justify-between gap-2">
          <Stage visual={<TraceChip />} title="Record locally" sub="tests, requests, processes" />
          <div className="pt-3.5">
            <StageArrow />
          </div>
          <Stage
            visual={
              <span className="relative inline-block">
                <TraceChip gold />
                <span className="absolute -right-1.5 -top-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#FF07AA] text-[10px] font-bold leading-none text-[#0f0b1d]">
                  +
                </span>
              </span>
            }
            title="Commit the key traces"
            sub="gold_traces/ with the code"
          />
          <div className="pt-3.5">
            <StageArrow />
          </div>
          <Stage
            visual={
              <span className="inline-flex items-center rounded-[6px] border border-[#2c2353] bg-[#0f0b1d] px-2.5 py-1.5 text-[12px] font-bold text-[#f2effb]">
                MCP
              </span>
            }
            title="Agents query"
            sub="call tree, queries, requests"
          />
          <div className="pt-3.5">
            <StageArrow />
          </div>
          <Stage
            visual={
              <span className="inline-flex items-center gap-1">
                <TraceChip scale={0.85} />
                <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
                  <path d="M2 4 H14 M4 2 L2 4 L4 6" stroke="#a99fc7" strokeWidth="1.2" fill="none" />
                  <path d="M14 8 H2 M12 6 L14 8 L12 10" stroke="#a99fc7" strokeWidth="1.2" fill="none" />
                </svg>
                <TraceChip gold scale={0.85} />
              </span>
            }
            title="Compare at review"
            sub="fresh against the baseline"
          />
          <div className="pt-3.5">
            <StageArrow />
          </div>
          <Stage
            visual={
              <span className="relative inline-block">
                <span className="absolute left-1.5 top-1.5 opacity-70">
                  <TraceChip gold />
                </span>
                <span className="relative">
                  <TraceChip gold />
                </span>
              </span>
            }
            title="The baseline advances"
            sub="after the merge"
          />
        </div>
      </div>
      <p className="mt-3 text-[12.5px] text-[#6d6395]">
        Record locally. Commit the key traces. Query over MCP. Compare at review. The baseline advances after the merge.
      </p>
    </div>
  );
}

function CoverageChips() {
  const chip = "rounded-lg border border-[#2c2353] bg-[#1c1538] px-3 py-2 text-[13px] text-[#f2effb]";
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <span className={chip}>Important path</span>
      <StageArrow />
      <span className={chip}>Existing test or suggested test</span>
      <StageArrow />
      <span
        className="rounded-lg px-3 py-2 text-[13px] text-[#f2effb]"
        style={{ border: "1.4px solid rgba(255,7,170,.55)", background: "rgba(255,7,170,.08)" }}
      >
        AppMap trace
      </span>
    </div>
  );
}
