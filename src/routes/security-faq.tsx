import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

const securityFaqs = [
  {
    q: "Does AppMap send code or runtime data to the cloud?",
    a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI, and recordings stay with your editor and your repository. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms.",
  },
  {
    q: "Where does AppMap store runtime behavior?",
    a: "Recordings are written locally at capture time, typically to a tmp/appmap directory in the project. Recordings your team keeps, such as AppMap Gold Traces, are promoted into a .appmap directory in the repository and versioned like any other file. Baselines committed to the repository are sanitized first: captured values are replaced with deterministic tokens, so the versioned trace preserves structural behavior without the original parameter, return, or message values.",
  },
  {
    q: "Where are AppMap files stored?",
    a: "On the developer machine and in your repository. Transient captures live in tmp/appmap; promoted recordings live in .appmap. They are plain files: retention is under your control, and deleting a recording is an ordinary file delete.",
  },
  {
    q: "Is sign in required to use AppMap?",
    a: "Community activation is a one-time identity check via GitHub, GitLab, or email, in the editor. No recordings are involved. Enterprise deployments support offline activation and internal distribution for air-gapped environments.",
  },
  {
    q: "Does signing in with GitHub or GitLab give AppMap access to my code?",
    a: "No. GitHub and GitLab act as OAuth identity providers only. The requested scopes cover your email address and public profile, nothing else. AppMap requires no permissions to your hosted code.",
  },
  {
    q: "How does AppMap work with MCP?",
    a: "AppMap exposes the traces over the Model Context Protocol. Agents call get_call_tree, find_calls, find_queries, and find_requests over the AppMap MCP server to read the same evidence you see in your editor.",
  },
];

const title = "Security FAQ | AppMap";
const description =
  "How AppMap handles code, runtime data, sign in, and file storage. AppMap recordings stay in your environment.";

export const Route = createFileRoute("/security-faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/security-faq" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/security-faq" }],
  }),
  component: SecurityFaqPage,
});

function SecurityFaqPage() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Security FAQ
            </div>
            <h1 className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#f2effb] sm:text-[54px]">
              AppMap recordings stay in your environment.
            </h1>
          </div>
        </section>

        <section className="border-t border-[#2c2353] bg-[#16112b] px-6 py-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">Security FAQ</h2>
            <div className="mt-8 divide-y divide-[#2c2353] rounded-2xl border border-[#2c2353] bg-[#1c1538]">
              {securityFaqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-semibold text-[#f2effb]">
                    <span>{f.q}</span>
                    <span className="ml-4 text-[#ff07aa] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[#a99fc7]">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-6 text-right">
              <a
                href="https://appmap.io/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#ff07aa] hover:underline"
              >
                Read: AppMap security →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}