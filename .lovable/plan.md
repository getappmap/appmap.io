
## A. Google Calendar demo booking

**New `src/routes/book-a-demo.tsx`**
- `createFileRoute("/book-a-demo")` with `head()`: title "Book a demo | AppMap", matching description, og:title/og:description/og:url `/book-a-demo`, canonical, twitter card, shared `/og/og-card.png`.
- Page chrome: `Header` + dark wrapper matching `security-faq.tsx`.
- Hero: kicker `BOOK A DEMO` (#ff07aa), headline `See your code run. Live.`
- One constant at top of file:
  ```
  // TODO: replace with the real Google Calendar appointment-schedule link for elizabeth@appmap.io
  const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/REPLACE_ME?gv=true";
  ```
- Iframe: full width, `min-h-[700px]`, `bg-[#1c1538]` card, `rounded-2xl border border-[#2c2353]`, `title="Book a demo"`, `src={BOOKING_URL}`.
- Fallback line under iframe: `Calendar not loading? Email elizabeth@appmap.io to schedule directly.` with `<a href="mailto:elizabeth@appmap.io">` styled in accent pink.

**Repoint every Book a Demo CTA to `/book-a-demo`** (TanStack `Link`):
- `src/routes/enterprise.tsx` lines 240 and 341 (both `<a href="https://meetings.hubspot.com/dustin294">`) → `<Link to="/book-a-demo">`. Ensure `Link` import present.
- Any other `meetings.hubspot.com` occurrence sitewide gets removed. `rg` confirms only enterprise.tsx and Footer.tsx contain it.

**Footer** (`src/components/layout/Footer.tsx`):
- `{ label: "Contact", href: "https://meetings.hubspot.com/dustin294" }` → `href: "mailto:elizabeth@appmap.io"`.

## B. `/get-appmap` route

**New `src/routes/get-appmap.tsx`**
- `createFileRoute("/get-appmap")` with head(): title "Get AppMap | AppMap", description, og tags, canonical, twitter card, shared og image.
- Page chrome: `Header` + dark wrapper.
- Hero: kicker `GET APPMAP`, headline `Three ways in. Same ground truth.`
- Three-card responsive grid (`grid md:grid-cols-3 gap-6`), each card: `rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6` with title, body, primary link button in accent pink:
  1. **VS Code** — link `https://marketplace.visualstudio.com/items?itemName=appland.appmap` (external, `target=_blank rel=noopener`). Body ends with: `The extension bundles the CLI and keeps the query index fresh automatically.`
  2. **JetBrains** — link `https://plugins.jetbrains.com/plugin/16701-appmap`. Same trailing sentence about the bundled CLI / query index.
  3. **CLI and MCP** — body: `Terminal first? Install the AppMap CLI, record your tests, and point any MCP client at appmap query mcp.` Two links: `Install the CLI` → `https://appmap.io/docs/reference/appmap-client-cli.html`; `MCP reference` → `https://appmap.io/docs/reference/appmap-mcp.html`.

**Repoint Get AppMap CTAs to `/get-appmap`** (TanStack `Link`):
- `src/components/layout/Header.tsx` — replace the two `<a href={VSCODE_URL}>Get AppMap</a>` (desktop line 66, mobile line 118) with `<Link to="/get-appmap">`. Remove `VSCODE_URL` constant if no longer used elsewhere in the file.
- `src/routes/compatibility.tsx:99`, `src/routes/benchmarks.tsx:226`, `src/routes/blog.2024.06.20.appmap-swe-bench-leader.tsx:121` — swap each `Get AppMap` anchor for `<Link to="/get-appmap">`, keeping existing classes. Add `Link` imports where missing.

## C. Security FAQ reorder + title

`src/routes/security-faq.tsx`:
- Reorder the `securityFaqs` array to exactly:
  1. Does AppMap send code or runtime data to the cloud?
  2. Where does AppMap store runtime behavior?
  3. Where are AppMap files stored?
  4. Is sign in required to use AppMap?
  5. Does signing in with GitHub or GitLab give AppMap access to my code?
  6. How does AppMap work with MCP?
- Replace `title = "Security FAQ — AppMap"` (em-dash) with `"Security FAQ | AppMap"`. Update the `og:title` reference accordingly (uses the same `title` const, so single edit).

## Router

TanStack file-based routing auto-generates `routeTree.gen.ts` for `book-a-demo.tsx` and `get-appmap.tsx`. No manual edits.

## Rules honored

- No em-dashes anywhere in new or edited copy.
- Never use the terms Navie, Runtime Intelligence, or Behavioral Intelligence.
- Every meetings.hubspot.com reference removed sitewide (verified: enterprise.tsx x2, Footer.tsx x1).

## Out of scope

No design-system changes, no edits to unrelated sections, no changes to accordion styling.
