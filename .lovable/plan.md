## Plan: Update commercial boundary to 250-employee threshold

### (A) Enterprise page — "Where the commercial line is" copy update
**File:** `src/routes/enterprise.tsx`

Replace lines 344-349 (the paragraph inside the "Where the commercial line is" block) with:

```
AppMap is free at the developer's desk: the extensions, the CLI, the MCP server, and every map they make. It stays free for organizations under 250 employees. At larger organizations, individual evaluation is free; organized pilots, production use, the CI review pipeline, internal telemetry routing, and team-wide adoption come with a support contract. If AppMap has already spread inside your organization, talk to us.
```

Keep the existing `talk to us` as the TanStack `Link` to `/book-a-demo` (no change to the link markup).

### (B) /get-appmap page — muted line under cards
**File:** `src/routes/get-appmap.tsx`

Replace the centered muted paragraph in the section under the three-card grid with:

```
Free for individuals everywhere and for organizations under 250 employees. At larger organizations, pilots, CI enforcement, and telemetry routing come with a support contract.
```

Keep the existing `support contract` as the TanStack `Link` to `/enterprise` (no change to the link markup).

### Unchanged
- Home hero subline stays as-is: "Free for every developer. Organizational scale comes with a support contract."
- No other sections or files are touched.

### Rules applied
- No em-dashes anywhere.
- Never use Navie, Runtime Intelligence, or Behavioral Intelligence.

### Files touched
- `src/routes/enterprise.tsx`
- `src/routes/get-appmap.tsx`