export function OneVsFifteen() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          One query, not fifteen.
        </h2>
        <p className="mt-4 max-w-[700px] text-[16px] font-semibold text-[#f2effb]">
          Developers use the maps. Coding agents query the same traces.
        </p>
        <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">
          In our benchmark, one runtime query replaced a source-only search path of 15+ calls.{" "}
          <a href="/benchmarks" className="font-medium text-[#ff07aa] hover:underline">
            See the benchmark →
          </a>
        </p>
      </div>
    </section>
  );
}