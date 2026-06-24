import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Platform: Runtime Trace over MCP";
const description =
  "See what AppMap records (calls, SQL, HTTP, exceptions) and how it reaches any agent over the Model Context Protocol.";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/platform" },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AppMap MCP Server",
          applicationCategory: "DeveloperApplication",
          description,
        }),
      },
    ],
  }),
  component: PlatformPage,
});

const records = [
  { title: "Function calls", body: "Parameters, receivers, and return values for every call." },
  { title: "SQL queries", body: "Bound parameters and the database query plan." },
  { title: "HTTP traffic", body: "Requests and responses, with status, headers, and parameters." },
  { title: "Exceptions", body: "Class, message, and the source line that threw them." },
  { title: "Class map", body: "Packages, classes, and functions tied to source files." },
  { title: "Full path", body: "The whole flow from request to database." },
];

const tools = [
  { name: "get_call_tree", body: "The execution path for a recording. The agent used it in almost every study run. One call returns the answer." },
  { name: "find_calls", body: "Every invocation of a function across the active traces." },
  { name: "find_queries", body: "Executed SQL with its bindings." },
  { name: "find_requests", body: "The HTTP boundaries in the run." },
];

function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Platform</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Runtime evidence, ready for any agent.
            </h1>
            <p className="mt-5 max-w-[700px] text-[19px] leading-[1.6] text-[#a99fc7]">
              AppMap turns a running application into structured context an
              agent can query. Here is what it records, how it reaches the
              model, and why one runtime query beats fifteen searches.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One run, fully captured</h2>
            <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">Every trace captures the behavior that source code can only hint at.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {records.map((r) => (
                <div key={r.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{r.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">How the trace reaches the model</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              The AppMap MCP server lets an agent query runtime context during
              its normal work. It does not make the model parse raw trace
              files. It exposes a few high-density queries.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {tools.map((t) => (
                <div key={t.name} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <code className="font-mono text-[15px] font-bold text-[#ff07aa]">{t.name}</code>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One query. Fifteen searches of evidence.</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              A static agent spends its budget listing files and reading
              imports before it sees the logic. A runtime query returns the
              diagnosis path in one step. That density is why accuracy holds
              when the budget is tight. It is also why a smaller model can do
              the work of a larger one.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Record once. Use it everywhere.</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              The runtime trace also powers AppMap's review and visualization
              features. Runtime code review, sequence diagrams, dependency
              maps, flame graphs, OpenAPI diffs, and test-failure diffs all
              come from one recording. The agent and the developer read the
              same ground truth.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">See what the model read</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              The context dashboard shows the evidence behind each AI inference
              as AppMap visuals. The call tree, the sequence diagram, and the
              run metadata, the same views longtime AppMap users know. A
              reviewer sees exactly what the agent reasoned over instead of
              trusting the output.
            </p>
            <img
              src="https://appmap.io/assets/img/docs/find-sequence-diagram.webp"
              alt="The AppMap context dashboard with the call tree and sequence diagram"
              loading="lazy"
              className="mt-8 block w-full rounded-xl border border-[#2c2353]"
            />
            <div className="mt-7">
              <a href="/benchmarks" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                See the benchmark
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}