import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { VSCODE_INSTALL_URL, JETBRAINS_INSTALL_URL } from "@/components/layout/Header";

const title = "AppMap Gold Traces | AppMap";
const description =
  "Gold Traces are curated recordings of runtime behavior, versioned in git with the code. Developers read them as diagrams. Coding agents query them over MCP.";
const url = "https://appmap.io/gold-traces";

export const Route = createFileRoute("/gold-traces")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: GoldTracesPage,
});

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-lg border border-[#2c2353] bg-[#1c1538] px-5 py-3 text-[15px] font-semibold text-[#f2effb] transition hover:border-[#ff07aa]";

const cards = [
  {
    h: "Blast radius",
    b: "The routes, functions, and queries affected by a change.",
  },
  {
    h: "Architectural drift",
    b: "Refactors and upgrades meant to hold behavior steady, verified to have held it.",
  },
  {
    h: "Hotfix verification",
    b: "The change touched the intended path and nothing else.",
  },
];

function Section({
  heading,
  children,
  alt,
}: {
  heading: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      className={`border-t border-[#2c2353] px-6 py-16 ${alt ? "bg-[#16112b]" : ""}`}
    >
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[26px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[32px]">
          {heading}
        </h2>
        <div className="mt-4 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
          {children}
        </div>
      </div>
    </section>
  );
}

function GoldTracesPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <section
          className="px-6 pt-20 pb-14"
          style={{
            background:
              "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)",
          }}
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              APPMAP GOLD TRACES
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              AppMap Gold Traces
            </h1>
            <p className="mt-5 max-w-[780px] text-[19px] leading-[1.6] text-[#a99fc7]">
              Runtime behavior an agent could not otherwise obtain. Current at every commit. The
              baseline every change is verified against.
            </p>

            <div className="mt-10 rounded-xl border border-[#ff07aa] bg-[#1c1538] p-6">
              <p className="max-w-[820px] text-[16px] leading-[1.7] text-[#f2effb]">
                Found a <code className="font-mono text-[#ff07aa]">gold_traces/</code> directory in
                a repository? Someone on the team keeps runtime behavior versioned with the code.
                Install AppMap to read the traces as diagrams, and your coding agent can query them
                over MCP.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={VSCODE_INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Install for VS Code
                </a>
                <a
                  href={JETBRAINS_INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  Install for JetBrains
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section heading="Context agents cannot get any other way" alt>
          <p>
            A coding agent usually cannot run the application. No environment, no database, no
            credentials. From source it can only infer which queries fire, in what order, what a
            route actually touches. Some of it cannot be recovered from source at all. A committed
            trace is runtime ground truth without the runtime. Checkout delivers it with the code,
            so it is current at every commit, on every branch. And because the agent did not create
            the traces, they are a baseline it can verify its own changes against.
          </p>
        </Section>

        <Section heading="Three kinds of context">
          <p>
            A coding agent works from three kinds of context. Source context is the code as written.
            Documentation context is the code as described. Runtime context is a record of what the
            code did when it ran: the calls it made, in what order, and the queries it issued. The
            first two can be read from the repository. Runtime context can&apos;t. Most agents work without it. AppMap records it, and Gold Traces version it
            with the code, so all three kinds of context arrive with a checkout.
          </p>
        </Section>

        <Section heading="The team's approved baseline">
          <p>
            Gold Traces are the behaviors a team has approved: the flows that must hold across every
            change, and the record intended changes must show up in. When code changes, the
            comparison against the baseline shows what held, what moved, and whether anything moved
            that shouldn't have. Developers and coding agents judge the change against the same
            evidence.
          </p>
        </Section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-16">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[26px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[32px]">
              What teams use the comparison for
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((c) => (
                <div
                  key={c.h}
                  className="rounded-xl border border-[#2c2353] bg-[#1c1538] px-5 py-5"
                >
                  <div className="text-[16px] font-semibold text-[#f2effb]">{c.h}</div>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#a99fc7]">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section heading="What a Gold Trace is">
          <p>
            An AppMap trace is a recording of what the application did when it ran: the calls it
            made, in what order, and the queries it issued. Gold Traces are the curated set. They
            are selected to cover the key application paths, driven by a representative subset of
            the test suite. Each one is a small JSON file. At least one trace covers each
            release-critical subsystem, with additional traces for materially different code paths.
          </p>
        </Section>

        <Section heading="Where they live" alt>
          <p>
            Gold Traces are committed in the{" "}
            <code className="font-mono text-[#f2effb]">gold_traces/</code> directory, alongside the
            code. Git manages their provenance. They are flagged as binary in{" "}
            <code className="font-mono text-[#f2effb]">.gitattributes</code>, so git never tries to
            merge them. A branch carries the trace set committed with that branch. When a feature
            branch changes behavior, its updated traces merge to main with the code, and every
            future branch inherits them. Checkout is the delivery mechanism: a developer or coding
            agent opening the repository starts with the same Gold Traces.
          </p>
          <p className="mt-4">
            Every trace conforms to one published specification, the same format for every language.
            A <code className="font-mono text-[#f2effb]">gold_traces/</code> directory is portable: any
            MCP-capable agent can consume it, and any tool written against the specification can
            process it. The specification is open, at{" "}
            <a
              href="https://github.com/getappmap/appmap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f2effb] underline decoration-[#ff07aa] underline-offset-2"
            >
              github.com/getappmap/appmap
            </a>
            .
          </p>
        </Section>

        <Section heading="One person configures. The team expands.">
          <p>
            Setup happens once per repository and is committed with the code. The
            appmap-gold-traces skill configures recording, creates the directory, and analyzes the
            code and test suite to select the initial set, listed in{" "}
            <code className="font-mono text-[#f2effb]">gold_traces/manifest.yml</code>. Where
            coverage is missing, the skill suggests the test that would close it, and the coding
            agent can write it. After that, no one else configures anything. Coverage grows as a
            byproduct of normal work: a bug gets fixed, the path gets a trace, and later changes are compared
            against it.
          </p>
        </Section>

        <Section heading="What developers see" alt>
          <p>
            The IDE extensions display any trace as a diagram: the execution path, the queries with
            their sources, the API surface. The comparison between two revisions renders the same
            way, showing what held and what changed.
          </p>
        </Section>

        <Section heading="What coding agents query">
          <p>
            Agents read the same traces over MCP: call trees, routes, SQL. The appmap-review skill
            compares the Gold Traces of a base and head revision, correlates the behavioral diff
            with the code diff, and reports what the change did when it ran: API changes and drift,
            SQL impact, security-affecting paths, unexpected side effects, performance changes. The
            findings post to the pull request. The same review runs locally before push, or in CI.
          </p>
        </Section>

        <Section heading="What issues does the review find?" alt>
          <p>
            Not issues from a list. A linter or a static analyzer carries a catalog of known-bad
            patterns and finds instances of them in your code. A behavioral review carries no
            catalog. It compares the change against the recorded behavior the team has approved, and
            reports what departed from it. That means it can expose the defects that are on no list: the
            ones specific to your application, produced by parts that are each correct alone. No
            rule says &quot;two clocks in AI fallback calls,&quot; and no rule could. Every test can pass
            while the behavior changes. The comparison surfaces it because the behavior changed. A
            catalog of known-bad patterns finds what everyone&apos;s code gets wrong. A baseline of
            known-good behavior finds what your change got wrong. AppMap also includes a rule-based
            scanner for known problems, such as N+1 queries.
          </p>
        </Section>

        <Section heading="Sanitized before commit" alt>
          <p>
            Before a Gold Trace is committed, the AppMap CLI's sanitize command removes data values that
            may contain PII, secrets, or credentials. Gold Traces are development artifacts and are
            excluded from the built application, the same way test and documentation directories
            are.
          </p>
        </Section>

        <Section heading="How a set grows in practice">
          <p>
            One of our own production applications adopted Gold Traces in a single day: one commit
            landed the manifest and the PR-time review together, and the skills were vendored so
            every agent session used them automatically. Coverage grew one fix at a time. Each
            incident, once fixed, was pinned as a trace. A read-only drift watch was added on main
            to catch changes from any lane. Each trace carries a plain-language line stating what
            breaks for a user if it fails. Four months of ordinary development later, the set guards
            forty behaviors across content integrity, authorization, ingest, and security paths,
            maintained by a team that is mostly AI agents.
          </p>
        </Section>

        <Section heading="When the team is mostly agents" alt>
          <p>
            Multiple agent sessions can touch the same code in a day. No agent sees the whole, and no
            agent remembers yesterday. The Gold Trace set is the part that persists: the behaviors the
            team has approved, in the repository, where every session reads them. The review checks
            every change against that baseline no matter which agent or lane produced it, and the
            drift watch covers pushes that skip the pull request. The application described above runs
            this way.
          </p>
        </Section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[26px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[32px]">
              Enterprise
            </h2>
            <p className="mt-4 max-w-[820px] text-[16px] leading-[1.7] text-[#a99fc7]">
              Teams start free in their own repositories. AppMap Enterprise adds airgapped
              deployment, internal distribution, organization-registered installs, and telemetry
              routing for organization-wide Gold Trace programs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/enterprise" className={primaryBtn}>
                Explore Enterprise
              </Link>
              <Link to="/book-a-demo" className={secondaryBtn}>
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
