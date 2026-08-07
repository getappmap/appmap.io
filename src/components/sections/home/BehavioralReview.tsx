import { MotionOrPoster } from "@/components/common/MotionOrPoster";

const features = [
  {
    title: "Runtime code review",
    body: "A review of your branch against how the code actually ran. Correctness, security, performance, and more.",
  },
  {
    title: "Visualizations",
    body: "Sequence diagrams, dependency maps, flame graphs, and a navigable code map from one recording.",
  },
  {
    title: "Security and performance",
    body: "Slow queries, auth gaps, leaked secrets, and unsafe calls, surfaced from the real run.",
  },
  {
    title: "OpenAPI diffs",
    body: "Behavior changes show up as a concrete delta between auto-generated API definitions.",
  },
  {
    title: "Golden AppMap trace review",
    body: "Promote an AppMap recording into a versioned baseline. AppMap compares before and after, so every reviewer sees whether behavior held or changed as intended.",
  },
  {
    title: "One trace, every view",
    body: "Record once. Review, diagram, query, and feed an agent from the same data.",
  },
];

export function BehavioralReview() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          What runtime evidence can reveal.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]">
          Every AppMap view is evidence of what the change did. Review the behavior across correctness, security, performance, and architecture, all from how the code actually ran.
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
            Sequence diagram view. Fully interactive in your editor. One recording, the full request path from HTTP to database.
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-6"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)]/15 text-[color:var(--color-am-brand)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-current" />
              </div>
              <h3 className="text-[17px] font-bold text-[color:var(--color-am-ink)]">{f.title}</h3>
              <p className="mt-2 text-[14.5px] text-[color:var(--color-am-muted)]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}