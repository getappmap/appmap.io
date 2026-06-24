import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { VibeLoop } from "@/components/sections/home/VibeLoop";
import { PainStats } from "@/components/sections/home/PainStats";
import { OneVsFifteen } from "@/components/sections/home/OneVsFifteen";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { WhatYourAgentSaw } from "@/components/sections/home/WhatYourAgentSaw";
import { FeaturesStay } from "@/components/sections/home/FeaturesStay";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { HomeCompatibility } from "@/components/sections/home/HomeCompatibility";
import { Reviews } from "@/components/sections/home/Reviews";
import { ClosingCTA } from "@/components/sections/home/ClosingCTA";

const title = "AppMap: Runtime Context for AI Coding Agents";
const description =
  "AppMap records how your code actually runs and serves it to any AI coding agent over MCP. Cheaper, more reliable agent work. Open source, local-only.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_US" },
      {
        property: "og:image",
        content: "https://appmap.io/assets/img/logos/1200x630-appmap-card.png",
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content: "https://appmap.io/assets/img/logos/1200x630-appmap-card.png",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        <VibeLoop />
        <PainStats />
        <OneVsFifteen />
        <TrustBar />
        <WhatYourAgentSaw />
        <FeaturesStay />
        <HowItWorks />
        <HomeCompatibility />
        <Reviews />
        <ClosingCTA />
      </main>
    </div>
  );
}
