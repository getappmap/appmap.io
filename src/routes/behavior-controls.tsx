import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import controlsData from "@/data/behavior-controls.json";

const title = "Behavior controls reference | AppMap";
const description =
  "The control list behind AppMap's standards mapping: OWASP ASVS, CWE, and NIST SP 800-53 requirements a behavioral comparison can evidence.";
const url = "https://appmap.io/behavior-controls";
const intro =
  "The Enterprise page maps seven public standards to the domains a behavioral comparison covers. Behind those standards are individual controls. This page lists the ones pulled from the publishers' own machine-readable sources: OWASP ASVS 4.0.3, CWE, and NIST SP 800-53 revision 5. Each entry carries a provisional classification. Shows means a behavioral comparison demonstrates the control directly. Supports means the comparison contributes evidence without being the whole answer. A review pass of these classifications is in progress. This list is illustrative, not a compliance certification.";

export const Route = createFileRoute("/behavior-controls")({
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
  component: BehaviorControlsPage,
});

const sourceOrder = ["OWASP ASVS 4.0.3", "CWE v4.20", "NIST SP 800-53r5"];

function BehaviorControlsPage() {
  const controlsBySource = sourceOrder.map((source) => ({
    source,
    controls: controlsData.pool.filter((control) => control.src === source),
  }));
  const { stats } = controlsData;

  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">REFERENCE</div>
            <h1 className="mt-4 max-w-[900px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              The control list behind the mapping
            </h1>
            <p className="mt-6 max-w-[920px] text-[17px] leading-[1.7] text-[#a99fc7]">{intro}</p>
            <p className="mt-6 border-l-2 border-[#ff07aa] pl-4 text-[14px] leading-[1.7] text-[#f2effb]">
              {stats.total} controls total · {stats.bySource["OWASP ASVS 4.0.3"]} OWASP ASVS · {stats.bySource["CWE v4.20"]} CWE · {stats.bySource["NIST SP 800-53r5"]} NIST SP 800-53r5 · {stats.byTier.shows} shows · {stats.byTier.supports} supports
            </p>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-16">
          <div className="mx-auto max-w-[1120px] space-y-16">
            {controlsBySource.map(({ source, controls }) => (
              <section key={source}>
                <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
                  {source} <span className="font-normal text-[#a99fc7]">({controls.length})</span>
                </h2>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2c2353] bg-[#0d0a1a]">
                  <table className="w-full min-w-[820px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[#2c2353]">
                        <th className="w-[150px] px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">ID</th>
                        <th className="min-w-[410px] px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">Requirement</th>
                        <th className="w-[190px] px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">Domain</th>
                        <th className="w-[130px] px-5 py-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[#a99fc7]">Classification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {controls.map((control) => (
                        <tr key={`${control.src}-${control.id}`} className="border-b border-[#2c2353] last:border-b-0 align-top">
                          <td className="whitespace-nowrap px-5 py-4 font-mono text-[13px] text-[#f2effb]">{control.id}</td>
                          <td className="px-5 py-4 text-[14px] leading-[1.55] text-[#a99fc7]">{control.text}</td>
                          <td className="px-5 py-4 text-[13px] leading-[1.5] text-[#a99fc7]">{control.domain}</td>
                          <td className="px-5 py-4">
                            <span className={control.tier === "shows" ? "inline-flex rounded-full border border-[#ff07aa] px-2 py-1 text-[11px] font-bold text-[#ff07aa]" : "inline-flex rounded-full border border-[#3f3566] px-2 py-1 text-[11px] font-bold text-[#a99fc7]"}>
                              {control.tier}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}

            <div className="border-t border-[#2c2353] pt-8 text-[13px] leading-[1.7] text-[#a99fc7]">
              <p>ASVS content © OWASP Foundation, CC BY-SA 4.0. CWE is a trademark of The MITRE Corporation; CWE content used per MITRE's terms. NIST SP 800-53 is a work of the U.S. Government, public domain. Sources retrieved from the publishers' official repositories.</p>
              <p className="mt-5">
                <a href="/enterprise#runtime-behavior-analysis" className="font-semibold text-[#ff07aa] hover:underline">
                  Back to the runtime behavior analysis
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
