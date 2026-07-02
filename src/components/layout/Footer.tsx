import logo from "@/assets/images/appmap-logo.svg";

const cols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Architecture", href: "/architecture" },
      { label: "Benchmarks", href: "/benchmarks" },
      { label: "Compatibility", href: "/compatibility" },
      { label: "Security FAQ", href: "/enterprise" },
    ],
  },
  {
    heading: "Docs",
    links: [
      { label: "Get Started", href: "https://appmap.io/docs/appmap-docs.html" },
      { label: "Reference", href: "https://appmap.io/docs/appmap-docs.html" },
      { label: "Troubleshooting", href: "https://appmap.io/docs/appmap-docs.html" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "https://meetings.hubspot.com/dustin294" },
      { label: "GitHub", href: "https://github.com/getappmap" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#2c2353] bg-[#0d0a1a] px-6 pt-12 pb-16 text-sm text-[#a99fc7]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="AppMap" className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed">
            Understand AI-generated code before you trust it.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.6px] text-[#f2effb]">
              {col.heading}
            </h4>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block py-1.5 text-[#a99fc7] transition-colors hover:text-[#ff07aa]"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-[1120px] border-t border-[#2c2353] pt-6 text-[12.5px] text-[#7c8aa6]">
        © {new Date().getFullYear()} AppMap, Inc. All rights reserved.
      </div>
    </footer>
  );
}