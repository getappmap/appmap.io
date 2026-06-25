const features = [
  {
    title: "Runtime code review",
    body: "A full-spectrum review of your branch against how the code actually ran. Correctness, security, performance, and more.",
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
    title: "Review evidence",
    body: "The behavioral model travels with the pull request, so every reviewer sees what the change does.",
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
          Behavioral review.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]">
          Every AppMap view is evidence of what the change did. Review the behavior across correctness, security, performance, and architecture, all from how the code actually ran.
        </p>

        <div className="mt-8">
          <video
            className="aspect-[16/8] w-full rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/video/sequence_04.webm" type="video/webm" />
            <source src="/assets/video/sequence_04b.mp4" type="video/mp4" />
          </video>
          <div className="mt-3 text-center text-[13px] text-[color:var(--color-am-muted)]">
            Sequence diagram view, fully interactive. One recording, the full request path from HTTP to database.
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