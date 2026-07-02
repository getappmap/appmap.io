## Change: Replace placeholder booking URL with real Google Calendar link

**File:** `src/routes/book-a-demo.tsx`

1. Remove the TODO comment above `BOOKING_URL`.
2. Change the constant value from:
   ```
   "https://calendar.google.com/calendar/appointments/schedules/REPLACE_ME?gv=true"
   ```
   to:
   ```
   "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vJ9fnl7qYTBT2rvePqOQ-9_FABHI0_VkxE_iDLfmfQojUBXGVCOByrkeEz9CbPTpoLjgY1oQ-?gv=true"
   ```

No other files are touched. No other content in `book-a-demo.tsx` changes.