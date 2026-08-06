import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "AppMap Benchmark: Runtime Context vs Static Analysis";
const description =
  "In a controlled study, runtime context held diagnosis at 100 percent under a tight tool budget where static analysis fell to 28 percent, at a fraction of the cost.";

export const Route = createFileRoute("/benchmarks")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/benchmarks" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/benchmarks" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          author: { "@type": "Organization", name: "AppMap" },
          datePublished: "2026-06-01",
        }),
      },
    ],
  }),
  component: BenchmarksPage,
});

const headlineNumbers = [
  { n: "100%", l: "root-cause accuracy with runtime context at a 3-call budget" },
  { n: "28%", l: "static baseline at the same budget" },
  { n: "~3.4x", l: "less inference spend to reach the same verified-fix rate" },
  { n: "7 pts", l: "how close a compact pipeline lands to a frontier baseline, at half the cost" },
];

const setup = [
  { title: "Private codebase", body: "A 50-module Spring Boot app with no public training-data overlap. Results reflect investigation, not memory." },
  { title: "Symptom-only reports", body: "Written like support tickets. No shared identifiers with the fix. No leaked file paths." },
  { title: "Two lanes, one difference", body: "Same inputs. Same budgets. One lane had the AppMap trace. The other used static tools." },
  { title: "Budget sweep", body: "We tightened the diagnostic budget from unlimited to 10, then 5, then 3 calls." },
];

const accuracy = [
  { label: "Unlimited", appmap: 91, baseline: 91 },
  { label: "10 calls", appmap: 100, baseline: 81 },
  { label: "5 calls", appmap: 100, baseline: 50 },
  { label: "3 calls", appmap: 100, baseline: 28 },
];

const cost = [
  { label: "Frontier static, unbounded", dollars: 1.16, fix: "95%", color: "#a99fc7" },
  { label: "Hybrid (compact diagnosis + frontier fix)", dollars: 0.57, fix: "88%", color: "#8b5cf6" },
  { label: "Compact + trace, budget 3", dollars: 0.31, fix: "74%", color: "#ff07aa" },
];

const Caveat = () => (
  <p className="mt-7 max-w-[680px] border-l-2 border-[#2c2353] pl-4 text-[13.5px] text-[#7c8aa6]">
    One internal study. Claude model family. Not yet replicated outside our team. We publish the method and the per-fixture data so you can check it.
  </p>
);

