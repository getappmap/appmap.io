Problem: The JetBrains install URL (`https://plugins.jetbrains.com/plugin/16701-appmap`) returns a generic marketplace footer with no plugin content. The working URL is `https://plugins.jetbrains.com/plugin/16701-appmap-free-ai-architect`.

Plan:
1. Update `JETBRAINS_INSTALL_URL` in `src/components/layout/Header.tsx` to the correct URL.
2. Verify no other hardcoded stale JetBrains URLs exist in the codebase.