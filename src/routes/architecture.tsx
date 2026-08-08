import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Architecture: Runtime Context That Travels With the Code";
const description =
  "AppMap creates runtime context in the developer environment. Selected recordings travel with the code as versioned Golden AppMap traces, available to developers and AI agents.";

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

const tree = `repo/
  src/
  tests/
  README.md
  openapi.yaml
  .appmap/          # the recordings
    architecture/
    behavior/
    flows/
    index.json`;

const analogy = `Source code     -> Git
API spec        -> openapi.yaml
Infrastructure  -> terraform
Documentation   -> README.md
Behavior        -> .appmap/`;

const branches = [
  { label: "Developers in the editor", note: "explore recordings and diagrams" },
  {
    label: "Claude Code, Copilot, Cursor, Gemini, and other MCP clients",
    note: "query runtime context over MCP",
  },
  { label: "Repository", note: "selected traces persist here" },
];

const goldenTree = `repo/
  src/
  .appmap/
    golden/
      checkout-flow/
        manifest.json        # the flow, its routes, how to reproduce it
        baseline.appmap.json  # the approved before-trace
        fingerprint.txt       # stable fingerprint of the baseline
        normalization.yml     # volatile fields to ignore (timestamps, ids, durations)
      README.md               # what Golden AppMap traces are and how to update them`;

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
              AppMap creates runtime context in the developer environment. Recording, exploration, diagrams, and MCP access all start locally, and most agent interaction happens there. When important behavior needs to persist, selected recordings can travel with the code as versioned Golden AppMap traces.
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Runtime context for every agent that works on the repository</h2>
            <p className="mt-3 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              An AppMap recording is structured data, not just a diagram. An AI agent queries the same execution evidence a developer sees in the editor, directly from the developer environment over MCP. When recordings travel with the repository, that same evidence goes wherever the code goes.
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
          <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-2">
            <pre className="overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{tree}</pre>
            <pre className="overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{analogy}</pre>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Behavior that survives the session</h2>
            <p className="mt-3 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              An AI agent normally begins each investigation by reading the current code and reconstructing what matters. Golden AppMap traces let important runtime behavior travel forward with the repository as a versioned baseline.
            </p>
            <p className="mt-5 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              A new agent, a different model, or a developer opening the repository later starts from the same recorded evidence of how important paths actually ran. This is not conversational memory. It is repository-native engineering memory, versioned and reviewed like the code itself. Most agent work starts with local runtime context. Git gives selected evidence a longer life, so future developers and agents can reuse important behavior instead of reconstructing it from source code.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Where Golden AppMap traces live</h2>
            <p className="mt-3 max-w-[820px] text-[16px] text-[#a99fc7]">
              Approved baselines live next to the code, in <code className="font-mono text-[#f2effb]">.appmap/golden/</code>. Each baseline is a set of files saved alongside your code for one flow: the approved before-trace, a stable fingerprint, and the rules for which timing noise and changing values to ignore before comparison. Promote a trace into the baseline the same way you merge code, with review.
            </p>
            <p className="mt-6 max-w-[820px] border-l-4 border-[#ff07aa] pl-4 text-[20px] font-semibold leading-[1.5] text-[#f2effb]">
              Git gives you a history of what the code said. Golden AppMap traces give you a history of what the code did.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{goldenTree}</pre>
            <p className="mt-6 max-w-[820px] text-[15px] text-[#f2effb]">
              A Golden AppMap trace is reviewed and versioned like any other contract in the repo. Changing the baseline is a pull request, not a silent overwrite.
            </p>
            <p className="mt-6 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              Putting AppMap in the repository gives AI agents runtime context that travels with the code. Instead of reconstructing execution from source search every time they enter a codebase, agents query recorded call paths, SQL, HTTP activity, and application structure directly. Golden AppMap traces carry important behavior forward as versioned context, so a new agent or a different model starts from the same evidence. Both the code and the runtime context are available to the developer and the AI without requiring an AppMap-operated data service.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
