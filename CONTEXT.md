# Portfolio context

## Application

- Vite + React 18 + TypeScript + Tailwind CSS portfolio with a space-scene landing experience.
- Start development with `npm run dev`; validate production output with `npm run build`.
- Use the React DevTools browser extension for component inspection. The standalone Electron-based package was removed because of vulnerable dependencies.

## Routing

`react-router-dom` and `BrowserRouter` provide the routes below:

- `/` — interactive space scene
- `/about` — About Hugh page
- `/:logoId` — a case study, where `logoId` is one of `qantas`, `spotlight`, `sap`, `gucci`, `repco`, `strike`, `officeworks`, or `remarkable`

`src/App.tsx` owns route definitions. Selecting a logo in the space scene runs the warp animation before navigating to its route. `PageContainer` reads `logoId` with `useParams` and derives the selected logo from `SPACE_LOGOS`; it deliberately has no `selectedLogo`, `onSelectLogo`, or `onShowAbout` props.

## Primary files

- `src/config/navigation.ts` — `SpaceLogo` type and a single ordered `SPACE_LOGOS` array containing visual configuration and resume-backed case-study details.
- `src/components/SpaceScene.tsx` — scene/HUD; the `HUGH HUYNH` HUD link routes to `/about`.
- `src/components/SpaceWorld.tsx` — static logo placement and cursor-parallax background stars.
- `src/components/SpaceLogo.tsx` — individual clickable logo rendering. Idle logos are fully opaque; only warp hides them.
- `src/components/WarpField.tsx` — warp streak canvas and selected-logo zoom.
- `src/components/PageContainer.tsx` — case-study and About page shell; sector navigation uses `NavLink`.
- `src/pages/About.tsx` — About Hugh content and portrait.

## Visual/data conventions

- Each `SpaceLogo` has `backgroundColor`, currently white by default. It is used behind the logo in the space scene and case-study page.
- Resume-backed case-study details and website URLs live directly in each `SPACE_LOGOS` entry in `src/config/navigation.ts`.
- Captured website images are in `assets/screenshots/` and are imported into the logo configuration as `heroImage` values.
- The case-study image appears left of its headline and summary on desktop.
- `SPACE_LOGOS.summary` supports trusted, locally authored HTML, including `<a href="...">` links. It is rendered as HTML; do not populate it from external or user-provided content.
- The Architectural Innovations section and `keyFeatures` data were intentionally removed.
- `src/assets/space.png` is the full-viewport space background and is not transformed.
- `src/assets/hugh_portrait.png` is shown on the About page at 260px wide; biography text occupies the remaining space.

## Accessibility

- Interactive space logos are native links with crawlable destinations; ordinary activation plays the warp animation, while modified clicks retain browser behavior. Case-study sector navigation uses links.
- Global visible-focus, skip-link, and reduced-motion styles live in `src/styles/global.css`.
- Decorative canvas content is hidden from screen readers; project images have descriptive alt text.

## Notes

- BrowserRouter requires the production host to serve `index.html` for unknown application paths so direct case-study URLs resolve correctly.
- Do not reintroduce manual `window.history`, `pushState`, or `popstate` handling; use React Router components/hooks instead.
