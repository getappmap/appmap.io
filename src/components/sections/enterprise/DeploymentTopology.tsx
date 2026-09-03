const MAIN = "#FF07AA";
const GOLD_BORDER = "rgba(255,7,170,.55)";
const GOLD_BG = "rgba(255,7,170,.08)";
const GRAY = "#5f54a0";

const figureTitle =
  "AppMap deployment topology: recording, storage, comparison, configuration, and reporting all inside your environment.";

const caption =
  "AppMap records, stores, compares, configures, and reports inside your environment. Telemetry routes to your internal observability stack, such as Splunk, or is disabled, so that data stays inside too. If the team chooses a hosted coding agent, some context goes to that provider, and the provider's configuration and terms apply.";

/* ---------- reused chip grammar (from the branching workflow graphic) ---------- */

function MicroTraceSvg({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const bars: [number, number, number][] = [
    [3, 3, 22],
    [7, 8, 17],
    [11, 13, 12],
    [7, 18, 15],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {bars.map(([bx, by, w], i) => (
        <g key={i}>
          <rect x={bx + 4} y={by - 1.6} width={w - 4} height={3.2} rx={1.4} fill="#3a3068" />
          <circle cx={bx + 1.5} cy={by} r={1.4} fill={MAIN} />
        </g>
      ))}
    </g>
  );
}

function TraceChipSvg({
  x,
  y,
  scale = 0.8,
  border = GOLD_BORDER,
  bg = GOLD_BG,
}: {
  x: number;
  y: number;
  scale?: number;
  border?: string;
  bg?: string;
}) {
  const w = 30 * scale + 8;
  const h = 22 * scale + 6;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill={bg} stroke={border} strokeWidth={1.1} />
      <MicroTraceSvg x={x + 4} y={y + 3} scale={scale} />
    </g>
  );
}

function GoldStackSvg({ x, y, count = 5 }: { x: number; y: number; count?: number }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <TraceChipSvg key={i} x={x + i * 13} y={y} scale={0.8} />
      ))}
    </g>
  );
}

function CompareGlyphSvg({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke="#a99fc7" strokeWidth={1} strokeLinecap="round" fill="none">
      <line x1={1.5} y1={4} x2={10.5} y2={4} />
      <path d="M8.6 2.6 L10.5 4 L8.6 5.4" />
      <line x1={10.5} y1={8} x2={1.5} y2={8} />
      <path d="M3.4 6.6 L1.5 8 L3.4 9.4" />
    </g>
  );
}

function CompareGroupSvg({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <TraceChipSvg x={x} y={y} scale={0.62} border="#8b5cf6" bg="#0f0b1d" />
      <CompareGlyphSvg x={x + 32} y={y + 5} />
      <TraceChipSvg x={x + 48} y={y} scale={0.62} />
    </g>
  );
}

function SmallBotSvg({ x, y, color = "#8b5cf6", size = 13 }: { x: number; y: number; color?: string; size?: number }) {
  const s = size / 16;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <line x1={8} y1={1} x2={8} y2={3} stroke={color} strokeWidth={1.1} strokeLinecap="round" />
      <circle cx={8} cy={1} r={1} fill={color} />
      <rect x={2.5} y={3} width={11} height={7.5} rx={2.5} fill="none" stroke={color} strokeWidth={1.2} />
      <circle cx={5.8} cy={6.8} r={1.1} fill={color} />
      <circle cx={10.2} cy={6.8} r={1.1} fill={color} />
      <rect x={5} y={11.5} width={6} height={3} rx={1.2} fill="none" stroke={color} strokeWidth={1.1} />
    </g>
  );
}

