import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vJ9fnl7qYTBT2rvePqOQ-9_FABHI0_VkxE_iDLfmfQojUBXGVCOByrkeEz9CbPTpoLjgY1oQ-?gv=true";

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
      { property: "og:url", content: "/book-a-demo" },
      { property: "og:image", content: "/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "/book-a-demo" }],
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
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-[1120px]">
            <div className="overflow-hidden rounded-2xl border border-[#2c2353] bg-[#1c1538]">
              <iframe
                src={BOOKING_URL}
                title="Book a demo"
                className="w-full"
                style={{ minHeight: 700, border: 0 }}
              />
            </div>
            <p className="mt-6 text-[14.5px] text-[#a99fc7]">
              Calendar not loading?{" "}
              <a
                href="mailto:elizabeth@appmap.io"
                className="font-semibold text-[#ff07aa] hover:underline"
              >
                Email elizabeth@appmap.io
              </a>{" "}
              to schedule directly.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}