# Fix the booking calendar embed

## Diagnosis

`/book-a-demo` currently puts the shortened `calendar.app.google` URL directly in the iframe. That URL first returns a redirect with `X-Frame-Options: SAMEORIGIN`, so the live preview blocks the frame and shows a blank panel. The redirect target is the direct Google Calendar appointment schedule URL, which loads correctly when embedded.

The recent dynamic-import messages are separate preview asset-loading errors. The page itself renders, and the failed calendar frame is explained by the Google redirect response.

## Implementation

1. Replace the shortened iframe URL in `src/routes/book-a-demo.tsx` with its resolved direct `calendar.google.com/calendar/appointments/schedules/...` URL.
2. Keep the existing page layout, metadata, calendar dimensions, and email fallback unchanged.
3. Verify `/book-a-demo` in the live preview and confirm the iframe has a loaded child frame with visible appointment dates and times.
4. Check the page at the current compact desktop viewport to ensure the calendar remains contained and usable.

## Expected result

The Google appointment scheduler renders inside the existing calendar panel instead of the blank broken-document state.