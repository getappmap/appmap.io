# Language audit: violations by rule

Audit only. No files changed. Each item lists file, exact sentence as it renders today, where it renders, and the minimal compliant replacement.

## Rule 1: record is a verb, trace is the artifact (no "recording/recordings" as nouns)

1. src/routes/cli-quickstart.tsx:52 (step body, install step)
   Now: "It configures the recording agent for Java, Python, Ruby, or Node and writes appmap.yml."
   Replace: "It configures the AppMap trace agent for Java, Python, Ruby, or Node and writes appmap.yml."

2. src/routes/security-faq.tsx:7 (FAQ answer, cloud question)
   Now: "Recording, sanitization, and comparison run in your developer environment or CI."
   Replace: "AppMap records, sanitizes, and compares traces in your developer environment or CI."

3. src/routes/how-it-works.tsx:33 (FAQ answer, cloud question)
   Now: "Recording, sanitization, and comparison run in your developer environment or CI, and AppMap traces are recorded locally."
   Replace: "AppMap records, sanitizes, and compares traces in your developer environment or CI, and records traces locally."

4. src/routes/architecture.tsx:72 (body paragraph under hero)
   Now: "Recording, exploration, diagrams, and MCP access all start locally, and most agent interaction happens there."
   Replace: "AppMap records traces locally, and exploration, diagrams, and MCP access start there, where most coding agent interaction happens."

5. src/routes/enterprise.tsx:85 (diagram caption constant)
   Now: "Recording and comparison happen in your environment."
   Replace: "AppMap records and compares traces in your environment."

## Rule 2: coding agent is the product actor ("AI" only for market/category)

6. src/components/sections/home/PainStats.tsx:65 (closing paragraph)
   Now: "AppMap gives developers and AI agents runtime evidence as they work..."
   Replace: "AppMap gives developers and coding agents runtime evidence as they work, so they can investigate calls, queries, exceptions, and side effects before the change merges."

7. src/components/sections/home/ReviewLoop.tsx:114 (paragraph under the PR block)
   Now: "Developers can inspect the diagrams. AI tools can query the underlying traces."
   Replace: "Developers can inspect the diagrams. Coding agents can query the same traces."
   (This also restores the required pairing wording, Rule 3.)

8. src/routes/enterprise.tsx:66 (FAQ/card body, cloud block)
   Now: "Your AI tools are a separate channel: if the team chooses a hosted AI agent, selected context may be sent to that provider..."
   Replace: "Your coding agent is a separate channel: if the team chooses a hosted coding agent, context sent to that provider is governed by its configuration and terms..."

9. src/routes/security-faq.tsx:7 and src/routes/how-it-works.tsx:33 (FAQ answers, same clause)
   Now: "If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms."
   Replace: "If the developer uses a hosted coding agent, context sent to that provider is governed by its configuration and terms."

10. src/routes/cli-quickstart.tsx:76 (step title)
    Now: "Connect your AI agent"
    Replace: "Connect your coding agent"

11. src/routes/enterprise.tsx:162,164 (deployment diagram pill label and comment)
    Now: pill label "AI agent"
    Replace: "Coding agent"

12. src/routes/team.tsx:45 (Kevin bio)
    Now: "...software analysis, and AI agent workflows."
    Replace: "...software analysis, and coding agent workflows."

## Rule 4/5: Gold Traces are a representative set; the skill identifies and maintains, developers never select or promote

13. src/routes/architecture.tsx:6 (meta description) and :72
    Now: "Selected traces travel with the code as versioned AppMap Gold Traces..."
    Replace: "The Gold Traces skill identifies important paths, and those traces travel with the code as versioned AppMap Gold Traces, available to developers and coding agents."

14. src/routes/architecture.tsx:38 (diagram label note)
    Now: "selected traces persist here"
    Replace: "Gold Traces persist here"

15. src/routes/architecture.tsx:44 (directory tree comment)
    Now: "manifest.yml            # the selected test cases"
    Replace: "manifest.yml            # the Gold Trace set"

16. src/routes/architecture.tsx:118 (body paragraph)
    Now: "Git gives selected traces a longer life, so future developers and agents can reuse important behavior..."
    Replace: "Git gives the Gold Trace set a longer life, so future developers and coding agents can reuse important behavior instead of reconstructing it from source code."

17. src/routes/enterprise.tsx:66 (cloud block)
    Now: "AppMap Gold Traces are the subset that teams commit to git as shared context..."
    Replace: "AppMap Gold Traces are the representative set the Gold Traces skill maintains, which the team versions in git as shared context, sanitized before they are committed."

