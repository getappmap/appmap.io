const steps = [
  {
    title: "Coding agent changes the code",
    body: "The coding agent makes the change.",
  },
  {
    title: "AppMap records fresh traces",
    body: "The coding agent runs the tests. AppMap records the behavior and shows the traces as maps.",
  },
  {
    title: "AppMap compares the behavior",
    body: "AppMap compares behavior in the changed revision with behavior in the base revision and reports what changed.",
  },
  {
    title: "The review is written into the pull request",
    body: "AppMap writes the review into the PR so reviewers see the code change and what it did when it ran.",
  },
];

export function ReviewStepStrip({ className = "" }: { className?: string }) {
  return (
    <ol className={`relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute left-[15px] top-4 bottom-4 w-px bg-[#2c2353] lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-auto"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 lg:block">
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff07aa] text-[15px] font-extrabold text-white">
            {i + 1}
          </span>
          <div className="min-w-0 lg:mt-4">
            <h3 className="text-[16px] font-bold text-[#f2effb]">{s.title}</h3>
            <p className="mt-2 text-[14.5px] text-[#a99fc7]">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
