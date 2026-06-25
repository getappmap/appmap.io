import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform")({
  beforeLoad: () => {
    throw redirect({ to: "/how-it-works", statusCode: 301 });
  },
  component: () => null,
});
