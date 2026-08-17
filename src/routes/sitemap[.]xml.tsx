import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://appmap.io";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/how-it-works", priority: "0.9", changefreq: "weekly" as const },
  { path: "/architecture", priority: "0.8", changefreq: "monthly" as const },
  { path: "/benchmarks", priority: "0.9", changefreq: "monthly" as const },
  { path: "/compatibility", priority: "0.8", changefreq: "monthly" as const },
  { path: "/enterprise", priority: "0.8", changefreq: "monthly" as const },
  { path: "/pricing", priority: "0.8", changefreq: "monthly" as const },
  { path: "/get-appmap", priority: "0.8", changefreq: "monthly" as const },
  { path: "/team", priority: "0.6", changefreq: "monthly" as const },
  { path: "/security-faq", priority: "0.6", changefreq: "monthly" as const },
  { path: "/book-a-demo", priority: "0.6", changefreq: "monthly" as const },
  { path: "/cli-quickstart", priority: "0.6", changefreq: "monthly" as const },
  { path: "/release-notes", priority: "0.6", changefreq: "weekly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            "  </url>",
          ].join("\n"),
        );
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});