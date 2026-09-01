import logo from "@/assets/images/appmap-logo.svg";
import { Link } from "@tanstack/react-router";
import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";

// `external` marks same-domain paths served by the legacy Jekyll site via the
// Worker proxy fallback — they must render as plain <a>, not router <Link>.
const cols: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Gold Traces", href: "/gold-traces" },
      { label: "Benchmarks", href: "/benchmarks" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Docs", href: "/docs/appmap-docs", external: true },
      { label: "GitHub", href: "https://github.com/getappmap" },
      { label: "VS Code", href: VSCODE_INSTALL_URL },
      { label: "JetBrains", href: JETBRAINS_INSTALL_URL },
    ],
  },
  {
    heading: "Enterprise",
    links: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Architecture", href: "/architecture" },
      { label: "Security FAQ", href: "/security-faq" },
      { label: "Contact", href: "mailto:sales@appmap.io" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog", external: true },
      { label: "Release Notes", href: "/release-notes" },
      {
        label: "Code of Conduct",
        href: "https://appmap.io/community/code-of-conduct",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#2c2353] bg-[#0d0a1a] px-6 pt-12 pb-16 text-sm text-[#a99fc7]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="AppMap" className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed">
            Runtime evidence for AI-assisted development.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.6px] text-[#f2effb]">
              {col.heading}
            </h4>
            {col.links.map((l) =>
              l.external || l.href.startsWith("http") || l.href.startsWith("mailto:") ? (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block py-1.5 text-[#a99fc7] transition-colors hover:text-[#ff07aa]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href as never}
                  className="block py-1.5 text-[#a99fc7] transition-colors hover:text-[#ff07aa]"
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[1120px] flex-col gap-3 border-t border-[#2c2353] pt-6 text-[12.5px] text-[#7c8aa6] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>© {new Date().getFullYear()} AppLand, Inc. All rights reserved.</p>
          <p className="mt-1">AppLand and AppMap are registered trademarks of AppLand, Inc.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href="https://appmap.io/community/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#a99fc7]"
          >
            Privacy
          </a>
          <a
            href="https://appmap.io/community/terms-and-conditions.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#a99fc7]"
          >
            Terms
          </a>
          <a
            href="mailto:info@appmap.io?subject=Security%20disclosure"
            className="transition-colors hover:text-[#a99fc7]"
          >
            Report a security issue
          </a>
        </nav>
      </div>
    </footer>
  );
}
