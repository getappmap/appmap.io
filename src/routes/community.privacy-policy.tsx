import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal/LegalPage";
import html from "@/content/legal/privacy-policy.html?raw";

const title = "Privacy Policy | AppMap";
const description =
  "AppMap Privacy Policy: Learn how AppMap handles personal data, including categories collected and sources, for improved Services.";

export const Route = createFileRoute("/community/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/community/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/community/privacy-policy" }],
  }),
  component: () => <LegalPage title="Privacy Policy" html={html} />,
});
