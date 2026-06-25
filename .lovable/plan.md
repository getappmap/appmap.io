## Goal

Rebuild the site to the spec verbatim. Dark-purple theme, magenta `#ff07aa`, violet `#8b5cf6`. All Navie content stripped or 301-redirected. Two new pages, homepage restructured, three supporting pages rewritten, header/footer/sitemap/llms.txt updated.

## Global

- Confirm/add palette CSS vars in `src/styles.css`: `--am-bg #0d0a1a`, `--am-bg2 #16112b`, `--am-card #1c1538`, `--am-line #2c2353`, `--am-ink #f2effb`, `--am-muted #a99fc7`, `--am-brand #ff07aa`, `--am-brand-d #d6008f`, `--am-violet #8b5cf6`, `--am-violet-l #a78bfa`. Consume via `bg-[color:var(--am-card)]` etc. No new colors. No design-token rewrites.
- **Emphasis is plain.** No `<Em>` component. Inline `<span className="text-[color:var(--am-brand)]">actually does</span>` (or "actually did") in exactly TWO places: the hero subhead and the ReviewWhatAIDid heading. Nowhere else. No italic, no semibold.
- Primary CTA = magenta gradient `linear-gradient(120deg,#ff07aa,#a21caf)` white text. Secondary = outline using `--am-line`. Use existing shadcn Button where convenient with inline classes.

## Home `/` (`src/routes/index.tsx`)

Render in this exact order with verbatim copy from the spec:

1. **HomeHero** (rewrite) — eyebrow, two-line H1, subhead with inline magenta span on "actually does", dual CTAs to VS Code + JetBrains marketplaces, microcopy, dependency-map placeholder block with the two side captions.
2. **ReviewLoop** — rename `VibeLoop.tsx` → `ReviewLoop.tsx`. Heading, subhead, 4 numbered steps with exact titles/blurbs, large ink payoff line "Every pull request explains itself.", and required supporting line about PRs carrying behavioral evidence.
3. **PainStats** (edit) — verify all 6 stats, exact text, and the two source links (Sonar, SmartBear); closing line per spec.
4. **OneVsFifteen** (edit) — heading, intro, two code panels with labels, right panel verbatim grep text, caption.
5. **TrustBar** (edit) — `~140K`/`100K+`/`Top-4`/`2020` with exact sublabels.
6. **ReviewWhatAIDid** — rename `WhatYourAgentSaw.tsx` → `ReviewWhatAIDid.tsx`. Heading with magenta span on "actually did", intro, 3 cards.
7. **BehavioralReview** — rename `FeaturesStay.tsx` → `BehavioralReview.tsx`. Heading, intro, sequence-diagram placeholder + caption, 6 feature cards (no "test" card).
8. **Reviews** (edit) — heading + sub per spec; 6 verbatim quotes from mockup (Daniyal/Hesbon/Triyank/Max/Shaun Wang/Venkat Bagam). Keep existing carousel.
9. **HowItWorksReveal** (new) — heading, body, link "Learn how it works" → `/how-it-works`. Do not use the phrase "behavioral model" anywhere on home before this section.
10. **ClosingCTA** (edit) — heading, sub, dual install CTAs, badge row (NVIDIA Inception, GitHub for Startups, MongoDB Partner, TechCrunch Finalist).

Remove from home: `HomeCompatibility`, the old verbose `HowItWorks`. Leave files unless unused — delete only if no remaining import.

## New routes

### `src/routes/how-it-works.tsx`
Eyebrow "How it works", H1 "How AppMap works.", lead paragraph. Sections:
- "One run, fully captured" — 6 cards (Function calls, SQL queries, HTTP traffic, Exceptions, Class map, Full path) with mockup descriptions.
- "Record once. Use it everywhere." — 3 cards (Dependency map, SQL inspection, Code map).
- "How the behavioral model reaches your agent" — 4 cards: `get_call_tree`, `find_calls`, `find_queries`, `find_requests` with mockup descriptions.
- "See what your agent read" — short paragraph + link "See the Benchmark" → `/benchmarks`.
- Footer link "Where the model lives" → `/architecture`.

### `src/routes/architecture.tsx`
Eyebrow "Architecture", H1 "In your editor today. In your repo tomorrow.", body paragraph. Two side-by-side `<pre>` code blocks (verbatim repo tree with `.appmap/` highlighted, and the analogy table). "One model. Many consumers." paragraph + chip row: Developers, Claude, Cursor, Copilot, Gemini, CI, Backstage, "Confluence, as a mirror".

