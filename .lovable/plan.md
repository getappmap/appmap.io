Undo the live-trace homepage hero while keeping the vendored code in the repo

1. Restore `src/components/sections/home/HomeHero.tsx` to its previous hero visual (the `MotionOrPoster` component / pre-live-trace markup) by reverting the live-trace insertion from the most recent change.
2. Remove the `appmap-live-trace.js` script tag from `src/routes/index.tsx` so the custom element is no longer loaded or initialized on the homepage.
3. Keep `public/appmap-live-trace.js` and `src/types/appmap-live-trace.d.ts` in the repository as vendored assets for future use.
4. Run the production build to confirm the homepage no longer triggers a hydration mismatch and renders the restored hero visual correctly.
