## Scope (Part B from the addendum)

Wire the three uploaded Waltz SVGs into the Golden trace section on `/how-it-works`.

## Steps

1. Copy the two provided SVGs into `public/img/appmap/`:
   - `waltzbehaviorheld_branded.svg`
   - `waltzbeforeafter_branded.svg`
   (Anchor `waltzinvolvementkind_branded.svg` was not uploaded; defer until provided.)

2. In `src/routes/how-it-works.tsx`, inside the "Golden AppMap traces make behavior reviewable" section:
   - Inside the **Invariant behavior** card, append an `<img>` of `waltzbehaviorheld_branded.svg` (alt: "AppMap recordings of FINOS Waltz: GET /api/involvement-kind, baseline vs after an unrelated change, status, auth path, and query count match."), framed `border border-[#2c2353] rounded-lg bg-[#0d0a1a]`, `w-full h-auto`, `loading="lazy"`.
   - Inside the **Expected change** card, append an `<img>` of `waltzbeforeafter_branded.svg` (alt: "AppMap recordings of FINOS Waltz involvement-kind permission lookup: baseline 7 per-id SELECTs replaced by a single batched findAll, 6 fewer round-trips.").
   - Add one caption line under each image (small `text-[12px] text-[#a99fc7]`) noting "Real AppMap recording · FINOS Waltz".

3. No other edits. No copy changes to the surrounding cards. No reverts.

## Deferred

- `waltzinvolvementkind_branded.svg` anchor visual — add when uploaded.
- Backing `.appmap.json` rigor artifact — out of scope for this pass.

## Technical notes

- Files referenced by literal path under `public/`, no bundler import.
- SVGs already use site tokens; no recolor needed.
- Verify with a production build.