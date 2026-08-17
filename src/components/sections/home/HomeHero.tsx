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
        <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.02] tracking-[-1.2px] sm:text-[49px] sm:tracking-[-1.35px]">
          <span className="text-[#f2effb]">AI writes code fast.</span>
          <br />
          <span className="text-[#f2effb]">Know how every change </span>
          <span className="italic text-[#FF07AA]">behaves</span>
          <span className="text-[#f2effb]"> before merge.</span>
        </h1>
        <p className="mt-5 max-w-[680px] text-[19px] leading-[1.6] text-[#a99fc7]">
          AppMap gives developers and coding agents the same runtime evidence to understand, compare, and act on each change before it merges.
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
        

        <div className="mt-11">
          <MotionOrPoster
            src="/marketing-assets/video/dependency-map.mp4"
            poster="/marketing-assets/img/appmap/dependency-map.webp"
            alt="AppMap dependency map of a running application, showing packages, classes, and the calls between them."
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-xl border border-[#2c2353] bg-[#16112b] object-cover object-left shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          />
          <p className="mt-5 text-center text-[13px] font-semibold text-[#f2effb]">
            Map. Analyze. Share. Repeat.
          </p>
        </div>
      </div>
    </section>
  );
}