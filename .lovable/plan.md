# ReviewWhatAIDid: intro copy + centered caption line

Scope: `src/components/sections/home/ReviewWhatAIDid.tsx` only. No other files change.

## 1. Replace the introductory paragraph

Line 30 currently reads:
"Follow the execution path, inspect the queries, and navigate the code objects involved, all from the same recorded run."

Replace it with:
"One recording gives developers multiple ways to inspect a run: Dependency Map, Sequence Diagram, Trace View, Flame Graph, Code Objects, and SQL inspection. Recorded runtime behavior also supports generated OpenAPI definitions and diffs."

Keep the paragraph's existing classes (`mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]`).

Note: the wording deliberately avoids absolute and rigid claims. It does not call "six" a complete taxonomy, does not count the three cards as "three of six", and describes OpenAPI as a generated output rather than an editor view.

## 2. Add a centered caption line below the cards

After the card grid's closing `</div>` (line 55, inside the `max-w-[1120px]` container), add a single centered line of small muted text:

"Three representative views. Explore the broader visual set in your editor."

Style it like the existing card captions, centered with a top margin:
`mt-6 text-center text-[13.5px] text-[color:var(--color-am-muted)]`

The line treats the three cards as examples, without claiming they come from one identical recording or that six is a fixed taxonomy.

## Unchanged

Headline, the three cards and their images, alt text, and the section layout stay exactly as they are.

## Rules

No em-dashes. No banned terms.
