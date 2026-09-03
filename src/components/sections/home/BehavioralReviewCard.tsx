const chips = Array.from({ length: 40 }, (_, i) => i);

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <span className="rounded-md border border-[#2c2353] px-2 py-1 font-mono text-[11.5px] text-[#a99fc7]">
      {label} <span className="font-bold text-[#f2effb]">{value}</span>
    </span>
  );
}

function RaceDiagram() {
  return (
    <div className="rounded-xl border border-[#2c2353] bg-[#0d0a1a] p-3">
      <svg viewBox="0 0 660 190" className="block w-full" role="img" aria-label="Two processes write the same ownership column. The background job's commit is silently erased by a stale check in the request handler.">
        <text x="120" y="16" textAnchor="middle" fill="#c9c1ea" fontSize="12.5" fontWeight="700">
          Request handler
        </text>
        <text x="520" y="16" textAnchor="middle" fill="#c9c1ea" fontSize="12.5" fontWeight="700">
          Background job
        </text>
        <line x1="120" y1="24" x2="120" y2="180" stroke="#3a2f66" strokeDasharray="4 4" />
        <line x1="520" y1="24" x2="520" y2="180" stroke="#3a2f66" strokeDasharray="4 4" />

        <rect x="10" y="30" width="220" height="24" rx="5" fill="#17102c" stroke="#2c2353" />
        <text x="120" y="46" textAnchor="middle" fill="#a99fc7" fontSize="11.5" fontFamily="ui-monospace, monospace">
          read record → owner = A
        </text>

        <rect x="400" y="64" width="240" height="40" rx="5" fill="#17102c" stroke="rgba(248,113,113,.55)" />
        <text x="520" y="80" textAnchor="middle" fill="#fda4a4" fontSize="11.5" fontFamily="ui-monospace, monospace">
          job updates the record
        </text>
        <text x="520" y="95" textAnchor="middle" fill="#fda4a4" fontSize="11.5" fontFamily="ui-monospace, monospace">
          COMMIT owner = C
        </text>

        <rect x="10" y="110" width="240" height="40" rx="5" fill="#17102c" stroke="rgba(248,113,113,.55)" />
        <text x="130" y="126" textAnchor="middle" fill="#fda4a4" fontSize="11.5" fontFamily="ui-monospace, monospace">
          check owner == A ✓ (stale)
        </text>
        <text x="130" y="141" textAnchor="middle" fill="#fda4a4" fontSize="11.5" fontFamily="ui-monospace, monospace">
          COMMIT owner = B
        </text>

        <defs>
          <marker id="brc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#F87171" />
          </marker>
        </defs>
        <path
          d="M400,90 C330,90 320,120 256,128"
          fill="none"
          stroke="#F87171"
          strokeDasharray="5 4"
          strokeWidth="1.6"
          markerEnd="url(#brc-arrow)"
        />
        <text x="330" y="172" textAnchor="middle" fill="#F87171" fontSize="12" fontFamily="ui-monospace, monospace">
          the job's write is silently erased
        </text>
      </svg>
    </div>
  );
}

export function BehavioralReviewCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#2c2353] bg-[linear-gradient(160deg,#131024,#0f0b1d)]">
      <div className="border-b border-[#2c2353] px-5 py-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF07AA]">
          APPMAP BEHAVIORAL REVIEW
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Pill label="head" value="working tree" />
          <Pill label="base" value="8e54ce2 (v0.21.0 baseline)" />
          <span className="rounded-md border border-[rgba(255,7,170,.5)] px-2 py-1 font-mono text-[11.5px] text-[#ff8ad2]">
            traces 41 · new 2 · changed 0
          </span>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md border border-[rgba(245,158,11,.6)] px-2 py-0.5 text-[11px] font-bold tracking-[0.06em] text-[#fbbf24]">
            MEDIUM
          </span>
          <span className="rounded-md border border-[rgba(52,211,153,.6)] px-2 py-0.5 text-[11px] font-bold tracking-[0.06em] text-[#34d399]">
            FIXED DURING REVIEW
          </span>
        </div>
        <h3 className="mt-3 text-[16.5px] font-bold text-[#f2effb]">
          A real review, from a production application maintained mostly by AI agents
        </h3>
        <p className="mt-1.5 text-[13px] text-[#a99fc7]">
          Two code paths wrote the same record. Each was correct alone. Every test passed.
        </p>

        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[560px]">
            <RaceDiagram />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="min-w-[260px] flex-1 rounded-xl border border-[rgba(52,211,153,.4)] bg-[rgba(52,211,153,.05)] p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#34d399]">
              FIX, APPLIED AND RE-RECORDED
            </div>
            <p className="mt-2 text-[13px] leading-[1.55] text-[#a99fc7]">
              The handler now locks the row before the ownership check. The recorded SQL confirms
              it: the read is now{" "}
              <span className="font-mono text-[#f2effb]">SELECT … FOR UPDATE</span>.
            </p>
          </div>

          <div className="min-w-[260px] flex-1 rounded-xl border border-[#2c2353] bg-[#0d0a1a] p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#ff8ad2]">
              RE-RECORDING CHANGED ONE TRACE
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {chips.map((i) => (
                <span
                  key={i}
                  data-chip={i === 12 ? "amber" : "pink"}
                  style={{
                    width: 13,
                    height: 9,
                    borderRadius: 2.5,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: i === 12 ? "rgba(245,158,11,.8)" : "rgba(255,7,170,.5)",
                    background: i === 12 ? "rgba(245,158,11,.25)" : "rgba(255,7,170,.10)",
                  }}
                />
              ))}
            </div>
            <p className="mt-3 text-[11.5px] text-[#6d6395]">
              1 trace changed by the fix. The other 39 stayed byte-identical.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-[#a99fc7]">
          <span>
            <span className="text-[#34d399]">✓</span> behavior the change did not touch: none moved
          </span>
          <span>
            <span className="text-[#34d399]">✓</span> ownership checked at offer and again at accept,
            visible in the traces
          </span>
          <span>
            <span className="text-[#34d399]">✓</span> 4 new queries, all parameterized
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#2c2353] px-5 py-3">
        <span className="font-mono text-[11.5px] text-[#6d6395]">
          gold traces 41 · server tests 427 passed
        </span>
      </div>
    </div>
  );
}
