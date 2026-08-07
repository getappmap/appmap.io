# Egress language consistency pass

The site states the no-egress claim four different ways. The accurate scoped model, already used correctly in the Golden AppMap traces blog post, becomes the single source:

> AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI. If you use a hosted AI agent, selected context may be sent to that provider under its configuration and terms.

Every claim below is rewritten from that core sentence, shortened where the slot requires it. Nothing else changes.

## 1. src/routes/how-it-works.tsx, FAQ answer (line 33)

Current:
```
a: "No. AppMap records and analyzes behavior locally. Recordings stay with your editor and your repository by default, with no egress.",
```
Proposed:
```
a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay with your editor and your repository. If you use a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
```

## 2. src/routes/security-faq.tsx, FAQ answer (line 7)

Current:
```
a: "No. AppMap records and analyzes behavior locally. Recordings stay with your editor and your repository by default, with no egress.",
```
Proposed (identical to change 1, so the two FAQs match exactly):
```
a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay with your editor and your repository. If you use a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
```

## 3. src/routes/enterprise.tsx, meta title and description (lines 25 and 27)

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

## 4. src/routes/enterprise.tsx, hero headline and subhead (lines 245 to 250)

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
remains a separate, configurable channel.
```

## 5. src/routes/enterprise.tsx, card titled "No egress, by design" (lines 65 and 66)

Current title:
```
title: "No egress, by design",
```
Proposed title:
```
title: "No AppMap cloud, by design",
```

Current body:
```
body: "AppMap does not send recordings to any AppMap-operated cloud. Recordings stay on the developer machine and in your repositories unless your organization centralizes them on infrastructure you control. Your AI tools are a separate channel: a hosted agent may send selected context to its own provider under that provider's terms, and enterprise deployments can restrict AppMap evidence to approved or self-hosted AI endpoints.",
```
Proposed body:
```
body: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay on the developer machine and in your repositories unless your organization centralizes them on infrastructure you control. Your AI tools are a separate channel: if you use a hosted AI agent, selected context may be sent to that provider under its configuration and terms, and enterprise deployments can restrict AppMap evidence to approved or self-hosted AI endpoints.",
```

## 6. src/routes/enterprise.tsx, deployment diagram caption (lines 85 and 140)

Current caption constant:
```
const diagramCaption =
  "Local by design. AppMap operates no cloud data plane for recordings, so they stay in your environment. Deployment telemetry is configurable to route to your internal observability stack, such as Splunk, so operational data stays inside too.";
```
Proposed:
```
const diagramCaption =
  "AppMap operates no cloud data plane for recordings, so recording, sanitization, and comparison run in your environment. Deployment telemetry is configurable to route to your internal observability stack, such as Splunk, so operational data stays inside too. If you use a hosted AI agent, selected context may be sent to that provider under its configuration and terms.";
```

Current in-diagram boundary label (line 140):
```
Your environment. No application data egress.
```
Proposed:
```
Your environment. No AppMap cloud data plane.
```

## 7. Additional unqualified claim found in the audit

src/routes/enterprise.tsx, card "Airgapped and on-prem ready" (line 62). "no outbound dependency" reads as an absolute claim that also covers the AI channel.

Current:
```
body: "AppMap runs inside your environment with no outbound dependency. Enterprise deployments support offline activation and internal distribution of the clients. It fits airgapped and on-prem deployments where data cannot leave the network.",
```
Proposed:
```
body: "AppMap runs inside your environment with no outbound dependency on AppMap services. Enterprise deployments support offline activation and internal distribution of the clients. It fits airgapped and on-prem deployments where data cannot leave the network, paired with a self-hosted AI endpoint.",
```

## Checked and deliberately left unchanged

- src/routes/blog.golden-appmap-traces-runtime-context.tsx lines 28, 40, and 43 to 45: already the scoped model, and the verbatim source for this pass.
- src/routes/how-it-works.tsx line 38 and src/routes/security-faq.tsx line 11: storage and sanitization detail, no egress claim.
- src/routes/pricing.tsx lines 5 and 95 ("start free locally"): a licensing scope statement, not a data-egress claim.
- src/routes/enterprise.tsx line 305 ("generated locally"): describes where evidence is produced, not where data travels.

## Verification after the build

- `rg -n -i "no egress|no data egress|with no egress|no outbound dependency\." src/` returns nothing.
- Every rewritten slot contains the phrase "AppMap-operated cloud" or "no cloud data plane for recordings".
- `rg -n "—|Navie|Runtime Intelligence|Behavioral Intelligence" src/` returns nothing.
- Typecheck passes clean.

## Rules applied

No em-dashes. No banned terms. Golden AppMap trace file paths untouched. No layout or styling changes.