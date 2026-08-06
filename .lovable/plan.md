# Homepage Accuracy Pass

Five exact text replacements across four homepage components. No other changes. No em-dashes, no banned terms.

## 1. ReviewWhatAIDid.tsx

- Card titled "The metadata": retitle to "The code objects" and change body from
  `Functions, APIs, and objects in the run.` to
  `Functions, classes, and queries exercised in the run.`
- Card titled "The queries": change body from `The SQL it ran, with the data.` to
  `The exact SQL it ran, query by query.` and change its image alt text from
  `AppMap view of the SQL queries executed during a request, with bindings.` to
  `AppMap view of the SQL queries executed during a request, shown as parameterized statements.`

## 2. ReviewLoop.tsx

- Change step body from `You vibe-code it with your AI coding agent.` to
  `You build it with your AI coding agent.`

## 3. BehavioralReview.tsx

- Retitle card "Golden trace review" to "Golden AppMap trace review".
- Change video caption `Sequence diagram view, fully interactive.` to
  `Sequence diagram view. Fully interactive in your editor.`
  (The caption continues with "One recording, the full request path from HTTP to database." which stays unchanged.)

## 4. Reviews.tsx

- Change intro paragraph from `Five-star reviews across the Visual Studio Code and JetBrains marketplaces, from a community of more than 100,000 developers.` to
  `Rated five stars by developers across the Visual Studio Code and JetBrains marketplaces, from a community of more than 100,000 developers.`

## Notes

- All changes are literal string edits within the existing data arrays and JSX; no layout, styling, or structure changes.
- After building, I will surface the diff.
