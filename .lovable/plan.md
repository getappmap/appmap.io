# No-egress language reconciliation

## The one scoped model

Taken from the cloud FAQ answer already live in `src/routes/blog.golden-appmap-traces-runtime-context.tsx` (line 40):

> AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.

Every replacement below is derived from that sentence, trimmed to fit the slot. The true, strong claims stay: AppMap operates no cloud data plane for recordings, and recordings stay in the customer environment. Only the implication that nothing ever leaves is removed.

## Audit result

Eight unqualified or absolute claims found in `src/`, all in three files. Four were named in the request; four more surfaced in the search.

---

## src/routes/how-it-works.tsx

### Change 1: cloud FAQ answer (line 33)

Current:
```
a: "No. AppMap records and analyzes behavior locally. Recordings stay with your editor and your repository by default, with no egress.",
```
Proposed:
```
a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay with your editor and your repository. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
```

---

## src/routes/security-faq.tsx

### Change 2: cloud FAQ answer (line 7)

Current:
```
a: "No. AppMap records and analyzes behavior locally. Recordings stay with your editor and your repository by default, with no egress.",
```
Proposed (word for word identical to change 1, so the two FAQs cannot drift):
```
a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay with your editor and your repository. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
```

---

## src/routes/enterprise.tsx

### Change 3: card title (line 65)

Current:
```
title: "No egress, by design",
```
Proposed:
```
title: "No AppMap cloud, by design",
```

### Change 4: card body under that title (line 66)

Already scoped, but reworded so it opens with the exact model sentence and matches the FAQ phrasing.

Current:
```
body: "AppMap does not send recordings to any AppMap-operated cloud. Recordings stay on the developer machine and in your repositories unless your organization centralizes them on infrastructure you control. Your AI tools are a separate channel: a hosted agent may send selected context to its own provider under that provider's terms, and enterprise deployments can restrict AppMap evidence to approved or self-hosted AI endpoints.",
```
Proposed:
```
body: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay on the developer machine and in your repositories unless your organization centralizes them on infrastructure you control. Your AI tools are a separate channel: if you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms, and enterprise deployments can restrict AppMap evidence to approved or self-hosted AI endpoints.",
```

### Change 5: deployment diagram boundary label (line 140)

Current:
```
Your environment. No application data egress.
```
Proposed:
```
Your environment. No AppMap cloud data plane.
```

### Change 6: deployment diagram caption constant (line 85)

This is the accessible title for the diagram, so it carries the scope the short label cannot.

Current:
```
const diagramCaption =
  "Local by design. AppMap operates no cloud data plane for recordings, so they stay in your environment. Deployment telemetry is configurable to route to your internal observability stack, such as Splunk, so operational data stays inside too.";
```
Proposed:
```
const diagramCaption =
  "AppMap operates no cloud data plane for recordings, so recording, sanitization, and comparison run in your environment. Deployment telemetry is configurable to route to your internal observability stack, such as Splunk, so operational data stays inside too. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.";
```

### Change 7: page meta title and description (lines 25 and 27)

"No Data Egress" in the title tag is the most quotable unqualified claim on the site.

Current:
```
const title = "AppMap Enterprise: Airgapped, On-Prem, No Data Egress";
const description =
  "Local by design. Airgapped and on-prem ready. Auditable, open-source clients.";
```
Proposed:
```
const title = "AppMap Enterprise: Airgapped, On-Prem, No AppMap Cloud";
const description =
  "AppMap operates no cloud data plane for recordings. Airgapped and on-prem ready. Auditable, open-source clients.";
```

### Change 8: hero headline and subhead (lines 245 and 248 to 250)

Current headline:
```
Runtime context that stays on the machine.
```
Proposed headline:
```
Runtime context that stays in your environment.
```

Current subhead:
```
For the VP standardizing how agents work, and the engineer who
has to vouch for it. Airgapped and on-prem by design. No data
egress.
```
Proposed subhead:
```
For the VP standardizing how agents work, and the engineer who
has to vouch for it. Airgapped and on-prem by design. AppMap
operates no cloud data plane for recordings, and your AI provider
stays a separate, configurable channel.
```

### Change 9: "Airgapped and on-prem ready" card body (line 62)

"no outbound dependency" with no object reads as an absolute claim that also covers the AI channel.

Current:
```
body: "AppMap runs inside your environment with no outbound dependency. Enterprise deployments support offline activation and internal distribution of the clients. It fits airgapped and on-prem deployments where data cannot leave the network.",
```
Proposed:
```
body: "AppMap runs inside your environment with no outbound dependency on AppMap services. Enterprise deployments support offline activation and internal distribution of the clients. It fits airgapped and on-prem deployments where data cannot leave the network, paired with a self-hosted AI endpoint.",
```

---

## Reviewed and left unchanged

- `src/routes/blog.golden-appmap-traces-runtime-context.tsx` lines 40 and 43 to 45: already the scoped model, and the source for this pass.
- `src/routes/how-it-works.tsx` line 38 and `src/routes/security-faq.tsx` line 11: describe where recording files are written and how they are sanitized. Storage facts, not egress claims.
- `src/routes/pricing.tsx` lines 5 and 95, "Start free locally": a licensing scope statement, not a data claim.
- `src/routes/enterprise.tsx` line 305, "generated locally and attached to the change": describes where evidence is produced, not where data travels.

## Verification after approval and build

- `rg -n -i "no egress|no data egress|no application data egress|no outbound dependency\." src/` returns nothing.
- Every rewritten slot contains "AppMap-operated cloud" or "no cloud data plane for recordings".
- The two FAQ answers in `how-it-works.tsx` and `security-faq.tsx` are byte identical.
- `rg -n "Navie|Runtime Intelligence|Behavioral Intelligence" src/` returns nothing, and no em-dash is introduced.
- Typecheck passes clean.

## Scope

Text only. No layout, styling, routes, file paths, or component structure change. No em-dashes, no banned terms.