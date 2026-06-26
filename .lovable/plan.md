## Scope

Implement the addendum on `/how-it-works` in two passes. No other pages touched. No approved deviations reverted.

### A. "One run, fully captured" — flow graphic with thumbnails

Replace the 6-card grid in `src/routes/how-it-works.tsx` with a single inline SVG flow:

- Magenta spine from **Request** → **Response** (`#ff07aa`), thin violet tap connectors (`#8b5cf6`) to 6 signal nodes (3 above, 3 below).
- Each node = a 120×72 thumbnail (`object-cover` crop of the real image) + title + 3-word descriptor, framed `border-[#2c2353] rounded-md bg-[#16112b]`.
- Mapping uses files already in `public/img/appmap/`:
  - Function calls → `call-tree.webp`
  - SQL queries → `queries.jpg`
  - HTTP traffic → `sequence.jpg`
  - Exceptions → `sequence.jpg` (tighter crop via `object-position`) — fallback to abstract dot node if illegible
  - Class map → `code-map.jpg`
  - Full path → `dependency-map.webp`
- Static crops only (respects reduced motion; no autoplay).
- Layout: SVG spine sits behind a CSS grid of 6 nodes for responsiveness; collapses to vertical stack under `sm`.

### C. FAQ — depth + docs link

In `src/routes/how-it-works.tsx`:

- Extend four answers per spec (MCP, behavioral model, storage, no-egress) with one extra sentence each.
- Add a `doc` field (`{href,label}`) to those four FAQ entries; render a small `Read: <label> →` link under the answer in magenta.
- After the `<details>` list, add a single right-aligned link: **Full technical documentation →** to `https://appmap.io/docs/appmap-docs.html` (new tab).
- FAQPage JSON-LD: keep the extended sentence in `acceptedAnswer.text`; doc links stay UI-only.

### B. Golden trace Waltz visuals — DEFERRED

The three `waltz*_branded.svg` files were not in this turn's uploads and I will not fabricate "real AppMap recordings." Current synthetic-free state is preserved: the two Golden trace cards stay text-only until you upload the SVGs. Once uploaded I'll drop them into `public/img/appmap/`, wire them into the Invariant + Expected-change cards, and add `waltzinvolvementkind_branded.svg` as the anchor visual above the two cards.

## Technical notes

- All work confined to `src/routes/how-it-works.tsx` plus the existing images in `public/img/appmap/`.
- No new dependencies, no route changes, no header/footer changes.
- Tokens used: `#ff07aa`, `#8b5cf6`, `#a78bfa`, `#f2effb`, `#a99fc7`, `#1c1538`, `#16112b`, `#2c2353`.
- Verify with a production build after the edit.