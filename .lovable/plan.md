# Opening thesis on /how-it-works, plus homepage narrative reorder

## Part 1: /how-it-works opening thesis

Insert one new paragraph between the H1 "How AppMap works." and the existing introductory paragraph:

> Source code tells you what software could do. Runtime behavior tells you what it actually did.

Styling: a paragraph element, larger and brighter than the intro (about 22px, ink color #f2effb, semibold, max width 820px), placed above the existing muted intro paragraph. Not an H2, not a second page title. Nothing else on that page changes.

## Part 2: Homepage reorder and copy

Current order below HomeHero: ReviewLoop, PainStats, OneVsFifteen, ReviewWhatAIDid, BehavioralReview, TrustBar, Reviews, HowItWorksReveal, ClosingCTA.

Target order: PainStats, ReviewWhatAIDid, OneVsFifteen, ReviewLoop, BehavioralReview, TrustBar, Reviews, HowItWorksReveal, ClosingCTA.

Only `src/routes/index.tsx` (ordering) and the headline or intro paragraph of the components below change. No cards, feature lists, statistics, quotations, diagrams, or buttons are touched.

### PainStats
- Current position 2, proposed position 1.
- Headline "The code is shipping. The confidence is not." stays unchanged.
- Intro paragraph unchanged.
- Reason: the trust gap is the problem the whole product answers, so it opens the page instead of following a review-specific loop.

### ReviewWhatAIDid
- Current position 4, proposed position 2.
- Current headline: "Review what your AI actually did."
- Proposed headline: "One recording. Everything a developer needs to see."
- Intro paragraph changes.
- Proposed intro: "One run of your application produces the call tree, the queries, and the data behind them. Read what the software actually did, whether a person wrote it or an agent did."
- Reason: this is the first payoff after the problem. In the new narrative it demonstrates developer understanding from a single recording rather than an AI-review-only feature. The Em emphasis moves onto "actually did" in the intro so the strong phrase survives.

### OneVsFifteen
- Current position 3, proposed position 3.
- Headline "One query, not fifteen." unchanged.
- Intro paragraph unchanged.
- Reason: it already frames the same recording as what the AI gets, and now sits directly after the human view, forming the human-then-agent pair.

### ReviewLoop
- Current position 1, proposed position 4.
- Headline "Stop reviewing code. Start reviewing behavior." stays unchanged.
- Intro paragraph changes.
- Proposed intro: "Code review is where developers and AI need the same evidence. AppMap gives both sides the record of what the change actually does, not just what the diff says."
- Reason: the headline is the strongest line on the page and now lands in the correct payoff position, so it is preserved verbatim. The intro was the one place that framed the entire company as vibe-coding review, so it is rewritten to introduce review as an application of the shared recording.

### BehavioralReview
- Current position 5, proposed position 5.
- Current headline: "Behavioral review."
- Proposed headline: "What behavioral review covers."
- Intro paragraph unchanged.
- Reason: after ReviewLoop names review as the workflow, this section reads as breadth and payoff rather than a fresh product definition.

### TrustBar
- Current position 6, proposed position 6. No copy changes.

### Reviews
- Current position 7, proposed position 7. No copy changes.

### HowItWorksReveal
- Current position 8, proposed position 8.
- Headline "The reason this works is simple." unchanged, intro unchanged.
- Reason: it already explains the single recording underneath every output, which is exactly the role the new order asks of it.

### ClosingCTA
- Current position 9, proposed position 9.
- Current headline: "Understand AI-generated code before you trust it."
- Proposed headline: "Understand what your software actually does."
- Intro paragraph unchanged; it already says "start understanding what your software actually does".
- Reason: the close should carry the company-level promise. AI code review stays the leading use case earlier on the page rather than the final definition.

## Rules observed

No em-dashes. No banned terms. HomeHero untouched. No pages other than /how-it-works and the homepage.