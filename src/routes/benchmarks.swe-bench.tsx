import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "Why SWE-bench could not isolate diagnosis | AppMap";
const description =
  "SWE-bench compares overall agent capability. It was not designed to isolate the value of root-cause evidence. The documented issues, with citations.";

export const Route = createFileRoute("/benchmarks/swe-bench")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/benchmarks/swe-bench" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/benchmarks/swe-bench" }],
  }),
  component: SweBenchPage,
});

const cards = [
  {
    title: "Public code can be familiar",
    body: "SWE-bench draws from highly visible open-source repositories that may already be represented in model pretraining. A result can reflect learned repository priors as well as investigation performed during the benchmark.",
  },
  {
    title: "Post-triage issues can narrow the search",
    body: "Real GitHub issue threads may identify a file, stack trace, function, or likely mechanism. Once those clues are present, the agent begins closer to implementation and the exploratory RCA phase becomes harder to measure independently.",
  },
  {
    title: "Patch success can mask weak diagnosis",
    body: "An implementation agent can re-explore the code and recover from an incomplete RCA report. We separated diagnosis from fixing so the study could measure the quality and cost of the evidence-gathering stage itself.",
  },
];

const evidence = [
  "The SWE-Bench+ audit documents solution leakage, the fix visible in the issue text, in roughly one third of SWE-bench issues.",
  "The SWE-Bench Illusion study reports that models can identify the buggy file path from the issue text alone in 76% of cases, without seeing the repository, evidence of memorization rather than investigation.",
];

const references = [
  {
    citation: 'Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", ICLR 2024.',
    href: "https://arxiv.org/abs/2310.06770",
  },
  {
    citation: 'OpenAI, "Introducing SWE-bench Verified", August 2024.',
    href: "https://openai.com/index/introducing-swe-bench-verified/",
  },
  {
    citation: 'Aleithan et al., "SWE-Bench+: Enhanced Coding Benchmark for LLMs", 2024.',
    href: "https://arxiv.org/abs/2410.06992",
  },
  {
    citation: 'Liang, Garg, Zilouchian Moghaddam, "The SWE-Bench Illusion", ICSE-SEIP 2026.',
    href: "https://arxiv.org/abs/2506.12286",
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[12.5px] font-bold uppercase tracking-[1.4px] text-[#ff07aa]">{children}</div>
);

function SweBenchPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-14" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <SectionLabel>Benchmarks</SectionLabel>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Why SWE-bench could not isolate diagnosis
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              SWE-bench remains valuable for comparing overall agent capability. It was not designed to isolate the value of root-cause evidence. This page explains why, with citations to the published record.
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Why SWE-bench could not isolate diagnosis</h2>
            <div className="mt-9 space-y-5">
              {cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
                  <h3 className="text-[19px] font-bold text-[#f2effb]">{c.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-[#a99fc7]">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border-l-2 border-[#ff07aa] bg-[#16112b] px-6 py-5 sm:px-8 sm:py-6">
              <p className="max-w-[820px] text-[17px] font-bold leading-[1.55] text-[#f2effb] sm:text-[18px]">
                SWE-bench asks whether an agent can resolve a known issue. This study asks whether runtime evidence helps an agent discover an unknown cause.
              </p>
            </div>

            <h2 className="mt-16 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What the published record shows</h2>
            <ul className="mt-6 max-w-[820px] space-y-4">
              {evidence.map((e) => (
                <li key={e} className="flex gap-3 text-[16px] leading-[1.65] text-[#a99fc7]">
                  <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                  {e}
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">References</h2>
            <ol className="mt-6 max-w-[820px] space-y-3 text-[15.5px] leading-[1.65] text-[#a99fc7] list-decimal pl-5">
              {references.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f2effb] underline underline-offset-4 transition-colors hover:text-[#ff07aa]"
                  >
                    {r.citation}
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <Link
                to="/benchmarks"
                className="inline-flex items-center gap-2 text-[15.5px] font-semibold text-[#f2effb] underline underline-offset-4 transition-colors hover:text-[#ff07aa]"
              >
                Back to the benchmark results
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