function MonitorBotSvg({ x, y, size = 16 }: { x: number; y: number; size?: number }) {
  const s = size / 16;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <line x1={8} y1={1} x2={8} y2={3} stroke={MAIN} strokeWidth={1.1} strokeLinecap="round" />
      <circle cx={8} cy={1} r={1} fill={MAIN} />
      <rect x={2.5} y={3} width={11} height={7.5} rx={2.5} fill="none" stroke={MAIN} strokeWidth={1.2} />
      <rect x={4.2} y={5.4} width={7.6} height={3} rx={1.2} fill="none" stroke={MAIN} strokeWidth={1} />
      <circle cx={6.2} cy={6.9} r={0.8} fill={MAIN} />
      <circle cx={9.8} cy={6.9} r={0.8} fill={MAIN} />
      <rect x={5} y={11.5} width={6} height={3} rx={1.2} fill="none" stroke={MAIN} strokeWidth={1.1} />
    </g>
  );
}

/* ---------- primitives ---------- */

function Pill({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#2c2353" stroke="#8b5cf6" strokeOpacity={0.5} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill="#f2effb" fontSize={11.5} fontWeight={600}>
        {label}
      </text>
    </g>
  );
}

function Card({
  x,
  y,
  w,
  h,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={14}
      fill="#1c1538"
      stroke={accent ? GOLD_BORDER : "#2c2353"}
      strokeWidth={accent ? 1.6 : 1}
    />
  );
}

function Body({
  x,
  y,
  w,
  h,
  children,
  size = 10.5,
  color = "#a99fc7",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: React.ReactNode;
  size?: number;
  color?: string;
}) {
  return (
    <foreignObject x={x} y={y} width={w} height={h}>
      <div
        // @ts-expect-error xmlns is required for foreignObject content
        xmlns="http://www.w3.org/1999/xhtml"
        style={{ color, fontSize: size, lineHeight: 1.4, fontFamily: "inherit" }}
      >
        {children}
      </div>
    </foreignObject>
  );
}

function Title({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fill="#f2effb" fontSize={13.5} fontWeight={700}>
      {children}
    </text>
  );
}

/* ---------- figure ---------- */

