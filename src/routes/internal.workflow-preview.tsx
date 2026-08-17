import { createFileRoute } from "@tanstack/react-router";
import { RuntimeReviewGraphic } from "@/components/graphics/RuntimeReviewGraphic";

export const Route = createFileRoute("/internal/workflow-preview")({
  head: () => ({
    meta: [
      { title: "Workflow Preview — AppMap" },
      { name: "description", content: "Internal workflow preview for AppMap runtime review." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: RuntimeReviewGraphic,
});
