import { useEffect, useState } from "react";

const reviews = [
  {
    quote:
      "AppMap is really great for developing quick understanding of a new codebase. Its tracing functionality is absolutely super.",
    who: "Daniyal, JetBrains Marketplace",
  },
  {
    quote:
      "Just by using the extension once, I identified two unnecessary dependencies in my app.",
    who: "Hesbon, Python developer, VS Code Marketplace",
  },
  {
    quote:
      "Great tool to gain intel if you start working on a project already under development. I strongly recommend this to observe the request travel in your web app.",
    who: "Triyank Kumar, JetBrains Marketplace",
  },
  {
    quote:
      "Helped me better understand and analyze the hierarchy and structure of my applications. Looks awesome, performs great, and provides truly invaluable feedback.",
    who: "Max, Java developer, VS Code Marketplace",
  },
  {
    quote: "An awesome plugin for sequence diagrams.",
    who: "Shaun Wang, Java developer, JetBrains Marketplace",
  },
  {
    quote:
      "AppMap improves productivity on both fronts, coding and documentation. It has become an inseparable part of our development process.",
    who: "Venkat Bagam, Cognitive Zen",
  },
];

export function Reviews() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(reviews.length / 3);

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(id);
  }, [pages]);

  return (
    <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Developers already rely on it.
        </h2>
        <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
          Rated five stars by developers across the Visual Studio Code and JetBrains
          marketplaces, from a community of more than 100,000 developers.
        </p>

        <div className="mt-9 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pages }).map((_, p) => (
              <div
                key={p}
                className="grid w-full shrink-0 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {reviews.slice(p * 3, p * 3 + 3).map((r) => (
                  <div
                    key={r.who}
                    className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
                  >
                    <div className="text-[15px] tracking-[2px] text-[#fbbf24]">
                      ★★★★★
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.55] text-[#f2effb]">
                      "{r.quote}"
                    </p>
                    <div className="mt-4 text-[13px] font-semibold text-[#a99fc7]">
                      {r.who}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Show reviews page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 w-8 rounded-full transition ${
                i === page ? "bg-[#ff07aa]" : "bg-[#2c2353]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}