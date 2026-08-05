import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";
import { Em } from "@/components/common/Em";
import { MotionOrPoster } from "@/components/common/MotionOrPoster";


export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden px-6 pt-20 pb-16 lg:pt-24"
      style={{
        background:
          "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)",
      }}
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
          Runtime evidence for AI-assisted development
        </div>
        <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.2px] text-[#f2effb] sm:text-[54px] sm:tracking-[-1.5px]">
          Your AI reads the code.
          <br />
          AppMap shows what <Em>actually happened</Em>.
        </h1>
        <p className="mt-5 max-w-[680px] text-[19px] leading-[1.6] text-[#a99fc7]">
          One recorded application run produces diagrams developers can understand and evidence AI can trust.
        </p>

        <div className="mt-7 flex flex-wrap gap-3.5">
          <a
            href={VSCODE_INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
          >
            Install for VS Code
          </a>
          <a
            href={JETBRAINS_INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
          >
            Install for JetBrains
          </a>
        </div>
        <div className="mt-3.5 text-[13.5px] text-[#a99fc7]">
          Free for every developer. Organizational scale comes with a support contract.
        </div>

        <div className="mt-11">
          <MotionOrPoster
            src="/video/dependency-map.mp4"
            poster="/img/appmap/dependency-map.webp"
            alt="AppMap dependency map of a running application, showing packages, classes, and the calls between them."
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-xl border border-[#2c2353] bg-[#16112b] object-cover shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          />
          <div className="mt-4 flex flex-wrap justify-center gap-3">
          <div className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2.5 text-sm text-[#a99fc7]">
              The diagrams are for people
            </div>
            <div className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2.5 text-sm text-[#a99fc7]">
              The data is for the AI
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-[#a99fc7]">
            One run. Many views. Same ground truth.
          </p>
        </div>
      </div>
    </section>
  );
}