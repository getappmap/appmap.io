# Golden AppMap trace terminology alignment

## Goal

Make "versioned baseline" the primary definitional term for a Golden AppMap trace, and treat trust as the outcome of the team's normal review and merge process rather than a competing label. Text-only edits; no technical names, skill names, commands, file paths, route filename, URL slug, or the phrase "Golden AppMap trace" change. No em-dashes, no banned terms (Navie, Runtime Intelligence, Behavioral Intelligence).

## Changes

### 1. src/routes/blog.golden-appmap-traces-runtime-context.tsx

**1a. FAQ answer (line 20)** — definition of a Golden AppMap trace.

Current:
```
a: "A sanitized AppMap recording that a team has selected, reviewed, and committed as the trusted baseline for a specific application path.",
```
Proposed:
```
a: "A sanitized AppMap recording that a team has selected, reviewed, and committed as the versioned baseline for a specific application path.",
```

**1b. Hero image alt text (line 142)**

Current:
```
alt="Branded title card reading Golden AppMap Traces: a trusted baseline for AI-era code review, on a dark gradient with the AppMap wordmark."
```
Proposed:
```
alt="Branded title card reading Golden AppMap Traces: a versioned baseline for AI-era code review, on a dark gradient with the AppMap wordmark."
```

**1c. Body, team selected as the baseline (lines 152-153)**

Current:
```
team has selected as the trusted baseline.
```
Proposed:
```
team has selected as the versioned baseline.
```

**1d. Body, team agrees on the baseline (line 161) plus new sentence (after line 162)**

This is where repository storage is explained, so the new sentence lands here.

Current:
```
is a trusted baseline the team agrees on, kept under version control
alongside the code it describes.
```
Proposed:
```
is a versioned baseline the team agrees on, kept under version control
alongside the code it describes. The baseline is versioned with the code and
becomes trusted through the team's normal review and merge process.
```

### 2. src/routes/blog.index.tsx — meta description tagline (line 8)

This instance is NOT the definitional noun; it is a topic keyword in the blog listing description. Proposed to align with the rule that trust is an outcome, not a label. Flagged for your approval since it is slightly outside the strict definitional scope.

Current:
```
"Writing from the AppMap team on runtime evidence, trusted baselines, and reviewing AI-generated code."
```
Proposed:
```
"Writing from the AppMap team on runtime evidence, versioned baselines, and reviewing AI-generated code."
```

### 3. src/components/sections/home/BehavioralReview.tsx — homepage card body (line 22)

Only the first clause changes; the rest of the card is untouched.

Current:
```
body: "Promote an AppMap recording into a trusted baseline. AppMap compares before and after, so every reviewer sees whether behavior held or changed as intended.",
```
Proposed:
```
body: "Promote an AppMap recording into a versioned baseline. AppMap compares before and after, so every reviewer sees whether behavior held or changed as intended.",
```

## Verification

- `rg -n "trusted baseline" src/routes/blog.golden-appmap-traces-runtime-context.tsx src/routes/blog.index.tsx src/components/sections/home/BehavioralReview.tsx` returns no definitional uses (all expected conversions applied).
- `rg -n "—|Navie|Runtime Intelligence|Behavioral Intelligence"` on the three edited files returns nothing.
- Typecheck passes clean (`tsgo`).
- "Golden AppMap trace" and all technical names, commands, file paths, and the URL slug remain unchanged.

## Open decision

Please confirm whether to include **change 2** (blog.index.tsx meta description). If you prefer to keep "trusted baselines" there, I will leave it and apply only changes 1a-1d and 3.
