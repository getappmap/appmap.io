import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";

const badges = [
  "NVIDIA Inception",
  "GitHub for Startups",
  "MongoDB Partner",
  "TechCrunch Finalist",
];

export function ClosingCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <div
          className="rounded-3xl border border-[#2c2353] p-12 text-center"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,7,170,0.16), rgba(139,92,246,0.16))",
          }}
        >
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
            Understand AI-generated code before you trust it.
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-[16px] text-[#a99fc7]">
            Install the extension and start understanding what your software actually does, right in your editor. Free and open source.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href={VSCODE_INSTALL_URL}
              className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
            >
              Install for VS Code
            </a>
            <a
              href={JETBRAINS_INSTALL_URL}
              className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
            >
              Install for JetBrains
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[13px] text-[#a99fc7] opacity-80">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}