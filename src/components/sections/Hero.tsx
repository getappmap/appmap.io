import { resolveImagePath } from "@/utils/imageMap";

export function Hero() {
  const heroImage = resolveImagePath("/assets/img/navie-answer.webp");

  return (
    <section
      className="relative w-full overflow-hidden px-8 py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(to top, #1c0349 0%, #000000 45%, #000000 100%)",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 w-full lg:order-1 lg:w-3/5">
          <img
            src={heroImage}
            alt="AppMap Navie answering a question about a Java code change with linked sequence diagrams"
            className="w-full rounded-[10px] shadow-[0_30px_80px_-20px_rgba(146,94,238,0.45)]"
          />
        </div>

        <div className="order-1 w-full text-center lg:order-2 lg:w-2/5 lg:text-left">
          <h1 className="mb-6 text-4xl font-normal leading-tight text-[#e3e5e8] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            What AI Misses,
            <br />
            <span className="font-bold text-[#925EEE]">AppMap Finds</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#e3e5e8]/80 md:text-lg lg:mx-0">
            Don't let buggy, misunderstood AI code slip through. AppMap goes
            beyond static analysis by reviewing how code actually runs,
            catching issues before they leave the editor.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/get-appmap"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl"
            >
              Get AppMap
            </a>
            <a
              href="https://meetings.hubspot.com/dustin294"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
