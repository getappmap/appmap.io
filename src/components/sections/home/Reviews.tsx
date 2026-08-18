const reviews = [
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

function ReviewCard({ quote, who }: { quote: string; who: string }) {
  return (
    <div className="w-[420px] shrink-0 snap-start rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
      <div className="text-[15px] tracking-[2px] text-[#fbbf24]">★★★★★</div>
      <p className="mt-3 text-[15px] leading-[1.55] text-[#f2effb]">"{quote}"</p>
      <div className="mt-4 text-[13px] font-semibold text-[#a99fc7]">{who}</div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          What developers say about AppMap
        </h2>
        <p className="mt-3 max-w-[720px] text-[16px] text-[#a99fc7]">
          Rated five stars by developers across the Visual Studio Code and JetBrains
          marketplaces, from a community of more than 100,000 developers.
        </p>

        <div className="marquee-scroll relative mt-9 overflow-hidden [@media(prefers-reduced-motion:reduce)]:overflow-x-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#16112b] to-transparent [@media(prefers-reduced-motion:reduce)]:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#16112b] to-transparent [@media(prefers-reduced-motion:reduce)]:hidden" />

          <div className="marquee-track flex w-max gap-5 hover:[animation-play-state:paused] [@media(prefers-reduced-motion:reduce)]:w-auto [@media(prefers-reduced-motion:reduce)]:animate-none">
            {reviews.map((r) => (
              <ReviewCard key={r.who} quote={r.quote} who={r.who} />
            ))}
            <div aria-hidden="true" tabIndex={-1} className="flex gap-5">
              {reviews.map((r) => (
                <ReviewCard key={`dup-${r.who}`} quote={r.quote} who={r.who} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
