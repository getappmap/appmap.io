import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy alias from the previous Jekyll site (redirect_from: /privacy).
export const Route = createFileRoute("/privacy")({
  beforeLoad: () => {
    throw redirect({ to: "/community/privacy-policy", statusCode: 301 });
  },
  component: () => null,
});
