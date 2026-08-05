# Homepage reorder and copy pass

Homepage only. The /how-it-works thesis insertion is deferred to a separate language pass. HomeHero untouched. No cards, lists, stats, quotes, images, videos, buttons, badges, or metadata change.

## 1. src/routes/index.tsx

Reorder the sections below HomeHero to: PainStats, ReviewWhatAIDid, OneVsFifteen, ReviewLoop, BehavioralReview, TrustBar, Reviews, HowItWorksReveal, ClosingCTA.

## 2. ReviewWhatAIDid

- Headline becomes "One recording. See the system as it ran." (drops the Em emphasis, so the now-unused Em import is removed)
- Intro becomes "Follow the execution path, inspect the queries, and navigate the code objects involved, all from the same recorded run."

## 3. ReviewLoop

- Headline "Stop reviewing code. Start reviewing behavior." unchanged.
- Intro becomes "In code review, developers inspect the diagrams and AI tools query the evidence from the same recorded run. The team reviews behavior, not just the diff."

## 4. BehavioralReview

- Headline becomes "What runtime evidence can reveal."
- Intro unchanged.

## 5. HowItWorksReveal

- Headline unchanged.
- Intro becomes "AppMap captures a real application run as a structured recording. Developers explore it as maps, traces, and diagrams. AI tools query the same runtime evidence."
- SVG center labels change from "Behavioral" / "model" to "AppMap" / "recording".
- SVG aria-label becomes "Hub-and-spoke diagram. A central AppMap recording connects to six uses: Dependency map, Call tree, Sequence diagram, Your AI agent, Runtime review, and CI."
- Caption becomes "One recording. Every visual view and AI query draws from the same runtime evidence."
- No structural or visual diagram changes.

## 6. ClosingCTA

- Headline becomes "Understand what your software actually does."
- Intro becomes "Record a real application run once. See it as diagrams in your editor and give your AI tools the same runtime evidence. Start free in VS Code or JetBrains."

## Rules observed

No em-dashes. No banned terms. Homepage only.

---

# Customer-reference cleanup (homepage and /enterprise)

Remove all customer-specific or customer-inferable references. Do not name, rank, describe, or imply any individual customer, even anonymously. No replacement customer references. Only aggregate adoption, marketplace, open-source, community, or product proof points remain. This supersedes the earlier customer-reference verification workstream.

## Confirmed references to remove

### TrustBar (`src/components/sections/home/TrustBar.tsx`)
- Remove the cell "Top-4 / U.S. bank in production".
- The grid becomes three aggregate cells: "~140K active editor installs", "100K+ developer community", "2020 open source since". Grid classes adjust from four columns to three.

### /enterprise (`src/routes/enterprise.tsx`)
- Meta description: drop "Cleared at a top-4 U.S. bank." It becomes "Local by design. Airgapped and on-prem ready. Auditable, open-source clients."
- Hero paragraph: drop the final sentence "Cleared at a top-4 U.S. bank and in use at scale." The paragraph ends at "No data egress."
- Architecture and trust cards: delete the entire "Cleared where it is hardest" card (it names ranking, industry, geography, purchase year, renewal, and production status). The section keeps three cards: "Airgapped and on-prem ready", "No egress, by design", "Trust, but verify". No replacement card is added.

## Explicitly kept

- Marketplace review quotations and install and community counts (aggregate, non-customer).
- Partner and program badges in ClosingCTA (NVIDIA Inception, MongoDB, GitHub for Startups, TechCrunch), which are program affiliations, not customers.
- FINOS Waltz recordings and captions. Waltz is a public open-source project used as a demo subject, not a customer reference. Flagging it here for a yes or no from you; the default in this build is to keep it.

Nothing else on either page changes.