function BenchmarksPage() {
  const maxCost = Math.max(...cost.map((c) => c.dollars));
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Benchmarks</div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              We measured it. Here is the data.
            </h1>
            <p className="mt-5 max-w-[720px] text-[19px] leading-[1.6] text-[#a99fc7]">
              A controlled study with the runtime trace as the only variable
              between two identical agent pipelines.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The headline numbers</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {headlineNumbers.map((h) => (
                <div key={h.l} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <div className="text-[40px] font-extrabold leading-none tracking-[-1px] text-[#ff07aa]">{h.n}</div>
                  <p className="mt-3 text-[14px] text-[#a99fc7]">{h.l}</p>
                </div>
              ))}
            </div>
            <Caveat />
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">A clean test, on purpose</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {setup.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Diagnosis holds where static search collapses</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              Root-cause accuracy against the tool-call budget. Runtime context
              stays flat. Static analysis falls off.
            </p>

            <div className="mt-10 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
              <div className="text-[14px] text-[#a99fc7]">Root-cause accuracy (%) by tool-call budget</div>
              <div className="mt-6 flex h-[260px] items-end gap-6 sm:gap-10 px-2">
                {accuracy.map((row) => (
                  <div key={row.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <div className="flex h-full items-end gap-2">
                      <div className="relative flex w-7 sm:w-9 justify-center rounded-t-md bg-gradient-to-b from-[#ff07aa] to-[#d6008f]" style={{ height: `${row.appmap}%` }}>
                        <span className="absolute -top-6 whitespace-nowrap text-[12.5px] font-bold text-[#ff07aa]">{row.appmap}</span>
                      </div>
                      <div className="relative flex w-7 sm:w-9 justify-center rounded-t-md bg-gradient-to-b from-[#fb7185] to-[#e11d48]" style={{ height: `${row.baseline}%` }}>
                        <span className="absolute -top-6 whitespace-nowrap text-[12.5px] font-bold text-[#fb7185]">{row.baseline}</span>
                      </div>
                    </div>
                    <div className="text-[12.5px] text-[#a99fc7]">{row.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-5 text-[13px] text-[#a99fc7]">
                <span className="inline-flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-sm bg-[#ff07aa]" /> AppMap runtime context</span>
                <span className="inline-flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-sm bg-[#fb7185]" /> Static baseline</span>
              </div>
            </div>

            <p className="mt-7 max-w-[720px] text-[15px] text-[#f2effb]">
              End-to-end verified-fix rate tells the same story. The runtime
              lane held at 94 to 100 percent. The static lane dropped from 84
              percent to 62 percent.
            </p>
            <Caveat />
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The same result for less spend</h2>
            <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
              Cost per task at each setup, with the verified-fix rate on each
              bar. The trace setups cost a fraction of the frontier static
              baseline.
            </p>

            <div className="mt-10 space-y-5 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
              {cost.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between text-[13.5px]">
                    <span className="text-[#f2effb]">{c.label}</span>
                    <span className="text-[#a99fc7]">
                      <b className="font-bold text-[#f2effb]">${c.dollars.toFixed(2)}</b> · {c.fix} fixed
                    </span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#0d0a1a]">
                    <div className="h-full rounded-full" style={{ width: `${(c.dollars / maxCost) * 100}%`, background: c.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#2c2353]">
              <table className="w-full text-[14.5px]">
                <thead className="bg-[#1c1538] text-[12.5px] uppercase tracking-[0.5px] text-[#a99fc7]">
                  <tr>
                    <th className="px-4 py-3 text-left">Setup</th>
                    <th className="px-4 py-3 text-left">Verified-fix rate</th>
                    <th className="px-4 py-3 text-left">Cost / task</th>
                    <th className="px-4 py-3 text-left">vs. baseline</th>
                  </tr>
                </thead>
                <tbody className="bg-[#16112b] text-[#f2effb]">
                  <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Frontier model, static, unbounded (baseline)</td><td className="px-4 py-3">95%</td><td className="px-4 py-3">$1.16</td><td className="px-4 py-3 text-[#a99fc7]">reference</td></tr>
                  <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Compact model, AppMap trace, budget 3</td><td className="px-4 py-3">74%</td><td className="px-4 py-3">$0.31</td><td className="px-4 py-3 text-[#ff07aa]">3.8× cheaper, 21 pts lower</td></tr>
                  <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Hybrid: compact diagnosis, frontier fix</td><td className="px-4 py-3">88%</td><td className="px-4 py-3">$0.57</td><td className="px-4 py-3 text-[#ff07aa]">2.0× cheaper, 7 pts lower</td></tr>
                </tbody>
              </table>
            </div>

            <p className="mt-7 max-w-[720px] text-[15px] text-[#f2effb]">
              A compact model with runtime context, paired with a frontier
              model for the final fix, lands within 7 points of the frontier
              static baseline. It does this at half the cost.
            </p>
            <Caveat />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What this study is, and is not</h2>
            <p className="mt-3 max-w-[760px] text-[16px] text-[#a99fc7]">
              One internal study. One model family, Claude Sonnet 4.6 and Haiku
              4.5. One agent loop with hard budget limits. Not yet replicated
              outside our team. A compact model alone still struggles on the
              hardest fixes without a frontier fix step. We publish the method
              and the per-fixture data so anyone can check it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/get-appmap" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Get AppMap
              </Link>
              <a href="/blog" className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]">
                Read the Methodology
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Not our first benchmark.</h2>
            <div className="mt-6 block rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <p className="text-[16px] text-[#f2effb]">
                14.6% on the full SWE-bench, ahead of Amazon Q and eight other tools, finished in under four hours at 5 to 30 percent of the cost of other solvers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}