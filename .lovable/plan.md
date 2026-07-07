## Change

In `src/routes/how-it-works.tsx` at line 324, within the "Golden AppMap traces make behavior reviewable" section, replace the single sentence:

> Deterministic traces compare byte-for-byte. Real-world traces compare normalized behavior: request path, status, SQL shape, downstream calls, control execution, and data movement.

with:

> AppMap compares a structural digest of the run: request path, status codes, call-tree structure, SQL shape, and downstream calls. Timing, ids, and captured values are not in it.

No other content, styling, or markup on the page changes.