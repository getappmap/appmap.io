import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy address from the previous Jekyll site.
export const Route = createFileRoute("/community/code-of-conduct.html")({
  beforeLoad: () => {
    throw redirect({ to: "/community/code-of-conduct", statusCode: 301 });
  },
  component: () => null,
});
