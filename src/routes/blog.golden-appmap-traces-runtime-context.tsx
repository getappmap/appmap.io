import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const title = "AppMap Gold Traces: Durable Runtime Context for AI Code Review";
const description =
  "AppMap Gold Traces turn real application runs into versioned runtime context with sensitive values removed. Compare behavior across revisions and give developers and AI the same evidence.";
const canonical = "https://appmap.io/blog/golden-appmap-traces-runtime-context";
const heroImage = "/img/blog/golden-traces/golden-traces-hero.png";
const heroImageAbsolute = `https://appmap.io${heroImage}`;
const published = "2026-08-06";

type Faq = { q: string; a: string; aNode?: ReactNode };

const faqs: Faq[] = [
  {
    q: "What is a AppMap Gold Trace?",
    a: "A sanitized AppMap recording that a team has selected, reviewed, and committed as the versioned baseline for a specific application path.",
  },
  {
    q: "How is a AppMap Gold Trace different from a snapshot test?",
    a: "A snapshot test asserts on output. A AppMap Gold Trace captures the recorded execution path behind the output: calls, queries, HTTP boundaries, and structure. The comparison covers how the result was produced, not just what it was.",
  },
  {
    q: "Where are AppMap Gold Traces stored?",
    a: "In the project's repository, as files versioned with the code, with sensitive values removed. No AppMap-operated cloud is required.",
  },
  {
    q: "Do AppMap Gold Traces work with AI coding agents?",
    a: "Yes. Agents query the same recordings over MCP, and the published AppMap skills let agents record, label, and review against baselines. The review-action posts results to the pull request.",
  },
  {
    q: "What languages are supported?",
    a: "Java, Python, Ruby, and Node.js, recorded from tests or a running process without modifying application source code.",
  },
  {
    q: "Does this send my code or runtime data to the cloud?",
    a: "AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and comparison run in your developer environment or CI. If you choose a hosted AI agent, selected context may be sent to that provider under its configuration and terms. See the Security FAQ for details.",
    aNode: (
      <>
        AppMap does not send recordings to an AppMap-operated cloud. Recording, sanitization, and
        comparison run in your developer environment or CI. If you choose a hosted AI agent, selected
        context may be sent to that provider under its configuration and terms. See the{" "}
        <Link to="/security-faq" className="font-semibold text-[#ff07aa] hover:underline">
          Security FAQ
        </Link>{" "}
        for details.
      </>
    ),
  },
];

export const Route = createFileRoute("/blog/golden-appmap-traces-runtime-context")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: heroImageAbsolute },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: heroImageAbsolute },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: heroImageAbsolute,
          datePublished: published,
          dateModified: published,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          author: { "@type": "Organization", name: "AppMap" },
          publisher: { "@type": "Organization", name: "AppLand, Inc." },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: BlogPost,
});

const P = "mt-5 text-[17px] leading-[1.7] text-[#c9c0e3]";
const H2 = "mt-14 text-[28px] font-extrabold tracking-[-0.8px] text-[#f2effb] sm:text-[32px]";
const H3 = "mt-10 text-[21px] font-bold tracking-[-0.4px] text-[#f2effb]";
const A = "font-semibold text-[#ff07aa] hover:underline";

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-2xl border border-[#2c2353] bg-[#16112b]"
      />
      <figcaption className="mt-3 text-[13.5px] leading-[1.6] text-[#a99fc7]">{caption}</figcaption>
    </figure>
  );
}

