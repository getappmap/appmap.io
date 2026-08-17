import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "Team | AppMap";
const description =
  "AppMap is built by a small team with deep experience in developer tools, enterprise security, runtime systems, and regulated data.";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://appmap.io/team" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/team" }],
  }),
  component: TeamPage,
});

const people = [
  {
    name: "Elizabeth Lawler, Sc.D.",
    role: "CEO and co-founder",
    body: [
      "Elizabeth has spent more than two decades building systems for sensitive data in regulated environments. She was Chief Data Officer at Generation Health, acquired by CVS Caremark, and later co-founded Conjur, the secrets-management company acquired by CyberArk. She then served as VP of DevOps Security at CyberArk.",
      "Across those companies, the problem has been consistent: make high-value data useful without putting it somewhere it does not belong.",
      "Elizabeth holds a Doctor of Science in Epidemiology and a Master of Public Health from Boston University. Her patented work spans enterprise access control, security, runtime software analysis, and application modernization.",
    ],
  },
  {
    name: "Kevin Gilpin",
    role: "CTO and co-founder",
    body: [
      "Kevin has spent more than 25 years building developer tools and software infrastructure across Java, Ruby, Python, and Node.js. He co-founded Conjur, acquired by CyberArk.",
      "At AppMap, Kevin authored the trace specification used across its language agents and remains an active contributor. His work spans runtime instrumentation, application behavior capture, software analysis, and AI agent workflows. His patented work spans enterprise software, access control and security, application modernization, and runtime software analysis.",
    ],
  },
  {
    name: "Rafal Rzepecki",
    role: "Senior Architect",
    body: [
      "Rafal is a core architect of AppMap's runtime and enterprise systems. His work includes enterprise deployment architecture, LLM proxy integration for regulated environments, and the systems that allow AppMap to operate inside customer-controlled infrastructure.",
      "He is also the author of Slosilo. His patented work includes runtime software analysis and application modernization.",
    ],
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section
          className="px-6 pt-20 pb-12"
          style={{
            background:
              "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)",
          }}
        >
          <div className="mx-auto max-w-[1120px]">
            <h1 className="max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Team
            </h1>
            <p className="mt-6 max-w-[760px] text-[22px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#f2effb] sm:text-[26px]">
              AppMap is built by a small team with deep experience in developer tools, enterprise
              security, runtime systems, and regulated data. Its founders previously built Conjur,
              acquired by CyberArk.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <div className="space-y-12">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8"
                >
                  <h2 className="text-[22px] font-bold tracking-[-0.3px] text-[#f2effb]">
                    {person.name}
                  </h2>
                  <div className="mt-1 text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
                    {person.role}
                  </div>
                  <div className="mt-5 max-w-[760px] space-y-4">
                    {person.body.map((paragraph, i) => (
                      <p key={i} className="text-[16px] leading-[1.7] text-[#a99fc7]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
              Where AppMap comes from
            </h2>
            <div className="mt-6 max-w-[760px] space-y-4">
              <p className="text-[17px] leading-[1.7] text-[#a99fc7]">
                The AppMap product launched in 2021. During Startup Battlefield in October 2022,
                TechCrunch described it as{" "}
                <a
                  href="https://techcrunch.com/2022/10/18/code-analysis-tool-appmap-wants-to-become-google-maps-for-developers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f2effb] underline transition hover:text-[#ff07aa]"
                >
                  “Google Maps for developers.”
                </a>{" "}
                The idea was simple: developers should be able to see software behavior as they write
                code. “When we don’t know how our software works, we’re making best guesses when we
                write code,” Elizabeth told TechCrunch.
              </p>
              <p className="text-[17px] leading-[1.7] text-[#a99fc7]">
                Today, AI coding agents make code changes continuously, and the guessing problem is
                bigger. The original loop still holds:{" "}
                <span className="font-semibold text-[#f2effb]">Map. Analyze. Share. Repeat.</span>{" "}
                Map turns runtime traces into diagrams of application behavior. Analyze compares traces to find behavioral changes, drift, performance issues, and security impact. Share commits selected, sanitized traces with the code and puts the behavioral review in the pull request. Repeat: as the code changes, record fresh traces and compare again.
              </p>
              <p className="text-[18px] font-semibold leading-[1.7] text-[#f2effb]">
                AI did not create AppMap’s thesis. It made the thesis urgent.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
              Work with us
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
              AppMap is free for developers and teams.
            </p>
            <p className="mt-4 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
              Organizations that need controlled deployment, internal distribution, enterprise
              configuration, integrations, training, and support can work with us directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                to="/get-appmap"
                className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
              >
                Get AppMap
              </Link>
              <Link
                to="/enterprise"
                className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
              >
                Enterprise
              </Link>
              <a
                href="https://github.com/getappmap"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
