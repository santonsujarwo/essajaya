# Essa Jaya — Final URL Map / Astro Architecture

## Existing live URLs preserved — NEVER replace
- `/` — Homepage / existing Google result
- `/harga-panel-lantai-2026/` — Existing commercial price page / Google sitelink
- `/jasa-renovasi/` — Existing renovation page / Google sitelink

## New pillar pages — added, not replacing existing URLs

Area layanan tidak dibuat sebagai section maupun halaman pada homepage sesuai arahan terbaru. Tidak ada route atau halaman khusus service area.
- `/panel-lantai/` — Panel lantai product/service pillar
- `/bata-ringan/` — Bata ringan product pillar
- `/portfolio/` — Portfolio/project evidence hub; YouTube feed deferred
- `/tentang-kami/` — Business/About/E-E-A-T page
- `/hubungi-kami/` — Contact page linked from the main navigation CTA
- `/blog/` — Content hub
- `/blog/panel-lantai-vs-cor-beton/`
- `/blog/cara-menghitung-kebutuhan-panel-lantai/`
- `/blog/panel-lantai-untuk-rumah-2-lantai/`
- `/blog/cara-memilih-bata-ringan/`
- `/blog/tips-merencanakan-renovasi-rumah/`

## Shared components
- `HowToOrder.astro` — reusable purchase process used across pages
- `FAQ.astro` — visible FAQ + FAQPage JSON-LD when used
- `Footer.astro` — address, map, directions, social area and global links

## SEO migration rule
No existing live permalink above is replaced by a new SEO URL. New pages are additive. If a future crawl/Search Console export reveals another existing URL, it must be added to this map before deployment rather than redirected or deleted automatically.

## Important data policy
Do not invent project evidence, branch locations, reviews, social URLs, product certifications or technical specifications. Replace placeholders only with verifiable business data.