## Rule 6: head revision and base revision, never "baseline"

18. src/components/sections/home/ReviewLoop.tsx:110 (intro to the PR block)
    Now: "...whether the result still matches the AppMap Gold Trace baseline."
    Replace: "...how the Gold Traces for the head revision compare with the Gold Traces for the base revision."

19. src/routes/architecture.tsx:115 (body paragraph)
    Now: "AppMap Gold Traces let important runtime behavior travel forward with the repository as a versioned baseline."
    Replace: "AppMap Gold Traces let important runtime behavior travel forward with the repository as a versioned set."

20. src/routes/enterprise.tsx:16 (card heading)
    Now: "Governed behavior baselines"
    Replace: "Governed Gold Trace sets"

21. src/routes/enterprise.tsx:17 (card body)
    Now: "Each baseline is reviewed and versioned in your repository..."
    Replace: "Each Gold Trace set is reviewed and versioned in the team's repository, so behavioral contracts are auditable and owned, not ad hoc."

22. src/routes/enterprise.tsx:13 (FAQ answer)
    Now: "No full enterprise-stack build required to capture a baseline."
    Replace: "No full enterprise-stack build required to record the first traces."

## Rule 8: umbrella nouns removed (ground truth, engineering memory)

23. src/routes/get-appmap.tsx:6 (meta description) and :44 (hero paragraph)
    Now: "...every path ends at the same ground truth."
    Replace: "...every path ends at the same traces."

24. src/routes/architecture.tsx:118 (body paragraph)
    Now: "It is repository-native engineering memory, versioned and reviewed like the code itself."
    Replace: "It is a repository-native Gold Trace set, versioned and reviewed like the code itself."

25. src/routes/enterprise.tsx:66 and :62 (cloud and airgap blocks)
    Now: "...restrict AppMap runtime context to approved or self-hosted AI endpoints." / "...paired with a self-hosted AI endpoint."
    Replace: keep "AI endpoint" only if it means the model provider category. Compliant as a category statement; flagged for confirmation, no change proposed.

## Rule 10: trace travel and sanitization must not overgeneralize

26. src/routes/pricing.tsx:7 (meta description) and :95 (hero paragraph)
    Now: "...traces, diagrams, MCP context, and AppMap Gold Traces versioned in your repository."
    Replace: "...traces and diagrams locally, MCP context for coding agents, and AppMap Gold Traces the team can version in the repository."
    Reason: current phrasing reads as if versioning is automatic rather than a team choice.

27. src/routes/pricing.tsx:61 (Community bullet)
    Now: "AppMap Gold Traces, versioned with the code"
    Replace: "AppMap Gold Traces, which the team can version with the code"

## Rule 11: pricing stated consistently (Community free including team Gold Traces, Professional $15 per developer per month support, Enterprise organizational control)

28. src/routes/pricing.tsx:5 (page title) and :7 (meta description)
    Now: "Pricing: Free for Developers and Teams. Enterprise for Controlled Deployment. | AppMap" and a description that names only Community and Enterprise.
    Replace title: "Pricing: Community free, Professional support, Enterprise control | AppMap"
    Replace description: "Community is free for developers and teams, including AppMap Gold Traces. Professional is $15 per developer per month for priority support. Enterprise adds organizational control and deployment."

29. src/routes/pricing.tsx:95 (hero paragraph)
    Now: "AppMap is free for developers and teams... Enterprise adds controlled deployment and support."
    Replace: "Community is free for developers and teams, including AppMap Gold Traces. Professional is $15 per developer per month and adds priority support. Enterprise adds organizational control, deployment, and support."

30. src/routes/index.tsx:70 and :77 (JSON-LD offer descriptions)
    Now: Professional "For an individual developer who wants AppMap with priority support. Priced per developer per month."
    Replace: "For a developer who wants priority support. $15 per developer per month."
    Enterprise line is compliant.

## Rule 7 and 9: before merge, evidence phrasing

Zero violations found. "before merge" is used consistently in HomeHero, PainStats, HowItWorksReveal, and ReviewWhatAIDid. PainStats.tsx:30 "The code is shipping. Confidence is not." is the allowed industry-problem use of shipping. HowItWorksReveal.tsx:52 "Canary / post-deploy" is a labeled contrast with other tools, not an AppMap scope claim. No instance of stored, committed, selected, or queried evidence; the two locked lines are intact.

## Rule 12: explicit agency

Covered by the replacements above (items 2 to 5, 13, 16, 17, 21). No additional standalone violations.

## Not audited

release-notes, blog, benchmarks study terminology and measured claims, per the stated exclusions.
