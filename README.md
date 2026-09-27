# Hugh Huynh — Portfolio

A space-themed portfolio showcasing Hugh Huynh's work as a software engineer and tech lead. Explore an interactive starfield, select a client logo, and travel through a warp animation to view the project's case study.

## Features

- Interactive space scene with cursor parallax and canvas-based warp effects.
- Eight case studies: Qantas, Spotlight, SAP, Gucci, Repco, Strike Bowling, Officeworks, and Remarkable.
- Project screenshots, engineering achievements, metrics, and technology stacks.
- About page with biography and career highlights.
- Direct links to individual projects, with page-specific titles and descriptions.
- Responsive layouts, keyboard-accessible navigation, and visible focus styles.

## Tech stack

React 18, TypeScript, Vite 6, React Router 6, Tailwind CSS 3, and Lucide icons. The visual effects use CSS and the browser's Canvas 2D API.

## Getting started

Install Node.js and npm, then run the following commands from the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal. No environment variables or backend service are required. The production origin is configured in `src/config/metadata.ts`.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Run TypeScript checks and pre-render all public pages into `dist/`. |
| `npm run preview` | Serve the production build locally after building. |
| `npm run check:build` | Verify generated page content, metadata, assets, links, sitemap, and crawler rules. |

## Project structure

```text
assets/                     Project screenshots and additional visual assets
public/assets/              Static assets served directly
src/
  assets/                   Imported images and logos
  components/               Space scene, animations, page shell, and metadata
  config/navigation.ts      Case-study content and logo configuration
  pages/About.tsx           Biography and career highlights
  styles/global.css         Global styles and animation rules
  App.tsx                   Routes and scene transitions
  main.tsx                  Application entry point
```

## Updating content

Edit `src/config/navigation.ts` to update case studies, screenshots, logos, achievements, and metrics. Each entry's `id` determines its URL, such as `/qantas` or `/sap`. The `summary` field supports trusted, locally authored HTML and should not contain untrusted input.

Update `src/pages/About.tsx` for biography content, and `src/styles/global.css` or `tailwind.config.js` for shared styling. Page metadata and the production origin live in `src/config/metadata.ts`. The build writes route-specific metadata into HTML; `src/components/PageMetadata.tsx` keeps it current during browser navigation.

## Deployment

```sh
npm run build
```

Publish the generated `dist/` directory to a static host. Serve each route's own generated HTML: `/about` should serve `dist/about/index.html`, and `/qantas` should serve `dist/qantas/index.html`. Enable directory-index or clean-URL handling. Do not rewrite every route to the homepage: that would discard the pre-rendered page content. Return a real HTTP 404 for unknown URLs.

Use HTTPS and redirect alternate hosts (including `www.hughhuynh.com`) to `https://hughhuynh.com`, preserving paths. The build emits canonical URLs without trailing slashes; configure redirects consistently if your host supports them.

## Search indexing

Every build generates ten complete HTML pages, page-specific titles and descriptions, canonical URLs, Open Graph metadata, `sitemap.xml`, and `robots.txt`. Crawler rules allow all crawlers, including Googlebot, Bingbot, and OAI-SearchBot. No separate model-training restriction is added. Ensure any hosting firewall also permits legitimate crawlers.

After deploying:

1. Verify `hughhuynh.com` in Google Search Console using the DNS record provided by Google.
2. Submit `https://hughhuynh.com/sitemap.xml`, inspect the homepage and a case-study URL, and request indexing.
3. Add the domain to Bing Webmaster Tools (or import the verified Search Console property) and submit the same sitemap.
4. Check that direct page requests return the correct HTML with HTTP 200, and that unknown paths return 404.

Verification and submission require the site owner's search-console/DNS access. Deployment and submission do not guarantee indexing, rankings, or AI citations.

The current configuration assumes the site is served at the domain root. Hosting beneath a subdirectory requires adjustments to Vite's base path, the router basename, and root-relative asset URLs.
