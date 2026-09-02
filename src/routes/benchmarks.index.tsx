import { createFileRoute, Link } from "@tanstack/react-router";
import { PaperRequest } from "@/components/sections/benchmarks/PaperRequest";

const title = "AppMap Benchmark: Runtime Evidence on Ambiguous Enterprise Bugs";
const description =
  "Real-world issues arrive as symptoms, not pre-solved bugs. In a private multi-module Java testbed with no solution leakage, runtime evidence preserved root-cause accuracy under tight tool-call budgets.";

export const Route = createFileRoute("/benchmarks/")({
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
  component: BenchmarksIndexPage,
});

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

const verifiedFix = "Share of bugs fixed and verified when limited to 3 tool calls: runtime evidence versus code-only.";

const accuracy = [
  { label: "Unlimited", appmap: 100, codeOnly: 91 },
  { label: "10 calls", appmap: 100, codeOnly: 81 },
  { label: "5 calls", appmap: 100, codeOnly: 50 },
  { label: "3 calls", appmap: 100, codeOnly: 28 },
];

const density = [
  { n: "216 / 216", l: "runs used get_call_tree" },
  { n: "1.09", l: "average get_call_tree calls per run" },
  { n: "15+", l: "search-and-read steps to build the same picture from source code" },
];

const cost = [
  { label: "Frontier model, code-only exploration, unlimited budget", dollars: 1.161, fix: "95%", color: "#a99fc7" },
  { label: "Hybrid pipeline, compact trace-based diagnosis plus frontier-model fix", dollars: 0.567, fix: "88%", color: "#8b5cf6" },
  { label: "Compact model, AppMap trace, 3-call budget", dollars: 0.309, fix: "74%", color: "#ff07aa" },
];

const limits = [
  "This is one internal study, run by our team. It has not been independently replicated.",
  "It used one model family, Claude, inside a single Claude Code agent loop.",
  "The headline 100% versus 28% result comes from two problems across 256 runs. The cost results come from 11 problems across 264 runs.",
  "The private, symptom-only design reduces solution leakage, but it is smaller than SWE-bench Verified.",
  "A compact model alone does not handle every hard fix. The hybrid setup is needed on the broader suite.",
];

