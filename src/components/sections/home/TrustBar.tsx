const cells = [
  { n: "~140K", l: "active editor installs" },
  { n: "100K+", l: "developer community" },
  { n: "Top-4", l: "U.S. bank in production" },
  { n: "2020", l: "open source since" },
];

export function TrustBar() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-8 text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Developers trust AppMap
        </h2>
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#2c2353] bg-[#2c2353] lg:grid-cols-4">
          {cells.map((c) => (
            <div key={c.l} className="bg-[#16112b] p-6 text-center">
              <div className="text-[28px] font-extrabold text-[#f2effb]">{c.n}</div>
              <div className="mt-1 text-[13px] text-[#a99fc7]">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}