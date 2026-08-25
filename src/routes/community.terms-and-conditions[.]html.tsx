import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy address from the previous Jekyll site.
export const Route = createFileRoute("/community/terms-and-conditions.html")({
  beforeLoad: () => {
    throw redirect({ to: "/community/terms-and-conditions", statusCode: 301 });
  },
  component: () => null,
});