function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0d0a1a] text-[#f2effb]">
      <Header />
      <main>
        <article className="px-6 pt-16 pb-24">
          <div className="mx-auto max-w-[760px]">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff07aa]">
              Blog
            </div>
            <h1 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-[-1.3px] text-[#f2effb] sm:text-[46px]">
              AppMap Gold Traces: Durable Runtime Context for AI Code Review
            </h1>
            <div className="mt-4 text-[14px] text-[#a99fc7]">
              <time dateTime={published}>August 6, 2026</time>
            </div>

            <img
              src={heroImage}
              alt="Branded title card reading AppMap Gold Traces: a versioned baseline for AI-era code review, on a dark gradient with the AppMap wordmark."
              className="mt-10 w-full rounded-2xl border border-[#2c2353] bg-[#16112b]"
            />

            <p className={P}>
              AI coding tools write plausible code fast. The hard part is knowing what that code does
              when it runs. A diff shows what changed in the text. It does not show what changed in
              the behavior.
            </p>
            <p className={P}>
              A AppMap Gold Trace answers that question. It is a recorded application run that a
              team has selected as the versioned baseline. Later revisions of that path can be
              compared against it. The comparison is concrete: call structure, SQL shape, HTTP
              boundaries, downstream calls, and the runtime path of a known-good run beside the same
              evidence from the new code.
            </p>
            <p className={P}>
              Source code tells you what software could do. Runtime behavior tells you what it
              actually did. A AppMap Gold Trace makes the second half of that sentence durable. It
              is a versioned baseline the team agrees on, kept under version control
              alongside the code it describes. It becomes trusted through the team's normal review and merge process.
            </p>

            <h2 className={H2}>The trust gap AppMap Gold Traces close</h2>
            <p className={P}>
              Developers do not fully trust AI-generated code. In{" "}
              <a
                href="https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                Sonar&rsquo;s 2026 developer survey
              </a>{" "}
              of more than 1,100 developers, 96 percent said so. Sonar also found that 38 percent of
              developers say reviewing AI-generated code requires more effort than reviewing
              human-written code.{" "}
              <a
                href="https://smartbear.com/news/news-releases/smartbear-survey-70-of-software-experts-concerned/"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                SmartBear&rsquo;s 2026 research
              </a>{" "}
              found that 70 percent of software leaders say quality has already degraded as AI sped
              up delivery, and 60 percent of teams hit quality issues last year because code outran
              testing.
            </p>
            <p className={P}>
              The common thread is that review capacity did not scale with generation speed. Reading
              more code faster is not a strategy. Reviewing behavior instead of text is.
            </p>
            <p className={P}>
              A AppMap Gold Trace gives the review a fixed point. Instead of asking a reviewer to
              imagine what the change does, the review compares two recordings. The baseline shows
              the path as it ran before. The new recording shows it as it runs now. What appeared,
              disappeared, or moved is visible as a difference between two pieces of evidence, not as
              a guess.
            </p>

            <h2 className={H2}>What a AppMap Gold Trace contains</h2>
            <p className={P}>
              An AppMap recording captures a real application run: function calls, SQL queries, HTTP
              traffic, exceptions, code structure, and their relationships. When a team promotes a
              recording into a AppMap Gold Trace, AppMap sanitizes the committed baseline first.
              Captured parameter, return, and message values are replaced with deterministic tokens,
              and SQL values are replaced with placeholders, preserving the shape of the behavior without
              preserving the original runtime values.
            </p>
            <p className={P}>
              Promotion is therefore a governance decision as well as a lifecycle step. A team
              selects a deterministic recording that represents correct behavior for a service or
              critical path, sanitizes and blesses it, and commits the resulting baseline alongside
              the code. It lives in the repository in the{" "}
              <Link to="/architecture" className={A}>
                .appmap folder
              </Link>
              , versioned with the source, so the baseline and the code stay in sync through branches
              and releases.
            </p>

            <h3 className={H3}>The diagrams are for people</h3>
            <p className={P}>
              A reviewer opens the baseline and the new recording as{" "}
              <Link to="/how-it-works" className={A}>
                sequence diagrams
              </Link>
              , dependency maps, trace views, and flame graphs. The comparison is visual. A new query
              inside a login flow is a new arrow. A missing authorization check is a missing box.
              These are things a person can see in seconds that a text diff cannot show at all.
            </p>

            <Figure
              src="/img/blog/golden-traces/sequence-diagram-view.jpg"
              alt="AppMap sequence diagram showing package lifelines, a loop block, and per-call timings."
              caption="An AppMap sequence diagram in the editor. Lifelines, loops, and timings from a real recorded run."
            />

            <h3 className={H3}>The data is for the AI</h3>
            <p className={P}>
              The same recordings are structured data. AI agents can query them over the Model
              Context Protocol using get_call_tree, find_calls, find_queries, and find_requests, and
              the review skill also works directly from the committed traces and comparison output.
              An agent reviewing a pull request does not have to infer behavior from source alone. It
              can read the runtime evidence, compare the two revisions, and interpret that evidence
              alongside the source diff.
            </p>
            <p className={P}>
              One run produces both. People and AI tools review the same ground truth in their native
              formats.
            </p>

            <h2 className={H2}>AppMap Gold Traces in the pull request</h2>
            <p className={P}>
              This workflow is shipped and public. The AppMap skills, published at{" "}
              <a
                href="https://github.com/getappmap/skills"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                github.com/getappmap/skills
              </a>
              , cover recording, labeling, maintaining AppMap Gold Trace baselines, and reviewing
              changes against them. The public review-action at{" "}
              <a
                href="https://github.com/getappmap/review-action"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                github.com/getappmap/review-action
              </a>{" "}
              can run those skills automatically on pull requests. Teams can run review on selected
              pull requests, at review-ready milestones, or more broadly when their workflow calls
              for it.
            </p>
            <p className={P}>
              The action re-records the selected Golden AppMap paths against the PR head, compares
              the runs against the committed baselines, and posts an interpreted review as a sticky
              comment on the pull request. Blessed baselines and any labels the agent adds are
              committed to the branch. The evidence travels with the change. It works with Claude
              Code and the GitHub Copilot CLI, so the review runs on the agent tooling a team already
              uses.
            </p>
            <p className={P}>
              The question in review stops being whether the diff looks right. It becomes whether the
              behavior held. That question has an answer, and the answer is attached to the PR.
            </p>

            <figure className="mt-10 rounded-2xl border border-[#2c2353] bg-[#16112b] p-6 sm:p-8">
              <blockquote className="border-l-2 border-[#ff07aa] pl-5 text-[18px] leading-[1.65] text-[#f2effb]">
                Behavior is a property of a revision. You either do or do not want it to change. When
                the baseline behavior lives in the repo, it branches, merges, and reviews like
                everything else that describes the software before and after a change state. A
                separate service would just be a second source of truth to keep in sync.
              </blockquote>
              <figcaption className="mt-4 pl-5 text-[14px] text-[#a99fc7]">
                Kevin Gilpin, CTO and co-founder, AppMap
              </figcaption>
            </figure>

            <h2 className={H2}>What AppMap Gold Trace review reveals</h2>
            <p className={P}>
              Runtime comparison surfaces changes that source review can easily miss. A new query
              inside a loop changes the SQL shape and call structure. A removed authorization check
              disappears from the execution path. A new outbound request adds a downstream
              dependency. A supposedly isolated refactor can change behavior in a path the diff never
              directly touched.
            </p>

            <Figure
              src="/img/blog/golden-traces/golden-trace-comparison.png"
              alt="Side-by-side sequence diagrams comparing a AppMap Gold Trace baseline against a new run showing an N plus one query pattern and a missing authentication call."
              caption="Left, the AppMap Gold Trace baseline. Right, the same path on a feature branch: two new queries inside the lookup and a bcrypt call missing from the execution path. Structural changes like these determine the comparison; timings are shown for context and do not decide whether a trace changed. Illustrative example."
            />

            <p className={P}>
              AppMap Gold Trace review separates those structural changes from runtime noise.
              Volatile values and elapsed-time jitter do not determine whether a trace changed. The
              reviewer sees the behavioral differences that remain after cleanup and can reconcile
              them against the intent of the code change.
            </p>
            <p className={P}>
              AppMap review can also incorporate scanner findings from the recordings, adding
              security, performance, correctness, and architecture signals to the structural
              comparison.
            </p>

            <Figure
              src="/img/blog/golden-traces/sql-queries-view.jpg"
              alt="AppMap queries panel listing executed SQL statements with parameter placeholders."
              caption="Queries from a recorded run, shown as parameterized statements."
            />

            <h2 className={H2}>Getting started</h2>
            <p className={P}>
              Record a real application path{" "}
              <Link to="/get-appmap" className={A}>
                with AppMap
              </Link>{" "}
              and inspect it in your editor. Choose a deterministic path whose behavior matters, then
              use the appmap-gold-traces skill to curate, sanitize, and bless it as a baseline.
              Commit that baseline with the code. When automated review is useful, add review-action
              to your GitHub workflow so selected pull requests can be re-recorded and compared
              against it.
            </p>
            <p className={P}>
              One run. Many views. Same ground truth. The AppMap Gold Trace is how that ground
              truth persists.
            </p>

            <h2 className={H2}>FAQ</h2>
            <div className="mt-8 divide-y divide-[#2c2353] rounded-2xl border border-[#2c2353] bg-[#1c1538]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-semibold text-[#f2effb]">
                    <span>{f.q}</span>
                    <span className="ml-4 text-[#ff07aa] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[#a99fc7]">{f.aNode ?? f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
