# Benchmarks page rebuild

Rewrite `src/routes/benchmarks.tsx` around one argument: real issues arrive as symptoms, so the benchmark must measure discovery of the root cause, not patch implementation after the clues are given. Single-file change. Dark palette, header, max width, typography, chart styling, and the `/get-appmap` link all stay.

## New page order

1. Hero (no numbers)
2. Why SWE-bench could not answer this question
3. What a real issue looks like (two-column comparison)
4. A benchmark designed to require diagnosis (five cards)
5. Runtime evidence preserved diagnosis under pressure (headline numbers + RCA chart)
6. One call can carry the evidence of an entire investigation (mechanism)
7. The cost-capability frontier (two labeled subsections: primary sweep, then 11-fixture suite)
8. What the results do and do not establish

Each block gets a distinct visual treatment so the page does not read as one long card grid: hero gradient band, card trio, two-column split panel, five-card methodology grid, stat cards plus bar chart, compact inline metric strip, cost bars plus table, prose limits section. Alternating `#0d0a1a` and `#16112b` backgrounds mark the six boundaries.

## Section-by-section changes

**Metadata.** Title becomes "AppMap Benchmark: Runtime Evidence on Ambiguous Enterprise Bugs". Description becomes "Real-world issues arrive as symptoms, not pre-solved bugs. In a private multi-module Java testbed with no solution leakage, runtime evidence preserved root-cause accuracy under tight tool-call budgets." Canonical URL unchanged. JSON-LD `datePublished` unchanged.

**Hero.** Eyebrow "Benchmarks" stays. H1 becomes exactly "Real-world issues are not well-defined bugs." Paragraph: "They arrive as symptoms. The agent still has to discover the mechanism, code location, execution path, and affected behavior before it can produce a reliable fix. We built this study to measure that diagnostic work directly." Supporting line: "That required moving beyond SWE-bench." All statistics removed from the hero.

**Why SWE-bench could not answer this question (new).** Intro plus three cards, with the exact supplied copy for "Public code can be familiar", "Triaged issues can reveal the answer", and "Patch success can hide weak diagnosis". Callout strip below: "SWE-bench asks whether an agent can resolve a known issue. This study asks whether runtime evidence helps an agent discover an unknown cause." No leakage percentages, no disparagement, "may" used throughout.

**What a real issue looks like (new).** Two-column split panel. Left "Post-triage benchmark issue" with the four listed traits. Right "Enterprise-style issue" leading with the symptom quote "Customers are being charged twice on retried payments." then its four traits. Caption: "The enterprise problem begins before the bug has been translated into engineering instructions." Stacks to one column on mobile.

**A benchmark designed to require diagnosis.** Replaces "A clean test, on purpose". Five cards with the supplied copy: private enterprise-style codebase, symptom-only issue reports, hidden reproducing test, two controlled lanes, performance corridor. Closing line: "The runtime recording is the sole experimental difference between the two RCA lanes."

**Runtime evidence preserved diagnosis under pressure.** Moves below methodology. Label above heading: "Primary two-fixture sweep, two Claude models, four budgets, N=8 per cell". Four stat cards: 100%, 28%, 94% vs. 62%, and 15+ -> 1, each with the supplied caption. The existing bar chart is kept with legend and prose relabeled: "AppMap runtime evidence" and "Code-only exploration". Every "static analysis" / "static baseline" string becomes "code-only exploration" or "code-only baseline"; the data values are unchanged.

**One call can carry the evidence of an entire investigation.** Replaces "Why it works". Body paragraph as supplied. Compact inline metric strip (not cards): "216 / 216 cells used get_call_tree", "1.09 average calls in cells that used it", "15+ search-and-read operations to reconstruct a comparable path statically". Closing line becomes "Higher information density means fewer tool calls, fewer tokens, less latency, and lower inference cost." No token-savings percentage.

**The cost-capability frontier.** Heading kept, split into two labeled subsections.
- "Matched performance in the primary sweep": "Where both lanes reached 100% verified-fix performance, the trace-augmented configuration reached it for approximately 3.4 times less spend." Explicitly labeled as the two-fixture primary sweep.
- "Generalization across 11 fixtures, three configurations": the existing cost bars and table, relabeled and re-valued to $1.161 / $0.309 / $0.567 per cell with 95% / 74% / 88% verified fixes, "3.8 times cheaper, 21 percentage points lower" and "2.0 times cheaper, 7 percentage points lower". Lead sentence: "The practical configuration is hybrid: use a compact model for high-density trace-based diagnosis and a frontier model for the structurally difficult implementation step." No claim that the all-compact configuration matched the frontier baseline suite-wide.

**What the results do and do not establish.** Replaces "What this study is, and is not". Covers: one internal study; Claude model family and one Claude Code agent loop; the 100% vs 28% primary result comes from two admitted fixtures across a 256-trajectory budget sweep; the economic generalization uses 11 fixtures and 264 trajectories; not yet independently replicated; RCA correctness is graded while verify-pass comes from a hidden executable test; SWE-bench leaderboard comparability is deliberately given up; the private symptom-only design reduces contamination and solution leakage at smaller scale than SWE-bench Verified; a compact model alone does not handle every difficult implementation and the hybrid fix stage is needed on the broader suite. The `/get-appmap` CTA stays in this section.

**Caveat component.** Becomes: "Internal study. Claude model family. One private enterprise-style testbed. Not yet independently replicated. Primary and suite-wide results are labeled separately below." The phrase "We publish the paper" is removed everywhere.

**Deletion.** The entire "Not our first benchmark." section, the 14.6% SWE-bench figure, and its supporting sentence are removed with no replacement claim.

## Decisions needed before build

**1. Paper button (publication blocker).** The file at `/research/runtime-rca.pdf` still contains unresolved `[cite]` placeholders, so linking to it publishes an uncited draft. The file is not deleted either way. Two options:
- A: change the button to "Paper available on request" pointing at a mailto link.
- B: hide the button entirely until a cited public version replaces the file.

**2. Structured-data author (proposal, not applied automatically).** Switch the Article `author` from Organization AppMap to Person Kevin Gilpin, with AppMap as `publisher`. Note: the current public PDF is bylined Kevin Gilpin and Elizabeth Lawler, so a two-author Person array may be more accurate. Confirm which form to use, or leave the author field as is.

## Verification before handoff

- H1 renders exactly "Real-world issues are not well-defined bugs."
- "Not our first benchmark" and 14.6% are gone.
- Primary two-fixture results and 11-fixture suite results are visibly separated and labeled.
- No generic "static analysis" phrasing remains.
- No 33% or 76% leakage statistics anywhere.
- The `[cite]`-placeholder PDF is handled per the chosen option.
- `/get-appmap` link intact.
- No em-dashes; no banned terms ("Navie", "Runtime Intelligence", "Behavioral Intelligence").
- Brand term is "AppMap Gold Trace(s)" wherever the concept appears.
- Screenshots at 1440 and 390 with no horizontal overflow; build passes.
