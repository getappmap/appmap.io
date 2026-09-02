import { useEffect, useId, useState } from "react";

/* ---------------- seeded PRNG ---------------- */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- domains ---------------- */

type GlyphKind =
  | "paths"
  | "shield"
  | "brackets"
  | "cross"
  | "gear"
  | "linked"
  | "db"
  | "parallel"
  | "bolt"
  | "warning"
  | "gauge";

const DOMAINS: { label: string; x: number; y: number; glyph: GlyphKind }[] = [
  { label: "execution paths", x: 170, y: 110, glyph: "paths" },
  { label: "auth + security", x: 470, y: 78, glyph: "shield" },
  { label: "API contract", x: 780, y: 108, glyph: "brackets" },
  { label: "data flow", x: 130, y: 280, glyph: "cross" },
  { label: "business logic", x: 470, y: 250, glyph: "gear" },
  { label: "interactions", x: 815, y: 270, glyph: "linked" },
  { label: "persistence + SQL", x: 200, y: 452, glyph: "db" },
  { label: "concurrency", x: 470, y: 470, glyph: "parallel" },
  { label: "side effects", x: 775, y: 452, glyph: "bolt" },
  { label: "failure handling", x: 315, y: 360, glyph: "warning" },
  { label: "performance", x: 635, y: 360, glyph: "gauge" },
];

const LABELS = [
  "auth check skipped on new path",
  "two timeouts, two clocks",
  "WHERE clause quietly loosened",
  "write reached from read-only route",
  "retry doubles the side effect",
  "admin function reachable from user route",
  "transaction boundary moved",
  "exception newly swallowed",
  "cache hit became a miss",
  "event processed twice",
  "cleanup skipped on failure",
  "eager load became lazy",
  "payment call on a new path",
  "blocking call on the async path",
  "audit log no longer written",
  "cascade delete appeared",
  "fallback hits the wrong service",
  "batch write degraded to singles",
  "token check reordered after use",
  "tenant filter missing from query",
  "email sent from an untested path",
  "idempotency quietly broken",
  "sync work moved into the request path",
  "error payload shape changed",
];

/* ---------------- static web geometry (seed 1337) ---------------- */

type Node = { x: number; y: number; r: number; o: number };

const rnd = mulberry32(1337);

const NODES: Node[] = [];
for (const d of DOMAINS) {
  for (let i = 0; i < 18; i++) {
    NODES.push({
      x: d.x + (rnd() * 2 - 1) * 79,
      y: d.y + (rnd() * 2 - 1) * 52,
      r: 1.4 + rnd() * 2.2,
      o: 0.45 + rnd() * 0.5,
    });
  }
}

const EDGES: [number, number][] = [];
for (let i = 0; i < NODES.length; i++) {
  for (let k = 0; k < 2; k++) {
    const j = Math.floor(rnd() * NODES.length);
    if (j !== i) EDGES.push([i, j]);
  }
}

const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

const CANDIDATES: [number, number][] = [];
{
  const pick = mulberry32(90210);
  for (let t = 0; t < 6000 && CANDIDATES.length < 900; t++) {
    const i = Math.floor(pick() * NODES.length);
    const j = Math.floor(pick() * NODES.length);
    if (i === j) continue;
    const d = dist(NODES[i], NODES[j]);
    if (d >= 140 && d <= 430) CANDIDATES.push([i, j]);
  }
}

type Defect = { a: number; b: number; label: string };

function pickDefects(rand: () => number): Defect[] {
  const out: Defect[] = [];
  const usedLabels = new Set<string>();
  const usedNodes = new Set<number>();
  let guard = 0;
  while (out.length < 3 && guard++ < 500) {
    const [a, b] = CANDIDATES[Math.floor(rand() * CANDIDATES.length)];
    if (usedNodes.has(a) || usedNodes.has(b)) continue;
    let label = LABELS[Math.floor(rand() * LABELS.length)];
    let lg = 0;
    while (usedLabels.has(label) && lg++ < 100) {
      label = LABELS[Math.floor(rand() * LABELS.length)];
    }
    if (usedLabels.has(label)) continue;
    usedLabels.add(label);
    usedNodes.add(a);
    usedNodes.add(b);
    out.push({ a, b, label });
  }
  return out;
}

const INITIAL_DEFECTS = pickDefects(mulberry32(4242));

/* ---------------- glyphs ---------------- */

