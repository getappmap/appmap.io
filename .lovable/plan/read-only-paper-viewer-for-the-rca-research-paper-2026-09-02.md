# Read-only paper viewer for the RCA research paper

Goal: anyone with the link can read the paper in the browser, but the PDF file itself is not served for download.

## What changes for readers

- A new page at `/research/runtime-rca` shows all 23 pages of the paper as images, one after another, in the site's dark idiom: title, authors, page counter, and a note that the PDF is available on request at info@appmap.io.
- No download button, no print-friendly PDF, no direct file URL. Right-click save, drag-save, and text selection on the page images are disabled, and a transparent overlay sits above each page so the image itself is awkward to grab. This deters casual saving; it cannot make a screen-readable document technically impossible to capture.
- The old URL `https://appmap.io/research/runtime-rca.pdf` stops serving the file. It redirects to the viewer page so existing links keep working.

## Technical approach

1. Pre-render the PDF to page images at 150 DPI with `pdftoppm`, output to `public/research/runtime-rca/page-01.webp` … `page-23.webp` (WebP, quality ~80, roughly 1275px wide). Images are committed as static assets.
2. Remove `public/research/runtime-rca.pdf` from the served output so the raw file is no longer reachable. Keep the source PDF in the repo at `assets/research/runtime-rca.pdf` (outside `public/`) for future re-renders.
3. New route `src/routes/research.runtime-rca.tsx`:
   - `head()` with its own title, description, og:title/og:description, og:type `article`, twitter:card, and a self-referencing canonical.
   - JSON-LD `ScholarlyArticle` with the two-author array (Kevin Gilpin, Elizabeth Lawler).
   - Renders the page images with `loading="lazy"` (first page eager), fixed aspect ratio to avoid layout shift, `draggable={false}`, `user-select: none`, `onContextMenu` prevented, and an absolutely positioned transparent overlay per page.
   - Mobile: images scale to full width; desktop caps the column near the page's natural width.
4. New route `src/routes/research.runtime-rca[.]pdf.tsx` (server handler) returning a 301 redirect to `/research/runtime-rca`, so the published PDF link keeps resolving.
5. Update the "Review the methodology" link in `src/components/sections/home/BenchmarkStrip.tsx` to point at `/research/runtime-rca` (drop `target="_blank"` is optional; keep it opening in a new tab). Sweep for any other `runtime-rca.pdf` references and repoint them.
6. Add `/research/runtime-rca` to `sitemap.xml` and `llms.txt`.
7. Verify: production build green, screenshot the viewer at 1280px and 390px, confirm the first pages render, and confirm `/research/runtime-rca.pdf` redirects rather than downloading.

## Note on protection level

Image-based viewing plus save/select blocking stops casual downloading and keeps the PDF off search engines and AI crawlers as a file. Anyone determined can still screenshot pages. If stronger control is needed later, the next step is gating the viewer behind an email capture or a signed short-lived session.
