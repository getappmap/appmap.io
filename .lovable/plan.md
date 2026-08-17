# Update ReviewLoop trace link label

## Goal
Change the left panel caption link in the homepage ReviewLoop section from "View the full trace" to "View the full trace from the code editor".

## Change
In `src/components/sections/home/ReviewLoop.tsx`, update the `label` field of the first panel object (chip "2-3", the sequence diagram panel) from `"View the full trace"` to `"View the full trace from the code editor"`.

## Verification
- Run a production build to confirm no syntax or type errors.
- Use Playwright at 1440px to load the homepage, scroll to the "Stop reviewing code. Start reviewing behavior." section, and screenshot the left panel caption to confirm the new link text renders.
- Check the same section at 390px to confirm no horizontal overflow or wrapping regression.

## Standing rules
No em-dashes. Do not use banned terms: "Navie", "Runtime Intelligence", "Behavioral Intelligence".
