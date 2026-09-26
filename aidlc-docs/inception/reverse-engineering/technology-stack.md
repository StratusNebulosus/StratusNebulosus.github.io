# Technology Stack

## Languages

- TypeScript 5.9.3 and TSX for application and tests.
- CSS for medical content, shell, gallery, and generated theme variables.
- Markdown for AI-DLC and repository documentation.
- YAML for GitHub Actions.

## Runtime Frameworks

- React 19.2.3 and React DOM 19.2.3.
- Chakra UI 3.30.0 with Emotion 11.14.0.
- next-themes 0.4.6 for color-mode state.
- React Icons 5.5.0.
- React Markdown 10.1.0 remains installed for legacy journal support but is not part of the main medical page.

## Build Tools

- Vite 7.3.0 with React SWC 4.2.2.
- TypeScript project references.
- Tailwind CSS 4.1.18 Vite integration.
- npm and committed lockfile.

## Testing and Quality

- Vitest 4.1.9.
- Testing Library React 16.3.2 and jest-dom 6.9.1.
- jsdom 29.1.1.
- fast-check 4.10.1.
- ESLint 9.39.2, typescript-eslint 8.51.0, and Prettier 3.7.4.

## Infrastructure

- GitHub Actions using Node.js 20.
- GitHub Pages static hosting.
- No backend, database, authentication, secret, container, CDN configuration, or runtime API.

## Runtime Characteristics

- Static content and assets bundled by Vite.
- Hash-anchor navigation compatible with GitHub Pages.
- Local light/dark preference handling.
- One accessible Chakra dialog for evidence detail viewing.
- No runtime application fetch, XHR, or dynamic asset glob.
