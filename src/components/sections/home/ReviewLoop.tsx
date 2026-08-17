import type { ReactNode } from "react";

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
    title: "The change is compared against AppMap Gold Traces",
    body: "Compare the new run with a trusted baseline to see what held, what changed, and whether the change behaved as intended.",
  },
  {
    title: "The review is written into the pull request",
    body: "The AppMap Gold Trace review skill writes the runtime-backed result into the PR so reviewers see what changed in behavior, not just in code.",
  },
];

const panels = [
  {
    chip: "2-3",
    image: "/marketing-assets/review/trace-diff-diagram.png",
    alt: "Sequence diagram of a client request flowing through JWTAuthFilter, ActorService, ActorDao, and Postgres, with the changed order-by query highlighted in amber",
    caption: "The recorded run as a sequence diagram. The amber call is the one that changed against the AppMap Gold Trace baseline.",
    link: {
      href: "/marketing-assets/review/trace-highlight.png",
      label: "View the full trace",
    },
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
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-12">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Stop reviewing code. Start reviewing behavior.
        </h2>
        <p className="mt-2 max-w-[680px] text-[17px] text-[color:var(--color-am-muted)]">
          AppMap maintains a representative Gold Trace set for important application paths. As the code changes, AppMap records fresh traces and compares them with the base revision. The Gold Traces skill uses existing tests where possible and suggests new tests when an important path is not covered. AppMap turns the traces into diagrams developers can inspect and structured runtime evidence AI tools can query, and the review result can be written directly into the pull request.
        </p>

        <ol className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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

        <div className="mt-6 grid w-full items-start gap-5 lg:grid-cols-2">
          {panels.map((p) => (
            <div key={p.chip + p.image} className="relative w-full min-w-0">
              <Chip>{p.chip}</Chip>
              <figure className="flex w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-am-line)] bg-white/95 shadow-lg">
                <a
                  href={p.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </a>
                <figcaption className="flex min-h-[4.5rem] items-center justify-between gap-4 border-t border-black/10 bg-[color:var(--color-am-card)] px-4 py-3 text-[13px] leading-[1.55] text-[color:var(--color-am-muted)]">
                  <span className="line-clamp-2">{p.caption}</span>
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[12px] font-medium text-[color:var(--color-am-brand)] hover:underline"
                  >
                    {p.link.label}
                  </a>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-3xl text-[20px] font-semibold text-[color:var(--color-am-ink)]">
          Every pull request explains itself.
        </p>
        <p className="mt-3 max-w-3xl text-[14px] text-[color:var(--color-am-muted)]">
          A pull request should show more than what code changed. AppMap adds visual runtime evidence and a behavioral write-up: what ran, what changed, and whether the result still matches the AppMap Gold Trace baseline.
        </p>
        <div className="mt-6 rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-4">
          <p className="text-[14px] leading-[1.55] text-[color:var(--color-am-muted)]">
            Developers can inspect the diagrams. AI tools can query the underlying traces. The pull request carries the resulting behavioral review. The evidence comes from the running application, not from the AI evaluating its own work.
          </p>
        </div>
        <p className="mt-6 text-center text-[13px] text-[color:var(--color-am-muted)]">
          Change the code. Record the traces. Compare. Repeat.
        </p>
      </div>
    </section>
  );
}
