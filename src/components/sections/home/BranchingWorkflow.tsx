/* Static, deterministic branching-workflow graphic for the homepage hero. */

const MAIN = "#FF07AA";
const RAIL_X = [22, 90, 158, 214];
const RAILS_W = 230;
const ROW_H = 30;
const FLOW_H = 34;
const BLOCKED_H = 44;
const CASING = "#131024";

const BRANCHES = [
  { name: "agents/frontend", color: "#8b5cf6" },
  { name: "agents/paid-api", color: "#f59e0b" },
  { name: "claude/python-api", color: "#34d399" },
];

/* ---------------- micro artifact thumbnails ---------------- */

function MicroDep() {
  const nodes = [
    [4, 5],
    [14, 3],
    [24, 6],
    [9, 12],
    [19, 12],
    [5, 18],
    [22, 17],
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [4, 2],
    [3, 5],
    [4, 6],
  ];
  return (
    <svg width={30} height={22} viewBox="0 0 30 22" aria-hidden="true">
      <g stroke="#5f54a0" strokeWidth={0.7}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g fill="#c9c1ea">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={1.5} />
        ))}
      </g>
    </svg>
  );
}

function MicroSeq() {
  return (
    <svg width={30} height={22} viewBox="0 0 30 22" aria-hidden="true">
      {[5, 15, 25].map((x) => (
        <g key={x}>
          <rect x={x - 3.5} y={2} width={7} height={3.5} rx={1} fill="none" stroke="#c9c1ea" strokeWidth={0.7} />
          <line x1={x} y1={6} x2={x} y2={20} stroke="#5f54a0" strokeWidth={0.7} strokeDasharray="2 2" />
        </g>
      ))}
      <g stroke="#34d399" strokeWidth={0.9}>
        <line x1={5} y1={10} x2={15} y2={10} />
        <path d="M12.5 8.6 L15 10 L12.5 11.4" fill="none" />
        <line x1={15} y1={16} x2={25} y2={16} />
        <path d="M22.5 14.6 L25 16 L22.5 17.4" fill="none" />
      </g>
    </svg>
  );
}

function RejectedSeq({ scale = 1 }: { scale?: number }) {
  return (
    <svg width={30 * scale} height={22 * scale} viewBox="0 0 30 22" aria-hidden="true">
      {[5, 15, 25].map((x) => (
        <g key={x}>
          <rect x={x - 3.5} y={2} width={7} height={3.5} rx={1} fill="none" stroke="#c9c1ea" strokeWidth={0.7} />
          <line x1={x} y1={6} x2={x} y2={20} stroke="#5f54a0" strokeWidth={0.7} strokeDasharray="2 2" />
        </g>
      ))}
      <g stroke="#F87171" strokeWidth={0.9}>
        <line x1={5} y1={10} x2={15} y2={10} />
        <path d="M12.5 8.6 L15 10 L12.5 11.4" fill="none" />
        <line x1={15} y1={16} x2={25} y2={16} />
        <path d="M22.5 14.6 L25 16 L22.5 17.4" fill="none" />
      </g>
      <g fill="#fda4a4" fontSize={4.4} fontFamily="ui-monospace, monospace">
        <text x={6} y={8.6}>t=30s</text>
        <text x={16} y={14.6}>t=30s</text>
      </g>
    </svg>
  );
}

function RejectedMapChip() {
  return (
    <span className="relative inline-block">
      <span
        className="inline-flex items-center"
        style={{
          border: "1.4px solid rgba(248,113,113,.75)",
          background: "rgba(248,113,113,.07)",
          borderRadius: 6,
          padding: "3px 4px",
        }}
      >
        <RejectedSeq scale={1.15} />
      </span>
      <span
        className="absolute flex items-center justify-center rounded-full"
        style={{ width: 13, height: 13, background: "#F87171", right: -5, top: -5 }}
      >
        <svg width={9} height={9} viewBox="0 0 9 9" aria-hidden="true">
          <g stroke="#0f0b1d" strokeWidth={1.6} strokeLinecap="round">
            <line x1={2.4} y1={2.4} x2={6.6} y2={6.6} />
            <line x1={6.6} y1={2.4} x2={2.4} y2={6.6} />
          </g>
        </svg>
      </span>
    </span>
  );
}

