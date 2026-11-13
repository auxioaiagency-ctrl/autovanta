# AUTOVANTA

Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion + Lenis. Vercel deployment target.

## Run locally

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

Import this project as Next.js, use `npm run build`, and retain the default output settings. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS domain before the production build. A placeholder domain disables indexing until configured. No CMS, backend or database is used.

## Edit content

All customer-facing text, links, image paths and vehicle data are in `lib/content.ts`. The owner adds people manually: `WHATSAPP_GROUP_LINK` remains `REPLACE_ME`, and group buttons open a prefilled add-me request to +92 371 2298095. Replace that constant with an actual invite URL when available.

Four arrival records have clearly named placeholders and `approved: false`. They are intentionally hidden until genuine car names, years and all four specifications are supplied. The stock section directs visitors to WhatsApp in the meantime. No prices or bookings are published.

The four supplied car photos are displayed in the gallery. Four additional grey slots are explicitly marked as placeholders. Replace them with real photos and descriptive alt text. Address and timings remain clearly labeled placeholders. Hero uses the supplied front-view car photograph rather than invented multi-car photography.

## Implemented

Utility bar; sticky navigation; accessible native mobile dialog; hero and WhatsApp quick actions; trust cards; conditional arrival grid; why-us section; four-step process; validated WhatsApp sell form; eight-slot gallery with keyboard lightbox; CTA; footer; mobile action bar; reduced-motion handling; Lenis scrolling; scroll progress; reveals; desktop parallax and subtle image drift.

White on #E0342C is approximately 4.46:1. Normal button text uses supplied #B8251E for AA contrast. The red CTA uses large bold white text. Sora and Inter are self-hosted with font-display swap; OFL licenses are included.

## Verification and limits

TypeScript and production build checked. Browser checked: page rendering, blank form validation with focus on first error, gallery open, right-arrow navigation and Escape close. Responsive CSS uses mobile-first breakpoints; physical device testing and a measured Lighthouse mobile audit remain to be done. No Lighthouse score or zero-shift score is claimed. No Vercel deployment has been made.
