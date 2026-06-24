const agents = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Windsurf",
  "Cline",
  "Google Antigravity",
  "Any MCP client",
];

export function HomeCompatibility() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Works with the agent you run today.
          <br />
          And the one you run next.
        </h2>
        <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
          AppMap speaks the Model Context Protocol. That is the open standard
          for feeding context to AI agents. It works with any model and any
          agent. No lock-in. No proprietary runtime.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {agents.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-[#2c2353] bg-[#1c1538] px-4 py-2 text-[14px] font-semibold text-[#f2effb]"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff07aa]"
                style={{ boxShadow: "0 0 10px #ff07aa" }}
              />
              {a}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-[720px] text-[14px] text-[#a99fc7]">
          Whoever runs the agent pays for the tokens. AppMap lowers that bill.
          It works for every model and every editor.
        </p>
      </div>
    </section>
  );
}