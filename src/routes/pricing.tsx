import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title =
  "Pricing: Start Free Locally. Scale Shared Recordings Across Your Team. | AppMap";
const description =
  "Local recording, diagrams, and AI context are free for developers. AppMap Central lets teams share and govern trusted AppMap recordings in infrastructure they control. Enterprise adds controlled deployment and support.";
const url = "https://appmap.io/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PricingPage,
});

const primaryBtn =
  "inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]";
const accent = "font-semibold text-[#ff07aa] hover:underline";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-[3px] h-4 w-4 flex-none text-[#ff07aa]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8.143 13.314 4.9 10.07l-1.414 1.415 4.657 4.656L18.657 5.628 17.243 4.214z"
      />
    </svg>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-[14.5px] leading-[1.55] text-[#f2effb]">
          <Check />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

const community = [
  "Sequence diagrams, dependency maps, flame graphs, and trace views",
  "Runtime code analysis in the editor",
  "The AppMap CLI and MCP server, for any AI agent",
  "VS Code and JetBrains extensions",
  "Community support",
];

const central = [
  "Sanitized Golden AppMap traces stored with the code they describe",
  "Shared trace coverage across important application paths",
  "Recordings cleaned up so developers and AI agents can compare meaningful changes",
  "A shared library of trusted AppMap recordings across editors, command line, GitHub, and automation",
  "Team curation and governance of the recordings your team trusts as baselines",
  "Runs entirely in infrastructure you control",
];

const enterprise = [
  "Everything in AppMap Central",
  "Air-gapped and on-premises packaging, with offline activation",
  "Internal distribution of agents, extensions, and CLI",
  "Configurable telemetry routing into your internal observability stack",
  "Approved AI agent and model configurations",
  "Custom engineering, training, priority support, and SLAs",
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1040px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Pricing
            </div>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Start free locally. Scale shared recordings across your team.
            </h1>
            <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-[#a99fc7]">
              Local recording, diagrams, and AI context are free for developers. AppMap Central lets teams share and govern recordings of how their applications actually ran, across repositories and workflows.
            </p>
          </div>
        </section>

        <section className="px-6 pb-14">
          <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Community */}
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">Community</h2>
              <div className="mt-4 text-[40px] font-extrabold leading-none text-[#f2effb]">
                Free
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                For every developer.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={community} />
              <p className="mt-5 text-[13px] leading-[1.55] text-[#a99fc7]">
                Optional: an individual support subscription, $15 per month, for priority help. The product stays free at your desk.
              </p>
              <div className="mt-8 flex-1" />
              <Link to="/get-appmap" className={primaryBtn}>
                Get AppMap
              </Link>
            </div>

            {/* AppMap Central */}
            <div className="flex flex-col rounded-2xl border border-[#ff07aa]/40 bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">AppMap Central</h2>
              <div className="mt-4 flex h-[40px] items-center text-[28px] font-extrabold leading-none text-[#f2effb]">
                Contact us
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                Shared recordings for developers, AI agents, and automation.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={central} />
              <p className="mt-5 text-[13px] leading-[1.55] text-[#a99fc7]">
                One shared library of trusted AppMap recordings, kept in your own repositories and developer environments. GitHub Actions and CI are optional workflows that can consume or maintain it. There is no hosted platform.
              </p>
              <div className="mt-8 flex-1" />
              <Link to="/book-a-demo" className={primaryBtn}>
                Book a Demo
              </Link>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">Enterprise</h2>
              <div className="mt-4 flex h-[40px] items-center text-[28px] font-extrabold leading-none text-[#f2effb]">
                Contact us
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                For regulated and large-scale deployments.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={enterprise} />
              <div className="mt-8 flex-1" />
              <Link to="/book-a-demo" className={primaryBtn}>
                Book a Demo
              </Link>
              <p className="mt-3 text-center text-[13.5px] text-[#a99fc7]">
                or email{" "}
                <a href="mailto:elizabeth@appmap.io" className={accent}>
                  elizabeth@appmap.io
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1040px] text-center">
            <p className="text-[13px] text-[#a99fc7]">
              By downloading and using AppMap you agree to the{" "}
              <a
                href="https://appmap.io/community/terms-and-conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                terms and conditions
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}