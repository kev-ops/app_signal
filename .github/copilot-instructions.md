# AppSignal — Copilot Instructions

Angular 20+ application using Angular Signals for state and `@microsoft/signalr` for real-time hub communication.

## Build and Test

```bash
ng serve        # dev server at http://localhost:4200
ng build        # production build → dist/
ng test         # Jasmine/Karma unit tests
```

## Architecture

- **`src/app/`** — root component, SignalR service, routing
- **`src/app/pages/`** — feature components (`card/`, `navigation/`)
- **`src/model/`** — shared interfaces and domain classes (e.g. `Metrics`, `ChatSession`)
- Components are standalone; each co-located with `.html`, `.scss`, and `.spec.ts`

## Conventions

- **State management**: prefer Angular Signals (`signal`, `computed`, `toSignal`) over RxJS subjects for local state
- **DI**: use `inject()` at field level; avoid constructor-based injection
- **Zoneless**: app is configured with `provideZonelessChangeDetection()`; do not introduce `NgZone` usage
- **Formatting**: Prettier is configured in `package.json` — `printWidth: 100`, `singleQuote: true`, Angular HTML parser for templates

## Branch Naming

All branches must follow this pattern:

```
<type>/<short-description>
```

| Type | When to use |
|------|-------------|
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `refactor/` | Code changes with no behavior change |

**Rules:**
- Use lowercase kebab-case for `<short-description>` (e.g. `feature/add-chat-panel`)
- Keep descriptions concise — 2–4 words
- Never commit directly to `main`
