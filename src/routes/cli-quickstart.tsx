import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const title = "CLI quickstart | AppMap";
const description =
  "Install the AppMap CLI, record your app, index, and connect any MCP client.";
const url = "https://appmap.io/cli-quickstart";

export const Route = createFileRoute("/cli-quickstart")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: CliQuickstartPage,
});

const code = "rounded bg-[#0d0a1a] border border-[#2c2353] px-1.5 py-0.5 font-mono text-[13px] text-[#f2effb]";
const linkAccent = "font-semibold text-[#ff07aa] hover:underline";

const steps: { n: number; title: string; body: React.ReactNode }[] = [
  {
    n: 1,
    title: "Download the CLI",
    body: (
      <>
        Grab the binary for your platform from the AppMap{" "}
        <a
          href="https://github.com/getappmap/appmap-js/releases"
          target="_blank"
          rel="noopener noreferrer"
          className={linkAccent}
        >
          releases page
        </a>
        , rename it to <code className={code}>appmap</code> (<code className={code}>appmap.exe</code> on Windows), and put it on your PATH.
      </>
    ),
  },
  {
    n: 2,
    title: "Set up your project",
    body: (
      <>
        Run <code className={code}>appmap install</code> in your project root. It configures the AppMap trace agent for Java, Kotlin, Python, Ruby, or Node.js (TypeScript and JavaScript), and in alpha .NET, React, Swift, and Go, then writes <code className={code}>appmap.yml</code>.
      </>
    ),
  },
  {
    n: 3,
    title: "Record",
    body: (
      <>
        Run your tests, or exercise your app, with the agent enabled. Traces land in <code className={code}>tmp/appmap</code>.
      </>
    ),
  },
  {
    n: 4,
    title: "Index",
    body: (
      <>
        Run <code className={code}>appmap index</code> once, or <code className={code}>appmap index --watch</code> to keep the index fresh while you work. The editor extensions do this automatically.
      </>
    ),
  },
  {
    n: 5,
    title: "Connect your coding agent",
    body: (
      <>
        Point any MCP client at the AppMap MCP server.
      </>
    ),
  },
];

const mcpConfig = `{"mcpServers": {"appmap": {"command": "appmap", "args": ["query", "mcp"]}}}`;

const docBtn =
  "inline-block rounded-lg border border-[#2c2353] px-4 py-2 text-[13.5px] font-semibold text-[#f2effb] hover:border-[#a99fc7]";

function CliQuickstartPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[880px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              CLI Quickstart
            </div>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              The whole engine. No editor required.
            </h1>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-[880px] space-y-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
              >
                <div className="flex items-baseline gap-4">
                  <div className="text-[28px] font-extrabold text-[#ff07aa] leading-none">
                    {s.n}
                  </div>
                  <h2 className="text-[19px] font-bold text-[#f2effb]">{s.title}</h2>
                </div>
                <div className="mt-3 text-[15px] leading-[1.65] text-[#a99fc7]">
                  {s.body}
                </div>
                {s.n === 5 && (
                  <pre className="mt-4 overflow-x-auto rounded-lg border border-[#2c2353] bg-[#0d0a1a] p-4 text-[13px] leading-[1.55] text-[#f2effb]">
                    <code className="font-mono">{mcpConfig}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://appmap.io/docs/reference/appmap-client-cli.html"
                target="_blank"
                rel="noopener noreferrer"
                className={docBtn}
              >
                CLI reference
              </a>
              <a
                href="https://appmap.io/docs/reference/appmap-mcp.html"
                target="_blank"
                rel="noopener noreferrer"
                className={docBtn}
              >
                MCP reference
              </a>
            </div>
            <p className="mt-6 text-[14.5px] text-[#a99fc7]">
              <span className="font-semibold text-[#f2effb]">Already using a VS Code or JetBrains extension? The CLI is bundled; you have all of this today.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}