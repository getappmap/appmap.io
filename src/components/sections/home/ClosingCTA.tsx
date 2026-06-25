import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";
import nvidiaBadge from "@/assets/badges/nvidia-inception-badge.png";
import mongoBadge from "@/assets/badges/mongo-db-partner-badge.png";
import techcrunchBadge from "@/assets/badges/appmap-techcrunch-finalist-ko.svg";

function GitHubForStartupsMark() {
  return (
    <div className="flex items-center gap-2 text-[#f2effb]">
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-bold tracking-tight">GitHub</span>
        <span className="text-[10px] uppercase tracking-[0.12em] text-[#a99fc7]">for Startups</span>
      </div>
    </div>
  );
}

const badges: { label: string; src?: string; render?: () => JSX.Element }[] = [
  { label: "NVIDIA Inception", src: nvidiaBadge },
  { label: "GitHub for Startups", render: () => <GitHubForStartupsMark /> },
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 opacity-90">
          {badges.map((b) =>
            b.src ? (
              <div
                key={b.label}
                className="flex h-12 w-40 items-center justify-center"
              >
                <img
                  src={b.src}
                  alt={b.label}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                key={b.label}
                className="flex h-12 w-40 items-center justify-center"
              >
                {b.render?.()}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}