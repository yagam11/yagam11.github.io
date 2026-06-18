# Tianchi Huang

A minimal personal website built with Next.js 15, TypeScript, Tailwind CSS v4, and the App Router.

## Public Overview

This site is intentionally sparse and text-first. It presents a short bio, a portrait, and direct contact links with a simple enlarged-image preview.

The design uses a serif font, generous whitespace, and restrained motion so the content stays the focus.

## Tech Stack

- Next.js 15 with the App Router
- TypeScript
- Tailwind CSS v4
- Static export for GitHub Pages
- `next/image` for the portrait assets

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```

The production site is exported to `out/`. The build also writes `out/.nojekyll` so the site works correctly on GitHub Pages.

## Deployment

This repository is configured as a static site for GitHub Pages.

- `next.config.ts` enables static export and trailing-slash routing
- `postbuild` creates `.nojekyll` in the exported output
- `images.unoptimized` stays on because the site ships as static HTML

## File Map

- `src/app/page.tsx` contains the homepage layout and preview behavior
- `src/components/profile-picture.tsx` renders the clickable portrait thumbnail
- `src/components/contact-row.tsx` handles the contact links and email copy action
- `src/app/layout.tsx` sets the page title, description, and favicon
- `src/app/globals.css` holds the global styling layer

## Notes For Future Changes

- Update the biography and contact details in `src/app/page.tsx`
- Replace the portrait image in `public/profile.jpeg` if the site photo changes
- Update the page title, description, or icon in `src/app/layout.tsx`
- If the deployment target changes, review `next.config.ts` and the `postbuild` script in `package.json`

## Development Tips

- The dev server is allowed to run from the local network origin listed in `next.config.ts`
- Keep the page minimal when adding new content; spacing and typography are part of the design
- Rebuild with `npm run build` before publishing changes to GitHub Pages
