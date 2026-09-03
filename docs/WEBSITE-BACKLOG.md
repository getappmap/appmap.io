# AppMap website backlog

Maintained alongside the site. Updated September 3, 2026, at commit 58d12cca. The language authority is the canonical language spec held by Elizabeth; this file tracks work, not rules.

## Operating rules that bind every change

1. Every copy or design change is shown to Elizabeth and receives an explicit go before it is sent to Lovable.
2. The blog is Kevin's. No creating, redirecting, restoring, or modifying blog routes or the footer Blog link.
3. Links and redirects are Kevin's. Report, do not fix.
4. Register: plain declarative sentences, question or plain-name headings, answer first, exact artifact names (gold_traces/, appmap.yml, sanitize), analogies only from development practice, limits stated flat, no em dashes, no semicolons, no "therefore" as a hinge. AppMap records, captures, observes. Never assembled, reconstructed, rebuilt.
5. Colors: red #F87171 for pain and defects, pink #FF07AA for AppMap claims and the baseline.
6. Benchmark numbers always carry the caveat block. Cost is "cost about 3.4 times as much." No customer named. No absolutes.
7. Machine output is never rewritten: the review card footer "gold traces 41 · server tests 427 passed" and the hero's chore(gold-traces) commit lines.

## Decisions waiting on Elizabeth

1. Pricing ladder v2: Team becomes self-serve managed deployment up to 100 developers (organization configuration, registered installs, telemetry routing); Enterprise keeps airgap, customization, training, SLA, named engineer, and above 100. Needs Kevin's nod.
2. Review card subtitle: add two sentences of application context (a multiplayer strategy game, a sale and a battle writing the same owner column).
3. Star-map label provenance: labels sourced from the AI-change taxonomy with real IDs, deterministic cycling, a source line under the caption. Parked until the taxonomy repo is public.
4. Naming: the adoption story on /gold-traces and the review card application stay unnamed by default.
5. Desktop hero lane cards may take the mobile variant's role labels ("coding", appmap-review "monitoring with Gold Traces").

## Decisions waiting on Kevin

1. Push main and deploy. Preview checks: hero at phone width, "Not a monitoring tool" on /enterprise, the pricing page.
2. Hero graphic: real agent names or generic bots; animated or static; retire the dependency-map video assets.
3. "React in alpha" needs a one-line public definition. Swift is alpha.
4. Redirect map: /docs/navie/* to current Navie docs; /videos/* to /blog/; /about, /careers, /contact-us, /brand-assets to /team and /book-a-demo; retire /blog/gallery and /appmap-analysis.
5. Confirm the /gold-traces public claims ("forty behaviors", "mostly AI agents").

## Backlog, in priority order

1. Post-deploy verification on production: hero paragraph string, "38 Gold Traces on main" in the mobile SSR, /gold-traces resolves, /pricing H1, /enterprise has one architecture figure. Then flip the marketplace listing PRs from draft (v13 patches; the VS Code patch is rebased onto the 0.143.0 listing on master).
2. Pricing v2 and the review card context, on Elizabeth's go.
3. Wave 4 style pass on /enterprise (seven register fixes, drafted, never sent): "Accelerate" to "Faster", "Telemetry on your terms" to "Telemetry routing", "Centrally managed, organization-registered" to "Built for managed environments", and four smaller fixes.
4. /how-it-works: add "What the review checks," the seven checks from the real review as a table.
5. /enterprise control ticker under the crosswalk table, from the graded "shows" tier of the controls pool, with the line "Seven standards above. Behind them, hundreds of controls." Needs the grading pass and Elizabeth's go.
6. Taxonomy repo: private repo under getappmap preserving the Sep 3 commit; then the provenance line and the stage-count number (381 of 496 shapes visible on the developer's machine) beside the timing table.
7. One sentence of the coding-versus-monitoring role vocabulary in the /how-it-works CI section.
8. The workflow PNG on /how-it-works predates the chip grammar: refresh it or move the lifecycle strip up.
9. Listing asset sequence.jpg is 800x401 and shows no SQL: recapture at 2x on a request with SQL.
10. Older items, still valid: team page, skills page, trust center, entitlement matrix, sanitization write-up, AppMap Personal, a /research route for the paper.

## Page state at commit 58d12ccae

Homepage: BranchingWorkflow hero (desktop graph, mobile variant A) → PainStats → EnterpriseStrip (star map) → Reviews → ReviewLoop (BehavioralReviewCard, video transition) → three views → BenchmarkStrip → TrustBar → HowItWorksReveal → BehavioralReview → ClosingCTA.

/enterprise: RuntimeBehaviorAnalysis (h1) → thesis callout → environment block with CTAs → Architecture and trust (DeploymentTopology) → Centrally managed (OSS-model sentence, cards, "When you need Enterprise", banner) → Not a monitoring tool → Security review → What the reviewer sees → From one workstation to CI.

/how-it-works: hero → workflow image + ReviewStepStrip → PR statement + BehavioralReviewCard → capture spine → views → MCP → compatibility → Gold Traces + LifecycleStrip + Waltz → coverage chips → FAQ.

/gold-traces: value-first opening → context section → three kinds of context → behavior contract → use cases → "What issues does the review find?" → mechanics → sanitization → format → adoption story → agent-team section → enterprise close.

/pricing: Community free to 25, Team $15 above 25 or supported CI, Enterprise for central deployment, "When you need Enterprise".
