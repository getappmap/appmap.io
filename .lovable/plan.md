# Fix the demo booking iframe

## Problem

On `/book-a-demo`, the embedded scheduler shows "calendar.app.google refused to connect." The short link `https://calendar.app.google/bHKonWhR1Y14kjzV7` is served with `x-frame-options: SAMEORIGIN`, so browsers block it inside an iframe. The same applies to the URL it redirects to.

## Verified

- Short link redirects to `https://calendar.google.com/appointments/schedules/AcZssZ3vJ9fnl7qYTBT2rvePqOQ-9_FABHI0_VkxE_iDLfmfQojUBXGVCOByrkeEz9CbPTpoLjgY1oQ-` and returns `x-frame-options: SAMEORIGIN`.
- The embeddable form `https://calendar.google.com/calendar/appointments/schedules/<same id>?gv=true` returns HTTP 200 with no `x-frame-options` header, so it can be framed.

## Change

`src/routes/book-a-demo.tsx`, one line:

Set `BOOKING_URL` to:

`https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vJ9fnl7qYTBT2rvePqOQ-9_FABHI0_VkxE_iDLfmfQojUBXGVCOByrkeEz9CbPTpoLjgY1oQ-?gv=true`

This is the same appointment schedule, in the embeddable form. Nothing else on the page changes, including the `mailto:elizabeth@appmap.io` fallback line.

## Verification

Headless browser load of `/book-a-demo` with a screenshot confirming the appointment picker renders inside the iframe, with no refused-to-connect message and no console frame errors.
