type Src = { label: string; href: string };

const cells: { n: string; l: string; sources?: Src[] }[] = [
  {
    n: "~140K",
    l: "editor installs",
    sources: [
      { label: "VS Code", href: "https://marketplace.visualstudio.com/items?itemName=appland.appmap" },
      { label: "JetBrains", href: "https://plugins.jetbrains.com/plugin/16701-appmap-free-ai-architect" },
    ],
  },
  { n: "100K+", l: "developer community" },
  {
    n: "2020",
    l: "open source since",
    sources: [{ label: "GitHub", href: "https://github.com/getappmap" }],
  },
];

export function TrustBar() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-8 text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Developers trust AppMap
        </h2>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#2c2353] bg-[#2c2353] sm:grid-cols-3">
          {cells.map((c) => (
            <div key={c.l} className="bg-[#16112b] p-6 text-center">
              <div className="text-[28px] font-extrabold text-[#f2effb]">{c.n}</div>
              <div className="mt-1 text-[13px] text-[#a99fc7]">{c.l}</div>
              {c.sources && (
                <div className="mt-2 flex items-center justify-center gap-3 text-[12px] text-[#a99fc7]">
                  {c.sources.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-colors hover:text-[#ff07aa]"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}