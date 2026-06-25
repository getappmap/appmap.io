## Goal

Ship a fresh 1200×630 social card carrying the new positioning and wire it in as `og:image` / `twitter:image`.

## Step 1 — Generate the card

Use `imagegen` (premium tier — text legibility matters) to produce `public/og/og-card.png`, 1200×630.

Design brief:
- Dark purple background matching the site (`#0d0a1a` → `#16112b` radial), with subtle magenta `#ff07aa` and violet `#8b5cf6` glow accents in the corners (mirrors the hero).
- Big white headline, two lines, tight tracking: **"Understand AI-generated code before you trust it."**
- Small magenta eyebrow above the headline: **APPMAP**
- Small muted footer line bottom-left: "appmap.io"
- No product screenshot, no logos beyond the wordmark — keep it text-forward so it reads at thumbnail size.

After generating, inspect the PNG to confirm the text is legible and spelled correctly. If the model garbles the typography (common failure for text-heavy cards), regenerate with a tighter prompt or fall back to compositing the headline in code over a generated background.

## Step 2 — Wire it into head metadata

Per the head-meta rules, `og:image` lives on **leaf routes only** (root would override every child). Add `og:image` + `twitter:image` + dimensions to:

- `src/routes/index.tsx`
- `src/routes/how-it-works.tsx`
- `src/routes/architecture.tsx`
- `src/routes/benchmarks.tsx`
- `src/routes/compatibility.tsx`
- `src/routes/enterprise.tsx`
- `src/routes/blog.2024.06.20.appmap-swe-bench-leader.tsx`

Each gets:
```
{ property: "og:image", content: "/og/og-card.png" },
{ property: "og:image:width", content: "1200" },
{ property: "og:image:height", content: "630" },
{ name: "twitter:image", content: "/og/og-card.png" },
{ name: "twitter:card", content: "summary_large_image" },
```

(Single shared card for launch; per-page variants can come later.)

## Step 3 — Verify

- View the generated PNG and confirm the tagline is rendered cleanly.
- `bun run build` clean.
- Tell the user that link-preview platforms cache the previous card — they'll need to force a refresh in each platform's debugger (LinkedIn Post Inspector, Twitter Card Validator, Facebook Sharing Debugger) for shared URLs to update.

## Out of scope

- Per-page bespoke OG variants.
- Updating the legacy `1200x630-appmap-card.png` on appmap.io itself (handled by the appmap.io repo, not this build).
