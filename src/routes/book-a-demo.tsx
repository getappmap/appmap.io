import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const BOOKING_URL = "https://calendar.app.google/bHKonWhR1Y14kjzV7";

const title = "Book a demo | AppMap";
const description =
  "See your code run. Live. Book time with the AppMap team to walk through runtime evidence in your environment.";

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/book-a-demo" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/book-a-demo" }],
  }),
  component: BookADemoPage,
});

function BookADemoPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Book a demo
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              See your code run. Live.
            </h1>
            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.7] text-[#a99fc7]">
              Pick a time that suits you. In a short session we walk through runtime evidence in
              your environment and answer your questions about adopting AppMap.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="flex flex-col items-start gap-5">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
              >
                Book a demo
              </a>
              <p className="text-[14.5px] text-[#a99fc7]">
                Prefer email? Write to us directly at{" "}
                <a
                  href="mailto:info@appmap.io"
                  className="font-semibold text-[#ff07aa] hover:underline"
                >
                  info@appmap.io
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