function Glyph({ kind, x, y }: { kind: GlyphKind; x: number; y: number }) {
  const p = {
    fill: "none",
    stroke: "#7d72ab",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <g transform={`translate(${x},${y})`}>
      {kind === "paths" && (
        <>
          <path d="M1 12 L1 6 Q1 2 5 2 L13 2" {...p} />
          <path d="M1 8 Q1 12 5 12 L13 12" {...p} />
        </>
      )}
      {kind === "shield" && <path d="M7 1 L13 3.5 V7.5 Q13 11.5 7 13.5 Q1 11.5 1 7.5 V3.5 Z" {...p} />}
      {kind === "brackets" && (
        <>
          <path d="M5 2 L1 7 L5 12" {...p} />
          <path d="M9 2 L13 7 L9 12" {...p} />
        </>
      )}
      {kind === "cross" && (
        <>
          <path d="M1 3 L13 11" {...p} />
          <path d="M13 3 L1 11" {...p} />
          <path d="M13 11 L9.5 10.6 M13 11 L12.6 7.5" {...p} />
          <path d="M1 11 L4.5 10.6 M1 11 L1.4 7.5" {...p} />
        </>
      )}
      {kind === "gear" && (
        <>
          <circle cx={7} cy={7} r={3} {...p} />
          <path d="M7 0.6 V2.4 M7 11.6 V13.4 M0.6 7 H2.4 M11.6 7 H13.4 M2.6 2.6 L3.8 3.8 M10.2 10.2 L11.4 11.4 M11.4 2.6 L10.2 3.8 M3.8 10.2 L2.6 11.4" {...p} />
        </>
      )}
      {kind === "linked" && (
        <>
          <circle cx={2.5} cy={3} r={1.8} {...p} />
          <circle cx={11.5} cy={4} r={1.8} {...p} />
          <circle cx={6.5} cy={11.5} r={1.8} {...p} />
          <path d="M4.2 3.4 L9.8 3.9 M3.4 4.6 L5.6 9.9 M10.7 5.6 L7.4 10" {...p} />
        </>
      )}
      {kind === "db" && (
        <>
          <ellipse cx={7} cy={3} rx={5.4} ry={2} {...p} />
          <path d="M1.6 3 V11 Q1.6 13 7 13 Q12.4 13 12.4 11 V3" {...p} />
          <path d="M1.6 7 Q1.6 9 7 9 Q12.4 9 12.4 7" {...p} />
        </>
      )}
      {kind === "parallel" && (
        <>
          <path d="M1 4 H11 M8 1.5 L11 4 L8 6.5" {...p} />
          <path d="M1 10 H11 M8 7.5 L11 10 L8 12.5" {...p} />
        </>
      )}
      {kind === "bolt" && <path d="M8.5 1 L3 8 H7 L5.5 13 L11 6 H7 Z" {...p} />}
      {kind === "warning" && (
        <>
          <path d="M7 1.5 L13 12.5 H1 Z" {...p} />
          <path d="M7 5.5 V8.6 M7 10.6 V10.9" {...p} />
        </>
      )}
      {kind === "gauge" && (
        <>
          <path d="M1.2 11 A6.2 6.2 0 0 1 12.8 11" {...p} />
          <path d="M7 11 L10 6.5" {...p} />
        </>
      )}
    </g>
  );
}

/* ---------------- bug ---------------- */

function Bug({ x, y, angle, eyeId }: { x: number; y: number; angle: number; eyeId: string }) {
  const s = { fill: "none", stroke: "#F87171", strokeWidth: 1.2, strokeLinecap: "round" as const };
  return (
    <g transform={`translate(${x},${y}) rotate(${angle})`}>
      {/* legs */}
      <path d="M-6 -5 L-10 -9 M0 -6 L0 -11 M6 -5 L10 -9 M-6 5 L-10 9 M0 6 L0 11 M6 5 L10 9" {...s} />
      {/* body */}
      <ellipse cx={0} cy={0} rx={8.5} ry={5.6} fill="#17102c" stroke="#F87171" strokeWidth={1.4} />
      <path d="M-6 0 H6" {...s} strokeWidth={0.9} />
      {/* head */}
      <circle cx={10} cy={0} r={3.6} fill="#17102c" stroke="#F87171" strokeWidth={1.3} />
      <circle cx={11.4} cy={-1.5} r={1} fill="#ff2d2d" filter={`url(#${eyeId})`} />
      <circle cx={11.4} cy={1.5} r={1} fill="#ff2d2d" filter={`url(#${eyeId})`} />
      {/* antennae */}
      <path d="M12 -2.6 Q16 -5 17.5 -8 M12 2.6 Q16 5 17.5 8" {...s} />
    </g>
  );
}

/* ---------------- web graphic ---------------- */

