import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/golden-appmap-traces-runtime-context")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/appmap-gold-traces-runtime-context", statusCode: 301 });
  },
  component: () => null,
});
