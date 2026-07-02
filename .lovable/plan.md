## Move Security FAQ to its own page

### 1. New route `src/routes/security-faq.tsx`
- `createFileRoute("/security-faq")` with head(): title "Security FAQ — AppMap", matching description, og:title/og:description/og:url `/security-faq`, twitter card + canonical (mirroring the enterprise route pattern, minus the enterprise-specific og:image reuse — keep the shared `/og/og-card.png`).
- Page chrome: same `<Header />` + dark page wrapper as `enterprise.tsx`.
- Hero section (same styling tokens as enterprise hero):
  - Kicker: `SECURITY FAQ` (`#ff07aa`, uppercase, tracked).
  - Headline: `Runtime evidence, locked to your environment.`
- FAQ section: exact markup ported from `enterprise.tsx` lines 375–400 — the `securityFaqs` array with all six items (three original + three added), the accordion `<details>` block, and the "Read: AppMap security →" link to `https://appmap.io/security` (unchanged).
- The `securityFaqs` array moves into this new file. No em-dashes, no banned terms.

### 2. `src/routes/enterprise.tsx`
- Delete the `securityFaqs` const (lines 4–29).
- Delete the entire Security FAQ `<section id="security-faq">` (lines 375–400). Page now ends after the "From pilot to policy" section with its Book a Demo button.
- Hero button "Read the Security FAQ" (line 270) becomes a TanStack `<Link to="/security-faq">` with the same classes. Add `Link` to the `@tanstack/react-router` import.

### 3. `src/components/layout/Footer.tsx`
- Change `{ label: "Security FAQ", href: "/enterprise" }` → `href: "/security-faq"`.

### 4. Router registration
- TanStack file-based routing auto-picks up `src/routes/security-faq.tsx`; `routeTree.gen.ts` regenerates on next dev/build run. No manual edits.

### Out of scope
No changes to accordion styling, FAQ copy, other Enterprise sections, or unrelated components.
