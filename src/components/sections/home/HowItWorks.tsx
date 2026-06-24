const steps = [
  {
    title: "Record",
    body: "AppMap attaches at runtime and captures real execution as your app or tests run. No instrumentation code. No SDK calls.",
  },
  {
    title: "Serve",
    body: "The AppMap MCP server exposes the trace as a few high-density queries. Call tree, calls, queries, requests.",
  },
  {
    title: "Reason",
    body: "Your agent queries the trace instead of guessing from source. It runs faster and cheaper, on what the code really did.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Three steps. No code changes.
        </h2>
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 pt-9"
            >
              <span className="absolute -top-3.5 left-5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff07aa] text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="text-[17px] font-bold text-[#f2effb]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-[#a99fc7]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}