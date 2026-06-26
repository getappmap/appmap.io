Apply these exact, additive edits only. Preserve the three approved deviations (3-card PainStats, removed closing line, trimmed OneVsFifteen / ReviewWhatAIDid). No em-dashes; keep "actually does" magenta via `<Em>`.

### 1. HomeHero

File: `src/components/sections/home/HomeHero.tsx`

- Eyebrow → `Runtime evidence for AI code review`
- H1 → unchanged
- Subhead → exact copy with `<Em>actually does</Em>`:
  > AppMap records what your software actually does as it runs, while you work in your editor. It turns every AI-generated change into visual runtime evidence people can inspect and agents can query, so reviewers can trust the behavior before they approve the change.
- Side captions → `People see the map` and `Agents query the trace`
- Add centered caption beneath: `One run. Many views. Same ground truth.`

### 2. ReviewLoop

File: `src/components/sections/home/ReviewLoop.tsx`

After the existing supporting paragraph ending with "...behavioral evidence of what the change does.", add a compact callout card (border `var(--color-am-line)`, bg `var(--color-am-card)`, rounded, readable padding) with exact copy:

> For AI-generated software, governance needs evidence outside the AI's own reasoning. AppMap provides it: independent runtime evidence observed from the running system. The agent can explain the evidence; it does not create it.

### 3. /enterprise

File: `src/routes/enterprise.tsx`

Add a third card to the bottom grid (alongside "Start without CI" and "Governed behavior baselines") with identical card styling.

- Heading: `Independent runtime evidence`
- Body:
  > Architecture governance cannot rely on the AI grading its own homework. AppMap adds an independent evidence layer inside your environment: runtime behavior captured from the application itself, outside the AI's reasoning loop. The agent can consume it, the reviewer can see the same evidence, and the organization can govern against it. The AI explains the evidence; it does not create the evidence.

### 4. llms.txt

File: `public/llms.txt`

Under "Why it matters for AI agents" (create the section header if absent), just before any caveat line, insert exact bullet:

> - Independent evidence: the trace is observed from the running application, outside the agent's own reasoning. The agent can explain the evidence; it does not create it. This is what makes AI-generated change reviewable and governable: the AI is checked against evidence it did not invent.

### 5. HowItWorksReveal verify

File: `src/components/sections/home/HowItWorksReveal.tsx`

Confirm the body sentence reads exactly:

> Every map, every review, every answer, every golden trace is a view of that one model.

Already verified correct. No change.