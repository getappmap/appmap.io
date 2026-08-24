export function BenchmarkStrip() {
  return (
    <section className="border-b border-[#2c2353] bg-[#0d0a1a] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="max-w-[820px] text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Runtime context changed the result.
        </h2>
        <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#a99fc7]">
          Under a three-tool-call limit, agents using AppMap reached 100% root-cause accuracy.
          Source-only agents reached 28%.
        </p>
        <p className="mt-3 max-w-[720px] text-[16px] font-semibold text-[#f2effb]">
          The AppMap condition also used 3.4 times less model spend.
        </p>
        <p className="mt-3 max-w-[720px] text-[13px] text-[#7c8aa6]">
          One internal study, Claude models. Method and limits in the benchmark.
        </p>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <a
            href="/benchmarks"
            className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
          >
            Read the benchmark
          </a>
          <a
            href="/research/runtime-rca.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
          >
            Review the methodology
          </a>
        </div>
      </div>
    </section>
  );
}
