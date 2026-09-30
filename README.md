# App Logger Web

Marketing website for App Logger, built with Next.js, TypeScript, and Tailwind CSS.

The product content is based on the App Logger dashboard, API, and Flutter SDK:

- Durable offline logging with batching and retries
- Cross-platform Flutter support
- Device, app version, session, country, and custom-field context
- Project roles, scoped API keys, and short-lived installation tokens
- Dashboard views for devices, logs, errors, actions, and reports

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Production deployment

Pushes to `main` are validated and deployed by
`.github/workflows/deploy.yml`. Pull requests run lint and a production build
without deploying.

The VPS must already have:

- the repository cloned at `/var/www/app_logger_web`;
- Node.js 22 and npm available to the SSH user;
- `/etc/app-logger-web.env` containing the production environment variables,
  and loaded by the systemd service at runtime;
- the `app-logger-web` systemd service listening on `127.0.0.1:3001`;
- Nginx and HTTPS serving `https://app-logger.com`;
- passwordless permission for the deployment user to restart and inspect the
  `app-logger-web` service.

Configure these GitHub repository or `production` environment secrets:

- `VPS_HOST` — VPS hostname or IP address.
- `VPS_USER` — SSH deployment user.
- `VPS_SSH_KEY` — private SSH deployment key.
- `VPS_KNOWN_HOSTS` — verified `known_hosts` entry for the VPS. Generate it
  from a trusted machine with `ssh-keyscan -H YOUR_VPS_HOST`, then verify its
  fingerprint before saving it as a secret.

The production App Logger key remains in `/etc/app-logger-web.env` and is not
stored in GitHub Actions. Because `NEXT_PUBLIC_*` variables are embedded at
build time, the workflow loads this file before each production build.

The environment file should contain:

```dotenv
APP_LOGGER_API_URL=https://api.app-logger.com
NEXT_PUBLIC_LOGGER_URL=https://api.app-logger.com
NEXT_PUBLIC_LOGGER_API_KEY=your-production-key
```

The deployment stops if validation, the systemd health check, the local HTTP
check, or the public HTTPS check fails.

## Main files

- `src/app/page.tsx` — landing page content and product visuals
- `src/app/globals.css` — responsive design system and component styles
- `src/app/layout.tsx` — metadata and document shell
- `public/app-logger-icon.png` — shared App Logger brand asset
