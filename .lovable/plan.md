## Scope

Only `src/components/sections/home/HomeHero.tsx` changes. Four text replacements, no styling, layout, or markup changes.

## Replacements

1. Eyebrow

From: "Runtime evidence for AI code review"
To: "Runtime evidence for AI-assisted development"

2. Headline (line break kept after the first sentence)

```text
Every AI coding tool can read your source code.
AppMap shows it what actually happened.
```

The words "actually happened" are wrapped in the existing `Em` component (magenta accent).

3. Subheadline paragraph

> Source code tells you what software could do. Runtime behavior tells you what it actually did. AppMap records every execution once, producing diagrams developers can understand and evidence AI can trust.

Note: the current subhead wraps "actually does" in `Em`. Since the emphasis now lives in the headline, the new paragraph renders as plain muted text with no `Em`. Say the word if you want "actually did" emphasized too.

4. Visual captions (chips under the hero video)

- "People see the map" becomes "The diagrams are for people"
- "Agents query the trace" becomes "The data is for the AI"

## Unchanged

Install buttons, the free/scale line, the video and poster, the "One run. Many views. Same ground truth." caption, and every other homepage section.

## Verification

Typecheck, then confirm the hero renders the new copy with no em-dashes or banned terms.