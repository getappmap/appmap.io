import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

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

const inputClass =
  "w-full rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-3 text-[15px] text-[#f2effb] placeholder-[#6f6595] outline-none transition focus:border-[#ff07aa]";

function SupportForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Progressive enhancement: with JS, submit in place. Without JS, this
    // handler never runs and the browser posts the form to Formspree.
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
        <div className="text-[17px] font-semibold text-[#f2effb]">Message sent.</div>
        <p className="mt-2 text-[15px] text-[#a99fc7]">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13.5px] font-semibold text-[#a99fc7]">Name</span>
          <input type="text" name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13.5px] font-semibold text-[#a99fc7]">Email</span>
          <input type="email" name="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[13.5px] font-semibold text-[#a99fc7]">
          How can we help?
        </span>
        <textarea name="message" required rows={6} className={inputClass} />
      </label>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-[14px] text-[#f87171]">
            Something went wrong. Please email{" "}
            <a href="mailto:support@appmap.io" className="underline">
              support@appmap.io
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

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
              <SupportForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
