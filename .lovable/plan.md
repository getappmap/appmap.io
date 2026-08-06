# Remove the 2024 SWE-bench blog post

The post at `/blog/2024/06/20/appmap-swe-bench-leader` goes away, and the URL permanently redirects to `/benchmarks`.

## Changes

1. **Delete the post page**: remove `src/routes/blog.2024.06.20.appmap-swe-bench-leader.tsx`. The route tree regenerates automatically.

2. **Permanent redirect**: in `public/_redirects`, add 301s from `/blog/2024/06/20/appmap-swe-bench-leader` (with and without trailing slash) to `/benchmarks`, and repoint the two existing legacy `appmap-navie-swe-bench-leader` 301s at `/benchmarks` so the old URL does not chain into a dead page.

3. **Remove the listing/link on /benchmarks**: the "Not our first benchmark." card is currently an anchor to the post. Keep the card and its text, but drop the link wrapper and the "Read the post" arrow, so it becomes a plain statement card. Nothing else on the page changes.

4. **Sitemap**: remove the `/blog/2024/06/20/appmap-swe-bench-leader/` entry from `src/routes/sitemap[.]xml.tsx`.

5. **Navigation and footer**: the Header and Footer only link to `/blog` (the legacy blog index, served outside this app). Neither links to this post, so they stay unchanged.

## Notes

There is no blog index route inside this app, so no empty-state work is needed here. If the legacy blog index still lists the post, that lives on the separate legacy site and is outside this codebase.
