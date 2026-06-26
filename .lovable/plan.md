Update all Docs links in the header and footer to point to the external documentation site at https://appmap.io/docs/appmap-docs.html.

Changes:
1. `src/components/layout/Header.tsx` — Change the "Docs" nav link from `/docs` to `https://appmap.io/docs/appmap-docs.html`, opening in a new tab with `target="_blank" rel="noopener noreferrer"`.
2. `src/components/layout/Footer.tsx` — Update the Docs column links:
   - "Get Started" → `https://appmap.io/docs/appmap-docs.html`
   - "Reference" → `https://appmap.io/docs/appmap-docs.html`
   - "Troubleshooting" → `https://appmap.io/docs/appmap-docs.html`
   All open in a new tab.

Since there is no equivalent `/docs/reference` or `/docs/troubleshooting` on the external site, all three footer links will land on the same docs page. This eliminates the 404.