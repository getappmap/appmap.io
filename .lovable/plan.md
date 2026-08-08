# Restructure /architecture: put AI consumption first

Reframe the page so the point is that stored recordings and Golden AppMap traces exist to give AI agents runtime context that travels with the code. Five copy/layout changes, one meta description update. No em-dashes, no banned terms. The canonical Golden AppMap trace definition on /how-it-works is untouched. The "The agent can change. The evidence does not have to." line is not added here (it belongs to /compatibility).

## 1. H1

Current (lines 74-76):
```text
In your editor today. In your repo tomorrow.
```

Proposed:
```text
Runtime context that travels with the code.
```

## 2. Opening paragraph under the H1

Current (lines 77-79):
```text
You feel the value in the editor, where recordings are built and explored as you work. They can be saved in your repository too: versioned with your code, generated in CI, with sensitive values removed by default. Your source code stays the main content of the repo; .appmap travels alongside it.
```

Proposed:
```text
AppMap records how your software actually runs. Developers explore that evidence in the editor, and selected recordings can be versioned in the repository alongside the code they describe. That makes runtime context available wherever the repository goes, including to AI agents. An agent can query the execution path, database activity, HTTP requests, and application structure directly instead of reconstructing them from source search.
```

## 3. Replace "One recording. Many consumers." section

Current (lines 90-102): heading "One recording. Many consumers.", the body line "The same recordings are read by your developers and by every agent. Portals like Confluence and Backstage become mirrors, not the source of truth.", and the horizontal chip row rendered from the `chips` constant (Developers, Claude, Cursor, Copilot, Gemini, CI, Backstage, Confluence as a mirror).

Proposed: same section background (`border-t border-[#2c2353] bg-[#16112b]`), new heading "Runtime context for every agent that works on the repository", body "An AppMap recording is structured data, not just a diagram. When it travels with the repository, an AI agent can query the same execution evidence a developer sees in the editor." Replace the chip row with a vertical flow diagram in the site's existing style (dark `#1c1538` nodes on `#16112b`, magenta arrows):

```text
                 Repository
                     |
                     v
           AppMap runtime context
              /            \
             v              v
    Developers in the      Claude Code, Copilot,
       editor              Cursor, Gemini, and
                           other MCP clients
```

Implementation: replace the `chips` constant (lines 44-53) with the flow data (top node "Repository", middle node "AppMap runtime context", two bottom nodes "Developers in the editor" and "Claude Code, Copilot, Cursor, Gemini, and other MCP clients"). Render as stacked centered nodes connected by downward arrows, with the two bottom nodes side by side as parallel branches off the runtime context node. Vertical arrows use a simple inline SVG or `↓` styled with the site's `#ff07aa` accent. No new imagery.

## 4. New section before "Where Golden AppMap traces live"

Insert a new `section` between the flow section (ends line 102) and the storage section (starts line 104), matching the standard section padding (`px-6 py-20`).

Heading: "Behavior that survives the session"

Body, two paragraphs:
```text
An AI agent normally begins each investigation by reading the current code and reconstructing what matters. Golden AppMap traces let important runtime behavior travel forward with the repository as a versioned baseline.
```
```text
A new agent, a different model, or a developer opening the repository later starts from the same recorded evidence of how important paths actually ran. This is not conversational memory. It is repository-native engineering memory, versioned and reviewed like the code itself.
```

## 5. Closing paragraph in "Where Golden AppMap traces live"

Keep the section and its content as is, including the prominent line "Git gives you a history of what the code said. Golden AppMap traces give you a history of what the code did." (lines 110-112). Add one closing paragraph at the end of the section, after the current final paragraph (line 114-116):

```text
Putting AppMap in the repository gives AI agents runtime context that travels with the code. Instead of reconstructing execution from source search every time they enter a codebase, agents query recorded call paths, SQL, HTTP activity, and application structure directly. Golden AppMap traces carry important behavior forward as versioned context, so a new agent or a different model starts from the same evidence. Both the code and the runtime context are available to the developer and the AI without requiring an AppMap-operated data service.
```

## Meta description

Current (lines 5-6):
```text
The recording lives in your editor today, and can travel with your repo in the .appmap folder.
```

Proposed:
```text
AppMap gives AI agents runtime context that travels with the code: recorded call paths, database activity, HTTP requests, and application structure, versioned in the repo alongside the code.
```

Title tag stays unchanged. Canonical, OG, and Twitter tags are unchanged.

## Files

- `src/routes/architecture.tsx` only.

## Notes

- `chips` constant is removed (no longer rendered); replaced by the flow node data.
- The canonical Golden AppMap trace definition on /how-it-works is not restated or altered.