export function InteractionWeb() {
  const uid = useId().replace(/:/g, "");
  const glowId = `rba-glow-${uid}`;
  const eyeId = `rba-eye-${uid}`;
  const edgeId = (i: number) => `rba-edge-${uid}-${i}`;
  const [defects, setDefects] = useState<Defect[]>(INITIAL_DEFECTS);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setVisible(0);
      window.setTimeout(() => {
        setDefects(pickDefects(mulberry32(Math.floor(Math.random() * 1e9))));
        setVisible(1);
      }, 60);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <svg
      viewBox="0 0 960 540"
      role="img"
      aria-label="Interaction web showing runtime behavior domains with highlighted interaction defects."
      className="block w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={eyeId} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="1.1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {defects.map((d, i) => {
          const a = NODES[d.a];
          const b = NODES[d.b];
          return (
            <linearGradient
              key={i}
              id={edgeId(i)}
              gradientUnits="userSpaceOnUse"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            >
              <stop offset="0%" stopColor="#F87171" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffb4b4" stopOpacity="1" />
              <stop offset="100%" stopColor="#F87171" stopOpacity="0.45" />
            </linearGradient>
          );
        })}
      </defs>

      {/* web edges */}
      <g stroke="#5f54a0" strokeOpacity={0.11} strokeWidth={1}>
        {EDGES.map(([i, j], k) => (
          <line key={k} x1={NODES[i].x} y1={NODES[i].y} x2={NODES[j].x} y2={NODES[j].y} />
        ))}
      </g>

      {/* nodes */}
      <g fill="#c9c1ea">
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} opacity={n.o} />
        ))}
      </g>

      {/* domain labels */}
      {DOMAINS.map((d) => {
        const textX = d.x + 10;
        return (
          <g key={d.label}>
            <Glyph kind={d.glyph} x={d.x - 9} y={d.y - 7} />
            <text x={textX} y={d.y + 4} fill="#7d72ab" fontSize={13} fontWeight={600}>
              {d.label}
            </text>
          </g>
        );
      })}

      {/* defect layer */}
      <g style={{ opacity: visible, transition: "opacity 600ms ease-in" }}>
        {defects.map((d, i) => {
          const a = NODES[d.a];
          const b = NODES[d.b];
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          let angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
          if (angle > 90 || angle < -90) angle += 180;
          const approxWidth = d.label.length * 7.2;
          const labelX = Math.min(Math.max(mx + 22, 8), 960 - approxWidth - 8);
          return (
            <g key={`${d.a}-${d.b}-${i}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={`url(#${edgeId(i)})`}
                strokeWidth={2.6}
                filter={`url(#${glowId})`}
              />
              <circle cx={a.x} cy={a.y} r={4.2} fill="#F87171" filter={`url(#${glowId})`} />
              <circle cx={b.x} cy={b.y} r={4.2} fill="#F87171" filter={`url(#${glowId})`} />
              <Bug x={mx} y={my} angle={angle} eyeId={eyeId} />
              <text
                x={labelX}
                y={my - 22}
                fill="#fda4a4"
                fontSize={12.5}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------- tables data ---------------- */

const STANDARD_ROWS: { s: string; asks: string; domains: string }[] = [
  {
    s: "OWASP Top 10 / ASVS",
    asks: "Their domains: broken access control, injection, identification and session management, security logging failures.",
    domains: "auth + security · data flow · failure handling · side effects",
  },
  {
    s: "CWE",
    asks: "Their weakness classes are interaction defects by definition: race conditions, missing authorization on a path, uncontrolled resource consumption, improper error handling.",
    domains: "concurrency · auth + security · performance · failure handling",
  },
  {
    s: "NIST SSDF (SP 800-218)",
    asks: "Their practices: verify the software meets requirements, review and test code before release.",
    domains: "execution paths · API contract · business logic",
  },
  {
    s: "SOC 2 (change management) / SOX ITGC",
    asks: "Their domain: change management. Changes authorized, tested, approved, with evidence of what changed.",
    domains: "all eleven · the comparison is the evidence",
  },
  {
    s: "PCI DSS (Req 6)",
    asks: "Their domain: secure development and change control. Code changes reviewed before release, including security impact.",
    domains: "auth + security · persistence + SQL · data flow · side effects",
  },
  {
    s: "FFIEC guidance",
    asks: "Their domain: development and change management for systems in regulated banking, with an evidenced process.",
    domains: "all eleven · audit-ready record per change",
  },
  {
    s: "SRE production readiness",
    asks: "Their domains: reliability, capacity, failure modes, dependencies. Timeouts, retries, and behavior under change.",
    domains: "interactions · failure handling · performance · concurrency · execution paths",
  },
];

const STAGES = ["Develop", "Push", "PR", "CI", "Deploy", "Prod"] as const;

const APPROACH_ROWS: { name: string; active: string[]; misses: string; appmap?: boolean }[] = [
  {
    name: "Senior engineers reading diffs",
    active: ["PR"],
    misses: "Reads source at the pull request. Cannot see composed behavior, and does not scale with change volume.",
  },
  {
    name: "AI code reviewers",
    active: ["PR"],
    misses: "Reads the same diff faster, at the pull request. Still inference from source.",
  },
  {
    name: "Test suites in CI",
    active: ["CI"],
    misses: "Verifies the assertions someone wrote, after the change is written. Samples outcomes, not behavior.",
  },
  {
    name: "Linters, SAST, scanners",
    active: ["PR", "CI"],
    misses: "Matches a bounded catalog of known-bad patterns at PR and CI.",
  },
  {
    name: "Change boards, checklists",
    active: ["Deploy"],
    misses: "Collects attestations before release, without an evidence artifact behind them.",
  },
  {
    name: "Canaries, APM, incident review",
    active: ["Deploy", "Prod"],
    misses: "Finds interaction defects after merge, in production, at user blast radius.",
  },
  {
    name: "AppMap behavioral comparison",
    active: ["Develop", "Push", "PR", "CI"],
    misses:
      "Compares recorded behavior against the approved baseline at the earliest point where behavior exists, and repeats the same review at PR and in CI.",
    appmap: true,
  },
];

function StageTrack({ active, appmap }: { active: string[]; appmap?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      {STAGES.map((s) => {
        const on = active.includes(s);
        return (
          <div key={s} className="flex w-[42px] flex-col items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full border"
              style={{
                background: on ? (appmap ? "#FF07AA" : "#F87171") : "#2c2353",
                borderColor: on ? (appmap ? "#FF07AA" : "#F87171") : "#3f3566",
              }}
            />
            <span className="text-[10px] leading-none text-[#a99fc7]">{s}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- section ---------------- */

export function RuntimeBehaviorAnalysis() {
  return (
    <section className="border-t border-[#2c2353] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
          Runtime behavior analysis
        </div>
        <h2 className="mt-4 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Runtime behavior analysis finds the bugs that are code interactions.
        </h2>
        <p className="mt-4 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
          Every interaction in the codebase, times every way behavior can depart. A rule catalog
          cannot enumerate this space. The comparison against your own Gold Traces does not have to:
          it reports whatever departed.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#2c2353] bg-[#0d0a1a]">
          <div className="aspect-[16/9] w-full p-2 sm:p-4">
            <InteractionWeb />
          </div>
          <div className="border-t border-[#2c2353] px-4 py-3 text-center text-[14px] font-bold text-[#ff07aa] sm:px-6">
            Find the defects in the <em className="italic">interactions</em>.
          </div>
        </div>

        {/* standards table */}
        <h3 className="mt-16 text-[21px] font-bold tracking-[-0.4px] text-[#f2effb]">
          Where these questions already appear
        </h3>
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.65] text-[#a99fc7]">
          Release and compliance reviews already ask about this space. Today the answers are
          assertions. The comparison answers with recordings.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2c2353] bg-[#16112b]">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#2c2353]">
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  Public standard
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  What it asks
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  Domains that answer it
                </th>
              </tr>
            </thead>
            <tbody>
              {STANDARD_ROWS.map((r) => (
                <tr key={r.s} className="border-b border-[#2c2353] last:border-b-0 align-top">
                  <td className="px-5 py-4 text-[14px] font-semibold text-[#f2effb]">{r.s}</td>
                  <td className="px-5 py-4 text-[14px] leading-[1.55] text-[#a99fc7]">{r.asks}</td>
                  <td className="px-5 py-4 text-[13.5px] leading-[1.55] text-[#a99fc7]">{r.domains}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12.5px] text-[#a99fc7]/70">
          Illustrative mapping for discussion, not a compliance certification.
        </p>

        {/* approaches table */}
        <h3 className="mt-16 text-[21px] font-bold tracking-[-0.4px] text-[#f2effb]">
          How teams do this today, and when
        </h3>
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.65] text-[#a99fc7]">
          Every current approach reads, samples, catalogs, or ships. The behavioral comparison runs
          all the way left: while the code is being written, before it merges.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2c2353] bg-[#16112b]">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#2c2353]">
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  Approach
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  When it runs
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  What it misses
                </th>
              </tr>
            </thead>
            <tbody>
              {APPROACH_ROWS.map((r) => (
                <tr
                  key={r.name}
                  className={`border-b border-[#2c2353] last:border-b-0 align-top ${
                    r.appmap ? "bg-[#ff07aa]/[0.07]" : ""
                  }`}
                >
                  <td
                    className={`px-5 py-4 text-[14px] ${
                      r.appmap ? "font-bold text-[#ff07aa]" : "font-semibold text-[#f2effb]"
                    }`}
                  >
                    {r.name}
                  </td>
                  <td className="px-5 py-4">
                    <StageTrack active={r.active} appmap={r.appmap} />
                  </td>
                  <td className="px-5 py-4 text-[14px] leading-[1.55] text-[#a99fc7]">{r.misses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
