## /get-appmap — Promote terminal path to a full-width card

### What we are changing
The terminal path currently lives as a text line beneath the two extension cards. We are promoting it to a third card with equal visual weight, then preserving the pricing closing line beneath it.

### 1. Remove the "Terminal only?" closing line
Delete the paragraph that begins with "Terminal only?" and links to `/cli-quickstart`. This contentQuestions and its answer.

### 2. Add a full-width "Command line" card below the extension cards
- **Placement:** Directly after the existing `md:grid-cols-2` grid in the same section, outside the grid so it spans full width.
- **Card styling:** Exactly match the VS Code and JetBrains cards:
  - `rounded-2xl border border-[#2c2353] bg-[#1c1538] p-6`
  - Title: `text-[19px] font-bold text-[#f2effb]`
  - Body: `mt-3 text-[14.5px] leading-[1.6] text-[#a99fc7]`
- **Content:**
  - Title: `Command line`
  - Body: `Install the AppMap CLI and connect any MCP client over MCP. If you installed one of our extensions, you already have the CLI.`
  - Button: Styled with the existing `primaryBtn` class (pink gradient, white text, shadow), labeled `CLI quickstart`.
  - The button is a TanStack `Link` to `/cli-quickstart` (not an external anchor).

### 3. Keep the remaining closing line unchanged
Preserve the paragraph beginning with "Always free at your desk." in the same closing section styling (`text-[18px] leading-[1.7] text-[#f2effb]`, semibold lead phrase, pink link to `/pricing`). No copy changes.

### Guardrails
- No em-dashes anywhere.
- No banned terms: Navie, Runtime Intelligence, Behavioral Intelligence.
- Use existing color tokens only.
- File touched: `src/routes/get-appmap.tsx` only.