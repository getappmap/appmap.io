## Plan: Restructure install CTAs and add /cli-quickstart

### (1) `src/routes/get-appmap.tsx` — reduce to two cards + new note

**Card grid:** change `md:grid-cols-3` to `md:grid-cols-2`. Remove the third "CLI and MCP" card entirely.

**VS Code card:** keep the marketplace link/button. Replace the current description paragraph with exactly:
> The easiest way to install: the extension bundles the CLI and the MCP server, and keeps the index running automatically.

**JetBrains card:** keep the marketplace link/button. Replace the current description paragraph with exactly the same sentence:
> The easiest way to install: the extension bundles the CLI and the MCP server, and keeps the index running automatically.

**New centered line below the cards** (new `<section>` between the card grid and the existing commercial-boundary section), styled to match the existing muted line:
> Terminal only? Install the AppMap CLI and connect any MCP client. Follow the [CLI quickstart](/cli-quickstart). If you installed one of our extensions, you already have the CLI.

`CLI quickstart` is a TanStack `Link` to `/cli-quickstart` with the same pink accent styling used elsewhere (`font-semibold text-[#ff07aa] hover:underline`).

**Unchanged:** the existing commercial-boundary paragraph ("Free for individuals everywhere and for organizations under 250 employees…") stays as-is below the new note.

### (2) New route `src/routes/cli-quickstart.tsx`

`createFileRoute("/cli-quickstart")` with `head()` metadata:
- title: `CLI quickstart | AppMap`
- description: `Install the AppMap CLI, record your app, index, and connect any MCP client.`
- matching og:title / og:description / twitter:card, canonical `/cli-quickstart`

Page structure (matching the dark theme + typography used on `/get-appmap`: `bg-[#0d0a1a]`, `text-[#f2effb]`, `Header` component, same kicker/headline scale):

- **Kicker:** `CLI QUICKSTART` (pink uppercase tracker)
- **Headline (h1):** `The whole engine. No editor required.`
- **Five numbered steps** rendered as a vertical list of cards (border `#2c2353`, bg `#1c1538`, rounded-2xl), each with a large numeral and a title, then body copy:
  1. **Download the CLI** — Grab the binary for your platform from the AppMap **releases page** (link words `releases page` → `https://github.com/getappmap/appmap-js/releases`, `target="_blank" rel="noopener noreferrer"`), rename it to `appmap` (`appmap.exe` on Windows), and put it on your PATH.
  2. **Set up your project** — Run `appmap install` in your project root. It configures the recording agent for Java, Python, Ruby, or Node and writes `appmap.yml`.
  3. **Record** — Run your tests, or exercise your app, with the agent enabled. Recordings land in `tmp/appmap`.
  4. **Index** — Run `appmap index` once, or `appmap index --watch` to keep the index fresh while you work. The editor extensions do this automatically.
  5. **Connect your AI agent** — Point any MCP client at the AppMap MCP server. Show the config in a `<pre><code>` code panel (dark bg, monospace):
     ```
     {"mcpServers": {"appmap": {"command": "appmap", "args": ["query", "mcp"]}}}
     ```
- Command names (`appmap install`, `appmap index`, `appmap index --watch`, `appmap query mcp`, `appmap`, `appmap.exe`, `appmap.yml`, `tmp/appmap`) render in inline `<code>` monospace.
- **Closing block:** two doc links styled as buttons/inline links:
  - `CLI reference` → `https://appmap.io/docs/reference/appmap-client-cli.html`
  - `MCP reference` → `https://appmap.io/docs/reference/appmap-mcp.html`
  Plus the line: `Already using a VS Code or JetBrains extension? The CLI is bundled; you have all of this today.`

### Route registration

Adding `src/routes/cli-quickstart.tsx` is enough — the TanStack Router Vite plugin regenerates `src/routeTree.gen.ts` automatically. No manual edits to the generated file.

### Rules applied
- No em-dashes anywhere in the copy.
- No mention of `npx`.
- Never use Navie, Runtime Intelligence, or Behavioral Intelligence.

### Files touched
- `src/routes/get-appmap.tsx` (edit)
- `src/routes/cli-quickstart.tsx` (new)
