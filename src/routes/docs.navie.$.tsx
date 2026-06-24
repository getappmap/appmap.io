import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/navie/$")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", statusCode: 301 });
  },
  component: () => null,
});