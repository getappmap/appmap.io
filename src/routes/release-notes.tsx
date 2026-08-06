import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const releaseGroups: { month: string; entries: { label: string; href: string }[] }[] = [
  {
    month: "August 2026",
    entries: [
      {
        label:
          "appmap.io relaunched: new positioning, homepage, how-it-works, enterprise, and pricing pages",
        href: "https://github.com/siteforward-ai/appmap.io",
      },
      {
        label: "Review skill output refined: interpreted findings in the sticky PR comment",
        href: "https://github.com/getappmap/review-action",
      },
    ],
  },
  {
    month: "July 2026",
    entries: [
      {
        label:
          "AppMap MCP server: agents query recordings with get_call_tree, find_calls, find_queries, and find_requests",
        href: "https://appmap.io/docs/reference/appmap-mcp.html",
      },
      {
        label:
          "Four AppMap skills published: appmap-record, appmap-label, appmap-gold-traces, appmap-review",
        href: "https://github.com/getappmap/skills",
      },
      {
        label:
          "review-action released: runs the skills in CI on pull requests, posts results as a sticky PR comment and job summary, supports Claude Code and GitHub Copilot CLI",
        href: "https://github.com/getappmap/review-action",
      },
      {
        label:
          "Baseline workflow: blessed Golden AppMap trace baselines and agent-added labels commit to the PR branch",
        href: "https://github.com/getappmap/review-action",
      },
    ],
  },
  {
    month: "June 2026",
    entries: [
      {
        label:
          "Golden AppMap trace review workflow: promote a recording to a baseline, compare before and after on every change",
        href: "https://github.com/getappmap/skills",
      },
      {
        label:
          "Label configuration guidance in the appmap-label skill: security.authentication, security.authorization, log, secret, crypto, dao",
        href: "https://github.com/getappmap/skills",
      },
    ],
  },
  {
    month: "Spring 2026",
    entries: [
      {
        label: "Active development resumed across the language agents and appmap-js",
        href: "https://github.com/getappmap",
      },
      {
        label:
          "Scanner rule maintenance: 25+ heuristic rules for security, performance, architecture, and data integrity",
        href: "https://github.com/getappmap/appmap-js/tree/main/packages/scanner",
      },
    ],
  },
];

const title = "Release Notes";
const description =
  "What AppMap has shipped, most recent first. Everything links to public code.";

export const Route = createFileRoute("/release-notes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://appmap.io/release-notes" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/release-notes" }],
  }),
  component: ReleaseNotesPage,
});

function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Changelog
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Release Notes
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.6] text-[#a99fc7]">
              What we&apos;ve shipped, most recent first. Everything links to public code.
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px] space-y-12">
            {releaseGroups.map((group) => (
              <div key={group.month}>
                <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
                  {group.month}
                </h2>
                <ul className="mt-5 divide-y divide-[#2c2353] rounded-2xl border border-[#2c2353] bg-[#1c1538]">
                  {group.entries.map((entry) => (
                    <li key={`${group.month}-${entry.label}`}>
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-4 text-[15px] leading-[1.6] text-[#a99fc7] transition-colors hover:text-[#ff07aa]"
                      >
                        {entry.label}{" "}
                        <span aria-hidden="true" className="text-[#ff07aa]">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}