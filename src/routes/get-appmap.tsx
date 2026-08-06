import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";

const title = "Get AppMap | AppMap";
const description =
  "One engine. Install it your way. VS Code, JetBrains, or straight from the terminal: every path ends at the same ground truth.";

export const Route = createFileRoute("/get-appmap")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/get-appmap" },
      { property: "og:image", content: "/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "/get-appmap" }],
  }),
  component: GetAppMapPage,
});

const primaryBtn =
  "inline-block rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]";

function GetAppMapPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Get AppMap
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              One engine. Install it your way.
            </h1>
            <p className="mt-5 max-w-3xl text-[18px] leading-relaxed text-[#a99fc7]">
              VS Code, JetBrains, or straight from the terminal: every path ends at the same ground truth.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <h2 className="text-[19px] font-bold text-[#f2effb]">VS Code</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                One extension. Everything you need to start.
              </p>
              <div className="mt-5">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=appland.appmap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Install for VS Code
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <h2 className="text-[19px] font-bold text-[#f2effb]">JetBrains</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                One plugin. Everything you need to start.
              </p>
              <div className="mt-5">
                <a
                  href={JETBRAINS_INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Install for JetBrains
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-[1120px]">
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <h2 className="text-[19px] font-bold text-[#f2effb]">Command line</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                Install the AppMap CLI and connect any MCP client over MCP. If you installed one of our extensions, you already have the CLI.
              </p>
              <div className="mt-5">
                <Link to="/cli-quickstart" className={primaryBtn}>
                  CLI quickstart
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="text-[18px] leading-[1.7] text-[#f2effb]">
              <span className="font-semibold">Always free at your desk.</span> When your organization standardizes on AppMap, we support you.{" "}
              <Link to="/pricing" className="font-semibold text-[#ff07aa] hover:underline">
                See pricing
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
