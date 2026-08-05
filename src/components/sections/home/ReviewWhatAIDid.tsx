import { Em } from "@/components/common/Em";

const items = [
  {
    title: "The call tree",
    body: "The request path the agent queried.",
    image: "/marketing-assets/img/appmap/call-tree.webp",
    alt: "AppMap call tree showing the request path through the application.",
  },
  {
    title: "The queries",
    body: "The SQL it ran, with the data.",
    image: "/marketing-assets/img/appmap/queries.jpg",
    alt: "AppMap view of the SQL queries executed during a request, with bindings.",
  },
  {
    title: "The metadata",
    body: "Functions, APIs, and objects in the run.",
    image: "/marketing-assets/img/appmap/code-map.jpg",
    alt: "AppMap code map of functions, APIs, and objects exercised during a run.",
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
          AppMap shows the change as evidence you can read: the call tree, the queries, the data. Approve it with confidence, or catch where it went wrong.
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
      </div>
    </section>
  );
}