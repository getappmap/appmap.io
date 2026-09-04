import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";
import { BranchingWorkflow } from "@/components/sections/home/BranchingWorkflow";




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
        <h1 className="mt-4 text-[36px] font-extrabold leading-[1.02] tracking-[-1.2px] sm:text-[47px] sm:tracking-[-1.6px]">
          <span className="block text-[#f2effb]">
            Code changes{" "}
            <span className="inline-block origin-bottom-left skew-x-[-10deg] text-[#F87171]">
              outrun
            </span>{" "}
            our understanding
          </span>
          <span className="mt-[0.25em] block">
            <span className="text-[#FF07AA]">See</span>
            <span className="text-[#f2effb]"> how every change </span>
            <span className="text-[#FF07AA]">behaves</span>{" "}
            <span className="whitespace-nowrap text-[#f2effb]">before it merges</span>
          </span>
        </h1>
        <p className="mt-5 max-w-[680px] text-[19px] leading-[1.6] text-[#a99fc7]">
          AppMap records and compares application behavior. Recording happens locally, in your
          environment, and the key traces are committed to the repository with the code. Coding
          agents query those traces and verify their changes against them. Developers inspect the
          same behavior as diagrams.
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
          <BranchingWorkflow />
        </div>

      </div>
    </section>
  );
}
