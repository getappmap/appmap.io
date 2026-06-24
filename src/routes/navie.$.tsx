import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/navie/$")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", statusCode: 301 });
  },
  component: () => null,
});