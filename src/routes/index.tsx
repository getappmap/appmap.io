import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WhatIsAppMap } from "@/components/sections/WhatIsAppMap";
import SocialProof from "@/components/sections/SocialProof";
import { FeaturesReview } from "@/components/sections/FeaturesReview";
import { RealBehaviorDemo } from "@/components/sections/RealBehaviorDemo";
import { BiggerPictureDemo } from "@/components/sections/BiggerPictureDemo";
import { ApplicationRunsDemo } from "@/components/sections/ApplicationRunsDemo";
import { MissingContextDemo } from "@/components/sections/MissingContextDemo";
import { RuntimeContextDemo } from "@/components/sections/RuntimeContextDemo";
import { FinalCTA } from "@/components/sections/FinalCTA";

const description =
  "Cutting edge AI for challenging dev work. Dev-centric observability + AI delivers the smartest answers in your code editor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AppMap | AppMap" },
      { name: "description", content: description },
      { name: "author", content: "getappmap" },
      { property: "og:title", content: "AppMap" },
      { property: "og:locale", content: "en_US" },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/" },
      { property: "og:site_name", content: "AppMap" },
      {
        property: "og:image",
        content: "https://appmap.io/assets/img/logos/1200x630-appmap-card.png",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:image",
        content: "https://appmap.io/assets/img/logos/1200x630-appmap-card.png",
      },
      { property: "twitter:title", content: "AppMap" },
      { name: "twitter:site", content: "@getappmap" },
      { name: "twitter:creator", content: "@getappmap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <WhatIsAppMap />
      <SocialProof />
      <FeaturesReview />
      <RealBehaviorDemo />
      <BiggerPictureDemo />
      <ApplicationRunsDemo />
      <MissingContextDemo />
      <RuntimeContextDemo />
      <FinalCTA />
    </div>
  );
}
