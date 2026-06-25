import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "How AppMap works";
const description =
  "AppMap builds and updates the behavioral model of your application every time it runs. Here is what it captures, the views it produces, and how it reaches your AI agent.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const capture = [
  { title: "Function calls", body: "Parameters, receivers, and return values for every call." },
  { title: "SQL queries", body: "Bound parameters and the database query plan." },
  { title: "HTTP traffic", body: "Requests and responses, with status, headers, and parameters." },
  { title: "Exceptions", body: "Class, message, and the source line that threw them." },
  { title: "Class map", body: "Packages, classes, and functions tied to source files." },
  { title: "Full path", body: "The whole flow from request to database." },
];

const views = [
  { title: "Dependency map", body: "The whole running app at a glance: services, code, SQL, and how they connect." },
  { title: "SQL inspection", body: "Every query the run made, with its bindings and where it came from." },
  { title: "Code map", body: "Packages, classes, and functions, navigable from the same recording." },
];

const mcp = [
  { name: "get_call_tree", body: "The execution path for a recording. The agent used it in almost every study run. One call returns the answer." },
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
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              Every time your software runs, AppMap builds and updates the behavioral model of your application. Here is what it captures, the views it produces, and how it reaches your AI agent.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One run, fully captured</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capture.map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{c.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Record once. Use it everywhere.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {views.map((v) => (
                <div key={v.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">How the behavioral model reaches your agent</h2>
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

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">See what your agent read</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              The context dashboard shows the evidence behind each AI inference as AppMap visuals. A reviewer sees exactly what the agent reasoned over instead of trusting the output.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/benchmarks" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                See the Benchmark
              </Link>
              <Link to="/architecture" className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]">
                Where the model lives →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}