Move the "Independent runtime evidence" thesis block into the Runtime behavior analysis section on `/enterprise`, placing it directly under the interaction-web graphic and above the standards/approaches tables.

What will change
- `src/components/sections/enterprise/RuntimeBehaviorAnalysis.tsx`
  - Insert the exact "Independent runtime evidence" block after `<InteractionWebPanel />` and before the "Where these questions already appear" table heading.
  - The block keeps its current copy, pink eyebrow, centered text, and top/bottom border rule.
- `src/routes/enterprise.tsx`
  - Remove the standalone "Independent runtime evidence" section that currently sits between `<RuntimeBehaviorAnalysis />` and the enterprise hero language block.

Resulting `/enterprise` page order
1. Runtime behavior analysis (graphic + Independent runtime evidence block + both tables)
2. Runtime context that stays in your environment (enterprise hero language + CTAs)
3. Architecture and trust
4. How AppMap deploys
5. Centrally managed, organization-registered
6. Not a monitoring tool
7. Security review of AI code changes
8. What the reviewer sees
9. From one workstation to CI

Seams and styling
- The inserted block carries its own `border-t border-b`, so no extra rules are added around it.
- The surrounding `pt-14 pb-20` padding on the Runtime behavior analysis section remains unchanged.
- No double borders are introduced because the next element is a table heading with no top border.

Verification
- Run `bun run build` and confirm it passes.
- Screenshot the top of `/enterprise` at 1280px and 390px to confirm the block sits under the graphic and above the tables.
- Confirm the block text appears exactly once on the page.

Standing rules observed
- No em-dashes added.
- No use of "Navie", "Runtime Intelligence", or "Behavioral Intelligence".
- No "This is not a list" language.