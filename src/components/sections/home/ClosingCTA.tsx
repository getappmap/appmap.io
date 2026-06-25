import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";
import nvidiaBadge from "@/assets/badges/nvidia-inception-badge.png";
import githubBadge from "@/assets/badges/github-for-startups-badge.png";
import mongoBadge from "@/assets/badges/mongo-db-partner-badge.png";
import techcrunchBadge from "@/assets/badges/appmap-techcrunch-finalist-ko.svg";

const badges: { label: string; src?: string }[] = [
  { label: "NVIDIA Inception", src: nvidiaBadge },
  { label: "GitHub for Startups", src: githubBadge },
  { label: "MongoDB Partner", src: mongoBadge },
  { label: "TechCrunch Finalist", src: techcrunchBadge },
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-90">
          {badges.map((b) =>
            b.src ? (
              <img
                key={b.label}
                src={b.src}
                alt={b.label}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            ) : (
              <span
                key={b.label}
                className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2 text-[13px] text-[#a99fc7]"
              >
                {b.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}