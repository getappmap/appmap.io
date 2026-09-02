import { MotionOrPoster } from "@/components/common/MotionOrPoster";
import { BehavioralReviewCard } from "@/components/sections/home/BehavioralReviewCard";

const steps = [
  {
    title: "Coding agent changes the code",
    body: "The coding agent makes the change.",
  },
  {
    title: "AppMap records fresh traces",
    body: "The coding agent runs the tests. AppMap records the behavior and shows the traces as maps.",
  },
  {
    title: "AppMap compares the behavior",
    body: "AppMap compares behavior in the changed revision with behavior in the base revision and reports what changed.",
  },
  {
    title: "The review is written into the pull request",
    body: "AppMap writes the review into the PR so reviewers see the code change and what it did when it ran.",
  },
];


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

        <img
          src="/marketing-assets/img/workflow/appmap-runtime-review.png"
          alt="AppMap workflow: the coding agent runs the tests, AppMap records fresh traces, and AppMap compares the behavior of the head revision with the base revision before merge"
          width={2000}
          height={960}
          loading="lazy"
          className="mt-8 block w-full rounded-2xl border border-[color:var(--color-am-line)]"
        />

        <ol className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[15px] top-4 bottom-4 w-px bg-[color:var(--color-am-line)] lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-auto"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-am-brand)] text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 lg:mt-4">
                <h3 className="text-[16px] font-bold text-[color:var(--color-am-ink)]">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-[color:var(--color-am-muted)]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6">
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
