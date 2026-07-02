# Enrich Enterprise Security FAQ

## Scope
`src/routes/enterprise.tsx` — the Security FAQ accordion section only.

## What to change
1. Append three new entries to the `securityFaqs` array, placed after the existing three items.
2. Keep the existing native `<details>`/`<summary>` accordion markup and styling unchanged.
3. Leave the existing "Read: AppMap security" link at the bottom untouched.

## New FAQ items (verbatim copy)

**4. Is sign in required to use AppMap?**
> Activation requires authorization via GitHub, GitLab, or email. That is identity verification only; it happens once, in the editor.

**5. Does signing in with GitHub or GitLab give AppMap access to my code?**
> No. GitHub and GitLab act as OAuth identity providers only. The requested scopes cover your email address and public profile, nothing else. AppMap requires no permissions to your hosted code.

**6. Where are AppMap files stored?**
> In your local development project, typically in a tmp/appmap directory created at install time. AppMap does not upload or move them out of your environment.

## Rules enforced
- No em-dashes in any new copy.
- No use of "Navie" or other AI-integration product names.
- All factual claims match the approved wording above exactly.

## Out of scope
- No changes to the accordion component, styling tokens, section layout, or the closing external link.
- No changes to any other section of the page.