import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Architecture: In your editor today, in your repo tomorrow";
const description =
  "The recording lives in your editor today, and can travel with your repo as a companion artifact in .appmap.";

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

const chips = [
  "Developers",
  "Claude",
  "Cursor",
  "Copilot",
  "Gemini",
  "CI",
  "Backstage",
  "Confluence, as a mirror",
];

const goldenTree = `repo/
  src/
  .appmap/
    golden/
      checkout-flow/
        manifest.json        # the flow, its routes, how to reproduce it
        baseline.appmap.json  # the approved before-trace
        fingerprint.txt       # normalized behavioral hash of the baseline
        normalization.yml     # volatile fields to ignore (timestamps, ids, durations)
      README.md               # what Golden AppMap traces are and how to update them`;

function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Architecture</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              In your editor today. In your repo tomorrow.
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              You feel the value in the editor, where recordings are built and explored as you work. They can be persisted alongside your repository as a companion artifact: versioned with your code, generated in CI, scrubbed by default. The repository stays the canonical home of source; <code className="font-mono text-[#f2effb]">.appmap</code> is a companion.
            </p>
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
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One recording. Many consumers.</h2>
            <p className="mt-3 max-w-[760px] text-[16px] text-[#a99fc7]">
              The same recordings are read by your developers and by every agent. Portals like Confluence and Backstage become mirrors, not the source of truth.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span key={c} className="rounded-full border border-[#2c2353] bg-[#1c1538] px-4 py-2 text-[13.5px] text-[#f2effb]">{c}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Where Golden AppMap traces live</h2>
            <p className="mt-3 max-w-[820px] text-[16px] text-[#a99fc7]">
              Approved baselines live next to the code, in <code className="font-mono text-[#f2effb]">.appmap/golden/</code>. Each baseline is a behavioral contract for one flow: the approved before-trace, a normalized fingerprint, and the rules for what runtime noise to ignore. Promote a trace into the baseline the same way you merge code, with review.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-xl border border-[#2c2353] bg-[#1c1538] p-6 font-mono text-[13px] leading-[1.7] text-[#cdd8ee]">{goldenTree}</pre>
            <p className="mt-6 max-w-[820px] text-[15px] text-[#f2effb]">
              A Golden AppMap trace is reviewed and versioned like any other contract in the repo. Changing the baseline is a pull request, not a silent overwrite.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}