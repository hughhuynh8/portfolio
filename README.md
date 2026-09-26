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

Open the local URL printed by Vite in your terminal. No environment variables or backend service are required.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Run TypeScript checks and build the site into `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

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

Update `src/pages/About.tsx` for biography content, and `src/styles/global.css` or `tailwind.config.js` for shared styling. Default page metadata lives in `index.html`, with route-specific updates in `src/components/PageMetadata.tsx`.

## Deployment

```sh
npm run build
```

Publish the generated `dist/` directory to a static host. Configure the host to serve `index.html` for application routes such as `/about` and `/qantas`, so direct visits and page refreshes work with React Router's `BrowserRouter`.

The current configuration assumes the site is served at the domain root. Hosting beneath a subdirectory requires adjustments to Vite's base path, the router basename, and root-relative asset URLs.
