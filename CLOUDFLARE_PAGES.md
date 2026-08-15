# Cloudflare Worker Deployment

This repository is a **static Vite + React single-page application for Akshar Dental Clinic** configured for Cloudflare’s Git-integrated **Worker** flow. The `wrangler.jsonc` file uses Workers Static Assets to publish `dist/public` and applies SPA fallback routing.

| Worker setup field | Value |
|---|---|
| Project name | `website-demo` |
| Build command | `pnpm build` |
| Deploy command | `pnpm run deploy` |
| Builds for non-production branches | Enabled |
| Non-production branch deploy command | `pnpm run deploy:preview` |
| Path | `/` |
| API token | Create new token automatically |
| API token name | `website-demo-worker-builds` |
| Environment variables | None required |

Cloudflare installs dependencies from `pnpm-lock.yaml`, runs the build command, and then runs `pnpm run deploy`, which maps to the repository’s local Wrangler CLI. Every future production-branch push will build and deploy a Worker version. Non-production branches upload preview versions without replacing production.
