
## Goal
Relaunch appmap.io around the AppMap MCP server. Sequenced PR-style rollout that matches the brief's risk order: redirects first, then Home, then Benchmarks, then Compatibility/Platform, then Enterprise, then global cleanup.

Source of truth: `appmap_website_copy.md` (copy), `appmap_lovable_update_brief.md` (shift + loop), `appmap_messaging_source_of_truth.md` (vocabulary), `appmap_mockup.html` (visual reference), `appmap_visual_assets_inventory.md` (which assets to keep/drop), `appmap_seo_and_positioning.md` (metadata, JSON-LD, redirects).

## Visual direction
Match the mockup, not the current site.
- Background `#0d0a1a`, surface `#16112b`, card `#1c1538`, line `#2c2353`.
- Ink `#f2effb`, muted `#a99fc7`.
- Primary magenta `#FF07AA` (with `#d6008f` dark), violet `#8B5CF6` (with `#a78bfa` light).
- Primary button: `linear-gradient(120deg, #ff07aa, #a21caf)`, white text. Ghost button: transparent, `#2c2353` border.
- Hero glows: two radial gradients (violet top-right, magenta bottom-left) per mockup.
- Type: system stack (mockup uses `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`). Tight tracking, heavy weights for h1/h2 (800/750). No custom Google Font.
- Section rhythm: 70px vertical padding, 1120px max width, `.alt` sections in `#16112b` between regular sections.

Tokens land in `src/styles.css` as Tailwind v4 `@theme` vars (no `tailwind.config.ts` edits needed for v4). Replace the current `#010303` body bg.

## Implementation order

### PR 1 — Redirects + global cleanup (lowest-risk first per brief §6)
- Add `public/_redirects`-equivalent server routes if needed, OR simple TanStack server routes under `src/routes/api/public/` that 301 Navie URLs. Simpler: add a TanStack catch-all that detects `/docs/navie*` / `/navie*` paths and `redirect()` to `/platform`. Implement as a route file `src/routes/navie.$.tsx` and `src/routes/docs.navie.$.tsx` whose `loader` throws `redirect({ to: '/platform', statusCode: 301 })`.
- Update `public/robots.txt` to allow all + reference sitemap.
- Add `public/llms.txt` from the SEO doc draft.

### PR 2 — Global brand + nav/footer
- `src/styles.css`: introduce the dark-purple palette and gradient tokens. Replace `bg-[#010303]` usages in `index.tsx` and `Header.tsx`.
- `src/components/layout/Header.tsx`: nav links = Platform, Benchmarks, Compatibility, Enterprise, Docs, Blog, Pricing. Primary CTA "Get AppMap" → marketplace (use VS Code Marketplace URL). Secondary "GitHub". Remove "Book a Demo" from header. Apply backdrop-blur sticky header per mockup.
- New `src/components/layout/Footer.tsx` with four columns (Platform / Docs / Company / Community) per brief; mount in `src/routes/__root.tsx` after `<Outlet />`.
- Update `__root.tsx` head defaults: site_name "AppMap", default `og:image` swap to the new social card URL (placeholder same path until image is regenerated), drop the "Cutting edge AI…" description. og:image stays only on `__root` as a fallback per existing pattern — note: head-meta guide says og:image should be leaf-only; I'll move it to leaf routes and remove from root.

### PR 3 — Home rewrite (highest-traffic page)
Replace the current `src/routes/index.tsx` section list. New components in `src/components/sections/home/`:
1. `Hero.tsx` — eyebrow, h1, lead, dual install CTAs, microcopy, autoplay `<video>` of `map-sm.webm` with `dependency-map-overview.webp` poster, meta chips ("You read the map…" / "Your agent reads the same run over MCP"), caption.
2. `VibeLoop.tsx` — "Built for the way you code now." Four numbered cards, closing line, small bridge line.
3. `OneVsFifteen.tsx` — "One query, not fifteen." Two-column compare: left = `trace-is-fully-interactive.webp` framed as window; right = monospace mocked grep trajectory from the mockup verbatim.
4. `TrustBar.tsx` — 4-cell grid (~140K / 100K+ / Top-4 bank / 2020).
5. `WhatYourAgentSaw.tsx` — three-up gallery (call tree / queries / metadata) with the three docs/product images.
6. `FeaturesStay.tsx` — autoplay `<video>` of `sequence_04.webm`, then six feature cards.
7. `HowItWorks.tsx` — three numbered steps (Record / Serve / Reason).
8. `Compatibility.tsx` — chips list of agents with pulse dot, neutrality subtext.
9. `Reviews.tsx` — auto-advancing carousel of the six marketplace quotes (skip any Navie reviews — none in the list).
10. `ClosingCTA.tsx` — gradient band, dual install CTAs, partner badges row.