## Rewritten routes

### `src/routes/benchmarks.tsx`
- Hero "We measured it. Here is the data."
- Headline numbers: 100% / 28% / ~3.4x / 7 pts + single-study caveat.
- "Diagnosis holds where static search collapses" — pure-CSS grouped bar chart, AppMap `[91,100,100,100]` vs Static `[91,81,50,28]`, x-labels unlimited / budget 10 / budget 5 / budget 3, with numerals above bars.
- "The same result for less spend" — pure-CSS cost bars + `<table>` with 3 rows from spec.
- "What this study is, and is not" caveat + CTAs "Get AppMap", "Read the Methodology".
- "Not our first benchmark." card linking the 2024 SWE-bench blog post with the 14.6% line verbatim.

### `src/routes/compatibility.tsx`
- Hero "No lock-in. Better context." + sub.
- "Bring your own agent" — 6 cards (Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Google Antigravity) + tail line.
- "Bring your own model" paragraph per spec.
- "Lower inference cost wherever inference runs" + chip row (Visual Studio Code, JetBrains IDEs, CLI, CI).

### `src/routes/enterprise.tsx`
Hero + verbatim sub. 4 cards: Airgapped and on-prem ready, No egress by design, Cleared where it is hardest (top-4 U.S. bank, 2025, renewed 2026), Trust but verify. CTAs "Book a Demo", "Read the Security FAQ". (Only page that keeps Book a Demo.)

## Redirects (permanent 301)

TanStack `beforeLoad` `throw redirect({ to, statusCode: 301 })` for in-app SPA navigation:
- `src/routes/navie.$.tsx` → `/how-it-works`
- `src/routes/docs.navie.$.tsx` → `/how-it-works`
- `src/routes/platform.tsx` → `/how-it-works`

**Plus host-level 301s** for true server redirects (so SEO equity actually transfers). Cloudflare deploy uses `wrangler.jsonc`; add a `public/_redirects` file (Cloudflare Pages honors it) with:
```
/navie/* /how-it-works 301
/docs/navie/* /how-it-works 301
/platform /how-it-works 301
```
After deploy, `curl -I` against the published URL must show `HTTP/1.1 301`. If Cloudflare Workers ignores `_redirects` in this setup, fall back to a redirect handler in `src/server.ts` returning a real 301 Response for those paths before the SSR handler runs.

## Header / Footer / SEO / llms.txt

- `Header.tsx`: nav = How it works, Benchmarks, Compatibility, Enterprise, Docs. Logo links Home. Single primary CTA "Get AppMap".
- `Footer.tsx`: 3 columns — Platform (How it works, Architecture, Benchmarks, Compatibility, Security FAQ, Pricing), Docs (Get Started, Reference, Troubleshooting), Company (About, Contact, GitHub). No Careers. Tagline: "Understand AI-generated code before you trust it."
- `src/routes/sitemap[.]xml.tsx`: add `/how-it-works`, `/architecture`; remove `/navie*` and `/platform`.
- `public/llms.txt`: replace top blurb with the verbatim paragraph in the spec.
- Per-route `head()`: title + description + canonical (relative) + og:title/og:description/og:url for every new and rewritten route. No og:image generation.

## Verification

- `bun run build` clean.
- `rg -i 'navie|runtime intelligence|behavioral intelligence|ai software architect|choose your llm' src public` returns zero matches outside the 3 redirect files.
- Grep confirms hero subhead and ReviewWhatAIDid heading each contain the inline magenta span on "actually does"/"actually did", and that the phrase is NOT styled elsewhere.
- ReviewLoop supporting line is present.
- Playwright headless 1280×1800, screenshot `/`, `/how-it-works`, `/architecture`, `/benchmarks`, `/compatibility`, `/enterprise`.
- `curl -I` against the dev server for `/navie/x`, `/docs/navie/x`, `/platform` — note for the user that local SPA returns 200 with a client redirect; the true 301 ships via `public/_redirects` at the host. Document this in the PR notes.
- `curl -I` both citation URLs (Sonar, SmartBear) returns 2xx.

## Out of scope / pre-publish notes (called out, not blocking)

- Real product visuals (`map-sm.webm`, `sequence_04.webm`) — placeholder blocks with the captions for this build; swap is a fast follow.
- Top-4 bank clearance language — leave as "top-4 U.S. bank" per spec but flag in the closing summary that the user must confirm public clearance or soften to "one of the largest U.S. financial institutions".
- No backend/Cloud/DB changes. No imagegen. No new design tokens beyond confirming the palette.
