import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "Company | AppMap";
const description =
  "AppMap is built by a small senior team with deep experience in runtime analysis, enterprise deployment, and regulated data environments.";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://appmap.io/company" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/company" }],
  }),
  component: CompanyPage,
});

const people = [
  {
    name: "Elizabeth Lawler, Sc.D.",
    role: "CEO and Co-founder",
    body: [
      "Elizabeth has spent more than two decades building systems for sensitive data in regulated environments.",
      "She was Chief Data Officer at Generation Health, where she worked on the data infrastructure behind genetic and personalized-medicine benefit management before the company was acquired by CVS Caremark. She later co-founded Conjur, the DevOps secrets-management company acquired by CyberArk, and went on to lead CyberArk's DevOps Security business.",
      "Across those companies the problem has been consistent: make high-value data usable without putting it somewhere it does not belong. AppMap applies that same principle to software behavior. It captures what applications actually do at runtime, keeps the recordings under the customer's control, and makes that evidence usable by both developers and AI.",
      "Elizabeth holds a Doctor of Science in Epidemiology and a Master of Public Health from Boston University. She has spoken on cybersecurity, DevSecOps, and developer tools at RSA Conference, Harvard's Belfer Center, and TechCrunch Disrupt, where AppMap was a Startup Battlefield finalist in 2022 and returned to the main stage in 2023.",
    ],
  },
  {
    name: "Kevin Gilpin, M.S.",
    role: "CTO and Co-founder",
    body: [
      "Kevin has built developer and enterprise software for 25 years across Java, Ruby, Python, and Node.js. He is the author of the AppMap trace specification, the single format all four AppMap language agents conform to, and an active committer across the AppMap repositories. He holds 14 granted patents. Before AppMap he co-founded Conjur, acquired by CyberArk.",
    ],
  },
  {
    name: "Rafal Rzepecki",
    role: "Senior Architect",
    body: [
      "Rafal is a founding engineer of AppMap and a named co-inventor on AppMap patent filings. He designed AppMap's enterprise deployment architecture, including centralized configuration and LLM proxy integration for regulated environments. He is the author of Slosilo, an open-source cryptography library.",
    ],
  },
];

function CompanyPage() {
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
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Company
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Company
            </h1>
            <p className="mt-6 max-w-[760px] text-[22px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#f2effb] sm:text-[26px]">
              AppMap is built by a small senior team that has worked together for years.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
              Who we are
            </h2>
            <div className="mt-10 space-y-12">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8"
                >
                  <h3 className="text-[22px] font-bold tracking-[-0.3px] text-[#f2effb]">
                    {person.name}
                  </h3>
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
              What we build
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
              AppMap is multi-language runtime instrumentation for Java, Python, Ruby, and Node.js,
              a common recording format, editor extensions for VS Code and JetBrains, a command
              line interface, an MCP server, a runtime code analysis scanner, published agent
              skills, a GitHub review workflow, and enterprise deployment packaging. All of it is
              public.
            </p>
            <a
              href="https://github.com/getappmap"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block max-w-[760px] text-[22px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#f2effb] transition-colors hover:text-[#ff07aa] sm:text-[26px]"
            >
              Everything we ship is public. <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
