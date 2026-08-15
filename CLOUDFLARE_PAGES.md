# Cloudflare Pages Deployment

This repository is a **static Vite + React** website. Create a **Pages** project from the GitHub repository—not a Worker project.

| Cloudflare Pages field | Value |
|---|---|
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `pnpm build` |
| Build output directory | `dist/public` |
| Root directory | Leave blank |
| Node.js version variable | `22` |

Cloudflare Pages installs dependencies from `pnpm-lock.yaml`, runs the build command, and deploys the generated `dist/public` folder. Each future push to `main` triggers a fresh production deployment. Pull requests create preview deployments automatically when enabled in the Cloudflare Pages project settings.

> Do not use the **Create a Worker** form for this repository. Its `npx wrangler deploy` command is for a Worker-based application and is not required for this static site.
