const items = [
  {
    img: "https://appmap.io/assets/img/docs/trace-is-fully-interactive.webp",
    title: "The call tree",
    body: "The request path the agent queried.",
    alt: "The call tree the agent read",
  },
  {
    img: "https://appmap.io/assets/img/product/inspect-database-queries.jpg",
    title: "The queries",
    body: "The SQL it ran, with the data.",
    alt: "The SQL the agent saw",
  },
  {
    img: "https://appmap.io/assets/img/docs/dependency-map-overview.webp",
    title: "The metadata",
    body: "Functions, APIs, and objects in the run.",
    alt: "The dependency map metadata the agent used",
  },
];

export function WhatYourAgentSaw() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          See exactly what your agent saw.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">
          Here is what is in it for you. When the agent makes a change, AppMap
          shows you the runtime context it used, as pictures. The call tree,
          the queries, the live data. Trust the change, or catch where the
          agent went wrong, without re-reading the diff.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="overflow-hidden rounded-xl border border-[#2c2353] bg-[#1c1538]"
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="block w-full bg-[#0d0a1a]"
              />
              <div className="p-4 text-[13.5px] text-[#a99fc7]">
                <b className="block text-[15px] font-semibold text-[#f2effb]">
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