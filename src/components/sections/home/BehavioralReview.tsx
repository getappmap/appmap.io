import { MotionOrPoster } from "@/components/common/MotionOrPoster";

const panels = [
  {
    label: "PERFORMANCE",
    items: ["Slow requests", "N+1 queries", "Repeated SQL", "Expensive execution paths"],
  },
  {
    label: "SECURITY + CORRECTNESS",
    items: ["Auth gaps", "Exceptions", "Unsafe calls", "Unexpected side effects"],
  },
  {
    label: "BEHAVIORAL CHANGE",
    items: [
      "API changes",
      "Query changes",
      "New dependencies",
      "Unexpected drift from the AppMap Gold Traces",
    ],
  },
];

export function BehavioralReview() {
  return (
    <section className="border-b border-[#2c2353] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Find problems that only show up when the code runs.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]">
          Deep runtime evidence exposes failures in behavior, not just structure. See performance problems, security and correctness issues, and unexpected changes while the code is still in development.
        </p>

        <div className="mt-8">
          <MotionOrPoster
            src="/marketing-assets/video/sequence.mp4"
            poster="/marketing-assets/img/appmap/sequence.jpg"
            alt="AppMap sequence diagram of one request, showing the full call path from HTTP to database."
            width={1600}
            height={800}
            className="aspect-[16/8] w-full rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] object-cover shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          />
          <div className="mt-3 text-center text-[13px] text-[color:var(--color-am-muted)]">
            Sequence diagram view. Fully interactive in your editor. Each trace captures the full request path from HTTP to database.
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {panels.map((p) => (
            <div
              key={p.label}
              className="rounded-lg border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] px-4 py-3.5"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff07aa]">
                {p.label}
              </div>
              <ul className="mt-2.5 space-y-1">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[color:var(--color-am-line)]/60 pt-1 text-[14px] leading-[1.45] text-[color:var(--color-am-ink)] first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}