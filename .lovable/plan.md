## Plan: Publish the commercial boundary

### (A) Home hero — subline update
**File:** `src/components/sections/home/HomeHero.tsx`

Replace line 47:
```
Free and open source. Also available as a CLI.
```
with:
```
Free for every developer. Organizational scale comes with a support contract.
```

### (B) Enterprise page — new section + pilot step update
**File:** `src/routes/enterprise.tsx`

1. Insert a new section between the "From pilot to policy" section and the closing `Book a Demo` button. The section is styled like the other compact text sections on the page (centered, max-w-[840px], border-t/border-b on the container if appropriate, or matching the existing independent-evidence section style).  
   **Title:** `Where the commercial line is`  
   **Copy:** `AppMap is free at the developer's desk: the extensions, the CLI, the MCP server, and every map they make. Organizational scale is a commercial relationship. Groups of more than 20 users require a support contract, and the CI review pipeline and internal telemetry routing are provided as paid services. If AppMap has already spread inside your organization, talk to us.`  
   Make `talk to us` a TanStack `Link` to `/book-a-demo`.

2. In `pilotSteps` step 3 (`Enforce when ready.`), append one sentence to its body string: `CI enforcement and telemetry routing are part of the enterprise service.`

### (C) Get AppMap page — commercial note under cards
**File:** `src/routes/get-appmap.tsx`

Under the three-card grid (after the closing `</div>` of the cards section, before `</main>`), add a single centered muted line:
```
Free for individual developers and small teams. Over 20 users, CI enforcement, or internal telemetry routing comes with a support contract.
```
Style it with the same muted text color used elsewhere (`text-[#a99fc7]`, `text-[14.5px]`, centered). Make `support contract` a TanStack `Link` to `/enterprise`.

### Rules applied
- No em-dashes anywhere.
- Never use Navie, Runtime Intelligence, or Behavioral Intelligence.
- All existing sections remain otherwise untouched.

### Files touched
- `src/components/sections/home/HomeHero.tsx`
- `src/routes/enterprise.tsx`
- `src/routes/get-appmap.tsx`