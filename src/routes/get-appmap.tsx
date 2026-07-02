import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "Get AppMap | AppMap";
const description =
  "Three ways in. Same ground truth. Install AppMap for VS Code, JetBrains, or use the CLI and MCP.";

export const Route = createFileRoute("/get-appmap")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/get-appmap" },
      { property: "og:image", content: "/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "/get-appmap" }],
  }),
  component: GetAppMapPage,
});

const primaryBtn =
  "inline-block rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]";
const secondaryBtn =
  "inline-block rounded-lg border border-[#2c2353] px-4 py-2 text-[13.5px] font-semibold text-[#f2effb] hover:border-[#a99fc7]";

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
              Three ways in. Same ground truth.
            </h1>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <h2 className="text-[19px] font-bold text-[#f2effb]">VS Code</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                Install the AppMap extension from the Visual Studio Code Marketplace. The extension bundles the CLI and keeps the query index fresh automatically.
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
                Install the AppMap plugin for IntelliJ, PyCharm, WebStorm, RubyMine, and other JetBrains IDEs. The extension bundles the CLI and keeps the query index fresh automatically.
              </p>
              <div className="mt-5">
                <a
                  href="https://plugins.jetbrains.com/plugin/16701-appmap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Install for JetBrains
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
              <h2 className="text-[19px] font-bold text-[#f2effb]">CLI and MCP</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[#a99fc7]">
                Terminal first? Install the AppMap CLI, record your tests, and point any MCP client at appmap query mcp.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="https://appmap.io/docs/reference/appmap-client-cli.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Install the CLI
                </a>
                <a
                  href="https://appmap.io/docs/reference/appmap-mcp.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  MCP reference
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="text-[14.5px] text-[#a99fc7]">
              Free for individual developers and small teams. Over 20 users, CI enforcement, or internal telemetry routing comes with a{" "}
              <Link to="/enterprise" className="font-semibold text-[#ff07aa] hover:underline">
                support contract
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}