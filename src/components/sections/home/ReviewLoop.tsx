import type { ReactNode } from "react";

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
    body: "AppMap writes the review into the PR so reviewers see what changed in behavior, not just in code.",
  },
];

const panels = [
  {
    chip: "2-3",
    image: "/marketing-assets/review/trace-diff-diagram.png",
    alt: "Sequence diagram of a client request flowing through JWTAuthFilter, ActorService, ActorDao, and Postgres, with the changed order-by query highlighted in amber",
    caption: "The trace as a sequence diagram. The amber call changed between the base revision and the head revision.",
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
          AppMap records how the application behaves and compares that behavior across revisions. As the code changes, AppMap records fresh traces and shows what held and what changed. Developers inspect the diagrams. Coding agents query the same traces. The review can go straight to the pull request.
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

        <div className="mt-6 flex w-full justify-center">
          {panels.map((p) => (
            <div key={p.chip + p.image} className="relative w-full min-w-0 max-w-[720px]">
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
          A pull request should show more than what code changed. AppMap adds visual runtime evidence and a behavioral write-up: what ran, what changed, and whether the change behaved as intended.
        </p>
        <div className="mt-6 rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-4">
          <p className="text-[14px] leading-[1.55] text-[color:var(--color-am-muted)]">
            Developers can inspect the diagrams. Coding agents can query the same traces. The pull request carries the resulting behavioral review. The evidence comes from the running application, not from the AI evaluating its own work.
          </p>
        </div>
      </div>
    </section>
  );
}
