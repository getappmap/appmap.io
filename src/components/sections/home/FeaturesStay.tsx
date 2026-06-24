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
    title: "Security and performance checks",
    body: "Slow queries, auth gaps, leaked secrets, and unsafe calls, surfaced from the real run.",
  },
  {
    title: "OpenAPI diffs",
    body: "Behavior changes show up as a concrete delta between auto-generated API definitions.",
  },
  {
    title: "Test failure diffs",
    body: "A failing test renders as a sequence-diagram diff, so the change is easy to read.",
  },
  {
    title: "One trace, every view",
    body: "Record once. Review, diagram, query, and feed an agent from the same data.",
  },
];

export function FeaturesStay() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          More than context. The full runtime picture.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">
          The same runtime data that grounds your agent also powers AppMap's
          own review and visualization features. These features stay. The AI
          layer is what changed. It moved from a built-in assistant to the
          native coding agent you already use.
        </p>

        <div className="mt-8">
          <video
            className="block w-full rounded-xl border border-[#2c2353] bg-[#16112b] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            autoPlay
            loop
            muted
            playsInline
            poster="https://appmap.io/assets/img/product/follow-request-flows-sequence.jpg"
          >
            <source
              src="https://appmap.io/assets/video/sequence_04.webm"
              type="video/webm"
            />
          </video>
          <div className="mt-3 text-center text-[13px] text-[#a99fc7]">
            Sequence diagram view, fully interactive. One recording, the full
            request path from HTTP to database.
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff07aa]/15 text-[#ff07aa]">
                <span className="h-2.5 w-2.5 rounded-sm bg-current" />
              </div>
              <h3 className="text-[17px] font-bold text-[#f2effb]">{f.title}</h3>
              <p className="mt-2 text-[14.5px] text-[#a99fc7]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}