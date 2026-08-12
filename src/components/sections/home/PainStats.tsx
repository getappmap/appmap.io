const SONAR = "https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/";
const SMARTBEAR = "https://smartbear.com/news/news-releases/smartbear-survey-70-of-software-experts-concerned/";

const stats = [
  {
    number: "96%",
    body: "of developers do not fully trust AI-generated code",
    sourceLabel: "Sonar, 2026",
    sourceUrl: SONAR,
  },
  {
    number: "70%",
    body: "of software leaders say quality has already degraded as AI sped up delivery",
    sourceLabel: "SmartBear, 2026",
    sourceUrl: SMARTBEAR,
  },
  {
    number: "60%",
    body: "hit quality issues last year because code outran testing",
    sourceLabel: "SmartBear, 2026",
    sourceUrl: SMARTBEAR,
  },
];

export function PainStats() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#0d0a1a] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          The code is shipping. <span className="text-[#F87171]">Confidence is not.</span>
        </h2>
        <p className="mt-3 text-[17px] text-[#a99fc7]">
          AI writes more of your codebase every month. Almost no one knows what it actually does.
        </p>

        <ul className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-3">
          {stats.map((s) => (
            <li
              key={s.number + s.body}
              className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
            >
              <div className="text-[44px] font-extrabold leading-none tracking-[-1.5px] text-[#F87171] sm:text-[52px]">
                {s.number}
              </div>
              <p className="mt-4 text-[15.5px] leading-snug text-[#f2effb]">
                {s.body}
              </p>
              <a
                href={s.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[12.5px] text-[#a99fc7] underline decoration-[#3a2f6b] underline-offset-4 hover:text-[#ff07aa] hover:decoration-[#ff07aa]"
              >
                {s.sourceLabel}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-[#2c2353] border-l-2 border-l-[#ff07aa] bg-[#16112b] p-6">
          <h3 className="text-[21px] font-bold leading-tight text-[#f2effb] sm:text-[22px]">
            Catch unexpected behavior while the change is still in the editor.
          </h3>
          <p className="mt-2 max-w-[860px] text-[15px] leading-relaxed text-[#a99fc7] sm:text-[16px]">
            AppMap gives developers and AI agents runtime evidence as they work, so they can investigate calls, queries, exceptions, and side effects before the change moves downstream.
          </p>
        </div>
      </div>
    </section>
  );
}