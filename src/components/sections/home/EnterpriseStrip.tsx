import { InteractionWebPanel } from "@/components/sections/enterprise/RuntimeBehaviorAnalysis";

export function EnterpriseStrip() {
  return (
    <section className="border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="max-w-[820px] text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Accelerate review and acceptance of AI code changes
        </h2>
        <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#a99fc7]">
          AppMap runs across large codebases and many teams. Reviewers, coding agents, and compliance
          see the same record of what each change did, so organizations can accept changes faster.
        </p>
        <div className="mt-8">
          <InteractionWebPanel />
        </div>

        <p className="mt-6 text-[15px] text-[#a99fc7]">
          <a href="/enterprise" className="text-[#ff07aa] hover:underline">
            See the full runtime behavior analysis, with the standards it maps to &rarr;
          </a>
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="/enterprise"
            className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
          >
            Explore Enterprise
          </a>
          <a
            href="/security-faq"
            className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
          >
            Read the Security FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
