import { Link } from "@tanstack/react-router";

const shallowNodes = ["API", "Service A", "Service B", "Database"];
const shallowLabels = ["sampled spans", "service boundaries", "production-safe detail"];
const deepLabels = [
  "function calls",
  "SQL",
  "HTTP",
  "exceptions",
  "code objects",
  "timing",
  "relationships",
];
const deepTrace = [
  { indent: 0, text: "POST /charge" },
  { indent: 1, text: "PaymentController#charge" },
  { indent: 2, text: "ChargeService#authorize" },
  { indent: 3, text: "RetryPolicy#wrap" },
  { indent: 4, text: "LedgerService#write" },
  { indent: 5, text: "SQL INSERT ..." },
  { indent: 3, text: "IdempotencyStore#check" },
  { indent: 4, text: "SQL SELECT ..." },
  { indent: 2, text: "HTTP -> risk-service" },
  { indent: 1, text: "200 OK · 142ms" },
];

export function HowItWorksReveal() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
            Go deep before you deploy.
          </h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[color:var(--color-am-muted)]">
            Production and canary tracing are built to observe systems continuously with limited overhead. AppMap records deeply in development, capturing the code-level execution path, queries, HTTP calls, exceptions, and relationships behind every recorded run. The result is information-dense context developers can inspect and AI agents can query before the change merges.
          </p>
          <div className="mt-6">
            <Link
              to="/how-it-works"
              className="text-[15px] font-semibold text-[color:var(--color-am-brand)] hover:underline"
            >
              Learn how it works →
            </Link>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-5">
              <h3 className="text-[15px] font-bold text-[color:var(--color-am-ink)]">
                Canary / post-deploy
              </h3>
              <p className="mt-1 text-[13px] text-[color:var(--color-am-violet-l)]">
                Broad, lightweight telemetry
              </p>
              <ul className="mt-5 space-y-0">
                {shallowNodes.map((node, i) => (
                  <li key={node}>
                    <div className="rounded-md border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-3 py-2 text-center font-mono text-[12px] text-[color:var(--color-am-ink)]">
                      {node}
                    </div>
                    {i < shallowNodes.length - 1 && (
                      <div aria-hidden className="py-1 text-center text-[12px] leading-none text-[color:var(--color-am-muted)]">
                        ↓
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                {shallowLabels.map((l) => (
                  <span key={l} className="text-[11px] text-[color:var(--color-am-muted)]">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#ff07aa]/40 bg-[color:var(--color-am-card)] p-5">
              <h3 className="text-[15px] font-bold text-[color:var(--color-am-ink)]">
                AppMap in development
              </h3>
              <p className="mt-1 text-[13px] text-[#ff07aa]">Deep execution context</p>
              <pre className="mt-5 overflow-x-auto rounded-md border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] p-3 font-mono text-[11px] leading-[1.5] text-[color:var(--color-am-ink)]">
{deepTrace.map((row) => (
  <span key={row.text} className="block whitespace-pre">
    {"  ".repeat(row.indent)}
    <span className={row.indent === 0 ? "text-[#ff07aa]" : "text-[color:var(--color-am-violet-l)]"}>
      {row.text}
    </span>
  </span>
))}
              </pre>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                {deepLabels.map((l) => (
                  <span key={l} className="text-[11px] text-[color:var(--color-am-muted)]">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] text-[color:var(--color-am-muted)]">
            Observe broadly in production. Understand deeply in development. More information per run gives developers and AI agents better context before deployment.
          </p>
        </div>
      </div>
    </section>
  );
}