import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { RuntimeBehaviorAnalysis } from "@/components/sections/enterprise/RuntimeBehaviorAnalysis";
import { DeploymentTopology } from "@/components/sections/enterprise/DeploymentTopology";



const pilotSteps = [
  {
    h: "Start on the workstation",
    b: "Teams do not need to instrument CI to begin. AppMap records from a running process, so teams start in the editor or in environments that already run: a local run, a focused test, a smoke script, an API call, or a QA environment. No full enterprise-stack build required to record the first traces.",
  },
  {
    h: "Centralized ground truth of application behavior, in git",
    b: "The AppMap Gold Traces skill identifies important application paths and uses existing tests to build the set. When coverage is missing, AppMap suggests a new test case. The organization can run the same review in CI when ready. The set lives in the team's repository, where changes follow the same pull-request workflow as the code. Teams begin lightweight in the editor and graduate the flows that matter into the pipeline.",
  },
];

const title = "AppMap Enterprise: Airgapped, On-Prem, No AppMap Cloud";
const description =
  "AppMap operates no cloud data plane for traces. Airgapped and on-prem ready. Auditable, open-source clients.";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/enterprise" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/enterprise" }],
  }),
  component: EnterprisePage,
});

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#ff07aa] hover:underline"
  >
    {children}
  </a>
);


function EnterprisePage() {
  return EnterprisePageInner();
}

function EnterprisePageInner() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <RuntimeBehaviorAnalysis />


        <section className="px-6 pb-16" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Enterprise</div>
            <h2 className="mt-4 max-w-4xl text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#f2effb] sm:text-[40px]">
              Runtime context that stays in your environment.
            </h2>
            <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
              Airgapped and on-prem by design.
            </p>
            <p className="mt-6 max-w-[760px] text-[22px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#f2effb] sm:text-[26px]">
              Bring your model. Keep your evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/book-a-demo" className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Book a Demo
              </Link>
              <Link to="/security-faq" className="rounded-lg border border-[#2c2353] px-5 py-2.5 text-[14px] font-semibold text-[#f2effb] hover:border-[#a99fc7]">
                Read the Security FAQ
              </Link>
            </div>
          </div>
        </section>



        <section id="security-faq" className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Architecture and trust</h2>

            <div className="mt-8">
              <DeploymentTopology />
            </div>

            <p className="mt-8 max-w-[820px] text-[14px] leading-[1.6] text-[#a99fc7]">
              AppMap runs inside your environment with no outbound dependency on AppMap services. Offline activation and internal distribution are supported. There is no AppMap cloud for traces.
            </p>
            <p className="mt-4 max-w-[820px] text-[14px] leading-[1.6] text-[#a99fc7]">
              Trust, but verify:{" "}
              <ExternalLink href="https://github.com/getappmap">open-source clients</ExternalLink> and a{" "}
              <ExternalLink href="https://github.com/getappmap/appmap">published data spec</ExternalLink>. Developers and
              security reviewers can audit what AppMap records and what it sends to the agent.
            </p>
            <p className="mt-4 max-w-[820px] text-[14px] leading-[1.6] text-[#a99fc7]">
              AppMap Enterprise adds organization configuration pushed from one endpoint, organization-registered installs with no license keys on developer machines, and usage telemetry routed to your own systems.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Adoption at scale: from one workstation to CI</h2>
            <ol className="mt-8 grid gap-4 lg:grid-cols-2 lg:items-start">
              {pilotSteps.map((s, i) => (
                <li
                  key={s.h}
                  className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
                >
                  <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Step {i + 1}</div>
                  <h3 className="mt-2 text-[17px] font-bold text-[#f2effb]">{s.h}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[#a99fc7]">{s.b}</p>
                  {i === 0 && (
                    <figure className="mt-5 rounded-lg border border-[#2c2353] bg-[#0d0a1a] p-2">
                      <img
                        src="/marketing-assets/img/appmap/call-tree.webp"
                        alt="The call tree AppMap recorded on a developer workstation, as shown in the editor."
                        className="w-full h-auto rounded"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="px-1 pt-2 text-[12px] text-[#a99fc7]">
                        Recorded in the editor: the call tree the agent queried
                      </figcaption>
                    </figure>
                  )}
                  {i === 1 && (
                    <figure className="mt-5 rounded-lg border border-[#2c2353] bg-[#0d0a1a] p-2">
                      <img
                        src="/marketing-assets/img/appmap/waltzbehaviorheld_branded.svg"
                        alt="AppMap demo traces of the public open-source FINOS Waltz project, comparing the same endpoint before and after an unrelated change."
                        className="w-full h-auto rounded"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="px-1 pt-2 text-[12px] text-[#a99fc7]">
                        Public open-source demo: FINOS Waltz
                      </figcaption>
                    </figure>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[rgba(255,7,170,0.5)] bg-[rgba(255,7,170,0.07)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[rgba(255,7,170,0.55)] bg-[rgba(255,7,170,0.08)] px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#ff8ad2]">
                  Enterprise
                </span>
                <span className="text-[20px] font-bold text-[#f2effb]">Available with AppMap Enterprise.</span>
              </div>
              <Link
                to="/book-a-demo"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff07aa] to-[#b31383] px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
