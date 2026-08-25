import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal/LegalPage";
import html from "@/content/legal/code-of-conduct.html?raw";

const title = "Code of Conduct | AppMap";
const description =
  "AppMap's Code of Conduct ensures a harassment-free community. Guidelines cover behavior, enforcement, and consequences.";

export const Route = createFileRoute("/community/code-of-conduct")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/community/code-of-conduct" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/community/code-of-conduct" }],
  }),
  component: () => <LegalPage title="Code of Conduct" html={html} />,
});
