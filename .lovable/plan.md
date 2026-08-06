# Add Release Notes page and footer link

## What we're building

A new page at `/release-notes` listing AppMap's shipped work, most recent
first, each entry linking to public code in a new tab. Plus a footer link so
the page is discoverable.

## Changes

### 1. New file `src/routes/release-notes.tsx`

Follows the existing route pattern (matching `security-faq.tsx`): full-page
wrapper, `<Header />`, `<main>`, dark palette tokens (`#0d0a1a`, `#f2effb`,
`#ff07aa`, `#2c2353`, `#a99fc7`, `#16112b`), no em-dashes, no banned terms.

- **Head metadata** (in `head()`):
  - `title`: "Release Notes"
  - `description`: "What AppMap has shipped, most recent first. Everything links to public code."
  - `og:title`, `og:description`, `og:url: /release-notes`, `og:image: /marketing-assets/og/og-card.png` (1200x630), `twitter:card: summary_large_image`, `twitter:image`
  - `canonical: /release-notes`
- **H1**: "Release Notes"
- **Intro line**: "What we've shipped, most recent first. Everything links to public code."
- **Month-grouped entries** in this order (top = most recent):
  - **August 2026** (2 entries)
    1. "appmap.io relaunched: new positioning, homepage, how-it-works, enterprise, and pricing pages" → https://github.com/siteforward-ai/appmap.io
    2. "Review skill output refined: interpreted findings in the sticky PR comment" → https://github.com/getappmap/review-action
  - **July 2026** (4 entries)
    3. "AppMap MCP server: agents query recordings with get_call_tree, find_calls, find_queries, and find_requests" → https://appmap.io/docs/reference/appmap-mcp.html
    4. "Four AppMap skills published: appmap-record, appmap-label, appmap-gold-traces, appmap-review" → https://github.com/getappmap/skills
    5. "review-action released: runs the skills in CI on pull requests, posts results as a sticky PR comment and job summary, supports Claude Code and GitHub Copilot CLI" → https://github.com/getappmap/review-action
    6. "Baseline workflow: blessed golden trace baselines and agent-added labels commit to the PR branch" → https://github.com/getappmap/review-action
  - **June 2026** (2 entries)
    7. "Golden trace review workflow: promote a recording to a baseline, compare before and after on every change" → https://github.com/getappmap/skills
    8. "Label configuration guidance in the appmap-label skill: security.authentication, security.authorization, log, secret, crypto, dao" → https://github.com/getappmap/skills
  - **Spring 2026** (2 entries)
    9. "Active development resumed across the language agents and appmap-js" → https://github.com/getappmap
    10. "Scanner rule maintenance: 25+ heuristic rules for security, performance, architecture, and data integrity" → https://github.com/getappmap/appmap-js/tree/main/packages/scanner

Each entry renders as one line: the month heading (uppercase eyebrow, magenta
accent) above its bulleted entries. Each entry is an external `<a>` with
`target="_blank"` and `rel="noopener noreferrer"`, styled in the site's muted
link color with the magenta hover.

Data lives in a `releaseGroups` array (month + entries with `{ label, href }`),
kept at module scope alongside the route file. The data is inert (no runtime
server imports), so it is safe at module scope.

### 2. `src/components/layout/Footer.tsx`

Add a "Release Notes" link to the Company column (`href: "/release-notes"`),
rendered as a router `<Link>` (internal path), matching the existing link
styling.

## Verify

Open the dev server and confirm `/release-notes` renders the H1, intro, four
month groups with all 10 entries, and that footer shows the new link. Confirm
an entry opens its external link in a new tab.
