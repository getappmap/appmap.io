import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { PaperRequest } from "@/components/sections/benchmarks/PaperRequest";

const title = "AppMap Benchmark: Runtime Evidence on Ambiguous Enterprise Bugs";
const description =
  "Real-world issues arrive as symptoms, not pre-solved bugs. In a private multi-module Java testbed with no solution leakage, runtime evidence preserved root-cause accuracy under tight tool-call budgets.";

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
          author: [
            { "@type": "Person", name: "Kevin Gilpin" },
            { "@type": "Person", name: "Elizabeth Lawler" },
          ],
          publisher: { "@type": "Organization", name: "AppMap" },
          datePublished: "2026-06-01",
        }),
      },
    ],
  }),
  component: BenchmarksPage,
});

const swebench = [
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

const postTriage = [
  "Public repository",
  "File or function may already be named",
  "Stack trace or mechanism may be included",
  "Implementation dominates the task",
];

const enterpriseIssue = [
  "Private, unfamiliar codebase",
  "Root cause and code location unknown",
  "Behavior crosses service and persistence boundaries",
  "Diagnosis must happen before implementation",
];

const setup = [
  { label: "Private codebase", body: "~50-module Spring Boot app, outside pretraining corpora" },
  { label: "Symptom-only tickets", body: "zero identifier overlap with the gold fix" },
  { label: "Hidden repro test", body: "test source removed before the session" },
  { label: "Two controlled lanes", body: "identical except runtime evidence" },
  { label: "Performance corridor", body: "trivial and impossible problems excluded" },
];

const sympyCode = `def _print_Indexed(self, expr):
    base, *index = expr.args
    return "{}[{}]".format(str(base), ", ".join([self._print(ind) for ind in index]))`;

const verifiedFix = "Verified-fix rate at the 3-call budget: runtime evidence versus code-only exploration.";

const accuracy = [
  { label: "Unlimited", appmap: 100, codeOnly: 91 },
  { label: "10 calls", appmap: 100, codeOnly: 81 },
  { label: "5 calls", appmap: 100, codeOnly: 50 },
  { label: "3 calls", appmap: 100, codeOnly: 28 },
];

const density = [
  { n: "216 / 216", l: "cells used get_call_tree" },
  { n: "1.09", l: "average calls in cells that used it" },
  { n: "15+", l: "search-and-read operations to reconstruct a comparable path statically" },
];

const cost = [
  { label: "Frontier model, code-only exploration, unlimited budget", dollars: 1.161, fix: "95%", color: "#a99fc7" },
  { label: "Hybrid pipeline, compact trace-based diagnosis plus frontier-model fix", dollars: 0.567, fix: "88%", color: "#8b5cf6" },
  { label: "Compact model, AppMap trace, 3-call budget", dollars: 0.309, fix: "74%", color: "#ff07aa" },
];

const limits = [
  "One internal study, run by our team.",
  "One model family, Claude, inside a single Claude Code agent loop.",
  "The primary 100% versus 28% RCA result comes from two admitted fixtures in a 256-trajectory budget sweep.",
  "The economic generalization uses 11 fixtures and 264 trajectories.",
  "Not yet independently replicated outside our team.",
  "Primary RCA correctness is graded, while verify-pass is determined by a hidden executable test.",
  "The design deliberately sacrifices direct SWE-bench leaderboard comparability.",
  "The private symptom-only design reduces contamination and solution leakage, but operates at smaller scale than SWE-bench Verified.",
  "A compact model alone does not handle every difficult implementation. The hybrid fix stage is needed on the broader suite.",
];

const Caveat = () => (
  <p className="mt-7 max-w-[680px] border-l-2 border-[#2c2353] pl-4 text-[13.5px] text-[#7c8aa6]">
    Internal study. Claude model family. One private enterprise-style testbed. Not yet independently replicated. Primary and suite-wide results are labeled separately below.
  </p>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[12.5px] font-bold uppercase tracking-[1.4px] text-[#ff07aa]">{children}</div>
);

function BenchmarksPage() {
  const maxCost = Math.max(...cost.map((c) => c.dollars));

  const scrollToResults = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="px-6 pt-20 pb-14" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <SectionLabel>Benchmarks</SectionLabel>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Real-world issues are not well-defined bugs.
            </h1>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              Bug reports arrive as symptoms. Pull requests arrive as diffs. Neither tells you what the running system actually did. Developers and AI agents still have to discover the execution path, affected code, queries, dependencies, and behavioral consequences.
            </p>
            <p className="mt-4 text-[17px] font-semibold text-[#f2effb]">
              This study measures the reactive case, root-cause analysis, so the value of runtime evidence can be isolated from patch generation.
            </p>
            <a
              href="#results"
              onClick={scrollToResults}
              className="mt-5 inline-block text-[13.5px] text-[#a99fc7] underline underline-offset-4 transition-colors hover:text-[#f2effb]"
            >
              See the results
            </a>
          </div>
        </section>

        {/* 2. Why SWE-bench could not isolate diagnosis */}
        <section className="border-t border-[#2c2353] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Why SWE-bench could not isolate diagnosis</h2>
            <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-[#a99fc7]">
              SWE-bench remains valuable for comparing overall agent capability. It was not designed to isolate the value of root-cause evidence.
            </p>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {swebench.map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{c.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-[#a99fc7]">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border-l-2 border-[#ff07aa] bg-[#16112b] px-6 py-5">
              <p className="max-w-[820px] text-[16px] leading-[1.65] text-[#f2effb]">
                SWE-bench asks whether an agent can resolve a known issue. This study asks whether runtime evidence helps an agent discover an unknown cause.
              </p>
            </div>
          </div>
        </section>

        {/* 3. What a real issue looks like */}
        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What a real issue looks like</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-7">
                <div className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">Post-triage benchmark issue</div>
                <ul className="mt-5 space-y-3">
                  {postTriage.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a99fc7]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#ff07aa]/40 bg-[#1c1538] p-6 sm:p-7">
                <div className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">Enterprise-style issue</div>
                <p className="mt-4 border-l-2 border-[#ff07aa] pl-4 text-[17px] font-semibold leading-[1.5] text-[#f2effb]">
                  &ldquo;Customers are being charged twice on retried payments.&rdquo;
                </p>
                <ul className="mt-5 space-y-3">
                  {enterpriseIssue.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-7 max-w-[760px] text-[15px] text-[#f2effb]">
              The enterprise problem begins before the bug has been translated into engineering instructions.
            </p>
          </div>
        </section>

        {/* 3b. Bridge: reactive diagnosis and proactive change review */}
        <section className="border-t border-[#2c2353] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The same runtime evidence answers two questions.</h2>
            <div className="mt-9 rounded-2xl border border-[#2c2353] bg-[#16112b] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-0">
                <div className="md:pr-10 lg:pr-14">
                  <div className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#7c8aa6]">Measured in this study</div>
                  <h3 className="mt-3 text-[22px] font-extrabold tracking-[-0.5px] text-[#f2effb] sm:text-[24px]">Reactive diagnosis</h3>
                  <p className="mt-2 text-[16px] font-semibold text-[#a99fc7]">What caused this symptom?</p>
                  <ul className="mt-5 space-y-2.5">
                    <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a99fc7]" />
                      Which execution path produced it?
                    </li>
                    <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a99fc7]" />
                      Where is the responsible code?
                    </li>
                    <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a99fc7]" />
                      Which calls, queries, or dependencies were involved?
                    </li>
                    <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                      <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a99fc7]" />
                      What mechanism must be corrected?
                    </li>
                  </ul>
                </div>
                <div className="relative md:pl-10 lg:pl-14">
                  <div className="absolute top-0 left-0 hidden h-full w-px bg-[#2c2353] md:block" />
                  <div className="h-px w-full bg-[#2c2353] md:hidden" />
                  <div className="pt-8 md:pt-0">
                    <div className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#ff07aa]">Product implication</div>
                    <h3 className="mt-3 text-[22px] font-extrabold tracking-[-0.5px] text-[#f2effb] sm:text-[24px]">Proactive change review</h3>
                    <p className="mt-2 text-[16px] font-semibold text-[#a99fc7]">What did this change cause?</p>
                    <ul className="mt-5 space-y-2.5">
                      <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                        <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                        Which execution paths changed?
                      </li>
                      <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                        <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                        What new calls, queries, or side effects appeared?
                      </li>
                      <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                        <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                        Which trusted behavior held?
                      </li>
                      <li className="flex gap-3 text-[15px] text-[#a99fc7]">
                        <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                        Did the result match the intended change?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-[#2c2353] pt-6 md:mt-12 md:pt-8">
                <p className="text-[15px] leading-[1.6] text-[#a99fc7]">
                  Both workflows need the same missing evidence: a precise record of what the application actually did.
                </p>
                <p className="mt-4 text-[17px] font-bold leading-[1.5] text-[#f2effb] sm:text-[18px]">
                  A bug report gives you a symptom. A pull request gives you a diff. AppMap shows you the runtime behavior both leave out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. A benchmark designed to require diagnosis */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">A benchmark designed to require diagnosis</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {setup.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-[#a99fc7]">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-[760px] text-[15px] text-[#f2effb]">
              The runtime recording is the sole experimental difference between the two RCA lanes.
            </p>
          </div>
        </section>

        {/* 5. Primary results */}
        <section id="results" className="scroll-mt-20 border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[12.5px] uppercase tracking-[1.2px] text-[#a99fc7]">
              Primary two-fixture sweep, two Claude models, four budgets, N=8 per cell
            </div>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Runtime evidence preserved diagnosis under pressure</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {headlineNumbers.map((h) => (
                <div key={h.l} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <div className="text-[32px] font-extrabold leading-none tracking-[-1px] text-[#ff07aa] sm:text-[38px]">{h.n}</div>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#a99fc7]">{h.l}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[760px] text-[16px] text-[#a99fc7]">
              Root-cause accuracy against the tool-call budget. Runtime evidence stays flat. Code-only exploration falls off.
            </p>

            <div className="mt-6 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
              <div className="text-[14px] text-[#a99fc7]">Root-cause accuracy (%) by tool-call budget</div>
              <div className="mt-6 flex h-[260px] items-end gap-6 px-2 sm:gap-10">
                {accuracy.map((row) => (
                  <div key={row.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <div className="flex h-full items-end gap-2">
                      <div className="relative flex w-7 justify-center rounded-t-md bg-gradient-to-b from-[#ff07aa] to-[#d6008f] sm:w-9" style={{ height: `${row.appmap}%` }}>
                        <span className="absolute -top-6 whitespace-nowrap text-[12.5px] font-bold text-[#ff07aa]">{row.appmap}</span>
                      </div>
                      <div className="relative flex w-7 justify-center rounded-t-md bg-gradient-to-b from-[#fb7185] to-[#e11d48] sm:w-9" style={{ height: `${row.codeOnly}%` }}>
                        <span className="absolute -top-6 whitespace-nowrap text-[12.5px] font-bold text-[#fb7185]">{row.codeOnly}</span>
                      </div>
                    </div>
                    <div className="text-[12.5px] text-[#a99fc7]">{row.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-5 text-[13px] text-[#a99fc7]">
                <span className="inline-flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-sm bg-[#ff07aa]" /> AppMap runtime evidence</span>
                <span className="inline-flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-sm bg-[#fb7185]" /> Code-only exploration</span>
              </div>
            </div>

            <p className="mt-7 max-w-[760px] text-[15px] text-[#f2effb]">
              End-to-end verified-fix rate tells the same story. The runtime lane held at 94 to 100 percent. The code-only lane dropped from 84 percent to 62 percent.
            </p>
            <Caveat />
          </div>
        </section>

        {/* 6. Information density */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="max-w-[900px] text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One call can carry the evidence of an entire investigation</h2>
            <p className="mt-5 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              Across all 216 trace-augmented cells analyzed for tool usage, <code className="font-mono text-[#f2effb]">get_call_tree</code> appeared in every cell and averaged just over one call per trajectory. It returned the diagnosis-bearing frame sequence directly. The code-only lane had to enumerate files, inspect imports, search identifiers, and read implementations sequentially.
            </p>

            <div className="mt-9 flex flex-col gap-5 border-t border-b border-[#2c2353] py-7 sm:flex-row sm:items-start sm:gap-12">
              {density.map((d) => (
                <div key={d.l} className="flex-1">
                  <div className="text-[26px] font-extrabold leading-none tracking-[-0.6px] text-[#f2effb]">{d.n}</div>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-[#a99fc7]">{d.l}</p>
                </div>
              ))}
            </div>

            <p className="mt-9 max-w-[880px] text-[22px] font-bold leading-[1.35] tracking-[-0.4px] text-[#f2effb] sm:text-[24px]">
              Higher information density means fewer tool calls, fewer tokens, less latency, and lower inference cost.
            </p>
          </div>
        </section>

        {/* 7. Cost-capability frontier */}
        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The cost-capability frontier</h2>

            <div className="mt-9 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
              <h3 className="text-[19px] font-bold text-[#f2effb]">Matched performance in the primary sweep</h3>
              <p className="mt-3 max-w-[760px] text-[15.5px] leading-[1.7] text-[#a99fc7]">
                In the primary two-fixture sweep, where both lanes reached 100% verified-fix performance, the trace-augmented configuration reached it for approximately 3.4 times less spend.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-[19px] font-bold text-[#f2effb]">Generalization across 11 fixtures, three configurations</h3>
              <p className="mt-3 max-w-[820px] text-[15.5px] leading-[1.7] text-[#a99fc7]">
                The practical configuration is hybrid: use a compact model for high-density trace-based diagnosis and a frontier model for the structurally difficult implementation step. Cost per cell is shown with the verified-fix rate beside each bar.
              </p>

              <div className="mt-7 space-y-5 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
                {cost.map((c) => (
                  <div key={c.label}>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[13.5px]">
                      <span className="text-[#f2effb]">{c.label}</span>
                      <span className="text-[#a99fc7]">
                        <b className="font-bold text-[#f2effb]">${c.dollars.toFixed(3)}</b> per cell · {c.fix} fixed
                      </span>
                    </div>
                    <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#0d0a1a]">
                      <div className="h-full rounded-full" style={{ width: `${(c.dollars / maxCost) * 100}%`, background: c.color }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-[#2c2353]">
                <table className="w-full min-w-[640px] text-[14.5px]">
                  <thead className="bg-[#1c1538] text-[12.5px] uppercase tracking-[0.5px] text-[#a99fc7]">
                    <tr>
                      <th className="px-4 py-3 text-left">Configuration</th>
                      <th className="px-4 py-3 text-left">Verified-fix rate</th>
                      <th className="px-4 py-3 text-left">Cost / cell</th>
                      <th className="px-4 py-3 text-left">vs. baseline</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#16112b] text-[#f2effb]">
                    <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Frontier model, code-only exploration, unlimited budget</td><td className="px-4 py-3">95%</td><td className="px-4 py-3">$1.161</td><td className="px-4 py-3 text-[#a99fc7]">reference</td></tr>
                    <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Compact model, AppMap trace, 3-call budget</td><td className="px-4 py-3">74%</td><td className="px-4 py-3">$0.309</td><td className="px-4 py-3 text-[#ff07aa]">3.8 times cheaper, 21 percentage points lower</td></tr>
                    <tr className="border-t border-[#2c2353]"><td className="px-4 py-3">Hybrid pipeline, compact trace-based diagnosis plus frontier-model fix</td><td className="px-4 py-3">88%</td><td className="px-4 py-3">$0.567</td><td className="px-4 py-3 text-[#ff07aa]">2.0 times cheaper, 7 percentage points lower</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Caveat />
          </div>
        </section>

        {/* 8. Limits */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What the results do and do not establish</h2>
            <ul className="mt-7 max-w-[820px] space-y-3">
              {limits.map((l) => (
                <li key={l} className="flex gap-3 text-[15.5px] leading-[1.6] text-[#a99fc7]">
                  <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff07aa]" />
                  {l}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-start gap-3.5">
              <Link to="/get-appmap" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Get AppMap
              </Link>
              <PaperRequest />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
