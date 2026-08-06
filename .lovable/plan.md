# PainStats: neutral statistic color + equal three-column grid

Scope: `src/components/sections/home/PainStats.tsx` only. No other files change.

## 1. Neutral statistic color

The large percentage figures currently use the pink accent `text-[#ff07aa]`. Change that to the primary light headline ink `text-[#f2effb]`, keeping size (`text-[44px] sm:text-[52px]`), weight (`font-extrabold`), and tracking unchanged.

- Line: `<div className="text-[44px] font-extrabold leading-none tracking-[-1.5px] text-[#ff07aa] sm:text-[52px]">`
- Change `text-[#ff07aa]` → `text-[#f2effb]`

Rationale: these are third-party statistics and should read as neutral evidence. Pink stays reserved for AppMap's own statements and calls to action.

## 2. Equal three-column grid on desktop

Change the card grid so all three cards sit in a single row of three equal columns on desktop and stack to one column on mobile, matching the TrustBar pattern.

- Line: `<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">`
- Change to `mt-10 grid gap-5 grid-cols-1 sm:grid-cols-3`

## Unchanged

Card backgrounds, body text, source links, headline, intro, and everything else in the section stay exactly as they are.

## Rules

No em-dashes. No banned terms.
