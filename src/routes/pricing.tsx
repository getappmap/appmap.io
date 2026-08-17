import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title =
  "Pricing: Free for Developers and Teams. Enterprise for Controlled Deployment. | AppMap";
const description =
  "AppMap is free for developers and teams: traces, diagrams, MCP context, and AppMap Gold Traces versioned in your repository. Enterprise adds controlled deployment and support.";
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
  "Runtime traces and interactive diagrams",
  "Maps for developers in VS Code and JetBrains",
  "Runtime context for coding agents over MCP",
  "AppMap Gold Traces, versioned with the code",
  "Community support",
];

const professional = [
  "Everything in Community. The product is the same, with no feature gates",
  "Priority help with installation and configuration",
  "Gold Trace and review workflow assistance",
  "Faster answers from the AppMap team",
];

const enterprise = [
  "Controlled deployment and internal distribution",
  "Organizational configuration and integrations",
  "CI enforcement and telemetry routing",
  "Air-gapped operation",
  "Training, SLAs, and enterprise support",
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
              Start free locally. Scale AppMap Gold Traces across your team.
            </h1>
            <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-[#a99fc7]">
              AppMap is free for developers and teams. Traces, diagrams, and MCP context cost nothing, and so do AppMap Gold Traces versioned in your repository. Enterprise adds controlled deployment and support. AppMap starts in the developer environment, where traces are created, explored, and used by coding agents.
            </p>
          </div>
        </section>

        <section className="px-6 pb-14">
          <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-3">
            {/* Community */}
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">Community</h2>
              <div className="mt-4 text-[40px] font-extrabold leading-none text-[#f2effb]">
                Free
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                For developers who can self-serve.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={community} />
              <div className="mt-8 flex-1" />
              <Link to="/get-appmap" className={primaryBtn}>
                Get AppMap
              </Link>
            </div>

            {/* Professional */}
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">Professional</h2>
              <div className="mt-4 flex h-[40px] items-end text-[40px] font-extrabold leading-none text-[#f2effb]">
                $15
                <span className="ml-2 pb-[3px] text-[14px] font-semibold text-[#a99fc7]">
                  per developer per month
                </span>
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                For an individual developer who wants AppMap with priority support.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={professional} />
              <div className="mt-8 flex-1" />
              <a href="mailto:info@appmap.io" className={primaryBtn}>
                Get Professional
              </a>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-8">
              <h2 className="text-[22px] font-bold text-[#f2effb]">Enterprise</h2>
              <div className="mt-4 flex h-[40px] items-center text-[28px] font-extrabold leading-none text-[#f2effb]">
                Contact us
              </div>
              <p className="mt-3 text-[14px] text-[#a99fc7]">
                For the organization.
              </p>
              <div className="mt-6 border-t border-[#2c2353]" />
              <Bullets items={enterprise} />
              <div className="mt-8 flex-1" />
              <Link to="/book-a-demo" className={primaryBtn}>
                Book a Demo
              </Link>
              <p className="mt-3 text-center text-[13.5px] text-[#a99fc7]">
                or email{" "}
                <a href="mailto:info@appmap.io" className={accent}>
                  info@appmap.io
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