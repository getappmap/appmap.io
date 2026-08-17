# Site-wide language remediation

Fix the copy violations found in the language audit. Copy-only work: no layout, component structure, data, or backend changes. Standing rules stay in force (no em-dashes; never "Navie", "Runtime Intelligence", "Behavioral Intelligence").

## Phase 1: terminology drift (Rules 1, 2, 5)

The highest-volume and most visible issues.

Rule 1, singular-recording framing. Rewrite so the artifact is always a trace or a set of traces:
- ReviewLoop step title and trace-diff caption
- ReviewWhatAIDid card body and its image alt text
- how-it-works MCP cards ("the run" becomes "the traces")
- how-it-works "Each recorded run adds another trace to the local set"
- RuntimeReviewGraphic step 2 line
- benchmarks "The runtime recording is the sole experimental difference"

Rule 2, "recording" as artifact noun. Replace with "trace"/"traces" in prose on architecture, security-faq, pricing, cli-quickstart, release-notes, and benchmarks, including the architecture, security-faq, and pricing meta descriptions and the security-faq hero subhead. Leave act-sense uses ("Recording, sanitization, and comparison run in your environment") and the product label "recording agent" unchanged.

Rule 5, comparison language. Standardize on Gold Traces for the head revision against Gold Traces for the base revision:
- ReviewLoop "compares them with the base revision"
- how-it-works graphic alt text
- get-appmap "Gold Trace sets"
- ReviewLoop "trusted baseline" becomes the locked Gold Trace phrasing

## Phase 2: truth and scope (Rules 6, 7, 8)

Rule 6, Gold Trace subset truth. Rewrite enterprise "Promote only the high-value flows", architecture "Approved baselines", and the architecture passages that read as a distinct artifact class, so Gold Traces are representative traces selected by the skill, sanitized, and committed. Release-notes entries keep their wording since they describe past releases.

Rule 7, environment scope. Remove production-readable phrasing: how-it-works "or a running process", HowItWorksReveal "every recorded run", and the "production-safe detail" chip label in the comparison visual.

Rule 8, agency. Make the actor explicit in the ReviewLoop step titles, and turn the enterprise imperative chore-framing into descriptive copy.

## Phase 3: internals, calibration, pronouns, merge language (Rules 9, 10, 11, 12)

Rule 9, implementation internals. Remove or generalize javaagent flags, tmp/appmap paths, gold_traces paths in prose, and the architecture directory tree block. Keep appmap.yml and MCP query names. Keep the CLI quickstart usable by describing where traces are written without the literal internal path, or drop that sentence.

Rule 10, calibration. Soften the absolutes: "See what each change did", "every recorded run", "Changing the baseline is a pull request, not a silent overwrite", and the enterprise "The AI explains the evidence" line.

Rule 11, pronouns. Pick one addressee per page and hold it: developer "you" on how-it-works, security-faq, cli-quickstart, and get-appmap; team framing on pricing where plans are described; organization framing on enterprise.

Rule 12, merge language. Replace ship/downstream/deployment framing with merge framing in PainStats, the ReviewWhatAIDid closing caption, and HowItWorksReveal. Release-notes "What AppMap has shipped" stays, since it describes releases rather than the review boundary.

Rule 3, evidence policy, rides along with each phase: keep "runtime evidence" as positioning, and rewrite the constructions where evidence is the thing stored, queried, or carried (architecture, security-faq, enterprise, compatibility, ReviewLoop).

## Delivery

Each phase is a separate pass with a build run and the changed passages quoted back. Rule 4 needs no work. Approve the whole sequence, or say "phase 1 only" and the rest stays queued.

## Open question, tracked separately

The earlier question about moving developer validation higher on the homepage is a layout and narrative-order change, not copy. It is not in this plan and can be handled on its own.