const Caveat = () => (
  <p className="mt-7 max-w-[680px] border-l-2 border-[#2c2353] pl-4 text-[13.5px] text-[#7c8aa6]">
    Internal study. Claude model family. One private enterprise-style testbed. Not yet independently replicated. Primary and suite-wide results are labeled separately below.
  </p>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[12.5px] font-bold uppercase tracking-[1.4px] text-[#ff07aa]">{children}</div>
);

function BenchmarksIndexPage() {
  const maxCost = Math.max(...cost.map((c) => c.dollars));

  const scrollToResults = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="px-6 pt-20 pb-14" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
        <div className="mx-auto max-w-[1120px]">
          <SectionLabel>Benchmarks</SectionLabel>
          <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
            Real-world issues are not well-defined bugs.
          </h1>
          <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
            Bug reports arrive as symptoms. Pull requests arrive as diffs. Neither tells you what the running system actually did.
          </p>
          <p className="mt-10 max-w-[760px] text-[17px] leading-[1.6] text-[#a99fc7]">
            Developers and coding agents still have to discover the execution path, affected code, queries, dependencies, and behavioral consequences. So we measured the impact runtime context makes on this process.
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

      {/* 2. What a real issue looks like */}
      <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What a real issue looks like</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-7">
              <div className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">A well-specified issue</div>
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
              <div className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">An issue in the wild</div>
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
            The wild issue starts before anyone has turned the bug into instructions.
          </p>
        </div>
      </section>

      {/* 3. Why SWE-bench could not isolate diagnosis */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Why SWE-bench could not isolate diagnosis</h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-[#a99fc7]">
            SWE-bench remains valuable for comparing overall agent capability. It was not designed to isolate the value of root-cause evidence.
          </p>
          <div className="mt-8 rounded-xl border-l-2 border-[#ff07aa] bg-[#16112b] px-6 py-5">
            <p className="max-w-[820px] text-[16px] leading-[1.65] text-[#f2effb]">
              SWE-bench asks whether an agent can resolve a known issue. This study asks whether runtime evidence helps an agent discover an unknown cause.
            </p>
          </div>
          <div className="mt-7">
            <Link
              to="/benchmarks/swe-bench"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#f2effb] underline underline-offset-4 transition-colors hover:text-[#ff07aa]"
            >
              Want to learn more? Why SWE-bench could not isolate diagnosis, with citations →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. A benchmark designed to require diagnosis */}
      <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-8 text-[21px] font-semibold leading-[1.4] text-[#f2effb]">
            So we tested it.
          </p>
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">A benchmark designed to require diagnosis</h2>
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="relative min-w-0">
              <span className="absolute -top-3 -left-3 z-10 rounded-lg bg-[#1c1538] px-2.5 py-1 text-[11.5px] font-extrabold uppercase tracking-[0.6px] text-white shadow-md">
                SWE-bench issue
              </span>
              <div className="flex h-full min-w-0 flex-col rounded-xl bg-white p-6 shadow-lg sm:p-7">
                <h3 className="text-[17px] font-bold text-slate-900">PythonCodePrinter doesn&apos;t support Indexed</h3>
                <p className="mt-1 text-[12.5px] text-slate-500">sympy/sympy #16669 · opened by ruoyu0088 · April 2019</p>
                <p className="mt-4 text-[13.5px] leading-[1.7] text-slate-700">
                  I use lambdify() to generate some functions and save the code for further use. But the generated code for Indexed operation has some warnings [...] We should add following method to PythonCodePrinter:
                </p>
                <pre className="mt-4 max-w-full overflow-x-auto rounded-md border-l-4 border-amber-400 bg-amber-50 p-3 text-[12px] leading-[1.6] text-slate-800">
                  <code>{sympyCode}</code>
                </pre>
                <p className="mt-auto pt-4 text-[12.5px] font-medium text-rose-600">
                  <span aria-hidden className="mr-1.5">&#9662;</span>
                  The fix, ready to paste, inside the issue text.
                </p>
              </div>
            </div>

            <div className="relative min-w-0">
              <span className="absolute -top-3 -left-3 z-10 rounded-lg bg-[#ff07aa] px-2.5 py-1 text-[11.5px] font-extrabold uppercase tracking-[0.6px] text-white shadow-md">
                This benchmark
              </span>
              <div className="flex h-full min-w-0 flex-col rounded-xl bg-white p-6 shadow-lg sm:p-7">
                <p className="text-[12.5px] text-slate-500">Operations ticket</p>
                <h3 className="mt-1 text-[17px] font-bold text-slate-900">Customers being charged twice on retried payments</h3>
                <div className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                  {["Stack trace: none", "File or function named: none", "Fix included: none"].map((row) => (
                    <p key={row} className="py-2.5 text-[13.5px] text-slate-500">{row}</p>
                  ))}
                </div>
                <p className="mt-auto pt-4 text-[12.5px] font-medium text-rose-600">
                  <span aria-hidden className="mr-1.5">&#9662;</span>
                  Diagnosis is the work.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-[880px] text-[15px] leading-[1.65] text-[#a99fc7]">
            One issue contains its own answer. The other requires finding it. The SWE-Bench+ audit documents fix leakage like this in roughly one third of SWE-bench issues. This benchmark&apos;s tickets are constructed to make it impossible.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 rounded-2xl border border-[#2c2353] bg-[#1c1538] px-6 py-5">
            {setup.map((s) => (
              <div key={s.label} className="min-w-[180px] flex-1">
                <div className="text-[11.5px] font-bold uppercase tracking-[0.8px] text-[#a99fc7]">{s.label}</div>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-[#f2effb]">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 max-w-[760px] text-[15px] text-[#f2effb]">
            The runtime trace is the only difference between the two lanes.
          </p>
        </div>
      </section>

      {/* 5. Primary results */}
      <section id="results" className="scroll-mt-20 px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-[12.5px] uppercase tracking-[1.2px] text-[#a99fc7]">
            Primary study: two problems, two Claude models, four budgets, eight runs per cell
          </div>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">With runtime evidence, accuracy held. Without it, accuracy fell.</h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-[32px] font-extrabold leading-none tracking-[-1px] text-[#ff07aa] sm:text-[38px]">100%</div>
                  <p className="mt-2 text-[12.5px] leading-[1.4] text-[#a99fc7]">with AppMap runtime evidence</p>
                </div>
                <span className="pb-6 text-[14px] text-[#a99fc7]">vs</span>
                <div>
                  <div className="text-[32px] font-extrabold leading-none tracking-[-1px] text-[#7c8aa6] sm:text-[38px]">28%</div>
                  <p className="mt-2 text-[12.5px] leading-[1.4] text-[#a99fc7]">code-only exploration</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#a99fc7]">Root-cause accuracy when limited to 3 tool calls.</p>
            </div>
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <div className="text-[32px] font-extrabold leading-none tracking-[-1px] sm:text-[38px]">
                <span className="text-[#ff07aa]">94%</span>
                <span className="text-[#a99fc7]"> vs. </span>
                <span className="text-[#7c8aa6]">62%</span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#a99fc7]">{verifiedFix}</p>
            </div>
            <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <div className="text-[32px] font-extrabold leading-none tracking-[-1px] text-[#ff07aa] sm:text-[38px]">15+ -&gt; 1</div>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#a99fc7]">Fifteen or more search-and-read steps replaced by one get_call_tree query.</p>
            </div>
          </div>

          <p className="mt-10 max-w-[760px] text-[16px] text-[#a99fc7]">
            How accurately each lane found the root cause as we cut the number of tool calls allowed. With runtime evidence, accuracy stayed at 100%. Without it, accuracy fell as the budget shrank.
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
            The share of bugs actually fixed and verified tells the same story. With runtime evidence, 94 to 100 percent. Without it, the rate dropped from 84 percent to 62 percent.
          </p>
          <Caveat />
        </div>
      </section>

      {/* 1-vs-15 comparison */}
      <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-[900px] text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">One query can return what fifteen searches are looking for</h2>
          <p className="mt-5 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
            In all 216 runs we analyzed, the agent used <code className="font-mono text-[#f2effb]">get_call_tree</code>, and on average it needed just over one call. That one call returned the execution path that held the answer. The code-only lane had to list files, read imports, search for identifiers, and read code, one step at a time.
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
            More information per call means fewer calls, less waiting, and lower spend.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-[#ff07aa]/40 bg-[#1c1538] shadow-[0_0_60px_rgba(255,7,170,0.12)_inset]">
              <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
                <span className="ml-auto font-semibold text-[#ff07aa]">1 query · get_call_tree</span>
              </div>
              <div className="bg-[#0d0a1a] p-5 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
                <div className="text-[#a78bfa]">POST /charge</div>
                <div className="ml-3">PaymentController#charge</div>
                <div className="ml-6 text-[#a99fc7]">ChargeService#authorize</div>
                <div className="ml-9 text-[#a99fc7]">RetryPolicy#wrap</div>
                <div className="ml-12 text-[#ff07aa]">LedgerService#write</div>
                <div className="ml-[60px] text-[#a78bfa]">SQL INSERT INTO ledger ...</div>
                <div className="ml-6 text-[#a99fc7]">IdempotencyStore#check</div>
                <div className="ml-9 text-[#a78bfa]">SQL SELECT id FROM idempotency ...</div>
                <div className="ml-3 text-[#a99fc7]">→ 200 OK · 142ms</div>
                <div className="mt-3 text-[#a78bfa]">// returned by 1 get_call_tree call</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#2c2353] bg-[#1c1538]">
              <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
                <span className="ml-auto font-semibold text-[#fb7185]">~15 searches · static trajectory</span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
{`# the coding agent gropes for the same picture
grep -r "payment" src/        # 214 hits
read PaymentController.java
grep -r "retry" src/          # 38 hits
read RetryHandler.java
grep -rn "charge(" src/
read ChargeService.java
grep -r "idempotency" src/    # 0 hits
read LedgerService.java
grep -rn "INSERT" src/
read LedgerRepository.java
grep -r "@Transactional" src/
read RetryPolicy.java
grep -rn "ledger.write" src/
`}
                <span className="font-bold text-[#fb7185]">... budget exhausted. still guessing.</span>
              </pre>
            </div>
          </div>

          <p className="mt-4 text-center text-[13px] text-[#a99fc7]">
            One get_call_tree query returns the execution path. A representative source-only search requires 15+ calls to approximate the same context, and some runtime facts, like what a query actually returned, cannot be recovered from source at all.
          </p>

        </div>
      </section>

      {/* 7. Cost-capability frontier */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The cost-capability frontier</h2>

          <div className="mt-9 rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 sm:p-8">
            <h3 className="text-[19px] font-bold text-[#f2effb]">Matched performance in the primary sweep</h3>
            <p className="mt-3 max-w-[760px] text-[15.5px] leading-[1.7] text-[#a99fc7]">
              In the primary study, both lanes eventually fixed every bug. The lane with runtime evidence got there for about 3.4 times less spend.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-[19px] font-bold text-[#f2effb]">Generalization across 11 fixtures, three configurations</h3>
            <p className="mt-3 max-w-[820px] text-[15.5px] leading-[1.7] text-[#a99fc7]">
              The practical setup is a hybrid: a compact model diagnoses from the trace, and a frontier model writes the harder fixes. Each bar shows the cost per run with the fix rate beside it.
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
                    <th className="px-4 py-3 text-left">vs. control</th>
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

          <div className="mt-10">
            <h3 className="text-[19px] font-bold text-[#f2effb]">What the cost result means</h3>
            <p className="mt-3 max-w-[820px] text-[15.5px] leading-[1.7] text-[#a99fc7]">
              The lowest-cost configuration that fixed every bug was a compact model reading traces. A frontier model was needed for the hardest implementation steps, and for nothing else. A trace carries information the model would otherwise spend tool calls gathering, so the same diagnosis completes with a smaller model, fewer calls, and lower spend. For an organization running coding agents across many repositories, that is the same review at lower cost per change. This is one internal study. The limits below apply.
            </p>
          </div>

          <Caveat />
        </div>
      </section>

      {/* 8. Bridge: reactive diagnosis and proactive change review */}
      <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">The same runtime evidence answers two questions.</h2>
          <div className="mt-9 rounded-2xl border border-[#2c2353] bg-[#1c1538] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
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

      {/* 9. Limits */}
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
          </div>
          <div className="mt-5">
            <PaperRequest />
          </div>
        </div>
      </section>
    </>
  );
}
