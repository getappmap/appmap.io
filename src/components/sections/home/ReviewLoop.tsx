const steps = [
  {
    title: "AI writes the change",
    body: "You vibe-code it with your AI coding agent.",
  },
  {
    title: "AppMap records what it did",
    body: "It captures how the application behaves as the change runs.",
  },
  {
    title: "You review the behavior",
    body: "Not the diff. The runtime evidence of what the change actually does.",
  },
  {
    title: "Part of the pull request",
    body: "The behavioral model becomes part of the PR, so every reviewer understands the change before they approve.",
  },
];

export function ReviewLoop() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Stop reviewing code. Start reviewing behavior.
        </h2>
        <p className="mt-3 max-w-[680px] text-[17px] text-[color:var(--color-am-muted)]">
          In code review, developers inspect the diagrams and AI tools query the evidence from the same recorded run. The team reviews behavior, not just the diff.
        </p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-6 pt-9"
            >
              <span className="absolute -top-3.5 left-5 flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)] text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="text-[16px] font-bold text-[color:var(--color-am-ink)]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-[color:var(--color-am-muted)]">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl text-[20px] font-semibold text-[color:var(--color-am-ink)]">
          Every pull request explains itself.
        </p>
        <p className="mt-3 max-w-3xl text-[14px] text-[color:var(--color-am-muted)]">
          A pull request already carries code, comments, and CI checks. AppMap adds one more: behavioral evidence of what the change does.
        </p>
        <div className="mt-6 rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-5">
          <p className="text-[14px] leading-[1.55] text-[color:var(--color-am-muted)]">
            For AI-generated software, governance needs evidence outside the AI's own reasoning. AppMap provides it: independent runtime evidence observed from the running system. The agent can explain the evidence; it does not create it.
          </p>
        </div>
      </div>
    </section>
  );
}