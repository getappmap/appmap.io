# Plain English language cleanup (copy only)

Scope: wording only. No positioning, structure, claims, pricing, technical meaning, or design changes. No em dashes. No banned terms.

Note on items 2 and 3: an earlier pass already removed "companion artifact" and "full-spectrum", so those exact strings no longer exist. Remaining work there is verification plus one clarity edit on /architecture.

## 1. /pricing (src/routes/pricing.tsx)

H1 stays as is ("Start free locally. Scale shared recordings across your team.").

| Current | Replacement |
| --- | --- |
| meta description: "...AppMap Central adds a shared, customer-controlled behavioral context library in your own infrastructure. Enterprise adds controlled deployment and support." | "...AppMap Central lets teams share and govern trusted AppMap recordings in infrastructure they control. Enterprise adds controlled deployment and support." |
| intro: "AppMap Central helps teams build and govern a shared behavioral context library across repositories and workflows." | "AppMap Central lets teams share and govern recordings of how their applications actually ran, across repositories and workflows." |
| bullet: "Normalized runtime findings that developers and AI agents can reuse" | "Recordings cleaned up so developers and AI agents can compare meaningful changes" |
| bullet: "A common behavioral context library across editors, command line, GitHub, and automation" | "A shared library of trusted AppMap recordings across editors, command line, GitHub, and automation" |
| bullet: "Team curation and governance of trusted runtime baselines" | "Team curation and governance of the recordings your team trusts as baselines" |
| card note: "One customer-controlled context library for a distributed, repository-native workflow." | "One shared library of trusted AppMap recordings, kept in your own repositories and developer environments." |

"There is no hosted platform." and "Runs entirely in infrastructure you control" stay, so no hosted repository, dashboard, or central data store is implied.

## 2. /architecture (src/routes/architecture.tsx)

"companion artifact" is already gone. One clarity edit:

| Current | Replacement |
| --- | --- |
| "Each baseline is a behavioral contract for one flow: the approved before-trace, a stable fingerprint, and the rules for what runtime noise to ignore." | "Each baseline is a set of files saved alongside your code for one flow: the approved before-trace, a stable fingerprint, and the rules for which timing noise and changing values to ignore before comparison." |

Unchanged: "Your source code stays the main content of the repo; .appmap travels alongside it." (already plain, and preserves that the source repository is canonical). Code block, file names, and comments untouched.

## 3. Homepage BehavioralReview card (src/components/sections/home/BehavioralReview.tsx)

Already reads "A review of your branch against how the code actually ran. Correctness, security, performance, and more." No change needed; verify only.

## 4. Golden AppMap trace definition (src/routes/how-it-works.tsx)

| Current | Replacement |
| --- | --- |
| "A Golden AppMap trace is a recorded run that your team has promoted into a reviewed baseline." | "A Golden AppMap trace is a recording your team has reviewed and trusts as a baseline." |

Later mentions on that page already say "the baseline". No "behavioral baseline" occurrences remain anywhere in site copy. Branded term, code paths, and gold-traces identifiers untouched.

## 5. Normalization language

Only two occurrences outside the benchmark page:
- pricing bullet "Normalized runtime findings..." (handled in section 1)
- architecture code block comment `normalization.yml  # volatile fields to ignore (timestamps, ids, durations)`, a real filename, left unchanged; the surrounding prose is reworded in section 2 to "timing noise and changing values to ignore before comparison".

Benchmarks page and all sanitization/security explanations untouched.

## Untouched by design

"One run. Many views. Same ground truth.", telemetry, sanitize, MCP, SQL, CI, pull request, sequence diagram, the homepage hero, benchmark and security claims, and the Community / Central / Enterprise entitlements.

## Verification after approval

- grep confirms 0 remaining "behavioral context library", "behavioral baseline", "companion artifact", "full-spectrum", "Normalized runtime"
- no em dashes added, no banned terms
- typecheck clean; /pricing, /architecture, /how-it-works, and home return 200