`src/routes/index.tsx` head: new title "AppMap: Runtime Context for AI Coding Agents", new meta description, og:title/desc/url=`/`, leaf canonical=`/`, JSON-LD `SoftwareApplication` + `Organization`.

Stop importing the old `WhatIsAppMap`, `SocialProof`, `FeaturesReview`, `RealBehaviorDemo`, `BiggerPictureDemo`, `ApplicationRunsDemo`, `MissingContextDemo`, `RuntimeContextDemo`, `FinalCTA`, and the old `Hero`. Leave the files for now (delete in PR 6 after grep confirms unused).

### PR 4 — Benchmarks page (the new centerpiece)
- `src/routes/benchmarks.tsx`. Sections: Hero, "How the study was built" (4-bullet card grid), Result 1 chart, Result 2 chart + comparison table, Honest limits, dual CTA ("Get AppMap", "Read the Methodology" → placeholder `/blog`).
- Charts: inline SVG bars styled to mockup (magenta vs muted). No chart lib install needed.
- Caveat block under every headline-number section.
- head: SEO doc's title/desc, JSON-LD `Article` with author "AppMap" and date.

### PR 5 — Compatibility + Platform pages
- `src/routes/compatibility.tsx`: Hero, Agents (cards with pulse chips), Models, Neutrality, Environments, CTA. head per SEO doc.
- `src/routes/platform.tsx`: Hero, "What AppMap records" (6 bullets), "The MCP server" (4 tools with mono names), "Why density wins", "Features from the same data", Transparency w/ dashboard image, CTA → `/benchmarks`. head + `SoftwareApplication` JSON-LD.

### PR 6 — Enterprise + final cleanup
- `src/routes/enterprise.tsx`: Hero, four trust blocks, dual CTA ("Book a Demo" → HubSpot link, "Read the Security FAQ" → placeholder anchor). Only page with Book a Demo. head per SEO doc.
- Delete now-unused old section files; remove `navie-answer.webp` references from `imageMap` / `imageResolver`.
- Update `public/sitemap.xml` to list `/`, `/platform`, `/benchmarks`, `/compatibility`, `/enterprise` plus retained docs/product URLs.

## Assets
External `appmap.io/assets/...` URLs are used directly (the mockup does the same). No binary upload to the repo. The current `src/assets/images/navie-answer.webp` becomes unused and gets deleted in PR 6. Videos hot-linked from `appmap.io/assets/video/*.webm`.

## Out of scope (per brief / explicit user notes)
- Docs/Blog/Pricing/Security FAQ page content — links only, point at existing URLs.
- Patents (excluded by brief).
- New benchmark methodology page (link is a placeholder to `/blog`).
- Marketplace, GitHub, and social copy updates (handled outside the website per source-of-truth doc).
- Real image regeneration for the 1200x630 social card (text-only meta swap; image file refresh is a separate ask).

## Verification per PR
After each PR: `bun run build` and a Playwright pass at 1280×1800 capturing each touched route's full-height screenshot, plus a console check for missing assets.

## Open items for you
1. Confirm marketplace install URLs (VS Code + JetBrains) — I'll use the live ones from the current site (`https://marketplace.visualstudio.com/items?itemName=appland.appmap` and JetBrains plugin page) unless you have other links.
2. Confirm the GitHub URL for the secondary CTA (`https://github.com/getappmap`?).
3. Methodology link target — placeholder `/blog` OK or do you want it dropped until the post exists?
4. Should PR 1 ship on its own, or do you want all 6 PRs sequenced in this session?
