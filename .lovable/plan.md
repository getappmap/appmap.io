Update /get-appmap so the two lines below the extension cards read clearly as a single, distinct section.

### Current state
The "Terminal only?" paragraph and the "Always free at your desk." paragraph are in separate `<section>` elements with `text-[14.5px] text-[#a99fc7]` and modest vertical padding. They are small, dim, and visually disconnected.

### Changes

**1. Merge into one section**
- Move both paragraphs into a single `<section>` so they read as one block.
- Remove the now-empty intermediate `<section>`.

**2. Typography**
- Change body text size from `text-[14.5px]` to `text-[18px]`.
- Change body text color from `text-[#a99fc7]` to `text-[#f2effb]`.
- Add `leading-relaxed` (or equivalent `leading-[1.7]`) for readability.
- Keep `<Link>` text in the existing accent pink (`text-[#ff07aa]`) with `hover:underline`.

**3. Vertical spacing**
- Give the new section generous vertical breathing room: `py-20` (or `py-16` if that feels too much) and a top margin / separator so it sits apart from the cards above.
- Add a `mb-6` (or equivalent) between the two paragraphs so they do not crowd each other.

**4. Layout**
- Center-align the text block: `text-center` on the wrapper.
- Constrain width to the same container as the cards (`max-w-[1120px] mx-auto`).

**5. No copy changes**
- Every word, link destination, and mailto stays exactly as written.

### Files touched
- `src/routes/get-appmap.tsx` only.

### Rules applied
- No em-dashes.
- Never use Navie, Runtime Intelligence, or Behavioral Intelligence.