function MicroTrace({ scale = 1 }: { scale?: number }) {
  const bars = [
    [3, 3, 22],
    [7, 8, 17],
    [11, 13, 12],
    [7, 18, 15],
  ];
  return (
    <svg width={30 * scale} height={22 * scale} viewBox="0 0 30 22" aria-hidden="true">
      {bars.map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x + 4} y={y - 1.6} width={w - 4} height={3.2} rx={1.4} fill="#3a3068" />
          <circle cx={x + 1.5} cy={y} r={1.4} fill={MAIN} />
        </g>
      ))}
    </svg>
  );
}

type Artifact = "dep" | "seq" | "trace";

function Micro({ kind }: { kind: Artifact }) {
  if (kind === "dep") return <MicroDep />;
  if (kind === "seq") return <MicroSeq />;
  return <MicroTrace />;
}

function ArtifactChip({ kind }: { kind: Artifact }) {
  return (
    <span className="inline-flex items-center rounded-[5px] border border-[#2c2353] bg-[#0f0b1d] px-1 py-0.5">
      <Micro kind={kind} />
    </span>
  );
}

/* ---------------- trace lifecycle chips ---------------- */

const GOLD_BORDER = "rgba(255,7,170,.55)";
const GOLD_BG = "rgba(255,7,170,.08)";

