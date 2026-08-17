import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitPaperRequest } from "@/lib/paper-requests.functions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[#2c2353] bg-[#0d0a1a] px-3 py-2 text-[14px] text-[#f2effb] outline-none placeholder:text-[#6f6796] focus:border-[#ff07aa]";

export function PaperRequest() {
  const submit = useServerFn(submitPaperRequest);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setPending(true);
    try {
      await submit({ data: { email: email.trim(), name, company } });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setPending(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]"
      >
        Request the paper
      </button>
    );
  }

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-[#2c2353] bg-[#16112b] p-6">
      {done ? (
        <p className="text-[15px] leading-[1.6] text-[#f2effb]">
          Request received. We will send the paper to your inbox.
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#ff07aa]">
            Request the paper
          </div>

          <label className="mt-4 block text-[13px] text-[#a99fc7]">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={fieldClass}
            />
          </label>

          <label className="mt-3 block text-[13px] text-[#a99fc7]">
            Name (optional)
            <input value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
          </label>

          <label className="mt-3 block text-[13px] text-[#a99fc7]">
            Company (optional)
            <input value={company} onChange={(e) => setCompany(e.target.value)} className={fieldClass} />
          </label>

          {error ? <p className="mt-3 text-[13px] text-[#fb7185]">{error}</p> : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] disabled:opacity-60"
          >
            {pending ? "Sending..." : "Request the paper"}
          </button>

          <p className="mt-3 text-[12px] leading-[1.55] text-[#7c8aa6]">
            We will use your email to send you the paper and related AppMap research. See our{" "}
            <a
              href="https://appmap.io/community/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#f2effb]"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}
