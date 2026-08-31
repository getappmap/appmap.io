import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

// Set to true to publish the security disclosure page.
export const SECURITY_PAGE_ENABLED = false;

const title = "Security | AppMap";
const description =
  "How to report a security issue in AppMap, what is in scope, and what to expect.";

const inScope = [
  "The AppMap extensions for VS Code and JetBrains",
  "The AppMap language agents for Java, Kotlin, Python, Ruby, and Node.js (TypeScript and JavaScript), and in alpha .NET, React, Swift, and Go",
  "The AppMap CLI",
  "The AppMap MCP server",
  "The runtime code analysis scanner",
  "The published AppMap skills and the GitHub review action",
];

const outOfScope = [
  "The appmap.io website and its marketing pages",
  "TLS configuration and security header findings",
  "Missing or misconfigured DNS records",
  "Automated scanner output against the website",
  "Reports without reproduction steps or an affected version",
];

export const Route = createFileRoute("/security")({
  beforeLoad: () => {
    if (!SECURITY_PAGE_ENABLED) {
      throw redirect({ to: "/security-faq" });
    }
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://appmap.io/security" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/security" }],
  }),
  component: SecurityPage,
});

function SecurityPage() {
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
              Security
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              Security
            </h1>
            <p className="mt-6 max-w-[760px] text-[22px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#f2effb] sm:text-[26px]">
              AppMap clients run on developer machines and in CI. We take reports about them
              seriously.
            </p>
          </div>
        </section>

        <section className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px] space-y-12">
            <div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                Reporting a security issue
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
                Send reports to{" "}
                <a
                  href="mailto:info@appmap.io?subject=Security%20disclosure"
                  className="font-semibold text-[#ff07aa] hover:underline"
                >
                  info@appmap.io
                </a>
                . Include reproduction steps and the affected version. We acknowledge reports
                within three business days.
              </p>
            </div>

            <div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                What is in scope
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
                These are the components that run in your environment:
              </p>
              <ul className="mt-4 max-w-[760px] space-y-2">
                {inScope.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-[#a99fc7]">
                    <span aria-hidden="true" className="text-[#ff07aa]">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                What is out of scope
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
                Reports about the following are not acted on:
              </p>
              <ul className="mt-4 max-w-[760px] space-y-2">
                {outOfScope.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-[#a99fc7]">
                    <span aria-hidden="true" className="text-[#ff07aa]">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px] space-y-12">
            <div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                How we handle reports
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
                We do not operate a bug bounty program. We credit researchers who report valid
                issues. Security fixes are released for the current version of each client.
                Enterprise agreements can define longer support windows and response commitments.
              </p>
            </div>

            <div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                Other contacts
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#a99fc7]">
                For privacy questions, contact{" "}
                <a
                  href="mailto:info@appmap.io"
                  className="font-semibold text-[#ff07aa] hover:underline"
                >
                  info@appmap.io
                </a>
                . For how AppMap handles code, runtime data, sign in, and file storage, see the{" "}
                <Link to="/security-faq" className="font-semibold text-[#ff07aa] hover:underline">
                  Security FAQ
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}