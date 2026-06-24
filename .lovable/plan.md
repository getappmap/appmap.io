## New homepage section: "The code is shipping. The confidence is not."

A data-backed pain section placed on the homepage, right after the `VibeLoop` section (the "here is why this matters" beat before the proof sections).

### What to build

Create `src/components/sections/home/PainStats.tsx` and mount it in `src/routes/index.tsx` directly after `<VibeLoop />`.

### Content (verbatim)

- **Heading:** The code is shipping. The confidence is not.
- **Subhead:** AI writes more of your codebase every month. Almost no one knows what it actually does.
- **Six stats** in a band, each with a small linked source beneath:
  1. **42%** of committed code is already AI-generated, on track for 65% by 2027. — *Sonar, 2026*
  2. **96%** of developers do not fully trust AI-generated code. — *Sonar, 2026*
  3. **48%** always verify it before committing. Barely half. — *Sonar, 2026*
  4. **70%** of software leaders say application quality has already degraded as AI sped up delivery. — *SmartBear, 2026*
  5. **60%** hit quality issues in the past year because code outran testing. — *SmartBear, 2026*
  6. **38%** say reviewing AI code takes more effort than reviewing a human's. — *Sonar, 2026*
- **Closing line:** The volume is climbing, the trust is not, and the testing cannot keep up. AppMap closes that gap. Every AI change comes back as a behavioral review, a picture of what really happened, and a test that stays.

### Source links (per stat, small text under each)

- Sonar stats 1–3, 6 → https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/
- SmartBear stats 4–5 → https://smartbear.com/news/news-releases/smartbear-survey-70-of-software-experts-concerned/

Links open in new tab with `rel="noopener noreferrer"`.

The optional VentureBeat 43% stat is **omitted** per the integrity note (primary source unverified).

### Design

- Dark purple theme already in `src/styles.css` (`--color-am-bg: #0d0a1a`).
- Big numbers in magenta `#FF07AA` (existing `--color-am-brand`), large display weight.
- 3-column grid on desktop, 2-col on tablet, 1-col on mobile. Each cell: number, one short sentence, source link in muted small text.
- Plain short sentences. No em-dashes. Use periods.
- Subtle divider/glow consistent with neighboring sections; no new fonts or palette changes.

### Out of scope

- No changes to hero, VibeLoop, or other sections.
- No new routes, no nav changes.
- No copy edits elsewhere on the site (the broader Messaging Source of Truth pass remains a separate plan).
- No image generation.

### Verification

`bun run build`, then Playwright screenshot of `/` at 1280×1800 to confirm placement (after VibeLoop), stat band renders, and source links are visible and clickable.
