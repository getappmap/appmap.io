import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy address from the previous Jekyll site.
export const Route = createFileRoute("/community/privacy-policy.html")({
  beforeLoad: () => {
    throw redirect({ to: "/community/privacy-policy", statusCode: 301 });
  },
  component: () => null,
});
