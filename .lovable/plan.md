## Gap-closure pass vs the spec

Keeping your prior removals: PainStats stays at 3 cards with no closing line, and the OneVsFifteen / ReviewWhatAIDid sentence trims remain.

The site already matches the spec for: palette/tokens, Em component, hero, ReviewLoop, OneVsFifteen, TrustBar, ReviewWhatAIDid (with your trim), Reviews, ClosingCTA, Header/Footer nav, navie/platform 301 redirects, sitemap, OG cards, JSON-LD on home + FAQ on how-it-works, real product visuals.

### What's still missing — fixes in this pass

**1. `src/components/sections/home/BehavioralReview.tsx`** — rename the "Review evidence" card to **"Golden trace review"** with verbatim copy: "Promote an AppMap recording into a behavioral baseline. AppMap compares before and after, so every reviewer sees whether behavior held or changed as intended."

**2. `src/routes/how-it-works.tsx`** — add the new section **"Golden AppMap traces make behavior reviewable"** before the existing "What is AppMap?" block. Includes lead paragraph, two mode cards (Invariant behavior / Expected change with their eyebrows and bodies), and the two short closing lines about deterministic vs real-world traces and where baselines can come from. Existing "Where the model lives → /architecture" link is already present in the page CTA row — verify it stays.

**3. `src/routes/architecture.tsx`** — add the new section **"Where golden traces live"** after "One model. Many consumers." Includes body paragraph, the `.appmap/golden/` repo tree code block, and the closing line about contracts.

**4. `src/routes/enterprise.tsx`** — add two new copy blocks after the existing 4-card grid: **"Start without CI"** and **"Governed behavior baselines"**, with verbatim copy from the spec.

**5. `src/components/sections/home/HowItWorksReveal.tsx`** — currently text-only. Add the hub-and-spoke SVG to the right column (magenta center node "Behavioral model", six spokes: Dependency map, Call tree, Sequence diagram, Your AI agent, Runtime review, CI), update the body to include "every golden trace", and add the caption "One model. Every view above is drawn from it."

**6. `public/llms.txt`** — add the Golden AppMap traces sentence from the spec.

### Out of scope for this pass (per your earlier decisions)
- PainStats stays at 3 cards, no closing line.
- OneVsFifteen / ReviewWhatAIDid trimmed sentences stay trimmed.
- No new visuals, no token rewrites, no 301 host-level config (already in `public/_redirects`).
- No verification curl/Playwright run unless you ask.
