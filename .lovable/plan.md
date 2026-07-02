# Enterprise page middle redesign — v4 (final)

Scope: `src/routes/enterprise.tsx` only. All copy verbatim from existing text. No em-dashes. No "Navie", "Runtime Intelligence", or "Behavioral Intelligence". No new technical claims.

## Section order (middle of page)

1. Hero (unchanged)
2. Architecture and trust — 4 existing text cards (unchanged copy)
3. **NEW: Deployment architecture diagram** (inline SVG)
4. **NEW: "Independent runtime evidence" statement band** (verbatim copy from the current card, promoted to full-width; centered, max-width ~840px, subtle borders using palette tokens)
5. What the reviewer sees (unchanged)
6. **RESHAPED: "From pilot to policy"** — 3-step flow; steps 1 and 2 absorb the dissolved "Start without CI" and "Governed behavior baselines" cards (verbatim copy); step 2 is the tallest and contains the existing Waltz image
7. Book a Demo (unchanged)
8. Security FAQ (unchanged)

The old 2+1 grid ("Start without CI", "Governed behavior baselines", "Independent runtime evidence") is removed. Its three pieces of copy are redistributed verbatim: two into steps 1 and 2 of "From pilot to policy", one into the statement band.

## Deployment diagram structure

Inline SVG, `viewBox="0 0 1080 680"`, `role="img"`, `<title>` matches the figure caption exactly.

```text
+---------------------------------------------------------------+
| Your environment. No application data egress.                 |
|                                                               |
|  Zone 1: Developer workstation                                |
|    IDE  ->  Language agent  ->  Local traces                  |
|                                     |                         |
|                                     v                         |
|                                 Query DB                      |
|                                     ^                         |
|                                     |                         |
|                              MCP server <-> AI agent          |
|                                                               |
|  Zone 2: CI                                                   |
|    Golden traces  ->  AppMap review workflow                  |
|                       (GitHub Action or CI job)  ->  PR       |
|                                                        comment|
|                                                               |
|  How it deploys:                                              |
|   [Extensions: packaged for internal distribution or          |
|    installed from the VS Code and JetBrains enterprise        |
|    marketplaces]  --arrow-->  IDE                             |
|   [Agents and CLI: pulled from your language package          |
|    registries (RubyGems, PyPI, npm, Maven Central)]           |
|      --arrow-->  Language agent                               |
|   [Telemetry: configurable to route to your internal          |
|    observability stack (Splunk or similar)]   (no arrow)      |
+---------------------------------------------------------------+
```

Figure caption (exact): **Local by design. No application data leaves your environment. Diagnostics and telemetry route to your internal observability stack, such as Splunk, so operational data stays inside too.**

SVG `<title>` element: identical string.

## Palette (tokens only)

Backgrounds/surfaces: `#0d0a1a`, `#16112b`, `#1c1538`, `#2c2353`. Text: `#f2effb`, `#a99fc7`. Accents: `#ff07aa`, `#d6008f`, `#8b5cf6`. Success/confirmation (arrows, checks): `#a78bfa`. No `#2fbf8f`. No other hex values.

## Implementation notes

- SVG hand-authored inline in `enterprise.tsx`; text uses `<text>` with the palette tokens; boundary is a rounded `<rect>` with `#2c2353` stroke on `#16112b` fill; zones are nested rounded rects on `#1c1538`; nodes are pill rects with `#a99fc7` labels; arrows use a single `<defs><marker>` in `#a78bfa`; distribution strip sits inside the boundary beneath both zones as three pill nodes on a `#0d0a1a` band.
- Statement band: `<section>` with `max-w-[840px]` centered, thin top+bottom border `#2c2353`, body text `#f2effb`, no card chrome.
- "From pilot to policy": 3-column grid at `lg`, stacked on mobile; step 2 spans a taller row and includes the existing Waltz `<img>` reused from the current card; verbatim copy pulled from the two dissolved cards for steps 1 and 2; step 3 keeps existing "policy" copy.
- No changes to routing, head metadata, hero, FAQ, or Book a Demo.
