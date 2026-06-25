import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Architecture: In your editor today, in your repo tomorrow";
const description =
  "The behavioral model lives in your editor today, and can travel with your repo as a companion artifact in .appmap.";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/architecture" }],
  }),
  component: ArchitecturePage,
});

const tree = `repo/
  src/
  tests/
  README.md
  openapi.yaml
  .appmap/          # the behavioral model
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
              You feel the value in the editor, where the behavioral model is built and explored as you work. The model can be persisted alongside your repository as a companion artifact: versioned with your code, generated in CI, scrubbed by default. The repository stays the canonical home of source; <code className="font-mono text-[#f2effb]">.appmap</code> is a companion.
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
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One model. Many consumers.</h2>
            <p className="mt-3 max-w-[760px] text-[16px] text-[#a99fc7]">
              The same behavioral model is read by your developers and by every agent. Portals like Confluence and Backstage become mirrors, not the source of truth.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span key={c} className="rounded-full border border-[#2c2353] bg-[#1c1538] px-4 py-2 text-[13.5px] text-[#f2effb]">{c}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}