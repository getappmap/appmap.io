import { useEffect, useId, useRef, useState } from "react";

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
  "AI-01 · two timeouts, two clocks",
  "AI-02 · retry wrapped around retry",
  "AI-03 · duplicate fallback path",
  "AI-04 · helper reimplemented beside the original",
  "AI-05 · hallucinated parameter silently ignored",
  "AI-06 · catch-all swallows real failures",
  "AI-07 · auth check removed as cleanup",
  "AI-08 · cache with no invalidation",
  "AI-09 · eager load flipped to lazy",
  "AI-10 · N+1 from a new abstraction",
  "AI-11 · retry now doubles the side effect",
  "AI-12 · event handler registered twice",
  "AI-13 · sync work on the request path",
  "AI-14 · test-only branch left reachable",
  "AI-15 · feature flag bypassed on new route",
  "AI-16 · billing event emitted twice",
  "AI-17 · cleanup step dropped in refactor",
  "AI-18 · migration and code disagree",
  "AI-19 · PII in the new log line",
  "AI-20 · two agent sessions, each correct alone",
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
  const tickRef = useRef(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setVisible(0);
      window.setTimeout(() => {
        tickRef.current += 1;
        setDefects(pickDefects(mulberry32(4242 + tickRef.current)));
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

type StandardItem =
  | { type: "group"; label: string }
  | { type: "row"; s: string; asks: string; captured: { value: string; unit?: string }[] };

const STANDARD_ITEMS: StandardItem[] = [
  { type: "group", label: "Resilience, reliability, stability" },
  {
    type: "row",
    s: "ISO/IEC 25010:2023",
    asks: "Faultlessness, availability, fault tolerance, recoverability, time behaviour.",
    captured: [{ value: "26 of 40", unit: "sub-characteristics" }],
  },
  {
    type: "row",
    s: "AWS Well-Architected, Reliability",
    asks: "Timeouts, retries, idempotency, changes tested before deploy.",
    captured: [{ value: "7 of 13", unit: "questions" }],
  },
  {
    type: "row",
    s: "DORA metrics / SRE readiness",
    asks: "Change failure rate, rework rate, dependencies, performance.",
    captured: [
      { value: "3 of 5", unit: "metrics" },
      { value: "4 of 6", unit: "areas" },
    ],
  },
  {
    type: "row",
    s: "Operational resilience (US Sound Practices, UK PRA SS1/21)",
    asks: "Resilient system management, dependency mapping, scenario testing.",
    captured: [{ value: "2 of 7 · 2 of 5" }],
  },
  { type: "group", label: "Change control and audit" },
  {
    type: "row",
    s: "EU DORA (2022/2554)",
    asks: "Every change tested, assessed, and verified. Dynamic testing in code review.",
    captured: [{ value: "10 of 18", unit: "provisions" }],
  },
  {
    type: "row",
    s: "SOC 2 CC8 / SOX ITGC",
    asks: "Changes tested, documented, tracked, compared to a baseline.",
    captured: [{ value: "9 of 17", unit: "points of focus" }],
  },
  {
    type: "row",
    s: "FFIEC (Development and Maintenance, 2024)",
    asks: "Test results kept. Unanticipated effects of a change found.",
    captured: [{ value: "3 of 6", unit: "objectives" }],
  },
  { type: "group", label: "Security and secure development" },
  {
    type: "row",
    s: "OWASP Top 10 (2025) / ASVS 5.0",
    asks: "Access control, injection, authentication, logging, error handling.",
    captured: [{ value: "6 of 10 · 242 of 345", unit: "requirements" }],
  },
  {
    type: "row",
    s: "CWE Top 25 (2025)",
    asks: "Race conditions, missing authorization, unbounded resource use.",
    captured: [{ value: "19 of 25" }],
  },
  {
    type: "row",
    s: "NIST SSDF (SP 800-218)",
    asks: "Test executable code before release. Root-cause vulnerabilities.",
    captured: [{ value: "8 of 19", unit: "practices" }],
  },
  {
    type: "row",
    s: "PCI DSS v4.0.1, Req 6",
    asks: "Code reviewed before release. Security impact of every change.",
    captured: [{ value: "8 of 19", unit: "requirements" }],
  },
];

const STAGES = ["Develop", "Push", "PR", "CI", "Deploy", "Prod"] as const;

const APPROACH_ROWS: { name: string; active: string[]; misses: string; appmap?: boolean }[] = [
  {
    name: "Senior engineers reading diffs",
    active: ["PR"],
    misses: "Too many diffs to read. Approval becomes a formality.",
  },
  {
    name: "AI code reviewers",
    active: ["PR"],
    misses: "Faster approval of the same guess about what the code does.",
  },
  {
    name: "Test suites in CI",
    active: ["CI"],
    misses: "Green on every assertion. Silent on everything nobody asserted.",
  },
  {
    name: "Linters, SAST, scanners",
    active: ["PR", "CI"],
    misses: "Clean against the list. The bug is not on the list.",
  },
  {
    name: "Change boards, checklists",
    active: ["Deploy"],
    misses: "Everyone signed. No one saw it run.",
  },
  {
    name: "Canaries, APM, incident review",
    active: ["Deploy", "Prod"],
    misses: "Every fix is code and token churn. Or the customer finds it first.",
  },
  {
    name: "AppMap behavioral comparison",
    active: ["Develop", "Push", "PR", "CI"],
    misses:
      "Compares what the change did when it ran against the baseline, in development and again in CI.",
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

/* ---------------- reusable graphic panel ---------------- */

export function InteractionWebPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#2c2353] bg-[#0d0a1a]">
      <div className="aspect-[16/9] w-full p-2 sm:p-4">
        <InteractionWeb />
      </div>
      <div className="border-t border-[#2c2353] px-4 py-3 text-center text-[14px] font-bold text-[#ff07aa] sm:px-6">
        Find the defects in the <em className="italic">interactions</em>.
      </div>
    </div>
  );
}

/* ---------------- section ---------------- */


export function RuntimeBehaviorAnalysis() {
  return (
    <section id="runtime-behavior-analysis" className="px-6 pt-14 pb-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
          Runtime behavior analysis
        </div>
        <h1 className="mt-4 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Runtime behavior analysis finds the bugs that are code interactions.
        </h1>

        <section className="px-0 pt-10 pb-2">
          <div className="mx-auto max-w-[840px] border-t border-b border-[#2c2353] py-10 text-center">
            <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Independent runtime evidence</div>
            <p className="mt-4 text-[17px] leading-[1.65] text-[#f2effb]">
              A coding agent should not be the only judge of its own change. AppMap records behavior from the running application, outside the agent's reasoning. The agent can query it, the reviewer can inspect it, and the organization can keep the evidence in its own environment. The agent explains the evidence. It does not create it.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <InteractionWebPanel />
        </div>
        <p className="mt-3 text-[12.5px] text-[#a99fc7]/70">AppMap reports every behavior defect, whether it has a name or not. We have named 496 of them so far. <a href="https://github.com/evlawler/appmap-rules" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#ff07aa] hover:underline">Read the list &rarr;</a></p>


        {/* approaches table */}
        <h3 className="mt-16 text-[21px] font-bold tracking-[-0.4px] text-[#f2effb]">
          Agents outrun every check
        </h3>
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.65] text-[#a99fc7]">
          Agents now produce more changes than any stage of the pipeline can absorb. Reviewers skim,
          test suites check only what was asserted, scanners match a catalog, and production finds the
          rest. The agent that wrote the change is the one that has to fix it, and it is working in
          development. AppMap compares runtime behavior there, and again in CI, before merge.
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
                  Why it fails
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

        {/* standards table */}
        <h3 className="mt-16 text-[21px] font-bold tracking-[-0.4px] text-[#f2effb]">
          Answers to the questions you are already asking
        </h3>
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.65] text-[#a99fc7]">
          Every review below asks what changed and what was tested. AppMap answers with a record of how the application behaved.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2c2353] bg-[#16112b]">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#2c2353]">
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  Standard
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  What it asks
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">
                  Captured in dev and CI by AppMap
                </th>
              </tr>
            </thead>
            <tbody>
              {STANDARD_ITEMS.map((item, idx) =>
                item.type === "group" ? (
                  <tr key={`g-${idx}`} className="border-b border-[#2c2353]">
                    <td
                      colSpan={3}
                      className="bg-[#ff07aa]/[0.05] px-5 py-2 text-[11px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]"
                    >
                      {item.label}
                    </td>
                  </tr>
                ) : (
                  <tr key={item.s} className="border-b border-[#2c2353] last:border-b-0 align-top">
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-[#f2effb]">{item.s}</td>
                    <td className="px-5 py-3.5 text-[14px] leading-[1.55] text-[#a99fc7]">{item.asks}</td>
                    <td className="lg:whitespace-nowrap px-5 py-3.5 text-[14px] font-semibold text-[#f2effb]">
                      {item.captured.map((c, i) => (
                        <span key={i}>
                          {c.value}
                          {c.unit && <span className="font-normal text-[#a99fc7]"> {c.unit}</span>}
                          {i < item.captured.length - 1 && <span className="text-[#a99fc7]"> · </span>}
                        </span>
                      ))}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12.5px] text-[#a99fc7]/70">
          Illustrative mapping, not a compliance certification. Counts are our reading of each standard's public text.
        </p>
        <p className="mt-2 text-[12.5px] text-[#a99fc7]/70">These are the questions reviewers already ask. The recording also answers the ones no standard has written down yet.</p>
        <p className="mt-3 text-[14px]">
          <a href="/behavior-controls" className="font-semibold text-[#ff07aa] hover:underline">
            The control list behind this mapping &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
