## AppMap Site Rebuild — Verification + Gap Closure Pass

Most of this spec is already implemented from prior turns. This pass is a careful audit against the verbatim copy, plus filling the few remaining gaps and running the verification checklist.

### 1. Audit existing implementation (read-only)
Re-read each file against the spec and fix any drift:
- `src/components/sections/home/HomeHero.tsx` — confirm eyebrow, H1 two lines, subhead with `<Em>actually does</Em>`, CTA labels + marketplace links, microcopy, video placeholder captions.
- `src/components/sections/home/ReviewLoop.tsx` — confirm heading, subhead ("the change" not "it"), 4 steps verbatim, payoff line, **supporting line present**.
- `src/components/sections/home/PainStats.tsx` — confirm all 6 stats verbatim with source links to Sonar/SmartBear URLs, closing line.
- `src/components/sections/home/OneVsFifteen.tsx` — confirm heading, intro, both panel labels, monospace block verbatim, caption.
- `src/components/sections/home/TrustBar.tsx` — confirm 4 cells.
- `src/components/sections/home/ReviewWhatAIDid.tsx` — heading with `<Em>actually did</Em>`, intro, 3 cards.
- `src/components/sections/home/BehavioralReview.tsx` — heading, intro, sequence-diagram placeholder + caption, 6 feature cards (no "test" card), "Review evidence" copy correct.
- `src/components/sections/home/Reviews.tsx` — heading/sub + 6 quotes.
- `src/components/sections/home/HowItWorksReveal.tsx` — text left + hub-and-spoke SVG right, caption.
- `src/components/sections/home/ClosingCTA.tsx` — heading/sub/CTAs + 4 badges normalized.
- `src/routes/index.tsx` — section order matches spec.
- `src/routes/how-it-works.tsx` — hero, 6 capture cards, 3 view cards, 4 MCP cards, "See what your agent read" + benchmarks link, "Where the model lives" link to /architecture.
- `src/routes/architecture.tsx` — hero, two code blocks, "One model. Many consumers." + chip row.
- `src/routes/benchmarks.tsx` — headline numbers, grouped bars, cost bars + table, caveat, SWE-bench card linking the clean internal URL.
- `src/routes/compatibility.tsx` — hero, 6 agent cards, "Bring your own model" section, IDE chip row.
- `src/routes/enterprise.tsx` — 4 cards, hero sub, CTAs (Book a Demo only here).
- `src/components/layout/Header.tsx` / `Footer.tsx` — nav + footer columns match.
- `src/routes/navie.$.tsx`, `src/routes/docs.navie.$.tsx`, `src/routes/platform.tsx` — confirm 301 redirects.
- `public/_redirects` — host-level 301s for all three legacy paths + old SWE-bench URL.
- `src/routes/sitemap[.]xml.tsx`, `public/llms.txt` — updated.

Patch any file that drifts from verbatim copy.

### 2. Gaps to fill

**`<Em>` component.** If not already a shared component, extract `src/components/common/Em.tsx` rendering `<span className="text-[color:var(--am-brand)]">{children}</span>`. Use only in HomeHero subhead + ReviewWhatAIDid heading.

**FAQ + JSON-LD on `/how-it-works`.**
- Add FAQ section with the 7 questions listed in the spec, verbatim answers grounded in existing copy (concise, plain).
- Add FAQPage JSON-LD via the route's `head().scripts`.
- Add the "What is AppMap?" block above the FAQ using the exact sentence specified.

**Home JSON-LD.** Add SoftwareApplication + Organization JSON-LD in `src/routes/index.tsx` `head().scripts`.

**Per-route head().** Confirm title/description/canonical on every route (`/`, `/how-it-works`, `/architecture`, `/benchmarks`, `/compatibility`, `/enterprise`, blog article). Add any missing.

### 3. Verification (run after edits)
- `bun run build` clean.
- `rg -i 'navie|runtime intelligence|behavioral intelligence|ai software architect|choose your llm' src public` → only redirect route files.
- `rg -i 'appmap-navie-swe-bench-leader' src public` → only `_redirects`.
- `rg 'appmap.io/assets/(img|video)' src public` → zero.
- `curl -I` against dev server for `/navie/x`, `/docs/navie/x`, `/platform` → confirm real `301`. If the TanStack `beforeLoad` redirect serves as 200 + client redirect in SSR, rely on `public/_redirects` host-level 301s and note this for the user.
- Playwright headless 1280×1800 screenshots of the 6 pages; spot-check magenta `actually does` / `actually did` rendering and PainStats source links.

### 4. Out of scope (call out, do not do)
- Real `map-sm.webm` / `sequence_04.webm` swaps beyond what's already wired.
- `/ai-code-review` category landing page.
- "Top-4 bank" copy softening (needs user confirmation).
- og:image generation.

### Deliverable
A short report listing: what was already correct, what was patched, verification command output, and the two pre-publish items still pending user input (real visuals + bank clearance).
