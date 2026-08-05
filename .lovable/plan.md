## Scope

Only `src/components/sections/home/HomeHero.tsx`. Two text replacements, nothing else.

## 1. Headline

From:

```text
Every AI coding tool can read your source code.
AppMap shows it what actually happened.
```

To:

```text
Your AI reads the code.
AppMap shows what actually happened.
```

The line break after the first sentence stays. The `Em` component wraps only "actually happened".

## 2. Subheadline

Replace the current paragraph with:

> One recorded application run produces diagrams developers can understand and evidence AI can trust.

Plain muted text, no emphasis.

## Unchanged

Eyebrow, chips, install buttons, free/scale line, video, and the closing caption.

## Verification

Typecheck, then confirm the hero renders the new copy with no em-dashes or banned terms.