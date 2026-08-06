# Replace install card body text on /get-appmap

## Goal
Swap the body text of the VS Code and JetBrains install cards. Headings, install buttons, and everything else stay unchanged.

## Where
`src/routes/get-appmap.tsx`, the two install cards in the grid (lines ~51-83).

## Changes
1. VS Code card body (currently: "The easiest way to install: the extension bundles the CLI and the MCP server, and keeps the index running automatically.") becomes:
   **"One extension. Everything included. Free."**
2. JetBrains card body (currently: "The easiest way to install: the extension bundles the CLI and the MCP server, and keeps the index running automatically.") becomes:
   **"One plugin. Everything included. Free."**

## Not changed
- "VS Code" and "JetBrains" headings
- "Install for VS Code" / "Install for JetBrains" buttons and their links
- Any other text on the page

## Rules
No em-dashes, no banned terms ("Navie", "Runtime Intelligence", "Behavioral Intelligence"). Neither replacement introduces them.
