// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Keep all static output under /marketing-assets so paths never collide with
  // the legacy Jekyll site (which owns /assets, /images, /js) once the Worker
  // proxy-fallback serves both sites on one domain.
  vite: {
    build: {
      assetsDir: "marketing-assets",
      // cloudflare:workers is a runtime-provided module in the Workers
      // runtime; server.ts imports it for env access (nitro's entry does not
      // pass `env` through to the fetch handler).
      rollupOptions: { external: ["cloudflare:workers"] },
    },
  },
});
