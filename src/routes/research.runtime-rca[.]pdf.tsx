import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/runtime-rca.pdf")({
  server: {
    handlers: {
      GET: ({ request }) =>
        Response.redirect(new URL("/research/runtime-rca", request.url).toString(), 301),
    },
  },
});
