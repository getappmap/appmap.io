#!/usr/bin/env bash
# Deploy the appmap-io-preview worker, proxying docs/blog from the LATEST
# Cloudflare Pages deployment of the old site's migration branch.
#
# Why not the persistent branch-alias URL? Pages branch aliases serve a
# cached MIX of deployment versions at the edge (observed: a page deleted
# two deployments earlier still 200s while newer paths serve fresh), so the
# preview pins the newest per-deployment hash URL instead. Fresh hash
# hostnames 404 until they propagate, so this script waits for a probe
# path before deploying.
#
# Usage: ./scripts/deploy-preview.sh   (requires wrangler login: kevin@app.land)
set -euo pipefail
cd "$(dirname "$0")/.."

BRANCH="feat/migrate-to-new-marketing-pages"
PROJECT="applandinc-github-io"
PROBE="/docs/appmap-docs"

echo "Finding latest Pages deployment for $BRANCH..."
ORIGIN=$(npx wrangler pages deployment list --project-name "$PROJECT" 2>/dev/null \
  | grep -F "$BRANCH" \
  | grep -oE "https://[a-z0-9]+\.$PROJECT\.pages\.dev" \
  | head -1)
[ -n "$ORIGIN" ] || { echo "No deployment found for $BRANCH" >&2; exit 1; }
echo "Latest deployment: $ORIGIN"

echo "Waiting for $ORIGIN$PROBE to propagate..."
for i in $(seq 1 20); do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' "$ORIGIN$PROBE")
  [ "$CODE" = "200" ] && break
  echo "  attempt $i: $CODE — waiting 30s"
  sleep 30
done
[ "$CODE" = "200" ] || { echo "Deployment never propagated (last: $CODE)" >&2; exit 1; }

echo "Building..."
npm run build

echo "Deploying preview worker..."
npx wrangler deploy --config wrangler.preview.jsonc --var "LEGACY_ORIGIN:$ORIGIN"

echo "Done: https://appmap-io-preview.getappmap.workers.dev (origin: $ORIGIN)"
