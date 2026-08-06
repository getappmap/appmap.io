import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const reviewerImages = [
  { src: "/marketing-assets/img/appmap/call-tree.webp", caption: "The call tree the agent queried" },
  { src: "/marketing-assets/img/appmap/queries.jpg", caption: "Every SQL query from the real run" },
  { src: "/marketing-assets/img/appmap/sequence.jpg", caption: "The full request path, HTTP to database" },
];

const pilotSteps = [
  {
    h: "Start without CI",
    b: "You do not need to instrument CI to begin. AppMap records from a running process, so teams start in the editor or in environments that already run: a local run, a focused test, a smoke script, an API call, or a QA environment. No full enterprise-stack build required to capture a baseline.",
  },
  {
    h: "Governed behavior baselines",
    b: "Promote only the high-value flows into governed Golden AppMap traces, then enforce them in CI when you are ready. Each baseline is reviewed and versioned in your repository, so behavioral contracts are auditable and owned, not ad hoc. Begin lightweight in the editor; graduate the flows that matter into the pipeline.",
  },
  {
    h: "Enforce when ready.",
    b: "The same review runs in your pipeline, and AppMap coaches each team to set it up for their own use. CI enforcement and telemetry routing are part of the enterprise service.",
  },
];

const title = "AppMap Enterprise: Airgapped, On-Prem, No Data Egress";
const description =
  "Local by design. Airgapped and on-prem ready. Auditable, open-source clients.";

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

const blocks = [
  {
    title: "Airgapped and on-prem ready",
    body: "AppMap runs inside your environment with no outbound dependency. Enterprise deployments support offline activation and internal distribution of the clients. It fits airgapped and on-prem deployments where data cannot leave the network.",
  },
  {
    title: "No egress, by design",
    body: "AppMap does not send recordings to any AppMap-operated cloud. Recordings stay on the developer machine and in your repositories unless your organization centralizes them on infrastructure you control. Your AI tools are a separate channel: a hosted agent may send selected context to its own provider under that provider's terms, and enterprise deployments can restrict AppMap evidence to approved or self-hosted AI endpoints.",
  },
  {
    title: "Trust, but verify",
    body: "Open-source clients and a published data spec. You can audit what AppMap records and what it sends to the agent.",
  },
];

function EnterprisePage() {
  return EnterprisePageInner();
}

const diagramCaption =
  "Local by design. AppMap operates no cloud data plane for recordings, so they stay in your environment. Diagnostics and telemetry route to your internal observability stack, such as Splunk, so operational data stays inside too.";

function Pill({ x, y, w, h, label, sub }: { x: number; y: number; w: number; h: number; label: string; sub?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#2c2353" stroke="#8b5cf6" strokeOpacity={0.5} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 5)} textAnchor="middle" fill="#f2effb" fontSize={14} fontWeight={600}>
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fill="#a99fc7" fontSize={11}>
          {sub}
        </text>
      )}
    </g>
  );
}

function DistPill({ x, y, w, h, lines }: { x: number; y: number; w: number; h: number; lines: string[] }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} fill="#16112b" stroke="#2c2353" />
      <foreignObject x={x + 10} y={y + 8} width={w - 20} height={h - 16}>
        <div
          // @ts-expect-error xmlns for foreignObject content
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ color: "#a99fc7", fontSize: 12, lineHeight: 1.35, fontFamily: "inherit" }}
        >
          <strong style={{ color: "#f2effb", fontWeight: 700 }}>{lines[0]}</strong>
          {lines[1] && <div style={{ marginTop: 4 }}>{lines[1]}</div>}
        </div>
      </foreignObject>
    </g>
  );
}

