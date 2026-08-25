import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { FormspreeForm } from "@/components/FormspreeForm";

// Formspree endpoint. The form posts natively (works without JS); when JS is
// available, submission is intercepted for an inline confirmation instead of
// navigating to Formspree's thank-you page.
const FORM_ENDPOINT = "https://formspree.io/f/mgawgyql";

const title = "Support | AppMap";
const description =
  "Get help with AppMap: chat with the team on Slack, email support, or send a message with the support form.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/support" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Support
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              We are here to get you unstuck.
            </h1>
            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.7] text-[#a99fc7]">
              Contact us on your platform of choice and we will walk you through it.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <a
                href="/slack"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 transition hover:border-[#ff07aa]"
              >
                <div className="text-[16px] font-semibold text-[#f2effb]">Chat on Slack</div>
                <p className="mt-1.5 text-[14.5px] text-[#a99fc7]">
                  Talk with the development team and the community.
                </p>
              </a>
              <a
                href="mailto:support@appmap.io"
                className="block rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 transition hover:border-[#ff07aa]"
              >
                <div className="text-[16px] font-semibold text-[#f2effb]">Email support</div>
                <p className="mt-1.5 text-[14.5px] text-[#a99fc7]">support@appmap.io</p>
              </a>
              <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                <div className="text-[16px] font-semibold text-[#f2effb]">Docs</div>
                <p className="mt-1.5 text-[14.5px] text-[#a99fc7]">
                  Setup guides, reference, and troubleshooting live in{" "}
                  <a href="/docs/appmap-docs" className="text-[#ff07aa] hover:underline">
                    the documentation
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-[20px] font-bold text-[#f2effb]">Send us a message</h2>
              <FormspreeForm endpoint={FORM_ENDPOINT} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
