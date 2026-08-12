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

const fullWidth = {
  chip: "2-3",
  image: "/marketing-assets/review/trace-highlight.png",
  alt: "AppMap behavioral diff showing the actor search call highlighted in amber against the dimmed baseline trace, with the SQL order-by change calculated above",
  caption: "The recording, compared against the AppMap Gold Trace baseline. The one changed call is highlighted.",
};

const rowPanels = [
  {
    chip: "4",
    image: "/marketing-assets/review/pr-review-summary.png",
    alt: "AppMap Behavioral Review comment on a GitHub pull request showing a severity summary table with zero high findings, one medium finding, and zero low findings",
    caption:
      "A real AppMap Behavioral Review on a pull request. The traces caught a behavior change the diff never showed.",
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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -top-3 -left-3 z-10 flex h-7 min-w-7 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)] px-2 text-[13px] font-extrabold text-white shadow-md">
      {children}
    </span>
  );
}

export function ReviewLoop() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-16">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Stop reviewing code. Start reviewing behavior.
        </h2>
        <p className="mt-3 max-w-[680px] text-[17px] text-[color:var(--color-am-muted)]">
          AppMap turns a recorded run into diagrams developers can inspect and structured runtime evidence AI tools can query. AppMap Gold Traces compare the change against trusted behavior, and the review result can be written directly into the pull request.
        </p>

        <ol className="relative mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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

        <div className="relative mx-auto mt-8 max-w-[820px]">
          <Chip>{fullWidth.chip}</Chip>
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--color-am-line)]">
            <div className="overflow-x-auto">
              <a
                href={fullWidth.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={fullWidth.image}
                  alt={fullWidth.alt}
                  loading="lazy"
                  className="block h-auto w-full min-w-[720px] lg:min-w-0"
                />
              </a>
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] px-5 py-4 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
              <span>{fullWidth.caption}</span>
              <a
                href={fullWidth.image}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[12px] font-medium text-[color:var(--color-am-brand)] hover:underline"
              >
                View full size
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
          {rowPanels.map((p) => (
            <div key={p.chip + p.image} className="relative">
              <Chip>{p.chip}</Chip>
              <figure className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-am-line)] bg-white/95 shadow-lg">
                <div className="h-[190px] overflow-hidden overflow-x-auto">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className={`block h-[190px] w-full object-cover object-top ${p.minW ? "min-w-[720px] lg:min-w-0" : ""}`}
                  />
                </div>
                <figcaption className="line-clamp-2 flex-1 border-t border-black/10 bg-[color:var(--color-am-card)] px-4 py-3 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
                  {p.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[20px] font-semibold text-[color:var(--color-am-ink)]">
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
