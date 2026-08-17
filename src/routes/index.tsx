import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ReviewLoop } from "@/components/sections/home/ReviewLoop";
import { PainStats } from "@/components/sections/home/PainStats";

import { TrustBar } from "@/components/sections/home/TrustBar";
import { ReviewWhatAIDid } from "@/components/sections/home/ReviewWhatAIDid";
import { BehavioralReview } from "@/components/sections/home/BehavioralReview";
import { Reviews } from "@/components/sections/home/Reviews";
import { HowItWorksReveal } from "@/components/sections/home/HowItWorksReveal";
import { ClosingCTA } from "@/components/sections/home/ClosingCTA";

const title = "AppMap: Runtime evidence for AI-assisted development";
const description =
  "AI made code cheap. Knowing what it does is not. AppMap records application runs as traces. Developers see them as maps, coding agents query the same traces, and AppMap compares Gold Traces across revisions to show behavioral diffs before merge.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Every AI coding tool can read your source code. AppMap shows it what actually happened." },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://appmap.io/marketing-assets/og/og-card.png" },
    ],
    links: [
      { rel: "canonical", href: "https://appmap.io/" },
      {
        rel: "preload",
        as: "image",
        href: "https://appmap.io/marketing-assets/img/appmap/dependency-map.webp",
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AppMap",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Windows, macOS, Linux",
          description,
          offers: [
            {
              "@type": "Offer",
              name: "Community",
              price: "0",
              priceCurrency: "USD",
              description: "For developers who can self-serve.",
            },
            {
              "@type": "Offer",
              name: "Professional",
              price: "15",
              priceCurrency: "USD",
              description:
                "For an individual developer who wants AppMap with priority support. Priced per developer per month.",
            },
            {
              "@type": "Offer",
              name: "Enterprise",
              priceCurrency: "USD",
              description:
                "For the organization. Controlled deployment, organizational configuration, and enterprise support.",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AppMap",
          url: "https://appmap.io",
          sameAs: [
            "https://github.com/getappmap",
            "https://twitter.com/getappmap",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <HomeHero />
        <PainStats />
        <TrustBar />
        <Reviews />
        <ReviewWhatAIDid />
        <ReviewLoop />
        <HowItWorksReveal />
        <BehavioralReview />
        <ClosingCTA />
      </main>
    </div>
  );
}
