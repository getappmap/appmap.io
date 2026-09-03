import { MotionOrPoster } from "@/components/common/MotionOrPoster";
import { BehavioralReviewCard } from "@/components/sections/home/BehavioralReviewCard";

export function ReviewLoop() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-12">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Review behavior before it ships.
        </h2>
        <p className="mt-2 max-w-[680px] text-[17px] text-[color:var(--color-am-muted)]">
          Keep the code review. Add a review of what the change did when it ran. AppMap records how the application behaves and compares that behavior across revisions. As the code changes, AppMap records fresh traces and shows what held and what changed. Developers inspect the diagrams. Coding agents query the same traces. The review can go straight to the pull request.
        </p>

        <div className="mt-8">
          <BehavioralReviewCard />
        </div>


        <div className="mt-6">
          <MotionOrPoster
            src="/marketing-assets/video/dependency-map.mp4"
            poster="/marketing-assets/img/appmap/dependency-map.webp"
            alt="AppMap dependency map of a running application, generated from recorded traces."
            width={1600}
            height={900}
            className="block w-full rounded-2xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] object-cover"
          />
          <div className="mt-2 text-[12.5px] text-[#6d6395]">
            The same traces, as living diagrams developers open in the editor.
          </div>
        </div>


        <p className="mt-5 max-w-3xl text-[20px] font-semibold text-[color:var(--color-am-ink)]">
          Every pull request explains its behavior and impact.
        </p>
        <p className="mt-3 max-w-3xl text-[14px] text-[color:var(--color-am-muted)]">
          A pull request should show more than what code changed. AppMap adds visual runtime evidence and a behavioral write-up: what ran, what changed, and whether the change behaved as intended.
        </p>
        <div className="mt-6 rounded-xl border border-[color:var(--color-am-line)] bg-[color:var(--color-am-card)] p-4">
          <p className="text-[14px] leading-[1.55] text-[color:var(--color-am-muted)]">
            Developers can inspect the diagrams. Coding agents can query the same traces. The pull request carries the resulting behavioral review. The evidence comes from the running application, not from the AI evaluating its own work. AppMap works with Claude Code, Cursor, GitHub Copilot, Windsurf, and any MCP-capable coding agent.
          </p>
        </div>
      </div>
    </section>
  );
}
