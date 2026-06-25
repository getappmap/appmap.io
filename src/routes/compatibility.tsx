import { createFileRoute } from "@tanstack/react-router";
import { Header, VSCODE_INSTALL_URL } from "@/components/layout/Header";

const title = "AppMap Compatibility: Works With Every AI Coding Agent";
const description =
  "Model-agnostic and agent-agnostic. Works with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Antigravity, and any MCP client.";

export const Route = createFileRoute("/compatibility")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/compatibility" },
      { property: "og:image", content: "/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "/compatibility" }],
  }),
  component: CompatibilityPage,
});

const agents = [
  { name: "Claude Code", body: "The agent in our study." },
  { name: "Cursor", body: "MCP-aware editor with a large user base." },
  { name: "GitHub Copilot", body: "The widest reach. Now MCP-capable." },
  { name: "Windsurf", body: "Agentic editor, MCP-native." },
  { name: "Cline", body: "Open-source coding agent." },
  { name: "Google Antigravity", body: "Agent-first development environment." },
];

function CompatibilityPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Compatibility</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              No lock-in. Better context.
            </h1>
            <p className="mt-5 max-w-[720px] text-[19px] leading-[1.6] text-[#a99fc7]">
              AppMap speaks the open Model Context Protocol. It works with the
              agents and models your team already picked, and the ones it picks
              next.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Bring your own agent</h2>
            <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">AppMap is the context source. The agent stays yours.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((a) => (
                <div key={a.name} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff07aa]" style={{ boxShadow: "0 0 10px #ff07aa" }} />
                    <h3 className="text-[17px] font-bold text-[#f2effb]">{a.name}</h3>
                  </div>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{a.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] text-[#f2effb]">And any MCP client. If it speaks the protocol, it can read an AppMap trace.</p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Bring your own model</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              The model behind the agent does not matter. The trace is the
              same evidence for a frontier model or a compact one, hosted or
              self-hosted. In our test it let a compact model match a frontier
              model.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Lower inference cost wherever inference runs</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              Whoever runs the agent pays for the tokens. AppMap raises the value of each call, so the agent takes fewer steps to the same answer. That holds across editors, models, and vendors.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Visual Studio Code", "JetBrains IDEs", "CLI", "CI"].map((c) => (
                <span key={c} className="rounded-full border border-[#2c2353] bg-[#1c1538] px-4 py-2 text-[13.5px] text-[#f2effb]">{c}</span>
              ))}
            </div>
            <div className="mt-8">
              <a href={VSCODE_INSTALL_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Get AppMap
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}