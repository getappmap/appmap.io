import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal/LegalPage";
import html from "@/content/legal/terms-and-conditions.html?raw";

const title = "Terms and Conditions | AppMap";
const description =
  "AppMap's End User License Agreement. Terms, conditions, and usage guidelines for accessing the service.";

export const Route = createFileRoute("/community/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://appmap.io/community/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "https://appmap.io/community/terms-and-conditions" }],
  }),
  component: () => <LegalPage title="Terms and Conditions" html={html} />,
});
