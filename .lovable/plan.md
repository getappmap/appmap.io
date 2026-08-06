# Copy tweaks: install card bodies + remove HomeHero free line

## Goal
Two small, exact text changes. No other content changes. No em-dashes, no banned terms ("Navie", "Runtime Intelligence", "Behavioral Intelligence"). Neither change introduces any.

## 1. `src/routes/get-appmap.tsx` — install card bodies
- VS Code card body (line 54): "One extension. Everything included." → "One extension. Everything you need to start."
- JetBrains card body (line 71): "One plugin. Everything included." → "One plugin. Everything you need to start."

Headings ("VS Code", "JetBrains"), install buttons, and their links stay unchanged.

## 2. `src/components/sections/home/HomeHero.tsx` — remove free line
Delete the line (lines 46-48) and its wrapping div:
```tsx
<div className="mt-3.5 text-[13.5px] text-[#a99fc7]">
  Free for every developer. Organizational scale comes with a support contract.
</div>
```
No replacement. The CTA row above keeps its `mt-7`; the video below keeps its `mt-11`, so spacing stays balanced.

## Not changed
Everything else on `/get-appmap` and the homepage hero (headline, eyebrow, subheadline, chips, install buttons, video, captions).

## Verification
Typecheck, then confirm both replacement strings render on `/get-appmap` and the free line is gone from the hero.
