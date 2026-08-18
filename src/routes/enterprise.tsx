import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const reviewerImages = [
  { src: "/marketing-assets/img/appmap/call-tree.webp", caption: "The call tree the agent queried" },
  { src: "/marketing-assets/img/appmap/queries.jpg", caption: "Every SQL query from the real run" },
  { src: "/marketing-assets/img/appmap/sequence.jpg", caption: "The full request path, HTTP to database" },
];

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
        <section className="px-6 pt-20 pb-12" style={{ background: "radial-gradient(900px 460px at 78% -8%, rgba(139,92,246,0.22), transparent), radial-gradient(820px 520px at 12% 115%, rgba(255,7,170,0.20), transparent)" }}>
          <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Enterprise</div>
              <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
                Runtime context that stays in your environment.
              </h1>
              <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
                Airgapped and on-prem by design. There is no AppMap cloud for traces.
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
            <figure className="rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-2">
              <img
                src="/marketing-assets/img/appmap/sequence.jpg"
                alt="AppMap sequence diagram showing the full request path from HTTP to database, generated inside the developer environment."
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="px-2 pt-2 pb-1 text-[12.5px] text-[#a99fc7]">
                Runtime evidence, generated and reviewed inside your environment.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[840px] border-t border-b border-[#2c2353] py-10 text-center">
            <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Independent runtime evidence</div>
            <p className="mt-4 text-[17px] leading-[1.65] text-[#f2effb]">
              Architecture governance cannot rely on the AI grading its own homework. AppMap adds an independent evidence layer inside your environment: runtime behavior captured from the application itself, outside the AI's reasoning loop. The agent can consume it, the reviewer can see the same evidence, and the organization can govern against it. The AI explains the evidence. It does not create the evidence.
            </p>
          </div>
        </section>

        <section id="security-faq" className="border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Architecture and trust</h2>

            <div className="mt-8 rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-6 sm:p-8">
              <div className="relative overflow-visible rounded-2xl border-2 border-dashed border-[#3f3566] bg-[#0d0a1a]/50 p-6 pt-8 sm:p-8 sm:pt-9">
                <div className="absolute -top-[11px] left-4 bg-[#0d0a1a] px-2 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]/70 sm:left-6">Your environment</div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-[#2c2353] bg-[#1c1538] p-5">
                    <h3 className="text-[15px] font-bold text-[#f2effb]">Developer environment</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.5] text-[#a99fc7]">AppMap records and compares traces</p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.5] text-[#a99fc7]">
                      <code className="font-mono text-[#ff07aa]">tmp/appmap</code> · working traces
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2c2353] bg-[#1c1538] p-5">
                    <h3 className="text-[15px] font-bold text-[#f2effb]">CI</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.5] text-[#a99fc7]">The same review runs in the pipeline</p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.5] text-[#a99fc7]">No outbound dependency on AppMap services</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-[#2c2353] bg-[#1c1538] p-5 text-center">
                  <h3 className="text-[15px] font-bold text-[#f2effb]">Repository</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.5] text-[#a99fc7]">
                    <code className="font-mono text-[#ff07aa]">gold_traces/</code> · sanitized before commit
                  </p>
                </div>

                <div className="mt-5 inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1c1538] px-3.5 py-1.5 text-[12.5px] text-[#a99fc7]">
                  Self-hosted AI endpoint (optional)
                </div>

                <div className="absolute -bottom-10 right-4 sm:right-8">
                  <div className="rounded-full border border-[#2c2353] bg-[#16112b] px-3.5 py-1.5 text-[12.5px] text-[#a99fc7]/70">
                    Hosted coding agent (optional) · provider&apos;s terms apply
                  </div>
                </div>

                <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                  <line x1="84%" y1="76%" x2="96%" y2="108%" stroke="#3f3566" strokeWidth="2" strokeDasharray="5 4" />
                </svg>
              </div>
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
          </div>
        </section>

        <section className="bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">What the reviewer sees</h2>
            <p className="mt-3 max-w-[760px] text-[15px] text-[#a99fc7]">
              The same runtime evidence the agent queried, generated locally and attached to the change.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviewerImages.map((img) => (
                <figure key={img.src} className="rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-2">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="px-2 pt-2 pb-1 text-[12.5px] text-[#a99fc7]">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">From pilot to policy</h2>
            <ol className="mt-8 grid gap-4 lg:grid-cols-2 lg:items-start">
              {pilotSteps.map((s, i) => (
                <li
                  key={s.h}
                  className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6"
                >
                  <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Step {i + 1}</div>
                  <h3 className="mt-2 text-[17px] font-bold text-[#f2effb]">{s.h}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[#a99fc7]">{s.b}</p>
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
            <div className="mt-10">
              <Link to="/book-a-demo" className="inline-block rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(255,7,170,0.55)]">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}