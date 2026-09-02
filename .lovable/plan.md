# Move Independent runtime evidence callout above the star map

## Goal
Reorder the content inside `src/components/sections/enterprise/RuntimeBehaviorAnalysis.tsx` so the “Independent runtime evidence” thesis block appears after the opening H1/paragraph and before the `InteractionWebPanel` star-map graphic.

## Current order
- Kicker: RUNTIME BEHAVIOR ANALYSIS
- H1: Runtime behavior analysis finds the bugs that are code interactions.
- Intro paragraph
- `<InteractionWebPanel />` (star map + caption)
- Independent runtime evidence block
- Standards table
- Approaches table

## Target order
- Kicker: RUNTIME BEHAVIOR ANALYSIS
- H1: Runtime behavior analysis finds the bugs that are code interactions.
- Intro paragraph
- Independent runtime evidence block
- `<InteractionWebPanel />` (star map + caption)
- Standards table
- Approaches table

## Changes
1. In `src/components/sections/enterprise/RuntimeBehaviorAnalysis.tsx`, move the `<section>` containing the “Independent runtime evidence” block from its current position after `<InteractionWebPanel />` to immediately after the intro paragraph and before `<InteractionWebPanel />`.
2. Keep the existing border/padding classes on the moved block so it visually separates from both the intro and the graphic without creating a double rule.
3. Confirm the component still exports `RuntimeBehaviorAnalysis` and `InteractionWebPanel` unchanged.

## Verification
- Run `bun run build` and confirm it passes.
- Screenshot `/enterprise` at 1280px and 390px to confirm the callout sits directly above the star map and below the intro copy.
- Report the final rendered order of the `RuntimeBehaviorAnalysis` sub-sections.
