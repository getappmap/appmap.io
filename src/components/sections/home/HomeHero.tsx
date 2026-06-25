import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";
import { Em } from "@/components/common/Em";


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
          Understand AI-generated code, in your editor
        </div>
        <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.2px] text-[#f2effb] sm:text-[54px] sm:tracking-[-1.5px]">
          AI writes code in seconds.
          <br />
          Understanding it shouldn't take hours.
        </h1>
        <p className="mt-5 max-w-[680px] text-[19px] leading-[1.6] text-[#a99fc7]">
          AppMap helps developers and AI agents alike understand what your software{" "}
          <Em>actually does</Em>. As you work in your editor, it captures how your software behaves and transforms every AI-generated change into something you can explore, review, and trust.
        </p>

        <div className="mt-7 flex flex-wrap gap-3.5">
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
        <div className="mt-3.5 text-[13.5px] text-[#a99fc7]">
          Free and open source. Also available as a CLI.
        </div>

        <div className="mt-11">
          <video
            className="aspect-[16/9] w-full rounded-xl border border-dashed border-[#2c2353] bg-[#16112b] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/video/map-sm.webm" type="video/webm" />
            <source src="/assets/video/map-sm.mp4" type="video/mp4" />
            An AppMap dependency map
          </video>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <div className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2.5 text-sm text-[#a99fc7]">
              You read the map in your editor
            </div>
            <div className="rounded-lg border border-[#2c2353] bg-[#1c1538] px-4 py-2.5 text-sm text-[#a99fc7]">
              Your agent reads the same run over MCP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}