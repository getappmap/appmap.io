import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "Runtime evidence under tight tool-call budgets | AppMap Research";
const description =
  "Read the AppMap research paper on runtime evidence under tight tool-call budgets. Methodology and results for root cause analysis with recorded application behavior.";
const url = "https://appmap.io/research/runtime-rca";

const PAGE_COUNT = 23;
const PAGE_W = 1275;
const PAGE_H = 1650;

const pages = Array.from({ length: PAGE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { n: i + 1, src: `/research/runtime-rca/page-${n}.webp` };
});

export const Route = createFileRoute("/research/runtime-rca")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "Runtime evidence under tight tool-call budgets",
          description,
          url,
          author: [
            { "@type": "Person", name: "Kevin Gilpin" },
            { "@type": "Person", name: "Elizabeth Lawler" },
          ],
          publisher: { "@type": "Organization", name: "AppMap" },
        }),
      },
    ],
  }),
  component: PaperViewer,
});

function PaperViewer() {
  return (
    <div className="min-h-screen bg-[#0f0b1d] text-[#f2effb]">
      <Header />
      <main className="mx-auto w-full max-w-[1100px] px-5 pb-24 pt-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff07aa]">
          AppMap Research
        </p>
        <h1 className="mt-3 text-[30px] font-semibold leading-tight sm:text-[38px]">
          Runtime evidence under tight tool-call budgets
        </h1>
        <p className="mt-3 text-[15px] text-[#b6accf]">Kevin Gilpin and Elizabeth Lawler</p>
        <p className="mt-5 max-w-[720px] text-[14px] leading-relaxed text-[#8d83ab]">
          The full paper is readable here, {PAGE_COUNT} pages. The PDF is not distributed from this
          page. If you need a copy for citation or internal review, write to{" "}
          <a className="text-[#ff07aa] hover:underline" href="mailto:info@appmap.io">
            info@appmap.io
          </a>
          .
        </p>

        <div
          className="mt-10 select-none space-y-6"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ WebkitUserSelect: "none", userSelect: "none" }}
        >
          {pages.map((p) => (
            <figure
              key={p.n}
              className="relative overflow-hidden rounded-xl border border-[#2c2353] bg-[#131024]"
            >
              <img
                src={p.src}
                alt={`Page ${p.n} of ${PAGE_COUNT}`}
                width={PAGE_W}
                height={PAGE_H}
                loading={p.n === 1 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="block w-full"
                style={{ aspectRatio: `${PAGE_W} / ${PAGE_H}`, pointerEvents: "none" }}
              />
              <div className="absolute inset-0" aria-hidden="true" />
              <figcaption className="border-t border-[#2c2353] px-4 py-2 text-[11px] text-[#6d6395]">
                Page {p.n} of {PAGE_COUNT}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
