## Goal

Replace placeholder blocks on the home page (and the optional "Record once" cards on `/how-it-works`) with real AppMap diagram visuals downloaded from appmap.io. No Navie chrome. Closes ship-gate item 1.

## Step 1 — Download assets into the repo

Create `public/img/appmap/` and `public/video/` (the latter already exists as `public/assets/video/` — new clips will live in `public/video/` per spec).

Stills → `public/img/appmap/`:
- `dependency-map.webp` ← `https://appmap.io/assets/img/docs/dependency-map-overview.webp`
- `call-tree.webp` ← `https://appmap.io/assets/img/docs/trace-is-fully-interactive.webp`
- `sequence.jpg` ← `https://appmap.io/assets/img/product/follow-request-flows-sequence.jpg`
- `queries.jpg` ← `https://appmap.io/assets/img/product/inspect-database-queries.jpg`
- `code-map.jpg` ← `https://appmap.io/assets/img/product/view-your-applications-code-objects.jpg`
- `flamegraph.webp` (optional) ← `https://appmap.io/assets/img/docs/flamegraph-5.webp`

Motion clips → `public/video/`:
- `dependency-map.mp4` ← `…/docs/expand-and-collapse-packages.mp4` (hero)
- `call-tree.mp4` ← `…/docs/expand-and-collapse-execution-paths.mp4`
- `queries.mp4` ← `…/docs/view-sql-queries.mp4`
- `metadata.mp4` ← `…/docs/navigate-to-interest.mp4`
- `sequence.mp4` ← `…/docs/sequence-diagram-expand.mp4`

Verify after download: each file is Navie-free (`rg -i navie public/img public/video` returns zero) and shows pure diagram chrome.

## Step 2 — Swap per component

**`src/components/sections/home/HomeHero.tsx`** — swap the current `map-sm.webm` video block for `dependency-map.mp4` with `poster="/img/appmap/dependency-map.webp"`, `autoplay loop muted playsinline preload="metadata"`. Keep the two side caption chips. The hero is the LCP element: also preload `dependency-map.webp` via the route `head().links` in `src/routes/index.tsx` with `fetchpriority="high"`. Use eager loading on the poster image fallback.

**`src/components/sections/home/BehavioralReview.tsx`** — swap the `sequence_04.webm` video to use `sequence.mp4` (download) with `poster="/img/appmap/sequence.jpg"`. Keep the caption. Lazy below the fold.

**`src/components/sections/home/ReviewWhatAIDid.tsx`** — replace the "{title} preview" placeholder div in each of the 3 cards with an `<img>` (lazy):
- Call tree → `/img/appmap/call-tree.webp`
- Queries → `/img/appmap/queries.jpg`
- Metadata → `/img/appmap/code-map.jpg`

Apply real, descriptive alt text (e.g. "AppMap call tree showing the request path"). Add `decoding="async"`, explicit width/height attrs to prevent CLS, keep rounded/border classes.

**`/how-it-works` "Record once. Use it everywhere." cards** (optional upgrade) — same treatment: dependency map, queries, code map stills.

## Step 3 — Styling rules

- Full-width images: `w-full h-auto block rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)]`.
- Always include explicit `width`/`height` or `aspect-ratio` to reserve space (CLS).
- Light-background `.jpg` screenshots: wrap in `--am-bg2` padding with `--am-line` border so they don't clash with the dark theme.
- Prefer `.webp` over `.jpg` where both exist.

## Step 3b — Video attributes

`autoPlay loop muted playsInline preload="metadata"` with matching `poster`. Add a small client guard so `prefers-reduced-motion: reduce` and narrow viewports render the poster `<img>` instead of autoplaying — implement as a tiny `MotionOrPoster` helper in `src/components/common/` to share between Hero and BehavioralReview.

## Step 4 — Verify

- `rg -i navie public/img public/video` → zero matches.
- Visual check: each downloaded image shows only diagram views (no Navie chat panel).
- `bun run build` clean; Playwright screenshot of home + `/how-it-works` to confirm images render and layout doesn't shift.

## Out of scope (call out, don't do)

- Regenerating the OG/social card with the new tagline — flagged in the brief; ask before doing.
- Reshooting any screenshot that looks like an older AppMap UI — flag during verify if spotted.

## Technical notes

- Download via `curl -fSL <url> -o <path>` in a single batched shell call.
- Reference assets as plain `/img/appmap/...` and `/video/...` paths (served from `public/`); no `lovable-assets` upload — these are launch-time product visuals, small enough to ship in-repo and need stable paths for the spec.
- New shared helper file: `src/components/common/MotionOrPoster.tsx`.
