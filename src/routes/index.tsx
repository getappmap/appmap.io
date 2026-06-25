import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ReviewLoop } from "@/components/sections/home/ReviewLoop";
import { PainStats } from "@/components/sections/home/PainStats";
import { OneVsFifteen } from "@/components/sections/home/OneVsFifteen";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ReviewWhatAIDid } from "@/components/sections/home/ReviewWhatAIDid";
import { BehavioralReview } from "@/components/sections/home/BehavioralReview";
import { Reviews } from "@/components/sections/home/Reviews";
import { HowItWorksReveal } from "@/components/sections/home/HowItWorksReveal";
import { ClosingCTA } from "@/components/sections/home/ClosingCTA";

const title = "AppMap: Understand AI-generated code, in your editor";
const description =
  "AppMap helps developers and AI agents understand what your software actually does. Review every AI-generated change as runtime behavior, not just a diff. Free and open source.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "/img/appmap/dependency-map.webp",
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
          description:
            "AppMap helps developers and AI agents understand what AI-written code actually does at runtime.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        <ReviewLoop />
        <PainStats />
        <OneVsFifteen />
        <TrustBar />
        <ReviewWhatAIDid />
        <BehavioralReview />
        <Reviews />
        <HowItWorksReveal />
        <ClosingCTA />
      </main>
    </div>
  );
}
