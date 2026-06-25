import { createFileRoute, Link } from "@tanstack/react-router";
import { VSCODE_INSTALL_URL } from "@/components/layout/Header";

export const Route = createFileRoute("/blog/2024/06/20/appmap-swe-bench-leader")({
  head: () => ({
    meta: [
      { title: "AppMap leads SWE-bench on cost-efficient runtime analysis" },
      {
        name: "description",
        content:
          "In 2024, AppMap solved 14.6% of the full SWE-bench in under four hours, ahead of Amazon Q and eight other tools, at 5 to 30 percent of the cost of other solvers.",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "AppMap leads SWE-bench on cost-efficient runtime analysis" },
      {
        property: "og:description",
        content:
          "14.6% solve rate on the full SWE-bench, ahead of Amazon Q and eight other tools, at 5 to 30 percent of the cost.",
      },
      { name: "twitter:title", content: "AppMap leads SWE-bench on cost-efficient runtime analysis" },
      {
        name: "twitter:description",
        content:
          "14.6% solve rate on the full SWE-bench, ahead of Amazon Q and eight other tools, at 5 to 30 percent of the cost.",
      },
      { property: "og:url", content: "/blog/2024/06/20/appmap-swe-bench-leader/" },
      { property: "og:image", content: "/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og/og-card.png" },
    ],
    links: [
      { rel: "canonical", href: "/blog/2024/06/20/appmap-swe-bench-leader/" },
    ],
  }),
  component: SweBenchPost,
});

function SweBenchPost() {
  return (
    <div className="bg-[#0e0a1f] text-[#f2effb]">
      <article className="mx-auto max-w-[760px] px-6 py-20">
        <Link
          to="/benchmarks"
          className="text-[13.5px] font-semibold text-[#a99fc7] transition hover:text-[#ff07aa]"
        >
          ← Back to benchmarks
        </Link>

        <p className="mt-8 text-[13px] uppercase tracking-[0.14em] text-[#a99fc7]">
          June 20, 2024
        </p>
        <h1 className="mt-3 text-[34px] font-extrabold leading-[1.1] tracking-[-1px] sm:text-[44px]">
          AppMap leads SWE-bench on cost-efficient runtime analysis
        </h1>
        <p className="mt-6 text-[18px] leading-[1.55] text-[#cfc6ea]">
          AppMap solved 14.6% of the full SWE-bench in under four hours, ahead
          of Amazon Q and eight other tools, at 5 to 30 percent of the cost of
          other solvers.
        </p>
        <p className="mt-5 text-[15px] italic leading-[1.6] text-[#a99fc7]">
          In 2024, AppMap's earlier AI workflow demonstrated the cost advantage
          of runtime-grounded software analysis on SWE-bench.
        </p>

        <hr className="my-10 border-[#2c2353]" />

        <h2 className="text-[24px] font-bold tracking-[-0.5px]">What we ran</h2>
        <p className="mt-3 text-[16px] leading-[1.7] text-[#cfc6ea]">
          The full SWE-bench fixture set, not the lite subset. Each task was
          attempted by an AppMap-driven agent with hard budget caps on tokens
          and wall-clock time. The agent's context came from runtime analysis
          of the target repository, not from brute-force prompt expansion.
        </p>

        <h2 className="mt-10 text-[24px] font-bold tracking-[-0.5px]">Results</h2>
        <ul className="mt-3 space-y-2 text-[16px] leading-[1.7] text-[#cfc6ea]">
          <li>
            <span className="font-semibold text-[#f2effb]">14.6% solve rate</span>
            {" "}on the full SWE-bench — ahead of Amazon Q and eight other tools at the time.
          </li>
          <li>
            <span className="font-semibold text-[#f2effb]">Under four hours</span>
            {" "}of total runtime across the suite.
          </li>
          <li>
            <span className="font-semibold text-[#f2effb]">5 to 30 percent</span>
            {" "}of the cost reported by other solvers on comparable runs.
          </li>
        </ul>

        <h2 className="mt-10 text-[24px] font-bold tracking-[-0.5px]">Why cost matters</h2>
        <p className="mt-3 text-[16px] leading-[1.7] text-[#cfc6ea]">
          Solve rates make the headlines, but cost is what decides whether an
          approach is usable inside a real engineering loop. Runtime-grounded
          analysis lets the agent skip speculative context expansion: it sees
          what the code actually does, narrows the fix to the relevant call
          paths, and stops. That is where the order-of-magnitude cost gap
          against brute-force approaches comes from.
        </p>

        <h2 className="mt-10 text-[24px] font-bold tracking-[-0.5px]">What's next</h2>
        <p className="mt-3 text-[16px] leading-[1.7] text-[#cfc6ea]">
          The same runtime-grounded approach now powers the AppMap MCP server
          and the current benchmark results. See the latest numbers on the
          {" "}
          <Link to="/benchmarks" className="font-semibold text-[#ff07aa] hover:underline">
            benchmarks page
          </Link>
          .
        </p>

        <div className="mt-12 flex flex-wrap gap-3.5 border-t border-[#2c2353] pt-10">
          <a
            href={VSCODE_INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110"
          >
            Get AppMap
          </a>
          <Link
            to="/benchmarks"
            className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] transition hover:border-[#a99fc7]"
          >
            See the current benchmark
          </Link>
        </div>
      </article>
    </div>
  );
}