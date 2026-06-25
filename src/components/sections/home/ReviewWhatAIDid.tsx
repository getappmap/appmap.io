import { Em } from "@/components/common/Em";

const items = [
  {
    title: "The call tree",
    body: "The request path the agent queried.",
  },
  {
    title: "The queries",
    body: "The SQL it ran, with the data.",
  },
  {
    title: "The metadata",
    body: "Functions, APIs, and objects in the run.",
  },
];

export function ReviewWhatAIDid() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Review what your AI <Em>actually did</Em>.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]">
          AppMap shows the change as evidence you can read: the call tree, the queries, the data. Approve it with confidence, or catch where it went wrong, without reverse-engineering the diff.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-6"
            >
              <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg)] text-[12px] text-[color:var(--color-am-muted)]">
                {it.title} preview
              </div>
              <div className="mt-4 text-[13.5px] text-[color:var(--color-am-muted)]">
                <b className="block text-[15px] font-semibold text-[color:var(--color-am-ink)]">
                  {it.title}
                </b>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}