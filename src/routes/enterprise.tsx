import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Enterprise: Airgapped, On-Prem, No Data Egress";
const description =
  "Local by design. Airgapped and on-prem ready. Cleared at a top-4 U.S. bank. Auditable, open-source clients.";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/enterprise" },
      { property: "og:image", content: "/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "/enterprise" }],
  }),
  component: EnterprisePage,
});

const blocks = [
  {
    title: "Airgapped and on-prem ready",
    body: "AppMap runs inside your environment with no outbound dependency. It fits airgapped and on-prem deployments where data cannot leave the network.",
  },
  {
    title: "No egress, by design",
    body: "AppMap generates traces locally, in the editor. No application data leaves the developer machine. You can see the context the agent receives.",
  },
  {
    title: "Cleared where it is hardest",
    body: "AppMap runs in the agent engineering program at a top-4 U.S. bank. Bought in 2025. Renewed in 2026. In use at scale after the bank security review.",
  },
  {
    title: "Trust, but verify",
    body: "Open-source clients and a published data spec. You can audit what AppMap records and what it sends to the agent.",
  },
];

function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Enterprise</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Runtime context that stays on the machine.
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              For the VP standardizing how agents work, and the engineer who
              has to vouch for it. Airgapped and on-prem by design. No data
              egress. Cleared at a top-4 U.S. bank and in use at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="https://meetings.hubspot.com/dustin294" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Book a Demo
              </a>
              <a href="#security-faq" className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]">
                Read the Security FAQ
              </a>
            </div>
          </div>
        </section>

        <section id="security-faq" className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Architecture and trust</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {blocks.map((b) => (
                <div key={b.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{b.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1120px] gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[24px] font-extrabold tracking-[-0.6px] text-[#f2effb]">Start without CI</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#a99fc7]">
                You do not need to instrument CI to begin. AppMap records from a running process, so teams start in the editor or in environments that already run: a local run, a focused test, a smoke script, an API call, or a QA environment. No full enterprise-stack build required to capture a baseline.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[24px] font-extrabold tracking-[-0.6px] text-[#f2effb]">Governed behavior baselines</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#a99fc7]">
                Promote only the high-value flows into governed golden traces, then enforce them in CI when you are ready. Each baseline is reviewed and versioned in <code className="font-mono text-[#f2effb]">.appmap/golden/</code>, so behavioral contracts are auditable and owned, not ad hoc. Begin lightweight in the editor; graduate the flows that matter into the pipeline.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[24px] font-extrabold tracking-[-0.6px] text-[#f2effb]">Independent runtime evidence</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#a99fc7]">
                Architecture governance cannot rely on the AI grading its own homework. AppMap adds an independent evidence layer inside your environment: runtime behavior captured from the application itself, outside the AI's reasoning loop. The agent can consume it, the reviewer can see the same evidence, and the organization can govern against it. The AI explains the evidence; it does not create the evidence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}