import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const title = "Blog | AppMap";
const description =
  "Writing from the AppMap team on runtime evidence, versioned baselines, and reviewing AI-generated code.";

const posts = [
  {
    to: "/blog/golden-appmap-traces-runtime-context" as const,
    title: "Golden AppMap Traces: Durable Runtime Context for AI Code Review",
    date: "2026-08-06",
    dateLabel: "August 6, 2026",
    excerpt:
      "Golden AppMap traces turn real application runs into versioned runtime context with sensitive values removed. Compare behavior across revisions and give developers and AI the same evidence.",
  },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://appmap.io/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-20">
          <div className="mx-auto max-w-[860px]">
            <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[52px]">
              Blog
            </h1>
            <div className="mt-10 flex flex-col gap-5">
              {posts.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="rounded-2xl border border-[#2c2353] bg-[#16112b] p-6 transition-colors hover:border-[#ff07aa]"
                >
                  <div className="text-[13px] text-[#a99fc7]">
                    <time dateTime={p.date}>{p.dateLabel}</time>
                  </div>
                  <h2 className="mt-2 text-[22px] font-bold leading-snug tracking-[-0.5px] text-[#f2effb]">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#c9c0e3]">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
