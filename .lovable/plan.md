# ReviewWhatAIDid: intro copy + centered caption line

Scope: `src/components/sections/home/ReviewWhatAIDid.tsx` only. No other files change.

## 1. Replace the introductory paragraph

Line 30 currently reads:
"Follow the execution path, inspect the queries, and navigate the code objects involved, all from the same recorded run."

Replace it with:
"One recording opens every window a developer needs: the dependency map, the sequence diagram, the trace view, the flame graph, the code objects, and a generated OpenAPI definition. Follow the execution path, inspect the queries, and navigate the code involved."

Keep the paragraph's existing classes (`mt-3 max-w-[700px] text-[16px] text-[color:var(--color-am-muted)]`).

## 2. Add a centered caption line below the cards

After the card grid's closing `</div>` (line 55, inside the `max-w-[1120px]` container), add a single centered line of small muted text:

"Three of the six views, shown from the same recording. All of them are in your editor."

Style it like the existing card captions (`text-[13.5px] text-[color:var(--color-am-muted)]`), centered with a top margin:
`mt-6 text-center text-[13.5px] text-[color:var(--color-am-muted)]`

## Unchanged

Headline, the three cards and their images, alt text, and the section layout stay exactly as they are.

## Rules

No em-dashes. No banned terms.
