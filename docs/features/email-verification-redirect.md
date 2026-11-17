# Email verification redirect

## Goal

Complete email verification in the dashboard so the verified account replaces
any different account session already stored in that browser.

## Behavior

- Requests to `/verify-email?token=...` redirect to
  `https://app.app-logger.com/verify-email?token=...`.
- The redirect preserves the first token query value using URL-safe encoding.
- The marketing site does not consume the single-use token or receive an
  authentication session from the API.
- Legacy direct POSTs to the marketing site's verification proxy return
  `410 Gone` without consuming the token.
- The dashboard exchanges the token, persists the returned session for the
  verified account, and replaces an older locally stored session.
- Requests without a token stay on the marketing site and explain that the link
  is incomplete.

## Security and failure behavior

- Access and refresh tokens are never placed in the redirect URL.
- Invalid, expired, or already-used tokens are handled by the dashboard's
  verification screen.
- Query parameters other than the verification token are not forwarded.

## Acceptance criteria

- Opening a valid verification email while another account is signed in ends on
  the newly verified account rather than the older account's project list.
- The verification token reaches the dashboard unchanged.
- A missing token displays the existing incomplete-link support state.
