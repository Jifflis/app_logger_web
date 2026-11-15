# Project invitation redirect

## Goal

Keep project invitation emails issued with the legacy marketing-site URL usable
after invitation acceptance moved to the hosted dashboard.

## Behavior

- Requests to `/invitations/accept` redirect to
  `https://app.app-logger.com/invitations/accept`.
- The redirect preserves the first `token` query value using URL-safe encoding.
- A request without a token still reaches the dashboard, where the acceptance
  screen explains that the invitation link is incomplete.
- Other query parameters are not forwarded.

## Acceptance criteria

- Existing email links no longer return the marketing site's 404 page.
- The invitation token reaches the dashboard unchanged.
- The redirect performs no invitation mutation; acceptance still requires an
  authenticated, explicit confirmation in the dashboard.
