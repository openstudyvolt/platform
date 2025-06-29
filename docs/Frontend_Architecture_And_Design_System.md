# 🎨 Chapter 5: Frontend Architecture & Design System

## 🎯 Overview

The frontend of Open Study Volt (OSV) is designed for modularity, accessibility, responsiveness, and internationalization. Built using the latest stable **React 19.1** and **TailwindCSS**, it prioritizes fast interactions, clean user interfaces, and modern developer ergonomics.

---

## 🧱 Core Stack

| Area             | Technology                          |
|------------------|-------------------------------------|
| Framework        | React 19.1 (Latest Stable)          |
| State Management | SWR + Zustand                       |
| Styling          | TailwindCSS + ShadCN                |
| Routing          | React Router DOM                    |
| i18n             | i18next (RTL & LTR)                 |
| PWA Support      | Service Workers + Vite              |
| Dev Environment  | Vite + Yarn + Laravel Herd          |
| Components       | Headless UI + ShadCN + Lucide Icons |

---

## 🏗️ Component Architecture

### Atomic Design Pattern

| Level         | Description                            |
|---------------|----------------------------------------|
| **Atoms**     | Buttons, Inputs, Labels                |
| **Molecules** | Form Groups, Cards, Popovers           |
| **Organisms** | Quiz Board, Chat Window, Video Player  |
| **Templates** | Dashboard Layout, Room View            |
| **Pages**     | Routes like `/dashboard`, `/rooms/:id` |

### Folder Structure

```plaintext
src/
├── components/     # Shared UI components
├── features/       # Domain-specific modules
├── pages/          # Route-level pages
├── hooks/          # Custom React hooks
├── locales/        # i18n files
├── lib/            # Utilities and services
└── styles/         # Tailwind config and themes
```

---

## 🧭 Routing Strategy

- Uses `React Router DOM` with nested layouts
- Route guards for protected areas (via Auth0 context)
- Dynamic paths for rooms, quizzes, content

```tsx
<Route path="/rooms/:roomId" element={<StudyRoom />} />
```

---

## 🌍 Internationalization (i18n)

- i18next with language detection
- Supported: **English**, **French**, **Arabic (RTL)**
- Locale stored in localStorage + synced to Laravel
- All text managed via JSON translation files

---

## 🧩 UI/UX Design System

| Layer          | Tool/Standard                    |
|----------------|----------------------------------|
| Components     | ShadCN + Headless UI + Tailwind  |
| Icon System    | Lucide Icons                     |
| Theming        | CSS variables via Tailwind       |
| Responsiveness | Mobile-first using Tailwind grid |
| Animation      | Framer Motion                    |

**Design Files:** Provided via Figma (shared separately)

---

## ⚙️ Frontend API Conventions

- All API calls go through `lib/api.ts`
- Axios client with token injection (Auth0 bearer)
- `SWR` used for caching, revalidation, fallback
- Error boundaries for critical modules

```ts
const { data, error } = useSWR('/api/v1/summary/123')
```

---

## 🧪 Testing

| Type           | Tool            |
|----------------|-----------------|
| Unit Tests     | Vitest + RTL    |
| E2E Tests      | Cypress         |
| Snapshot Tests | Jest            |

---

## 🧼 Code Quality & Standards

- ESLint + Prettier enforced
- Absolute imports (`@/components/...`)
- TypeScript strict mode
- Git hooks via Husky

---

## 📦 Build & CI

- Vite for ultra-fast builds
- GitHub Actions: run lint, build, test, bundle size
- PWA manifest, offline caching via SW
- Deploy preview via Netlify or GitHub Pages

---

## 🧠 Senior Frontend Lead Notes

> “The frontend must load fast, work offline, and feel native. Every interaction matters — from AI chat latency to quiz animation. We enforce accessibility, responsiveness, and design system adherence at every layer.”
