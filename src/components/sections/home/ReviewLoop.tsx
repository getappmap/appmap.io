import { MotionOrPoster } from "@/components/common/MotionOrPoster";
import { BehavioralReviewCard } from "@/components/sections/home/BehavioralReviewCard";

export function ReviewLoop() {
  return (
    <section className="border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 pt-12 pb-10">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          Review behavior before it ships.
        </h2>
        <p className="mt-2 max-w-[680px] text-[17px] text-[color:var(--color-am-muted)]">
          Keep the code review. Add a review of what the change did when it ran. AppMap compares fresh traces with the base revision and shows what held and what changed. Developers inspect the diagrams. Coding agents query the same traces. The findings can go straight to the pull request.
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
            Developers open the same traces as interactive diagrams in the editor.
          </div>
        </div>


      </div>
    </section>
  );
}
