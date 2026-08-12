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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--color-am-line)] bg-white/95 shadow-lg">
            <img
              src="/marketing-assets/review/pr-review-summary.png"
              alt="AppMap Behavioral Review comment on a GitHub pull request showing a severity summary table with zero high findings, one medium finding, and zero low findings"
              loading="lazy"
              width={1170}
              height={610}
              className="block w-full"
            />
            <figcaption className="border-t border-black/10 bg-[color:var(--color-am-card)] px-5 py-4 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
              A real AppMap Behavioral Review on a pull request: the one-line diff touched a single DAO, but the runtime traces showed the new ordering leaking into search endpoints the diff never touched.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--color-am-line)] bg-white/95 shadow-lg">
            <img
              src="/marketing-assets/review/pr-checks-table.png"
              alt="Checks performed table from an AppMap Behavioral Review listing behavioral compare, changes outside the pull request scope, missing guards, test and recording coverage, SQL, HTTP, and intended changes verified"
              loading="lazy"
              width={1088}
              height={718}
              className="block w-full"
            />
            <figcaption className="border-t border-black/10 bg-[color:var(--color-am-card)] px-5 py-4 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
              Every review reports the checks performed: behavioral compare, scope, guards, coverage, SQL, and HTTP, backed by AppMap Gold Traces.
            </figcaption>
          </figure>
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