function DeploymentDiagram() {
  return (
    <section className="px-6 pt-20 pb-6">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          How AppMap deploys
        </h2>
        <figure className="mt-8 rounded-2xl border border-[#2c2353] bg-[#0d0a1a] p-4 sm:p-6">
          <svg viewBox="0 0 1080 680" role="img" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <title>{diagramCaption}</title>
            <defs>
              <marker id="arrow-violet" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#a78bfa" />
              </marker>
            </defs>

            {/* Boundary */}
            <rect x={20} y={20} width={1040} height={640} rx={16} fill="#16112b" stroke="#2c2353" strokeWidth={2} />
            <text x={40} y={50} fill="#f2effb" fontSize={16} fontWeight={700}>
              Your environment. No application data egress.
            </text>

            {/* Zone 1 */}
            <rect x={40} y={70} width={1000} height={260} rx={12} fill="#1c1538" stroke="#2c2353" />
            <text x={56} y={96} fill="#a78bfa" fontSize={13} fontWeight={700} letterSpacing={1}>
              ZONE 1 · DEVELOPER WORKSTATION
            </text>

            <Pill x={70} y={120} w={140} h={44} label="IDE" />
            <Pill x={260} y={120} w={180} h={44} label="Language agent" />
            <Pill x={490} y={120} w={160} h={44} label="Local traces" />

            {/* arrows top row */}
            <line x1={210} y1={142} x2={260} y2={142} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />
            <line x1={440} y1={142} x2={490} y2={142} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />

            <Pill x={490} y={210} w={160} h={44} label="Query DB" />
            {/* Local traces -> Query DB */}
            <line x1={570} y1={164} x2={570} y2={210} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />

            <Pill x={260} y={266} w={180} h={44} label="MCP server" />
            <Pill x={490} y={266} w={160} h={44} label="AI agent" />

            {/* MCP <-> AI agent */}
            <line x1={440} y1={288} x2={490} y2={288} stroke="#a78bfa" strokeWidth={2} markerStart="url(#arrow-violet)" markerEnd="url(#arrow-violet)" />
            {/* MCP -> Query DB (up) */}
            <line x1={350} y1={266} x2={350} y2={232} stroke="#a78bfa" strokeWidth={2} />
            <line x1={350} y1={232} x2={490} y2={232} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />

            {/* Zone 2 */}
            <rect x={40} y={350} width={1000} height={130} rx={12} fill="#1c1538" stroke="#2c2353" />
            <text x={56} y={376} fill="#a78bfa" fontSize={13} fontWeight={700} letterSpacing={1}>
              ZONE 2 · CI
            </text>

            <Pill x={52} y={402} w={206} h={44} label="Golden AppMap traces" />
            <Pill x={290} y={402} w={430} h={44} label="AppMap review workflow (GitHub Action or CI job)" />
            <Pill x={770} y={402} w={160} h={44} label="PR comment" />

            <line x1={240} y1={424} x2={290} y2={424} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />
            <line x1={720} y1={424} x2={770} y2={424} stroke="#a78bfa" strokeWidth={2} markerEnd="url(#arrow-violet)" />

            {/* Distribution strip */}
            <rect x={40} y={500} width={1000} height={140} rx={12} fill="#0d0a1a" stroke="#2c2353" />
            <text x={56} y={524} fill="#a78bfa" fontSize={13} fontWeight={700} letterSpacing={1}>
              HOW IT DEPLOYS
            </text>

            <DistPill
              x={60}
              y={536}
              w={310}
              h={92}
              lines={[
                "Extensions",
                "packaged for internal distribution or installed from the VS Code and JetBrains enterprise marketplaces",
              ]}
            />
            <DistPill
              x={385}
              y={536}
              w={310}
              h={92}
              lines={[
                "Agents and CLI",
                "pulled from your language package registries (RubyGems, PyPI, npm, Maven Central)",
              ]}
            />
            <DistPill
              x={710}
              y={536}
              w={310}
              h={92}
              lines={[
                "Telemetry",
                "configurable to route to your internal observability stack (Splunk or similar)",
              ]}
            />

            {/* Arrows from distribution pills up to their targets */}
            {/* Extensions -> IDE (top-left of zone 1) */}
            <path d="M 215 536 C 215 380, 140 320, 140 164" fill="none" stroke="#a78bfa" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#arrow-violet)" />
            {/* Agents and CLI -> Language agent */}
            <path d="M 540 536 C 540 380, 350 320, 350 164" fill="none" stroke="#a78bfa" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#arrow-violet)" />
          </svg>
          <figcaption className="mt-4 text-center text-[13px] leading-[1.55] text-[#a99fc7]">
            {diagramCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
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
                Runtime context that stays on the machine.
              </h1>
              <p className="mt-5 max-w-[760px] text-[19px] leading-[1.6] text-[#a99fc7]">
                For the VP standardizing how agents work, and the engineer who
                has to vouch for it. Airgapped and on-prem by design. No data
                egress.
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

        <section id="security-faq" className="border-t border-b border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Architecture and trust</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {blocks.map((b) => (
                <div key={b.title} className="rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6">
                  <h3 className="text-[17px] font-bold text-[#f2effb]">{b.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[#a99fc7]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DeploymentDiagram />

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[840px] border-t border-b border-[#2c2353] py-10 text-center">
            <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Independent runtime evidence</div>
            <p className="mt-4 text-[17px] leading-[1.65] text-[#f2effb]">
              Architecture governance cannot rely on the AI grading its own homework. AppMap adds an independent evidence layer inside your environment: runtime behavior captured from the application itself, outside the AI's reasoning loop. The agent can consume it, the reviewer can see the same evidence, and the organization can govern against it. The AI explains the evidence; it does not create the evidence.
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
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
            <ol className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-start">
              {pilotSteps.map((s, i) => (
                <li
                  key={s.h}
                  className={`rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6 ${i === 1 ? "lg:row-span-2" : ""}`}
                >
                  <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">Step {i + 1}</div>
                  <h3 className="mt-2 text-[17px] font-bold text-[#f2effb]">{s.h}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[#a99fc7]">{s.b}</p>
                  {i === 1 && (
                    <figure className="mt-5 rounded-lg border border-[#2c2353] bg-[#0d0a1a] p-2">
                      <img
                        src="/marketing-assets/img/appmap/waltzbehaviorheld_branded.svg"
                        alt="AppMap demo recordings of the public open-source FINOS Waltz project, comparing the same endpoint before and after an unrelated change."
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
            <div className="mx-auto mt-12 max-w-[840px] border-t border-b border-[#2c2353] py-10 text-center">
              <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
                Where the commercial line is
              </div>
              <p className="mt-4 text-[17px] leading-[1.65] text-[#f2effb]">
                AppMap is free at the developer's desk: the extensions, the CLI, the MCP server, and every recording they make. Paid plans begin with AppMap Central: shared Golden AppMap traces in your repositories, centralized CI history, and review on every pull request, all in your own infrastructure. Enterprise adds supported private deployment, including air-gapped operation. If AppMap has already spread inside your organization,{" "}
                <Link to="/book-a-demo" className="font-semibold text-[#ff07aa] hover:underline">
                  talk to us
                </Link>
                .
              </p>
            </div>
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