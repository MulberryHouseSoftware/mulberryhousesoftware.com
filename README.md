# Mulberry House Software (archive)

Mulberry House Software was a data visualisation and software development studio based in Cambridge, UK, which traded from 2017 to 2025. It is no longer operating.

This repository holds the company website, kept online at [mulberryhousesoftware.com](https://www.mulberryhousesoftware.com) as a historical archive of its projects, infographics and articles. John Walley can now be found at [walley.org.uk](https://www.walley.org.uk).

## How it works

The site is built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com) and [MDX](https://mdxjs.com), and is exported as plain static HTML (`output: 'export'` in `next.config.mjs`). There is no server-side code.

It is hosted on [Vercel](https://vercel.com). Legacy `/blog/...` URLs from the original site are redirected to their `/articles/...` equivalents in `vercel.json`.

## Running locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

This writes the static site, including the RSS feed at `rss/feed.xml`, to `out/`.
