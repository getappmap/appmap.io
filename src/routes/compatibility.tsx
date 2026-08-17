import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compatibility")({
  beforeLoad: () => {
    throw redirect({
      to: "/how-it-works",
      hash: "compatibility",
      statusCode: 301,
    });
  },
  component: () => null,
});
