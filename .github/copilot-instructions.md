# Copilot Instructions: Talk Piggy

## Project Overview

Talk Piggy is a Vue 3 + TypeScript + Pinia meeting timer web app that tracks speaking time and detects "crosstalk" (multiple speakers). It's deployed as a GitHub Pages static site with automatic CI/CD.

## Architecture & Key Patterns

### State Management with Pinia

- **Central Store**: `src/stores/primary.ts` manages all application state using Pinia with TypeScript
- **Type Safety**: Uses `Speaker` interface and `keyof Speaker` for type-safe property access
- **Persistence**: Uses `pinia-plugin-persistedstate` to save `speakers`, `tickSeconds`, and `crosstalkSeconds` to localStorage
- **Timer Logic**: Real-time interval updates speaker times and detects crosstalk when multiple speakers are active
- **Migration History**: Migrated from Vuex → Pinia → TypeScript. Legacy components may still use `mapState`/`mapActions`

### Component Architecture

- **Simple 3-layer UI**: `TopBar` → `MainPanel` (total/crosstalk timers) → `SpeakerList` (individual speaker cards)
- **TypeScript SFCs**: Components use `<script setup lang="ts">` with type-safe props and emits
- **Bootstrap Vue Next**: Uses `b-container`, `b-row`, `b-col`, `b-card`, `b-button` components extensively
- **Event-driven**: Components emit events upward (e.g., `@toggle`, `@remove`, `@rename`) rather than direct store access

### Build & Deployment

- **Vite + TypeScript**: Modern build tool with Vue plugin, TypeScript support, auto-imports, and bundle analysis
- **GitHub Pages**: Automatic deployment on main branch push via `.github/workflows/deployment.yml`
- **Base Path**: Configured for `/talk-piggy/` subdirectory hosting (see `vite.config.js`)

## Development Workflows

### Local Development

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build to dist/ (includes TypeScript compilation)
npm run preview      # Preview production build
npm run lint         # ESLint + Prettier checks
npm run format       # Auto-format with Prettier
npm run type-check   # TypeScript type checking
```

### Coding Style and Formatting

Coding style is enforced with ESLint and Prettier. Use `npm run lint` and `npm run format` to check and fix issues before committing.

### State Debugging

- Vue DevTools plugin enabled in development
- Bundle analyzer generates `bundle-report.html` on build
- Google Analytics tracking with `vue-gtag` (events: `add_speaker`, `start_timer`, `stop_timer`)

## Code Conventions

### File Organization

- **Components**: Single-purpose Vue SFCs in `src/components/` using TypeScript
- **Stores**: Pinia stores in `src/stores/` (currently only `primary.ts`)
- **Assets**: Static assets in `public/` for deployment, `src/assets/` for bundled resources

### State Mutations

- **Immutable Updates**: Speaker objects are replaced, not mutated: `this.speakers[i] = { ...s, name }`
- **Timer Management**: Use store actions `startTimer()`/`stopTimer()` - never manipulate `tickTimer` directly
- **ID Generation**: Random string IDs via `Math.random().toString()` for speakers

### Component Patterns

- **Pinia Integration**: Use `mapState` for computed properties, `mapActions` for methods
- **Composition API**: New components use `<script setup lang="ts">` with `defineProps`/`defineEmits`
- **Type Safety**: Clean TypeScript everywhere. General app types are in `src/types.ts` (e.g., `Speaker`).
- **Event Naming**: Use descriptive event names (`@toggle`, `@rename`) and pass minimal payloads
- **Bootstrap Classes**: Prefer Bootstrap utility classes (`text-center`, `py-md-2`) over custom CSS

## Critical Integration Points

### Persistence Behavior

- Only specific state properties persist across sessions (excludes runtime timers)
- `tickTimer` and `tickLast` are intentionally excluded from persistence to prevent timer corruption
- Test persistence by refreshing browser - speakers and times should restore

### Timer Accuracy

- 1-second intervals with drift correction using `Date()` comparisons
- Crosstalk detection: increment `crosstalkSeconds` when multiple speakers have `isSpeaking: true`
- Always call `setTickLast()` before starting intervals to establish baseline

### GitHub Pages Deployment

- Build artifacts go to `dist/` directory
- Static deployment with `base: '/talk-piggy/'` path prefix
- Deployment triggered by pushes to `main` branch only
