## Goal
Revise the `/get-appmap` page with a new headline, subline, and improved typography for the two closing paragraphs. No copy changes in the cards or closing paragraphs other than what is specified.

## Headline section
- Replace `Three ways in. Same ground truth.` with `One engine. Install it your way.`
- Add a subline directly under the `<h1>`: `VS Code, JetBrains, or straight from the terminal: every path ends at the same ground truth.` Render it in muted color (use the existing muted text color `#a99fc7` or its semantic equivalent) at roughly `17-18px` with `leading-relaxed`.
- Update the `<meta name="description">` and `og:description` to reflect the new headline and subline.

## Extension cards
- Leave the VS Code and JetBrains cards exactly as they are (card styling, buttons, copy, links, layout). Do not touch this section.

## Closing text block (two lines)
- Combine the two `<section>` elements into a single section so they read as one distinct closing block.
- Body text color: change from `#a99fc7` to `#f2effb`.
- Body text size: change from `text-[14.5px]` to `text-[18px]`.
- Line height: add comfortable line height (`leading-[1.7]` or `leading-relaxed`).
- Vertical spacing: add generous padding (`py-20` or `py-16`) on the wrapping section, and `mb-6` or `mb-8` between the two paragraphs to separate them.
- Keep the block centered and constrained to `max-w-[1120px] mx-auto`.
- Leading phrases: render `Terminal only?` and `Always free at your desk.` in `font-semibold`.
- Links: keep the existing `CLI quickstart` and `See pricing` links in accent pink (`text-[#ff07aa]`) with `hover:underline`.
- No other copy changes: every other word stays exactly as written.

## Rules
- No em-dashes anywhere.
- Do not use Navie, Runtime Intelligence, or Behavioral Intelligence.

## File touched
- `src/routes/get-appmap.tsx` only.