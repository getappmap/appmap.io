## /compatibility revamp — dual-reader positioning

**File touched:** `src/routes/compatibility.tsx` only.

### 1. Head metadata
- `title`: `AppMap Compatibility: Humans See the Map. Agents Query the Trace.`
- `description`: `AppMap speaks MCP to every agent, and plain pictures to every person. No lock-in either way.`
- Mirror into `og:title`, `og:description`, `twitter:*`. Keep existing og:image.

### 2. Hero
- Kicker: `COMPATIBILITY` (existing pink uppercase style).
- H1: `Humans see the map. Agents query the trace.`
- Subline: `AppMap speaks MCP to every agent, and plain pictures to every person. No lock-in either way.`
- Keep the current radial gradient background.

### 3. Section — "For your agents"
- Section heading: `For your agents` (same 28/34px style as current h2s).
- Keep verbatim, in this order:
  1. Existing agent grid (Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Google Antigravity) with the same card styling and pink dot.
  2. The `And any MCP client. If it speaks the protocol, it can read an AppMap trace.` line.
  3. **Bring your own model** subhead + existing paragraph, unchanged.
  4. **Lower inference cost wherever inference runs** subhead + existing paragraph, unchanged.
- Drop the current "Bring your own agent" h2 and the standalone "Visual Studio Code / JetBrains IDEs / CLI / CI" chip row (that surface content moves into the next section's third card).
- Drop the standalone `Get AppMap` CTA button here (final CTA covered by the closing statement + existing site nav; no new CTA needed to keep the page focused).

### 4. Section — "For your people"
- Section heading: `For your people`.
- Three cards in a responsive grid (`sm:grid-cols-1 lg:grid-cols-3`), same card chrome as agent cards (border `#2c2353`, bg `#1c1538`, rounded-2xl, p-6), each with a small pink dot + short bold label:
  1. **In the editor** — `sequence diagrams, dependency maps, flame graphs, and trace views, generated from real runs`
  2. **In the pull request** — `behavioral review comments reviewers can read without running anything`
  3. **Everywhere you work** — `In VS Code, JetBrains, the CLI, and CI`

### 5. Closing statement
- Centered full-width band, generous vertical padding (`py-24`), text `#f2effb`, `text-[28px] sm:text-[34px]` font-extrabold, tracking tight:
  - `One run. Many views. Same ground truth.`

### Guardrails
- No em-dashes anywhere (use commas, colons, or periods).
- No banned terms: Navie, Runtime Intelligence, Behavioral Intelligence.
- No copy changes to preserved paragraphs (agent grid bodies, MCP client line, bring-your-own-model, lower-inference-cost).
- Existing color tokens only (`#0d0a1a`, `#16112b`, `#1c1538`, `#2c2353`, `#f2effb`, `#a99fc7`, `#ff07aa`).