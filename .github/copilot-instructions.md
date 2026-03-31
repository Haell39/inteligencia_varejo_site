# AI Agent Instructions for Inteligência Varejo Site

## Project Structure and Architecture

- **Monorepo Style Separation**:
  - `projeto/`: Contains the core project assets (markdown documentation, images, reports, presentations/slides).
  - `site/`: Contains the presentation layer (a React + Vite frontend application showcasing the project).
- **Frontend Stack**: Built with React 19 and Vite. Uses standard JavaScript (`App.jsx`, `main.jsx`) and CSS modules.

## Development Workflow & Commands

All commands should be executed from within the `site/` directory, rather than the repository root.

- **Start Dev Server**: `cd site && npm run dev`
- **Build for Production**: `cd site && npm run build`
- **Lint**: `cd site && npm run lint`

## Code Conventions

- Use functional React components with hooks.
- As the project is not currently using TypeScript, rely on standard ES6+ modules.
- For static assets: Reference imagery or reports placed in `site/public/assets/` directly.

## Context Awareness

- When asked to update project content, be aware that you may need to update both the React application in `site/` and the original documentation/reports in `projeto/`.
- Ensure paths in React components point to the correct public assets folder (`/assets/...`).
