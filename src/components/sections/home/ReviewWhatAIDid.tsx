const items = [
  {
    title: "The call tree",
    body: "The request path the agent queried.",
    image: "/marketing-assets/img/appmap/call-tree.webp",
    alt: "AppMap call tree showing the request path through the application.",
  },
  {
    title: "The queries",
    body: "The exact SQL it ran, query by query.",
    image: "/marketing-assets/img/appmap/queries.jpg",
    alt: "AppMap view of the SQL queries executed during a request, shown as parameterized statements.",
  },
  {
    title: "The code objects",
    body: "Functions, classes, and queries exercised in the run.",
    image: "/marketing-assets/img/appmap/code-map.jpg",
    alt: "AppMap code map of functions, APIs, and objects exercised during a run.",
  },
];

export function ReviewWhatAIDid() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          One recording. See the system as it runs, before the change ships.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]">
          One recording gives developers and AI agents multiple ways to inspect a run while the work is still in progress: Dependency Map, Sequence Diagram, Trace View, Flame Graph, Code Objects, and SQL inspection. Recorded runtime behavior also supports generated OpenAPI definitions and diffs.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-6"
            >
              <img
                src={it.image}
                alt={it.alt}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full rounded-lg border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] object-cover"
              />
              <div className="mt-4 text-[13.5px] text-[color:var(--color-am-muted)]">
                <b className="block text-[15px] font-semibold text-[color:var(--color-am-ink)]">
                  {it.title}
                </b>
                {it.body}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[13.5px] text-[color:var(--color-am-muted)]">
          Three representative views. Explore the broader visual set in your editor before the change moves downstream.
        </p>
      </div>
    </section>
  );
}