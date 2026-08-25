import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-3 text-[15px] text-[#f2effb] placeholder-[#6f6595] outline-none transition focus:border-[#ff07aa]";

/**
 * A contact form backed by Formspree. Renders a native POST form so it works
 * without JS; when JS is available, submission is intercepted and an inline
 * confirmation is shown instead of navigating to Formspree's thank-you page.
 */
export function FormspreeForm({
  endpoint,
  submitLabel = "Send message",
  fallbackEmail = "support@appmap.io",
}: {
  endpoint: string;
  submitLabel?: string;
  fallbackEmail?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Progressive enhancement: with JS, submit in place. Without JS, this
    // handler never runs and the browser posts the form to Formspree.
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
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
    <form action={endpoint} method="POST" onSubmit={handleSubmit} className="space-y-4">
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
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        {status === "error" && (
          <p className="text-[14px] text-[#f87171]">
            Something went wrong. Please email{" "}
            <a href={`mailto:${fallbackEmail}`} className="underline">
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
