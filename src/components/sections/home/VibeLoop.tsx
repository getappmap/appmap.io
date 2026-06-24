const steps = [
  {
    title: "You vibe-code a change",
    body: "with your AI coding agent.",
  },
  {
    title: "AppMap reviews the behavior",
    body: "the change actually produced at runtime, not the diff.",
  },
  {
    title: "You see it as a map",
    body: "The dependency map, the sequence diagram, the call tree.",
  },
  {
    title: "The tests stay",
    body: "The few tests AppMap wrote to capture that behavior become part of your suite.",
  },
];

export function VibeLoop() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Built for the way you code now.
        </h2>
        <p className="mt-3 max-w-[680px] text-[17px] text-[#a99fc7]">
          You let the AI write the change. AppMap shows you what it actually did.
        </p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 pt-9"
            >
              <span className="absolute -top-3.5 left-5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff07aa] text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="text-[16px] font-bold text-[#f2effb]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-[#a99fc7]">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl text-[16px] text-[#f2effb]">
          Every loop leaves your codebase better tested than it found it.
          Onboarding happens once. Self-reflection happens every day.
        </p>
        <p className="mt-3 max-w-3xl text-[13.5px] text-[#a99fc7]">
          Those same tests produce the recordings your agent reads over MCP.
          Better tests are the engine, not a side effect.
        </p>
      </div>
    </section>
  );
}