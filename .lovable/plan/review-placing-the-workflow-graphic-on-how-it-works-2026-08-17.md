# Review: placing the workflow graphic on /how-it-works

Read-only review of `src/routes/how-it-works.tsx` (469 lines). No edits made.

## Current page order

1. Hero (H1 "How AppMap works.", thesis line, intro paragraph)
2. "Every run, fully captured" (six-signal capture flow), the "Developers use the maps" line, the 1-vs-15 benchmark visual and caption
3. "Record once. Use it everywhere." (three view cards)
4. "How the traces reach your agent" (four MCP tool cards)
5. "See what your agent read" (CTA row)
6. "What is AppMap?"
7. "AppMap Gold Traces make behavior reviewable" (two FINOS Waltz panels, digest paragraph, provenance paragraph)
8. FAQ and JSON-LD

## 1) Recommended placement

Full-width band immediately after the hero section (ends line 167) and before "Every run, fully captured" (starts line 169).

The graphic is the page's answer to "how does this work", stated end to end: run, record, compare, outcome. Everything below it is detail on one of its three steps. Placed first, the capture section reads as detail on step 2 and the Gold Traces section as detail on step 3. Placed lower, the reader meets six capture signals before learning what the loop is for.

Band styling to match neighbors: `border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-16`, inner `mx-auto max-w-[1120px]`. The graphic carries its own title and subtitle, so no H2 above it. Add one muted line beneath it instead (section 3).

## 2) Copy that becomes redundant

- **Hero intro paragraph (163-165)**: "AppMap runs in development and CI. It records application runs as traces. Here is what the traces capture..." Step 1 already states development or CI and step 2 states recording. Trim rather than delete, so the hero stops previewing a workflow the graphic is about to show.
- **Gold Traces opening paragraph (347-349)**: the "AI agents curate the set... humans make the final call... new recording becomes the baseline" narrative is step 3 in prose. Reduce it to what the graphic does not say: what a Gold Trace is, and that the set is a representative subset.
- **Digest paragraph (384-386)**: "AppMap compares a structural digest of the run..." Implementation detail, excluded by the language rules, and the graphic now owns the comparison story. Remove entirely.
- **Second "Where recordings live" link (391-395)**: duplicates the link at 328. Keep one and relabel.
- **"See what your agent read" (318-333)**: keep. Optionally move it after the MCP section so it lands at the end of the loop. Not required.

Nothing else needs deleting. The two FINOS Waltz panels stay: they are real evidence for the two benign outcomes, and the graphic only names the outcomes.

## 3) Before and after copy

**Hero intro paragraph (163-165)**

Before:
> AppMap runs in development and CI. It records application runs as traces. Here is what the traces capture, the views they produce, and how that evidence reaches your AI agent.

After:
> Here is what a trace captures, the views you get from it, and how a coding agent reads the same trace.

**New line directly under the graphic**

> Each recorded run produces a trace. Gold Traces are the representative subset AppMap keeps for comparison.

**Capture section subhead (172-174)**

Before:
> Six signals tap off each run, all written into one trace. Each run adds a trace to the set.

After:
> Six signals tap off each run, all written into one trace.

The second sentence moves into the line under the graphic.

**Gold Traces opening paragraph (347-349)**

Before:
> An AppMap Gold Trace is a versioned baseline of how an important path in your software actually ran. As the code changes, AppMap re-records that path and shows what changed in the behavior. AI agents curate the set and review the differences, while humans make the final call. When the approved change is merged, the new recording becomes the baseline for what comes next.

After:
> A Gold Trace is a recorded run of an important path in your software, kept as the reference for what that path does. AppMap's skills and your coding agent build and maintain the set as the code changes. You review what changed and decide whether it is right.

**Digest paragraph (384-386)**: remove.

**Provenance paragraph (387-389)**

Before:
> AppMap Gold Traces do not require every developer to run the full enterprise stack. A baseline can come from a local run, a focused test, a smoke script, an API call, a QA environment, or an existing process in a development or QA environment.

After:
> You do not need to run the full stack to get a Gold Trace. A local run, a focused test, a smoke script, an API call, or a QA environment is enough.

**Link labels (329 and 393)**

Before: "Where recordings live →"
After: "Where traces live →"

Drop the duplicate at 391-395, keep the one in the CTA row.

**Meta description (5-6)**

Before:
> AppMap records application runs as traces in development and CI. Here is what the traces capture, the views they produce, and how that evidence reaches your AI agent.

After:
> AppMap records application runs as traces in development and CI, then compares them before merge. Here is what a trace captures and how a coding agent reads it.

## 4) The 1-vs-15 benchmark visual

Move it. It sits inside "Every run, fully captured" (225-277), interrupting a section about what gets captured with a claim about query efficiency. Its subject is agent access, so it belongs at the end of "How the traces reach your agent", after the four MCP cards (line 314), where `get_call_tree` has just been named.

Move the emphasized line at 221-223, "Developers use the maps. Coding agents query the same traces.", with it as the lead line above the two panels. The graphic already carries that pair of labels under step 2, so leaving a copy in the capture section repeats it twice within one screen.

## 5) Factual and terminology conflicts the graphic exposes

1. **"recording" used as a noun**: FAQ 3 question ("What does an AppMap recording contain?"), FAQ 6 ("does not send recordings"), FAQ 7 ("Recordings are captured locally"), both Waltz captions (365, 380), both alt texts (360, 375), and both link labels. Rule is record = verb, trace = artifact. All should read trace or traces.
2. **Manual selection by teams**, which the rules forbid. FAQ 6 (line 33): "Teams can select representative traces as AppMap Gold Traces, sanitize them, and commit those Gold Traces with the code." FAQ 7 (line 38): "Traces your team keeps as AppMap Gold Traces." Should say AppMap's skills and your coding agent build and maintain the set, sanitized before commit, and you version it with the code.
3. **"AI agent" where "coding agent" is meant**: description (6), hero (164), section heading and cards at 306, FAQ 1 and 4, "See what your agent read" body (322), and Gold Traces (348, "AI agents curate the set"). "AI-generated code" in FAQ 2 is fine, since it names the category.
4. **Structural digest paragraph (385)** is the exact implementation detail the rules exclude, and it conflicts with the graphic, which frames comparison as head Gold Traces against base Gold Traces.
5. **"baseline" as an artifact name** at 348 and 388 competes with Gold Trace. The graphic uses only Gold Traces plus head and base revisions. Reserve "base" for the revision.
6. **Missing local vs team framing**. The graphic shows `gold_traces/` in a repo tree beside the code, but the page never states the split. Worth one sentence: Gold Traces are useful to you locally as soon as they exist, and committing them is what lets the team and CI compare.
7. **Outcome vocabulary drift**: the graphic says "Changed as intended", the card at 369 says "Expected change". Recommend matching the graphic and renaming the card heading.
8. **Heading "Record once. Use it everywhere." (283)** sits oddly beside a graphic that emphasizes re-recording on every run. "One trace, many views." is more accurate.
9. **Capture card "SQL queries / Bindings and plan" (86)** claims a query plan; the views card at 130 says bindings and origin only. Verify the claim before the graphic draws attention to the pairing.
