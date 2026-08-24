const points = [
  "Local, self-hosted, and airgapped deployment",
  "Model-independent agent access through MCP",
  "Organization-wide Git and CI controls",
  "Sanitized, repository-owned Gold Traces",
];

export function EnterpriseStrip() {
  return (
    <section className="border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="max-w-[820px] text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          Use AppMap across the development pipeline
        </h2>
        <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#a99fc7]">
          Run AppMap on developer machines and in CI. Keep traces in your environment. Connect your
          approved coding agents and model endpoints.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <li
              key={p}
              className="rounded-xl border border-[#2c2353] bg-[#0d0a1a] p-4 text-[14px] leading-snug text-[#f2effb]"
            >
              {p}
            </li>
          ))}
        </ul>
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
