import { useRef } from "react";
import { FormspreeForm } from "@/components/FormspreeForm";

// General/sales contact form endpoint (distinct from the /support form).
const CONTACT_ENDPOINT = "https://formspree.io/f/moeagwzd";

/**
 * "Contact" link that opens a lightbox with a Formspree-backed form.
 * Without JS the link falls back to its mailto: href — a dialog cannot be
 * opened without JS anyway, so the plain email flow is the graceful path.
 */
export function ContactLink({ className, label = "Contact" }: { className?: string; label?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <a
        href="mailto:sales@appmap.io"
        className={className}
        onClick={(event) => {
          event.preventDefault();
          dialogRef.current?.showModal();
        }}
      >
        {label}
      </a>
      <dialog
        ref={dialogRef}
        className="m-auto w-[min(92vw,560px)] rounded-2xl border border-[#2c2353] bg-[#16112b] p-0 text-[#f2effb] backdrop:bg-black/60 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Click on the backdrop (the dialog element itself) closes it.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="p-7">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[22px] font-extrabold tracking-[-0.5px] text-[#f2effb]">
                Contact us
              </h2>
              <p className="mt-1 text-[14.5px] text-[#a99fc7]">
                Or email{" "}
                <a href="mailto:sales@appmap.io" className="text-[#ff07aa] hover:underline">
                  sales@appmap.io
                </a>
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
              className="rounded-md px-2 py-0.5 text-[22px] leading-none text-[#a99fc7] transition hover:text-[#f2effb]"
            >
              ×
            </button>
          </div>
          <div className="mt-5">
            <FormspreeForm endpoint={CONTACT_ENDPOINT} fallbackEmail="sales@appmap.io" />
          </div>
        </div>
      </dialog>
    </>
  );
}
