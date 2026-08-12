const steps = [
  {
    title: "AI writes the change",
    body: "You build it with your AI coding agent.",
  },
  {
    title: "AppMap records and visualizes the run",
    body: "Sequence diagrams, Trace View, queries, dependencies, and other AppMap views show what the changed software actually did.",
  },
  {
    title: "AppMap Gold Traces check the behavior",
    body: "Compare the new run with a trusted baseline to see what held, what changed, and whether the change behaved as intended.",
  },
  {
    title: "The review is written into the pull request",
    body: "The AppMap Gold Trace review skill writes the runtime-backed result into the PR so reviewers see what changed in behavior, not just in code.",
  },
];

const panels = [
  {
    chip: "2",
    image: "/marketing-assets/img/appmap/sequence.jpg",
    alt: "AppMap sequence diagram of a recorded run showing calls between components over time",
    caption: "The recorded run, visualized.",
    minW: false,
  },
  {
    chip: "3-4",
    image: "/marketing-assets/review/pr-review-summary.png",
    alt: "AppMap Behavioral Review comment on a GitHub pull request showing a severity summary table with zero high findings, one medium finding, and zero low findings",
    caption:
      "A real AppMap Behavioral Review on a pull request: the one-line diff touched a single DAO, but the runtime traces showed the new ordering leaking into search endpoints the diff never touched.",
    minW: true,
  },
  {
    chip: "4",
    image: "/marketing-assets/review/pr-checks-table.png",
    alt: "Checks performed table from an AppMap Behavioral Review listing behavioral compare, changes outside the pull request scope, missing guards, test and recording coverage, SQL, HTTP, and intended changes verified",
    caption:
      "Every review reports the checks performed: behavioral compare, scope, guards, coverage, SQL, and HTTP, backed by AppMap Gold Traces.",
    minW: true,
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
          AppMap turns a recorded run into diagrams developers can inspect and structured runtime evidence AI tools can query. AppMap Gold Traces compare the change against trusted behavior, and the review result can be written directly into the pull request.
        </p>

        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[15px] top-4 bottom-4 w-px bg-[color:var(--color-am-line)] lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-auto"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)] text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 lg:mt-4">
                <h3 className="text-[16px] font-bold text-[color:var(--color-am-ink)]">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-[color:var(--color-am-muted)]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {panels.map((p) => (
            <figure
              key={p.chip + p.image}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-am-line)] bg-white/95 shadow-lg"
            >
              <span className="absolute left-3 top-3 z-10 flex h-7 min-w-7 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)] px-2 text-[13px] font-extrabold text-white">
                {p.chip}
              </span>
              <div className="h-[260px] overflow-x-auto">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className={`block h-[260px] w-full object-cover object-top ${p.minW ? "min-w-[720px] lg:min-w-0" : ""}`}
                />
              </div>
              <figcaption className="line-clamp-3 flex-1 border-t border-black/10 bg-[color:var(--color-am-card)] px-5 py-4 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-[20px] font-semibold text-[color:var(--color-am-ink)]">
          Every pull request explains itself.
        </p>
        <p className="mt-3 max-w-3xl text-[14px] text-[color:var(--color-am-muted)]">
          A pull request should show more than what code changed. AppMap adds visual runtime evidence and a behavioral write-up: what ran, what changed, and whether the result still matches the AppMap Gold Trace.
        </p>
        <div className="mt-6 rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-5">
          <p className="text-[14px] leading-[1.55] text-[color:var(--color-am-muted)]">
            Developers can inspect the diagrams. AI tools can query the underlying recording. The pull request carries the resulting behavioral review. The evidence comes from the running application, not from the AI evaluating its own work.
          </p>
        </div>
      </div>
    </section>
  );
}
