# Reposition AppMap Central and Enterprise

## Goal

Correct the commercial positioning of AppMap Central and Enterprise on `/pricing` and `/enterprise`. AppMap is a context creator and behavioral data library, not a CI review and reporting product.

Locked product model:

- Community creates and uses runtime context locally.
- AppMap Central gives teams a shared, customer-controlled behavioral context library across developer environments, repositories, GitHub, and automation.
- Enterprise adds controlled deployment, packaging, configuration, integrations, training, support, and SLAs.
- AppMap operates no hosted data platform for recordings. There is no organization-level AppMap dashboard or hosted roll-up today.
- CI and pull-request review are ways to consume AppMap context, not the definition of AppMap Central.
- AppMap is not a reporting or observability system.

Rules: no em-dashes, no banned terms ("Navie", "Runtime Intelligence", "Behavioral Intelligence").

## Changes

### src/routes/pricing.tsx

**1. Meta description (lines 5-6)**

From:
"Recording, diagrams, and AI evidence are free for every developer, locally. AppMap Central adds shared traces, CI history, and review in your own infrastructure. Enterprise adds private deployment."

To:
"Recording, diagrams, and AI evidence are free for every developer, locally. AppMap Central adds a shared, customer-controlled behavioral context library in your own infrastructure. Enterprise adds controlled deployment and support."

**2. AppMap Central audience line (line 131)**

From: "Behavioral review for teams, powered by shared Golden AppMap traces."

To: "Shared runtime context for developers, AI agents, and automation."

**3. AppMap Central feature list (`central` array, lines 65-72)**

Replace all six current entries with:

1. "Sanitized Golden AppMap traces stored with the code they describe"
2. "Shared trace coverage across important application paths"
3. "Normalized runtime findings that developers and AI agents can reuse"
4. "A common behavioral context library across editors, command line, GitHub, and automation"
5. "Team curation and governance of trusted runtime baselines"
6. "Runs entirely in infrastructure you control"

**4. AppMap Central card footer (lines 135-137)**

From: "Centralized policy and governance for a distributed, repository-native workflow. There is no hosted platform."

To: "One customer-controlled context library for a distributed, repository-native workflow. GitHub Actions and CI are optional workflows that can consume or maintain it. There is no hosted platform."

**5. Enterprise bullet 4 (`enterprise` array, line 78)**

From: "Centralized logging and telemetry routing into your observability systems"

To: "Configurable telemetry routing into your internal observability stack"

**6. Enterprise bullet 6 (`enterprise` array, line 80)**

From: "Custom engineering, training, and SLAs"

To: "Custom engineering, training, priority support, and SLAs"

### src/routes/enterprise.tsx

**7. Deployment diagram caption (line 68)**

From: "Local by design. AppMap operates no cloud data plane for recordings, so they stay in your environment. Diagnostics and telemetry route to your internal observability stack, such as Splunk, so operational data stays inside too."

To: "Local by design. AppMap operates no cloud data plane for recordings, so they stay in your environment. Diagnostics and telemetry are configurable to route to your internal observability stack, such as Splunk, so operational data stays inside too."

**8. "From pilot to policy" step 3 body (line 21)**

From: "The same review runs in your pipeline, and AppMap coaches each team to set it up for their own use. CI enforcement and telemetry routing are part of the enterprise service."

To: "The same review runs in your pipeline when you are ready, and AppMap coaches each team to set it up for their own use. CI enforcement and telemetry routing are configurable parts of the enterprise service."

**9. "Where the commercial line is" paragraph (lines 340-346)**

From: "AppMap is free at the developer's desk: the extensions, the CLI, the MCP server, and every recording they make. Paid plans begin with AppMap Central: shared Golden AppMap traces in your repositories, shared behavioral baselines, and review on pull requests across participating repositories, in CI or from each developer's environment. Enterprise adds supported private deployment, including air-gapped operation. If AppMap has already spread inside your organization, talk to us."

To: "AppMap is free at the developer's desk: the extensions, the CLI, the MCP server, and every recording they make. Paid plans begin with AppMap Central: a shared, customer-controlled behavioral context library built from sanitized Golden AppMap traces in your repositories, spanning developer environments, repositories, GitHub, and automation. Review on pull requests, in CI or from each developer's environment, is one way to consume that library. Enterprise adds controlled deployment, packaging, configuration, integrations, training, priority support, and SLAs, including air-gapped operation. If AppMap has already spread inside your organization, talk to us."

## What stays unchanged

- Enterprise page blocks on air-gapped readiness, no egress, and open-source clients.
- The deployment diagram structure, including the CI zone shown as one way to consume the context library.
- Pricing H1 and intro paragraph; they do not define Central through CI, review, or reporting.
- All Community card copy.

## Verification

- `rg` for the removed phrases ("CI history", "Behavioral review for teams", "Centralized logging") returns nothing in `src/`.
- Typecheck passes.
- Playwright screenshots of `/pricing` and `/enterprise` confirm the new copy renders.
- Confirm no em-dashes and no banned terms in the edited strings.
