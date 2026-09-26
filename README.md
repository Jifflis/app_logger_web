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

## Main files

- `src/app/page.tsx` — landing page content and product visuals
- `src/app/globals.css` — responsive design system and component styles
- `src/app/layout.tsx` — metadata and document shell
- `public/app-logger-icon.png` — shared App Logger brand asset