export function DeploymentTopology() {
  return (
    <figure className="rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-4 sm:p-6">
      <div className="-mx-1 overflow-x-auto">
        <svg
          viewBox="0 0 1080 720"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full min-w-[860px]"
        >
          <title>{figureTitle}</title>
          <defs>
            <marker id="dt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#a78bfa" />
            </marker>
            <marker id="dt-arrow-pink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={MAIN} />
            </marker>
            <marker id="dt-arrow-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={GRAY} />
            </marker>
          </defs>

          {/* boundary */}
          <rect x={16} y={34} width={1048} height={566} rx={18} fill="#16112b" stroke="#3f3566" strokeWidth={2} strokeDasharray="8 6" />
          <rect x={32} y={24} width={330} height={20} fill="#0d0a1a" />
          <text x={40} y={39} fill="#a99fc7" fontSize={11} fontWeight={700} letterSpacing={1.2}>
            YOUR ENVIRONMENT
          </text>
          <text x={186} y={39} fill="#a99fc7" fontSize={11}>
            No AppMap cloud data plane.
          </text>

          {/* ---------------- row 1 ---------------- */}

          {/* 1. developer workstation */}
          <Card x={32} y={70} w={400} h={250} />
          <Title x={48} y={94}>Developer workstation</Title>
          <text x={48} y={112} fill="#a99fc7" fontSize={10.5}>AppMap records and compares traces</text>

          <Pill x={48} y={124} w={112} h={26} label="IDE (extension)" />
          <line x1={160} y1={137} x2={174} y2={137} stroke="#a78bfa" strokeWidth={1.6} markerEnd="url(#dt-arrow)" />
          <Pill x={176} y={124} w={110} h={26} label="Language agent" />
          <line x1={286} y1={137} x2={300} y2={137} stroke="#a78bfa" strokeWidth={1.6} markerEnd="url(#dt-arrow)" />
          <Pill x={302} y={124} w={92} h={26} label="Local traces" />
          <line x1={348} y1={150} x2={348} y2={164} stroke="#a78bfa" strokeWidth={1.6} markerEnd="url(#dt-arrow)" />
          <Pill x={302} y={166} w={92} h={26} label="Query DB" />

          <Pill x={48} y={196} w={100} h={26} label="MCP server" />
          <line x1={152} y1={209} x2={286} y2={209} stroke="#a78bfa" strokeWidth={1.6} markerStart="url(#dt-arrow)" markerEnd="url(#dt-arrow)" />
          <Pill x={290} y={196} w={104} h={26} label="Coding agent" />
          <SmallBotSvg x={186} y={176} />
          <SmallBotSvg x={202} y={176} color="#f59e0b" />
          <text x={220} y={187} fill="#a99fc7" fontSize={10}>coding</text>

          <TraceChipSvg x={48} y={236} scale={0.8} border="#2c2353" bg="#0f0b1d" />
          <TraceChipSvg x={84} y={236} scale={0.8} border="#2c2353" bg="#0f0b1d" />
          <Body x={124} y={232} w={296} h={60}>
            <span style={{ fontFamily: "ui-monospace, monospace", color: MAIN }}>tmp/appmap</span> · working traces,
            recorded locally, queried over MCP
          </Body>

          {/* workstation -> repository */}
          <line x1={434} y1={182} x2={482} y2={182} stroke={MAIN} strokeWidth={1.8} markerEnd="url(#dt-arrow-pink)" />
          <text x={458} y={166} textAnchor="middle" fill="#ff8ad2" fontSize={9.5}>commit</text>
          <text x={458} y={176} textAnchor="middle" fill="#ff8ad2" fontSize={9.5}>key traces</text>

          {/* 2. repository */}
          <Card x={486} y={70} w={214} h={250} accent />
          <Title x={502} y={94}>Repository</Title>
          <text x={502} y={118} fill={MAIN} fontSize={12.5} fontFamily="ui-monospace, monospace" fontWeight={700}>
            gold_traces/
          </text>
          <GoldStackSvg x={502} y={132} count={5} />
          <Body x={500} y={182} w={186} h={40}>key traces, sanitized before commit</Body>
          <Body x={500} y={232} w={186} h={60}>versioned with the code, checkout delivers them</Body>

          {/* repository -> CI */}
          <line x1={702} y1={182} x2={748} y2={182} stroke={MAIN} strokeWidth={1.8} markerEnd="url(#dt-arrow-pink)" />
          <text x={725} y={172} textAnchor="middle" fill="#ff8ad2" fontSize={9.5}>checkout</text>

          {/* 3. CI */}
          <Card x={752} y={70} w={296} h={250} />
          <Title x={768} y={94}>CI</Title>
          <MonitorBotSvg x={768} y={104} size={15} />
          <text x={790} y={117} fill="#f2effb" fontSize={11.5} fontWeight={600}>appmap-review</text>
          <text x={768} y={135} fill="#a99fc7" fontSize={10.5}>monitoring with Gold Traces</text>

          <rect x={768} y={144} width={264} height={36} rx={10} fill="#2c2353" stroke="#8b5cf6" strokeOpacity={0.5} />
          <Body x={778} y={150} w={246} h={30} color="#f2effb" size={11}>
            AppMap review workflow (GitHub Action or CI job)
          </Body>

          <CompareGroupSvg x={768} y={192} />
          <text x={840} y={205} fill="#a99fc7" fontSize={10.5}>fresh vs gold</text>

          <Body x={768} y={226} w={132} h={36}>review posted to the pull request</Body>
          <line x1={904} y1={240} x2={934} y2={240} stroke="#a78bfa" strokeWidth={1.6} markerEnd="url(#dt-arrow)" />
          <Pill x={938} y={227} w={94} h={26} label="PR comment" />

          <Body x={768} y={272} w={264} h={36}>No outbound dependency on AppMap services</Body>

          {/* ---------------- row 2 ---------------- */}

          {/* 4. extensions */}
          <Card x={32} y={360} w={246} h={112} />
          <Title x={48} y={384}>Extensions</Title>
          <Body x={46} y={392} w={218} h={72}>
            packaged for internal distribution or installed from the VS Code and JetBrains enterprise marketplaces
          </Body>
          <path d="M 120 358 C 120 300, 104 250, 104 154" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />

          {/* 5. agents and CLI */}
          <Card x={292} y={360} w={246} h={112} />
          <Title x={308} y={384}>Agents and CLI</Title>
          <Body x={306} y={392} w={218} h={72}>
            pulled from your language package registries (RubyGems, PyPI, npm, Maven Central)
          </Body>
          <path d="M 360 358 C 360 300, 231 250, 231 154" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />

          {/* 6. organization configuration */}
          <Card x={552} y={360} w={246} h={112} />
          <Title x={568} y={384}>Organization configuration</Title>
          <text x={568} y={402} fill={MAIN} fontSize={11} fontFamily="ui-monospace, monospace" fontWeight={700}>
            APPMAP_CONFIG_URL
          </text>
          <Body x={566} y={408} w={218} h={62}>
            one endpoint configures every install
            <div>organization-registered installs, offline activation, internal distribution</div>
          </Body>
          <path d="M 600 358 C 540 352, 470 344, 424 326" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />
          <text x={512} y={348} textAnchor="middle" fill="#a99fc7" fontSize={9.5}>config</text>
          <path d="M 700 358 C 760 352, 812 344, 848 326" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />
          <text x={772} y={348} textAnchor="middle" fill="#a99fc7" fontSize={9.5}>config</text>

          {/* 7. internal observability */}
          <Card x={812} y={360} w={236} h={112} />
          <Title x={828} y={384}>Internal observability</Title>
          <Body x={826} y={392} w={208} h={72}>
            usage telemetry routed to your own stack (Splunk or similar), or disabled
          </Body>
          <path d="M 300 322 C 300 334, 700 328, 1010 330 L 1010 356" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />
          <text x={600} y={324} textAnchor="middle" fill="#a99fc7" fontSize={9.5}>telemetry</text>
          <path d="M 950 322 L 950 356" fill="none" stroke={GRAY} strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#dt-arrow-gray)" />
          <text x={926} y={344} textAnchor="end" fill="#a99fc7" fontSize={9.5}>telemetry</text>

          {/* ---------------- row 3 ---------------- */}
          <Card x={32} y={490} w={1016} h={80} />
          <Title x={48} y={518}>Self-hosted model endpoint</Title>
          <text x={48} y={538} fill="#a99fc7" fontSize={11}>the review and the agents use your model provider</text>
          <text x={48} y={557} fill="#f2effb" fontSize={11} fontWeight={700}>Bring your model. Keep your evidence.</text>

          {/* ---------------- outside the boundary ---------------- */}
          <path
            d="M 396 209 C 450 209, 458 246, 458 300 C 458 332, 400 346, 340 346 L 44 346 C 28 346, 24 358, 24 382 L 24 566 C 24 582, 36 584, 60 584 L 660 584 C 690 584, 690 604, 690 632"
            fill="none"
            stroke={GRAY}
            strokeWidth={1.5}
            strokeDasharray="5 4"
            markerEnd="url(#dt-arrow-gray)"
          />
          <rect x={700} y={624} width={348} height={84} rx={14} fill="#0d0a1a" stroke={GRAY} strokeWidth={1.5} strokeDasharray="6 5" />
          <text x={718} y={650} fill="#f2effb" fontSize={12.5} fontWeight={700}>Hosted coding agent (optional)</text>
          <text x={718} y={670} fill="#a99fc7" fontSize={10.5}>some context goes to that provider</text>
          <text x={718} y={688} fill="#a99fc7" fontSize={10.5}>provider&apos;s configuration and terms apply</text>
        </svg>
      </div>
      <figcaption className="mt-4 text-[13px] leading-[1.55] text-[#a99fc7]">{caption}</figcaption>
    </figure>
  );
}
