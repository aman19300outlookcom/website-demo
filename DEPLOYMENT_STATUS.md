# Akshar Dental Clinic — Deployment Status

The source in this repository has been prepared for the existing **Cloudflare Git-integrated Worker** configuration named `website-demo`. All clinic imagery used by the application is stored in `client/public/clinic-assets`, so the deployment does not depend on Manus preview asset paths.

The prior agreed configuration uses the `main` branch, `pnpm build`, and `pnpm run deploy`. The included `wrangler.jsonc` publishes `dist/public` as a static single-page application with SPA fallback routing. A production push to `main` is expected to trigger the existing Cloudflare build and Worker deployment workflow.

No Cloudflare API token is stored in this repository. The current Cloudflare account integration remains responsible for deployment credentials.
