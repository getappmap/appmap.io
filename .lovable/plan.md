## Plan: /pricing page + copy and nav updates

### (1) New route `src/routes/pricing.tsx`

`createFileRoute("/pricing")` with `head()`:
- title `Pricing | AppMap`
- description: `Free at the desk for every developer and for organizations under 250 employees. Enterprise support contract for standardization at scale.`
- matching og:title / og:description / og:url / twitter:card
- canonical `https://hello-bright-start-736.lovable.app/pricing`

Page structure (dark system: `bg-[#0d0a1a]`, `text-[#f2effb]`, `Header`, `Footer`, kicker + h1 scale matching `/get-appmap` and `/cli-quickstart`):

- **Kicker:** `PRICING`
- **Headline (h1):** `Free at the desk. Supported at scale.`

- **Pricing table:** two-column grid `md:grid-cols-2 gap-6 max-w-[1040px]`. Each column is a `rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8 flex flex-col` card containing:
  - Plan name (h2, `text-[22px] font-bold`)
  - Price row (`text-[40px] font-extrabold`)
  - Subtitle (muted `#a99fc7`)
  - Divider (`border-t border-[#2c2353]`)
  - Bullet list with pink check marks (inline SVG check)
  - Action button (full-width pink gradient) + optional secondary line

**Column 1 — Community**
- Price: `$0`
- Subtitle: `For every developer, and for organizations under 250 employees.`
- Bullets:
  - Sequence diagrams, dependency maps, flame graphs, and trace views
  - Runtime code analysis in the editor
  - The AppMap CLI and MCP server, for any AI agent
  - VS Code and JetBrains extensions
  - Community support
- Button: `Get AppMap` as TanStack `Link` to `/get-appmap`

**Column 2 — Enterprise** (visually emphasized: `border-[#ff07aa]/40`)
- Price: `Support contract` (single line, `text-[28px]` so it fits the same row height as `$0`)
- Subtitle: `For organizations of 250 or more employees standardizing on AppMap.`
- Bullets:
  - Everything in Community
  - Paid pilots with hands-on coaching for every team
  - AppMap in CI: behavioral review on every pull request
  - Telemetry routing to your internal observability stack
  - On-prem and airgapped deployment, internal distribution
  - Priority support and SLAs
- Button: `Book a Demo` as TanStack `Link` to `/book-a-demo`
- Beneath button, muted line: `or email ` + `<a href="mailto:elizabeth@appmap.io" class="font-semibold text-[#ff07aa] hover:underline">elizabeth@appmap.io</a>`

- **Below table**, small centered muted line:
  > By downloading and using AppMap you agree to the [terms and conditions](https://appmap.io/community/terms-and-conditions.html).

  `terms and conditions` renders as `<a href="…" target="_blank" rel="noopener noreferrer">` with the pink accent style.

### (2) `src/routes/get-appmap.tsx` — replace commercial line

Replace the body of the centered muted `<p>` under the two extension cards with exactly:

> Always free at your desk. When your organization standardizes on AppMap, we support you. [See pricing](/pricing).

`See pricing` is a TanStack `Link` to `/pricing` with the existing pink accent style (`font-semibold text-[#ff07aa] hover:underline`).

### (3) `src/components/layout/Footer.tsx` — add Pricing link

In the `Platform` column's `links` array, insert `{ label: "Pricing", href: "/pricing" }` immediately after the `Compatibility` entry (before `Security FAQ`). No other footer changes; relative-href `Link` handling already covers it.

### Route registration

Adding `src/routes/pricing.tsx` is enough; the TanStack Router Vite plugin regenerates `src/routeTree.gen.ts`. No manual edits to the generated file.

### Rules applied
- No em-dashes anywhere.
- Never use Navie, Runtime Intelligence, or Behavioral Intelligence. (The Enterprise bullet uses the requested exact phrase "behavioral review on every pull request", which is not a banned term.)

### Files touched
- `src/routes/pricing.tsx` (new)
- `src/routes/get-appmap.tsx` (edit muted line)
- `src/components/layout/Footer.tsx` (add Pricing link)
