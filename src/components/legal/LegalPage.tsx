import { Header } from "@/components/layout/Header";

/**
 * Shared layout for legal pages (Privacy Policy, Terms & Conditions,
 * Code of Conduct). The body HTML is migrated verbatim from the previous
 * appmap.io site (applandinc.github.io, community/) and rendered as-is so
 * the legal text stays byte-for-byte identical. Styling comes from the
 * `legal-prose` rules in styles.css.
 */
export function LegalPage({ title, html }: { title: string; html: string }) {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-20">
          <div className="mx-auto max-w-[860px]">
            <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[42px]">
              {title}
            </h1>
            <div
              className="legal-prose mt-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
