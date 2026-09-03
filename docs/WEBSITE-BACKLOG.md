# AppMap website backlog

Maintained alongside the site. Updated September 3, 2026, evening, at commit f1ee5960. The language authority is the canonical language spec held by Elizabeth; this file tracks work, not rules.

## Operating rules that bind every change

1. Every copy or design change is shown to Elizabeth and receives an explicit go before it is sent to Lovable.
2. The blog is Kevin's. No creating, redirecting, restoring, or modifying blog routes or the footer Blog link.
3. Links and redirects are Kevin's. Report, do not fix.
4. Register: plain declarative sentences, question or plain-name headings, answer first, exact artifact names (gold_traces/, appmap.yml, sanitize), analogies only from development practice, limits stated flat, no em dashes, no semicolons, no "therefore" as a hinge. AppMap records, captures, observes. Never assembled, reconstructed, rebuilt.
5. Colors: red #F87171 for pain and defects, pink #FF07AA for AppMap claims and the baseline.
6. Benchmark numbers always carry the caveat block. Cost is "cost about 3.4 times as much." No customer named. No absolutes.
7. Machine output is never rewritten: the review card footer "gold traces 41 · server tests 427 passed" and the hero's chore(gold-traces) commit lines.
8. Crosswalk counts on /enterprise are our reading of each standard's public text. The grading and sources live in the project doc "enterprise-crosswalk-runtime-counts-2026-09-03". Any change to a count updates that doc first.

## Shipped September 3 (evening session)

/enterprise: removed "Not a monitoring tool", "Security review of AI code changes", and "What the reviewer sees". Struck the h1 support paragraph. Hero line is "Airgapped and on-prem by design." Crosswalk rebuilt: heading "Answers to the questions you are already asking", columns Standard / What it asks / Captured in dev and CI by AppMap, eleven rows in three groups (resilience, change control, security), caveat updated. Section "Adoption at scale: from one workstation to CI" with the call-tree figure in Step 1, its Book a Demo removed. Closing section is "AppMap Enterprise": one intro, three cards (Organization configuration, Organization-registered installs, Telemetry routing), banner with Book a Demo. Page has two Book a Demo buttons.

/how-it-works: review card subtitle names the multiplayer strategy game and the star sale versus battle. "See the trace as a map." removed. Gold Traces section moved to directly after the review card. The two MCP sections merged into "How the traces reach your agent" (id compatibility), with the pink line and the language list inside it.

## Decisions waiting on Elizabeth

1. Approaches table title on /enterprise. Current: "How teams do this today, and when". Proposed: "Why every check missed it".
2. /how-it-works Gold Traces heading: keep "Ground truth behavior, versioned with the code" or change to "The behavioral baseline, versioned with the code".
3. Pricing ladder v2: Team becomes self-serve managed deployment up to 100 developers; Enterprise keeps airgap, customization, training, SLA, named engineer, and above 100. Needs Kevin's nod.
4. Desktop hero lane cards may take the mobile variant's role labels.
5. Naming: the adoption story on /gold-traces and the review card application stay unnamed by default.

## Decisions waiting on Kevin

1. Push main and deploy. Preview checks: hero at phone width, /enterprise crosswalk at 390, /pricing, /how-it-works order.
2. Hero graphic: real agent names or generic bots; animated or static; retire the dependency-map video assets.
3. "React in alpha" needs a one-line public definition. Swift is alpha.
4. Redirect map: /docs/navie/* to current Navie docs; /videos/* to /blog/; /about, /careers, /contact-us, /brand-assets to /team and /book-a-demo; retire /blog/gallery and /appmap-analysis.
5. Confirm the /gold-traces public claims ("forty behaviors", "mostly AI agents").
6. Confirm the SOC 2 CC8.1 and CC7 counts in the crosswalk against the AICPA PDF (counts came from vendor reproductions).

## Backlog, in priority order

1. Post-deploy verification on production: hero paragraph string, "38 Gold Traces on main" in the mobile SSR, /gold-traces resolves, /pricing H1, /enterprise crosswalk renders with group rows. Then flip the marketplace listing PRs from draft.
2. Pricing v2 on Elizabeth's and Kevin's go.
3. /enterprise control ticker under the crosswalk, from the graded "shows" tier of the controls pool, with the line "Seven standards above. Behind them, hundreds of controls." Needs the grading pass and Elizabeth's go. Line count now reads eleven standards.
4. Taxonomy repo: private repo under getappmap preserving the Sep 3 commit; then the provenance line and the stage-count number (381 of 496 shapes visible on the developer's machine) beside the approaches table.
5. Workflow PNG on /how-it-works predates the chip grammar. Refresh it or retire it now that LifecycleStrip sits higher.
6. Listing asset sequence.jpg is 800x401 and shows no SQL: recapture at 2x on a request with SQL.
7. Older items, still valid: team page, skills page, trust center, entitlement matrix, sanitization write-up, AppMap Personal, a /research route for the paper.

## Cut

Wave 4 style pass on /enterprise (superseded by the rewrite). "What the review checks" table on /how-it-works. Coding-versus-monitoring vocabulary sentence in the CI section. Star-map label provenance (folded into the taxonomy item).

## Page state at commit f1ee5960

Homepage: BranchingWorkflow hero → PainStats → EnterpriseStrip (star map) → Reviews → ReviewLoop (BehavioralReviewCard with game context) → three views → BenchmarkStrip → TrustBar → HowItWorksReveal → BehavioralReview → ClosingCTA.

/enterprise: RuntimeBehaviorAnalysis (h1, thesis callout, star map, crosswalk, approaches table) → Enterprise hero with two CTAs → Architecture and trust (DeploymentTopology) → Adoption at scale: from one workstation to CI (two steps, two figures) → AppMap Enterprise (three cards, banner).

/how-it-works: hero → workflow image + ReviewStepStrip + BehavioralReviewCard → Gold Traces + LifecycleStrip + Waltz card → capture spine → coverage chips + example → How the traces reach your agent (MCP, pink line, languages) → FAQ.

/gold-traces, /benchmarks, /pricing: unchanged since the morning handoff.
