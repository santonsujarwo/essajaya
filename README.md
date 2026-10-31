# Essa Jaya — Astro website

Astro static website using the Figma homepage direction as the shared visual system for the homepage and internal pages.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Main navigation

- `/` — Homepage
- `/panel-lantai/` — Panel lantai product page
- `/bata-ringan/` — Bata ringan product page
- `/jasa-renovasi/` — Existing renovation page (permalink retained)
- `/portfolio/` — Portfolio hub
- Service-area cities are displayed as a single non-linked section on the homepage; no dedicated service-area routes.
- `/tentang-kami/` — About Essa Jaya
- `/hubungi-kami/` — Contact page

The existing `/harga-panel-lantai-2026/` permalink is retained as a standalone page and is not placed in the primary navigation.

## Design implementation

- Shared responsive navigation, typography, red accent, neutral gray surfaces, and footer are defined in `src/layouts/Layout.astro`.
- Homepage sections follow the supplied Figma prototype: hero, social proof, products/services, about, ordering steps, service areas, articles, FAQ and CTA.
- Main product/service pages inherit the same visual language through shared layout classes.
- Contact and directions actions are available in the header/footer and fixed bottom action bar.

## Before production

- Confirm all social profile URLs and follower/review figures before publishing them.
- Replace the CSS architectural illustration with approved original Essa Jaya photography or licensed imagery.
- Verify the WhatsApp number, address, opening hours and current product specifications.
- Install dependencies and run `npm run build`; a successful production build has not been confirmed in this environment because dependency installation timed out.
- Review the generated sitemap and compare it with the live sitemap before deployment. Do not remove or redirect existing live URLs.


## Homepage design reference

Homepage follows the Essa Jaya Figma composition and branding: minimal header, hero with image area, social proof strip, three product/service cards, about section, ordering process, latest posts, and footer. No Service Area section or Service Area routes are included.