function TraceChip({
  scale = 1,
  borderColor = GOLD_BORDER,
  background = GOLD_BG,
  compact = false,
}: {
  scale?: number;
  borderColor?: string;
  background?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[5px] border ${compact ? "px-[2px] py-[1px]" : "px-1 py-0.5"}`}
      style={{ borderColor, background }}
      aria-hidden="true"
    >
      <MicroTrace scale={scale} />
    </span>
  );
}

/* fanned stack of gold chips docked at the main rail */
function GoldStack({ count, scale = 0.8 }: { count: number; scale?: number }) {
  const step = 13;
  return (
    <span className="relative inline-block" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute"
          style={{ left: i * step, top: 0, zIndex: i }}
        >
          <TraceChip scale={scale} />
        </span>
      ))}
    </span>
  );
}

function PlusBadge() {
  return (
    <span
      className="absolute inline-flex items-center justify-center rounded-full text-[8px] font-bold leading-none text-white"
      style={{ width: 10, height: 10, background: MAIN, right: -4, top: -4 }}
      aria-hidden="true"
    >
      +
    </span>
  );
}

function CompareGlyph() {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" aria-hidden="true">
      <g stroke="#a99fc7" strokeWidth={1} strokeLinecap="round" fill="none">
        <line x1={1.5} y1={4} x2={10.5} y2={4} />
        <path d="M8.6 2.6 L10.5 4 L8.6 5.4" />
        <line x1={10.5} y1={8} x2={1.5} y2={8} />
        <path d="M3.4 6.6 L1.5 8 L3.4 9.4" />
      </g>
    </svg>
  );
}

function CompareGroup({ color }: { color: string }) {
  return (
    <span className="inline-flex items-center gap-[2px]" aria-hidden="true">
      <TraceChip scale={0.45} borderColor={color} background="#0f0b1d" compact />
      <CompareGlyph />
      <TraceChip scale={0.45} compact />
    </span>
  );
}


/* ---------------- lane icons ---------------- */

function TargetIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx={8} cy={8} r={6} fill="none" stroke={MAIN} strokeWidth={1.3} />
      <circle cx={8} cy={8} r={2.4} fill={MAIN} />
    </svg>
  );
}

function RobotIcon({ color }: { color: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden="true">
      <line x1={8} y1={1} x2={8} y2={3} stroke={color} strokeWidth={1.1} strokeLinecap="round" />
      <circle cx={8} cy={1} r={1} fill={color} />
      <rect x={2.5} y={3} width={11} height={7.5} rx={2.5} fill="none" stroke={color} strokeWidth={1.2} />
      <circle cx={5.8} cy={6.8} r={1.1} fill={color} />
      <circle cx={10.2} cy={6.8} r={1.1} fill={color} />
      <rect x={5} y={11.5} width={6} height={3} rx={1.2} fill="none" stroke={color} strokeWidth={1.1} />
    </svg>
  );
}

/* ---------------- worktree strip ---------------- */

function LaneCard({
  title,
  color,
  main,
  sublabel,
}: {
  title: string;
  color: string;
  main?: boolean;
  sublabel?: string;
}) {
  return (
    <div
      className="min-w-0 flex-1 rounded-xl border p-2.5"
      style={
        main
          ? { borderColor: "rgba(255,7,170,.45)", background: "rgba(255,7,170,.05)" }
          : { borderColor: "#2c2353", background: "#0f0b1d" }
      }
    >
      <div className="flex items-center gap-1.5">
        {main ? <TargetIcon /> : <RobotIcon color={color} />}
        <span
          className="truncate text-[11.5px] font-semibold"
          style={{ color: main ? "#ffb3e0" : color }}
        >
          {title}
        </span>
      </div>
      {sublabel && (
        <div
          className="mt-0.5 text-[10.5px]"
          style={{ color: main ? "rgba(255,179,224,0.8)" : "#6d6395" }}
        >
          {sublabel}
        </div>
      )}
      <div className="mt-2 flex items-center gap-1">
        <ArtifactChip kind="dep" />
        <ArtifactChip kind="seq" />
        <ArtifactChip kind="trace" />
      </div>
    </div>
  );
}

/* ---------------- git graph rows ---------------- */

type Row =
  | { kind: "commit"; rail: number; color: string; msg?: string; author?: string; artifact?: Artifact; chip?: string; chipTone?: "gold" | "red"; tone?: "gold" | "red" }
  | { kind: "out"; rail: number; msg: string; author: string }
  | { kind: "merge"; rail: number; note: string }
  | { kind: "flow"; note: string };

const ROWS: Row[] = [
  {
    kind: "commit",
    rail: 0,
    color: MAIN,
    msg: "Release v1.3, baseline of 38 Gold Traces on main",
    author: "github-actions[bot]",
    chip: "gold_traces/",
    tone: "gold",
  },
  { kind: "out", rail: 1, msg: "agents/frontend: plan and nav work", author: "frontend-agent[bot]" },
  { kind: "out", rail: 2, msg: "agents/paid-api: quota on paid endpoints", author: "api-agent[bot]" },
  { kind: "commit", rail: 1, color: BRANCHES[0].color, artifact: "dep" },
  { kind: "out", rail: 3, msg: "claude/python-api: middleware seam", author: "claude" },
  { kind: "commit", rail: 2, color: BRANCHES[1].color, artifact: "seq" },
  { kind: "commit", rail: 3, color: BRANCHES[2].color, artifact: "trace" },
  { kind: "commit", rail: 1, color: BRANCHES[0].color, artifact: "seq" },
  { kind: "merge", rail: 1, note: "compared to the gold traces on main: behavior held" },
  { kind: "flow", note: "ci records fresh traces, the baseline advances" },
  {
    kind: "commit",
    rail: 0,
    color: MAIN,
    msg: "chore(gold-traces): update behavioral baseline [skip ci]",
    author: "github-actions[bot]",
    chip: "gold_traces/",
    tone: "gold",
  },
  {
    kind: "commit",
    rail: 2,
    color: "#F87171",
    msg: "Behavioral review: timeout composed twice on the fallback path",
    author: "appmap-review",
    chip: "blocked before merge",
    chipTone: "red",
    tone: "red",
  },
  { kind: "commit", rail: 2, color: BRANCHES[1].color, artifact: "seq" },
  { kind: "merge", rail: 2, note: "compared to the gold traces on main: 1 changed, 1 new" },
  { kind: "flow", note: "ci records fresh traces, the baseline advances" },
  {
    kind: "commit",
    rail: 0,
    color: MAIN,
    msg: "chore(gold-traces): update behavioral baseline [skip ci]",
    author: "github-actions[bot]",
    chip: "gold_traces/",
    tone: "gold",
  },
  { kind: "commit", rail: 3, color: BRANCHES[2].color, artifact: "dep" },
  { kind: "merge", rail: 3, note: "compared to the gold traces on main: behavior held" },
  { kind: "flow", note: "ci records fresh traces, the baseline advances" },
  {
    kind: "commit",
    rail: 0,
    color: MAIN,
    msg: "Release v1.4.0, baseline frozen with the tag",
    author: "elizabeth",
    chip: "gold_traces/",
    tone: "gold",
  },
];

const OUT_ROW: Record<number, number> = {};
const MERGE_ROW: Record<number, number> = {};
ROWS.forEach((r, i) => {
  if (r.kind === "out") OUT_ROW[r.rail] = i;
  if (r.kind === "merge") MERGE_ROW[r.rail] = i;
});

function railAlive(rail: number, index: number) {
  const out = OUT_ROW[rail];
  const merge = MERGE_ROW[rail];
  if (out === undefined) return false;
  if (index < out) return false;
  if (merge !== undefined && index > merge) return false;
  return true;
}

function RowRails({ row, index }: { row: Row; index: number }) {
  const h = rowHeight(row);
  const mid = h / 2;
  const mainX = RAIL_X[0];
  const lines: React.ReactNode[] = [];

  // branch rails
  for (let rail = 1; rail <= 3; rail++) {
    if (!railAlive(rail, index)) continue;
    const x = RAIL_X[rail];
    const isOut = OUT_ROW[rail] === index;
    const isMerge = MERGE_ROW[rail] === index;
    const y1 = isOut ? mid : 0;
    const y2 = isMerge ? mid : h;
    if (y2 > y1) {
      lines.push(
        <line
          key={`rail-${rail}`}
          x1={x}
          y1={y1}
          x2={x}
          y2={y2}
          stroke={BRANCHES[rail - 1].color}
          strokeWidth={1.9}
          strokeOpacity={0.85}
        />,
      );
    }
  }

  const branchColor = row.kind === "out" || row.kind === "merge" ? BRANCHES[row.rail - 1].color : MAIN;
  const bx = row.kind === "out" || row.kind === "merge" ? RAIL_X[row.rail] : mainX;

  const curve =
    row.kind === "out"
      ? `M ${mainX} 0 C ${mainX} ${mid * 0.9}, ${bx} ${mid * 0.4}, ${bx} ${mid}`
      : row.kind === "merge"
        ? `M ${bx} ${mid} C ${bx} ${h - mid * 0.4}, ${mainX} ${h - mid * 0.9}, ${mainX} ${h}`
        : null;

  return (
    <svg width={RAILS_W} height={h} viewBox={`0 0 ${RAILS_W} ${h}`} className="block shrink-0" aria-hidden="true">
      {/* main rail */}
      {row.kind === "flow" ? (
        <>
          <line
            x1={mainX}
            y1={0}
            x2={mainX}
            y2={h - 7}
            stroke={MAIN}
            strokeWidth={1.9}
            strokeDasharray="3 3"
            strokeOpacity={0.9}
          />
          <path d={`M ${mainX - 3.4} ${h - 8} L ${mainX} ${h - 3} L ${mainX + 3.4} ${h - 8}`} fill="none" stroke={MAIN} strokeWidth={1.6} strokeLinecap="round" />
        </>
      ) : (
        <line x1={mainX} y1={0} x2={mainX} y2={h} stroke={MAIN} strokeWidth={1.9} />
      )}

      {lines}

      {curve && (
        <>
          <path d={curve} fill="none" stroke={CASING} strokeWidth={6} strokeLinecap="round" />
          <path d={curve} fill="none" stroke={branchColor} strokeWidth={1.9} strokeLinecap="round" />
        </>
      )}

      {row.kind === "out" && <circle cx={bx} cy={mid} r={3.6} fill={branchColor} />}
      {row.kind === "merge" && (
        <circle cx={mainX} cy={h} r={3.6} fill={CASING} stroke={MAIN} strokeWidth={1.6} />
      )}
      {row.kind === "commit" && <circle cx={RAIL_X[row.rail]} cy={mid} r={3.8} fill={row.color} />}
    </svg>
  );
}

function isRejectedRow(row: Row): row is Extract<Row, { kind: "commit" }> {
  return row.kind === "commit" && row.tone === "red" && !!row.msg?.startsWith("Behavioral review");
}

function rowHeight(row: Row) {
  if (row.kind === "flow") return FLOW_H;
  if (isRejectedRow(row)) return BLOCKED_H;
  return ROW_H;
}

function hexToRgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

const CMP_W = 55;

function GraphRow({ row, index }: { row: Row; index: number }) {
  const h = rowHeight(row);
  const isBaselineRow = row.kind === "commit" && row.rail === 0 && row.msg?.startsWith("Release");
  const isChoreRow = row.kind === "commit" && row.rail === 0 && row.msg?.startsWith("chore(gold-traces)");
  const cmpLeft =
    row.kind === "merge"
      ? Math.max(RAIL_X[0] + 4, Math.min(RAILS_W - CMP_W - 4, RAIL_X[row.rail] - 6 - CMP_W))
      : 0;
  return (
    <div className="flex items-stretch">
      <div className="relative shrink-0" style={{ width: RAILS_W, height: h }}>
        <RowRails row={row} index={index} />
        {row.kind === "commit" && row.artifact && (
          <span
            className="absolute"
            style={{ left: RAIL_X[row.rail] + 10, top: (h - 24) / 2 }}
          >
            <ArtifactChip kind={row.artifact} />
          </span>
        )}
        {isBaselineRow && (
          <span className="absolute" style={{ left: RAIL_X[0] + 10, top: (h - 24) / 2 }}>
            <GoldStack count={index === 0 ? 3 : 2} scale={index === 0 ? 0.8 : 0.62} />
          </span>
        )}
        {isChoreRow && (
          <span className="absolute" style={{ left: RAIL_X[0] + 10, top: (h - 24) / 2 }}>
            <span className="relative inline-block">
              <TraceChip scale={0.8} />
              <PlusBadge />
            </span>
          </span>
        )}
        {isRejectedRow(row) && (
          <span className="absolute" style={{ left: RAIL_X[row.rail] + 12, top: 3 }}>
            <RejectedMapChip />
          </span>
        )}
        {row.kind === "merge" && (
          <span className="absolute" style={{ left: cmpLeft, top: 0 }}>
            <CompareGroup color={hexToRgba(BRANCHES[row.rail - 1].color, 0.55)} />
          </span>
        )}
      </div>



      <div className="flex min-w-0 flex-1 items-center gap-2 pl-3" style={{ height: h }}>
        {row.kind === "flow" && (
          <span className="text-[11.5px] italic text-[#6d6395]">{row.note}</span>
        )}
        {row.kind === "merge" && (
          <span className="text-[11.5px] text-[#6d6395]">{row.note}</span>
        )}
        {row.kind === "out" && (
          <>
            <span className="truncate text-[12.5px]" style={{ color: BRANCHES[row.rail - 1].color }}>
              {row.msg}
            </span>
            <span className="shrink-0 text-[12px] text-[#6d6395]">{row.author}</span>
          </>
        )}
        {row.kind === "commit" && row.msg && (
          <>
            <span
              className="truncate text-[12.5px]"
              style={{ color: row.tone === "gold" ? "#ffb3e0" : row.tone === "red" ? "#fda4a4" : "#c9c1ea" }}
            >
              {row.msg}
            </span>
            {row.chip && (
              <span
                className="shrink-0 rounded-[5px] border px-1.5 py-[1px] text-[10.5px] font-semibold"
                style={
                  row.chipTone === "red"
                    ? { borderColor: "rgba(248,113,113,.5)", color: "#fda4a4" }
                    : { borderColor: "rgba(255,7,170,.5)", color: "#ff8ad2" }
                }
              >
                {row.chip}
              </span>
            )}
            {row.author && (
              <span className="shrink-0 text-[12px] text-[#6d6395]">{row.author}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------- mobile lifecycle strip ---------------- */

function Connector() {
  return (
    <div className="flex justify-start" style={{ paddingLeft: 21 }} aria-hidden="true">
      <svg width={10} height={16} viewBox="0 0 10 16">
        <line x1={5} y1={0} x2={5} y2={12} stroke={MAIN} strokeWidth={2} />
        <path d="M1.8 11 L5 15 L8.2 11" fill="none" stroke={MAIN} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function MobileStage({
  visual,
  title,
  sub,
}: {
  visual: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex w-[46px] shrink-0 items-center justify-start">{visual}</span>
      <span className="min-w-0">
        <span className="block text-[13.5px] font-bold text-[#f2effb]">{title}</span>
        <span className="block text-[12px] text-[#6d6395]">{sub}</span>
      </span>
    </div>
  );
}

function MobileLifecycle() {
  return (
    <div
      className="rounded-2xl border border-[#2c2353] p-4"
      style={{ background: "linear-gradient(180deg, #131024 0%, #0f0b1d 100%)" }}
    >
      <MobileStage
        visual={<TraceChip scale={0.8} borderColor="#2c2353" background="#0f0b1d" />}
        title="Record locally"
        sub="tests, requests, processes"
      />
      <Connector />
      <MobileStage
        visual={
          <span className="relative inline-block">
            <TraceChip scale={0.8} />
            <PlusBadge />
          </span>
        }
        title="Commit the key traces"
        sub="gold_traces/ with the code"
      />
      <Connector />
      <MobileStage
        visual={
          <span className="inline-flex items-center rounded-[5px] border border-[#2c2353] bg-[#0f0b1d] px-1.5 py-1 text-[12px] font-bold text-[#f2effb]">
            MCP
          </span>
        }
        title="Agents query"
        sub="call tree, queries, requests"
      />
      <Connector />
      <MobileStage
        visual={<CompareGroup color="rgba(201,193,234,.55)" />}
        title="Compare at review"
        sub="fresh against the baseline"
      />

      <div className="mt-2.5 flex items-center gap-2" style={{ paddingLeft: 18 }}>
        <span className="shrink-0 scale-[0.85]">
          <RejectedMapChip />
        </span>
        <span className="text-[11.5px] text-[#fda4a4]">drift is blocked before merge</span>
      </div>

      <div className="mt-2.5">
        <Connector />
      </div>
      <MobileStage
        visual={
          <span className="relative inline-block" style={{ width: 40, height: 22 }}>
            <GoldStack count={2} scale={0.7} />
          </span>
        }
        title="The baseline advances"
        sub="after the merge"
      />

      <div className="mt-4 border-t border-[#2c2353] pt-3 text-[11.5px] text-[#6d6395]">
        Gold Traces live on main. Every change is compared against them before it merges.
      </div>
    </div>
  );
}

/* ---------------- panel ---------------- */

export function BranchingWorkflow() {
  return (
    <>
      <div className="block sm:hidden">
        <MobileLifecycle />
      </div>

      <div
        className="hidden overflow-hidden rounded-2xl border border-[#2c2353] sm:block"
        style={{ background: "linear-gradient(180deg, #131024 0%, #0f0b1d 100%)" }}
      >
        <div className="relative">
          <div className="overflow-x-auto">
            <div className="min-w-[880px] p-4 sm:p-5">
              {/* worktree strip */}
              <div className="flex items-stretch gap-2.5">
                <LaneCard title="main · gold_traces/" color={MAIN} main sublabel="the baseline" />
                {BRANCHES.map((b) => (
                  <LaneCard key={b.name} title={b.name} color={b.color} sublabel="fresh traces" />
                ))}
              </div>

              {/* git graph */}
              <div className="mt-5">
                {ROWS.map((row, i) => (
                  <GraphRow key={i} row={row} index={i} />
                ))}
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 xl:hidden"
            style={{ background: "linear-gradient(90deg, rgba(15,11,29,0) 0%, #0f0b1d 100%)" }}
            aria-hidden="true"
          />
        </div>
        <div className="border-t border-[#2c2353] px-4 py-3 text-[12.5px] text-[#6d6395] sm:px-5">
          Every branch is cut from main and returns to main. The Gold Traces live on main. Fresh traces
          from the branch are compared against them at review, and the baseline advances after the merge.
        </div>
      </div>
    </>
  );
}

