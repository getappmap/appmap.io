import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Architecture: Runtime Context That Travels With the Code";
const description =
  "AppMap records traces in the developer environment. The Gold Traces skill identifies important paths, and those traces travel with the code as versioned AppMap Gold Traces, available to developers and coding agents.";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/architecture" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/architecture" }],
  }),
  component: ArchitecturePage,
});

const analogy = `Source code     -> Git
API spec        -> openapi.yaml
Infrastructure  -> terraform
Documentation   -> README.md`;

const branches = [
  { label: "Developers in the editor", note: "explore traces and diagrams" },
  {
    label: "Claude Code, Copilot, Cursor, Gemini, and other MCP clients",
    note: "query runtime context over MCP",
  },
  { label: "Repository", note: "Gold Traces persist here" },
];

const goldTraceTree = `repo/
  src/
  gold_traces/
    manifest.yml            # the test cases in the set
    appmaps/                # the sanitized trace files`;

function ArchitecturePage() {
  return <Page />;
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 40" className="my-3 h-9 w-6 text-[#ff07aa]" aria-hidden="true">
      <path d="M12 2 V30" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 38 L5 27 H19 Z" fill="currentColor" />
    </svg>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Architecture</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Runtime context that travels with the code.
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              AppMap records traces in the developer environment. Recording, exploration, diagrams, and MCP access all start locally, and most agent interaction happens there. When important behavior needs to persist, the Gold Trace set can travel with the code as versioned AppMap Gold Traces.
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Runtime context for every agent that works on the repository</h2>
            <p className="mt-3 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              An AppMap trace is structured data, not just a diagram. A coding agent queries the same traces a developer uses locally. AppMap Gold Traces can be versioned with the repository so important runtime behavior travels with the code.
            </p>

            <div className="mt-10 flex flex-col items-center">
              <div className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-6 py-3 text-center text-[15px] font-semibold text-[#f2effb]">
                Developer environment
              </div>
              <Arrow />
              <div className="rounded-xl border border-[#ff07aa] bg-[#1c1538] px-6 py-3 text-center text-[15px] font-semibold text-[#f2effb]">
                AppMap runtime context
              </div>
              <Arrow />
              <div className="grid w-full gap-4 md:grid-cols-3">
                {branches.map((b) => (
                  <div key={b.label} className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-5 py-4 text-center">
                    <div className="text-[14.5px] font-semibold leading-[1.5] text-[#f2effb]">{b.label}</div>
                    <div className="mt-1.5 text-[13px] text-[#a99fc7]">{b.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1120px]">
            <pre className="overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{analogy}</pre>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Behavior that survives the session</h2>
            <p className="mt-3 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              A coding agent normally begins each investigation by reading the current code and inferring what matters. Gold Traces travel with the repository, so the team can compare behavior across revisions.
            </p>
            <p className="mt-5 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              A developer or coding agent opening the repository later starts with the same Gold Traces. This is not conversational memory. The set lives in the repository, versioned and reviewed like the code. Most agent work starts with local runtime context. Git gives the Gold Trace set a longer life, so future developers and agents can read important behavior alongside the source code.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Where AppMap Gold Traces live</h2>
            <p className="mt-3 max-w-[820px] text-[16px] text-[#a99fc7]">
              When a team versions Gold Traces with the code, the set lives in the repository alongside the application, in <code className="font-mono text-[#f2effb]">gold_traces/</code>. The set contains representative traces for important paths and the configuration AppMap uses to maintain the set. The AppMap Gold Traces skill updates the set as the code changes. The set can be used locally or committed with the code for team review.
            </p>
            <p className="mt-6 max-w-[820px] border-l-4 border-[#ff07aa] pl-4 text-[20px] font-semibold leading-[1.5] text-[#f2effb]">
              Git gives you a history of what the code said. AppMap Gold Traces give you a history of what the code did.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{goldTraceTree}</pre>
            <p className="mt-6 max-w-[820px] text-[15px] text-[#f2effb]">
              When the Gold Trace set is versioned with the code, changes to it follow the team's existing pull-request workflow.
            </p>
            <p className="mt-6 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              Putting AppMap in the repository gives coding agents runtime context that travels with the code. Agents query recorded call paths, SQL, HTTP activity, and application structure directly, and read them alongside the source, so entering a codebase does not start with inferring execution from search. AppMap Gold Traces carry important behavior forward as versioned context, so a new agent or a different model starts from the same traces. Both the code and the runtime context are available to the developer and the AI without requiring an AppMap-operated data service.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
