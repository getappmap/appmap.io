const SONAR = "https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/";
const SMARTBEAR = "https://smartbear.com/news/news-releases/smartbear-survey-70-of-software-experts-concerned/";

const stats = [
  {
    number: "42%",
    body: "of committed code is already AI-generated, on track for 65% by 2027.",
    sourceLabel: "Sonar, 2026",
    sourceUrl: SONAR,
  },
  {
    number: "96%",
    body: "of developers do not fully trust AI-generated code.",
    sourceLabel: "Sonar, 2026",
    sourceUrl: SONAR,
  },
  {
    number: "48%",
    body: "always verify it before committing. Barely half.",
    sourceLabel: "Sonar, 2026",
    sourceUrl: SONAR,
  },
  {
    number: "70%",
    body: "of software leaders say application quality has already degraded as AI sped up delivery.",
    sourceLabel: "SmartBear, 2026",
    sourceUrl: SMARTBEAR,
  },
  {
    number: "60%",
    body: "hit quality issues in the past year because code outran testing.",
    sourceLabel: "SmartBear, 2026",
    sourceUrl: SMARTBEAR,
  },
  {
    number: "38%",
    body: "say reviewing AI code takes more effort than reviewing a human's.",
    sourceLabel: "Sonar, 2026",
    sourceUrl: SONAR,
  },
];

export function PainStats() {
  return (
    <section className="border-t border-b border-[#2c2353] bg-[#0d0a1a] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          The code is shipping. The confidence is not.
        </h2>
        <p className="mt-3 max-w-[680px] text-[17px] text-[#a99fc7]">
          AI writes more of your codebase every month. Almost no one knows what
          it actually does.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <li
              key={s.number + s.body}
              className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
            >
              <div className="text-[44px] font-extrabold leading-none tracking-[-1.5px] text-[#ff07aa] sm:text-[52px]">
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

        <p className="mt-10 max-w-3xl text-[16px] text-[#f2effb]">
          The volume is climbing, the trust is not, and the testing cannot keep
          up. AppMap closes that gap. Every AI change comes back as a
          behavioral review, a picture of what really happened, and a test
          that stays.
        </p>
      </div>
    </section>
  );
}