# 🎨 Chapter 5: Frontend Architecture & Design System

## 🎯 Overview

This chapter defines the frontend architecture and design principles for Open Study Volt (OSV). It covers how the React-based UI is organized, how styles and states are managed, and how the Design System ensures consistency across features.

---

## 🖥️ Frameworks & Libraries

| Purpose           | Library                        |
|-------------------|--------------------------------|
| UI Framework      | React 19                       |
| Styling           | TailwindCSS + PostCSS          |
| State Management  | Zustand + SWR                  |
| Routing           | React Router DOM               |
| Forms             | React Hook Form + Zod          |
| Animations        | Framer Motion                  |
| Charts            | Recharts                       |
| i18n              | i18next (multi-language & RTL) |
| UI Kit            | ShadCN/UI                      |
| Auth              | Auth0 React SDK                |

---

## 🧱 Application Architecture

```plaintext
src/
├── components/        # Reusable UI elements (buttons, modals)
├── features/          # Domain-driven features (ai-assistant, rooms, quizzes)
├── layouts/           # Layout wrappers (dashboard, auth, landing)
├── pages/             # Routed views (React Router)
├── hooks/             # Custom hooks (e.g. useUser, useRoom)
├── stores/            # Zustand stores
├── lib/               # Helpers, utils, API clients
├── locales/           # i18n translation files
├── assets/            # Icons, images
└── index.tsx          # Root app entry
```

---

## 🧠 State Management Strategy

| Type                 | Tool           | Notes                           |
|----------------------|----------------|---------------------------------|
| Global app state     | Zustand        | User info, modals, theme        |
| Remote data fetching | SWR            | Auto-caching, revalidation      |
| Local form state     | RHF + Zod      | Form inputs, validation schemas |
| Temporary memory     | React useState | For UI interactions             |

---

## 🌍 Internationalization (i18n)

- Powered by `react-i18next`
- Structure:
  - `/locales/en/`, `/locales/fr/`, `/locales/ar/`
- RTL support is automatic for Arabic
- Language detection via browser, with override toggle
- Pluralization and date/number localization included

---

## 🧪 Testing Stack

| Layer      | Tool                   |
|------------|------------------------|
| Unit Tests | Vitest                 |
| Component  | Testing Library        |
| E2E Tests  | Cypress                |
| Linting    | ESLint + Prettier      |
| Types      | TypeScript strict mode |

---

## 🧰 Dev Tools & Standards

- Codegen: Auto-types for API from OpenAPI spec (optional)
- Linting: Pre-commit hooks via Husky
- Code formatting: Prettier and Tailwind plugin
- CI: All PRs must pass lint, test, and build check

---

## 🎨 Design System Principles

| Rule                       | Example                                |
|----------------------------|----------------------------------------|
| Atomic Components          | Buttons, cards, avatars, badges        |
| Theme Tokens               | Tailwind config defines spacing/colors |
| Dark Mode by Default       | `dark:` variants always defined        |
| Mobile-First Layouts       | Uses grid/flex for responsive design   |
| Animation-aware Interfaces | Feedback for loading/states via Motion |

---

## 🧩 UI Kit Guidelines (ShadCN + Tailwind)

- `Button`: use `variant` prop (`primary`, `ghost`, `danger`)
- `Input`: support icons, error state, RTL alignment
- `Card`: reusable container for summaries, modules
- `Tabs`, `Modal`, `Toast`: standardized variants

---

## 🔐 Auth Handling

- Logged-in state managed via Auth0 React hooks
- Uses `PrivateRoute` component for gated views
- User info fetched via SWR on the initial mount
- JWT stored in memory; refresh via silent SSO

---

## 🧭 Navigation & Layout

| Page Type        | Layout Used          | Notes                          |
|------------------|----------------------|--------------------------------|
| Dashboard        | `DashboardLayout`    | Sidebar + header               |
| AI Assistant     | `AssistantLayout`    | Sticky chat + content zone     |
| Study Rooms      | `RoomLayout`         | Fullscreen Reverb/WebRTC space |
| Auth/Login       | `AuthLayout`         | Logo, minimal distractions     |
| Static pages     | `LandingLayout`      | Used for marketing & docs      |

---

## 📝 UX Design Process

- Prototypes in Figma (linked per Epic)
- Mobile-first designs for every component
- Design tokens (color, spacing, typography) defined in Tailwind config
- Accessibility tested via Storybook + a11y lint plugin

---

## 🧑‍🎨 UI/UX Designer Notes

> “Every interface must feel responsive, animated, and intentional. Motion is used to guide attention. Nothing should block the learner. Interfaces are quiet, focused, and joyful.”

---

## 🔗 Dependencies

- React 19, TailwindCSS 3, TypeScript 5
- Zustand, SWR, React Hook Form, Framer Motion
- i18next, Auth0 SDK, Recharts, ESLint, Vitest, Cypress
