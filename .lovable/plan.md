# Golden AppMap Traces blog post

## One naming conflict to resolve

The requested filename `blog.2026.08.06.golden-appmap-traces-runtime-context.tsx` maps to the URL
`/blog/2026/08/06/golden-appmap-traces-runtime-context`, which contradicts the required canonical
`/blog/golden-appmap-traces-runtime-context`. The canonical URL wins, so the file will be:

`src/routes/blog.golden-appmap-traces-runtime-context.tsx` with `createFileRoute("/blog/golden-appmap-traces-runtime-context")`.

The date lives in the JSON-LD and the blog index entry, not in the path.

## Files

1. `src/routes/blog.golden-appmap-traces-runtime-context.tsx` (new) - the post.
2. `src/routes/blog.index.tsx` (new) - blog index at `/blog`, listing this one post. No empty-state copy.
3. `src/routes/sitemap[.]xml.tsx` (edit) - add `/blog` and `/blog/golden-appmap-traces-runtime-context`.
4. `public/img/blog/golden-traces/` - the four images, exact filenames, added when you attach them.

Existing `/blog` currently falls through to the legacy site. A real `/blog` route takes precedence
once it exists; the header/footer Blog links keep the same href and stop being external.

## Images

Directory `public/img/blog/golden-traces/` with:
- `golden-traces-hero.png`
- `golden-trace-comparison.png`
- `sequence-diagram-view.jpg`
- `sql-queries-view.jpg`

Markup is written now against those relative paths. Until the files are attached the page renders
with broken image boxes; dropping the four files in resolves it with no code change. Alt text and
captions are exactly as supplied. Figures use `<figure>` + `<figcaption>` in the site's muted caption style.

## Metadata

- `title` = "Golden AppMap Traces: Durable Runtime Context for AI Code Review"
- `description` = "Golden AppMap traces turn real application runs into sanitized, versioned runtime context. Compare behavior across revisions and give developers and AI the same evidence."
- Both reused for `og:title`, `og:description`, `twitter:title`, `twitter:description` from single constants.
- `og:type` = article, `twitter:card` = summary_large_image
- `og:url` and `<link rel="canonical">` = `https://appmap.io/blog/golden-appmap-traces-runtime-context`
- `og:image` / `twitter:image` / Article `image` = `https://appmap.io/img/blog/golden-traces/golden-traces-hero.png`

## Schema

Two `application/ld+json` scripts in `head().scripts`:

1. Article: headline, description, image, `datePublished` and `dateModified` "2026-08-06",
   `mainEntityOfPage` the canonical URL, author Organization "AppMap", publisher Organization "AppLand, Inc.".
2. FAQPage: `mainEntity` mapped from the single `faqs` array.

## FAQ, single source

One module-scope array:

```ts
const faqs = [{ q: string, a: string, aNode?: ReactNode }, ...]
```

`a` is the plain string used by the JSON-LD. The Security FAQ answer is the only item that needs a
link, so it carries an optional `aNode` for the visible rendering that wraps "Security FAQ" in a
`<Link to="/security-faq">`. The visible FAQ renders `aNode ?? a`. No FAQ string is duplicated.

## Page content

All copy exactly as supplied, in order: H1, hero image, three opening paragraphs, H2 "The trust gap
Golden AppMap traces close", H2 "What a Golden AppMap trace contains" plus H3 "The diagrams are for
people" (sequence diagram figure) and H3 "The data is for the AI", H2 "Golden AppMap traces in the
pull request" plus the Kevin Gilpin pull-quote, H2 "What Golden AppMap trace review reveals"
(comparison figure, SQL figure), H2 "Getting started", H2 "FAQ".

Links: Sonar and SmartBear and the two GitHub repos as external `<a target="_blank" rel="noopener noreferrer">`;
`/architecture`, `/how-it-works`, `/get-appmap`, `/security-faq` as router `<Link>`.

Quote rendered as a semantic `<blockquote>` with a left magenta rule, and a separate
`<cite>`-style attribution line "Kevin Gilpin, CTO and co-founder, AppMap".

Layout matches existing routes: `bg-[#0d0a1a]`, `<Header />`, `max-w-[1120px]` shell with the prose
column constrained to about 720px for readability, existing ink and muted tokens.

## Blog index

`src/routes/blog.index.tsx`: H1 "Blog", one entry card linking to the post, dated August 6, 2026,
with the meta description as the excerpt. Own head metadata and canonical `https://appmap.io/blog`.
No empty-state line.

## Verification

- Typecheck clean.
- `rg` confirms no em-dashes and none of the banned terms in the new files.
- Playwright screenshots of `/blog` and the post at desktop and mobile.
- Confirm no copy implies a hosted AppMap data platform, a dashboard, or review on every pull request.
