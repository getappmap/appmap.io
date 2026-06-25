## Goal

Publish the 2024 SWE-bench writeup under a clean, Navie-free URL on this site, and 301 the old `/blog/2024/06/20/appmap-navie-swe-bench-leader/` path to it.

## Changes

**1. New blog route** — `src/routes/blog.2024.06.20.appmap-swe-bench-leader.tsx`

- URL: `/blog/2024/06/20/appmap-swe-bench-leader/`
- `head()` with title, description, og:title, og:description, og:type=article, canonical to the new path.
- Layout matches site dark theme (same `#0e0a1f` / `#16112b` / `#2c2353` tokens as benchmarks).
- Article shell: small back link to `/benchmarks`, date "June 20, 2024", H1, lede, body, closing CTA.

Rewritten copy (Navie removed from hero, one historical sentence kept):

- **H1:** "AppMap leads SWE-bench on cost-efficient runtime analysis"
- **Lede:** "AppMap solved 14.6% of the full SWE-bench in under four hours, ahead of Amazon Q and eight other tools, at 5 to 30 percent of the cost of other solvers."
- **Historical context (verbatim):** "In 2024, AppMap's earlier AI workflow demonstrated the cost advantage of runtime-grounded software analysis on SWE-bench."
- **Body sections:** "What we ran" (full SWE-bench, runtime-grounded analysis, hard budget caps), "Results" (14.6% solve, sub-4-hour runtime, 5–30% of competitor cost), "Why cost matters" (runtime context vs brute-force prompting), "What's next" (link to current `/benchmarks` writeup).
- **Closing:** primary "Get AppMap" → `VSCODE_INSTALL_URL`, secondary "See the current benchmark" → `/benchmarks`.

**2. Redirect old URL** — `public/_redirects`

Append:
```
/blog/2024/06/20/appmap-navie-swe-bench-leader            /blog/2024/06/20/appmap-swe-bench-leader  301
/blog/2024/06/20/appmap-navie-swe-bench-leader/           /blog/2024/06/20/appmap-swe-bench-leader  301
```

**3. Update internal link** — `src/routes/benchmarks.tsx` "Not our first benchmark" card

Change `href="https://appmap.io/blog/2024/06/20/appmap-navie-swe-bench-leader/"` → `href="/blog/2024/06/20/appmap-swe-bench-leader/"`. Drop `target="_blank"` / `rel="noopener noreferrer"` since it's now an internal route.

**4. Sitemap** — `src/routes/sitemap[.]xml.tsx`

Add an entry for `/blog/2024/06/20/appmap-swe-bench-leader/` with `changefreq: "yearly"`, `priority: "0.6"`.

## Out of scope

- No `/blog` index page (the existing `/blog` link in `FinalCTA.tsx` already 404s; not part of this request).
- No edits to `navie.$.tsx` or other redirects.
- No content rewrite of `benchmarks.tsx` beyond the one href.
