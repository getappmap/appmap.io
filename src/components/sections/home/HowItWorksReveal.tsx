import { Link } from "@tanstack/react-router";

const spokes = [
  "Dependency map",
  "Call tree",
  "Sequence diagram",
  "Your AI agent",
  "Runtime review",
  "CI",
];

export function HowItWorksReveal() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
            The reason this works is simple.
          </h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[color:var(--color-am-muted)]">
            AppMap captures a real application run as a structured recording. Developers explore it through diagrams and traces. AI tools query the same runtime evidence.
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
          <svg
            viewBox="0 0 480 360"
            role="img"
            aria-label="Hub-and-spoke diagram. A central AppMap recording connects to six uses: Dependency map, Call tree, Sequence diagram, Your AI agent, Runtime review, and CI."
            className="w-full"
          >
            {spokes.map((_, i) => {
              const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 240 + Math.cos(angle) * 160;
              const y = 180 + Math.sin(angle) * 130;
              return (
                <line
                  key={i}
                  x1={240}
                  y1={180}
                  x2={x}
                  y2={y}
                  stroke="var(--color-am-line)"
                  strokeWidth={1.5}
                />
              );
            })}
            {spokes.map((label, i) => {
              const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 240 + Math.cos(angle) * 160;
              const y = 180 + Math.sin(angle) * 130;
              return (
                <g key={label}>
                  <rect
                    x={x - 64}
                    y={y - 18}
                    width={128}
                    height={36}
                    rx={8}
                    fill="var(--color-am-card)"
                    stroke="var(--color-am-line)"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fontSize={13}
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    fill="var(--color-am-violet-l)"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
            <circle cx={240} cy={180} r={62} fill="#ff07aa" />
            <circle cx={240} cy={180} r={62} fill="none" stroke="#ff07aa" strokeOpacity={0.25} strokeWidth={14} />
            <text x={240} y={176} textAnchor="middle" fontSize={14} fontWeight={700} fill="#ffffff">AppMap</text>
            <text x={240} y={194} textAnchor="middle" fontSize={14} fontWeight={700} fill="#ffffff">recording</text>
          </svg>
          <p className="mt-3 text-center text-[13px] text-[color:var(--color-am-muted)]">
            One recording. Developer views and AI queries draw from the same runtime evidence.
          </p>
        </div>
      </div>
    </section>
  );
}