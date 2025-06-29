# 🌍 Chapter 9: Localization, Accessibility & Offline Mode

## 🎯 Overview

This chapter documents how Open Study Volt (OSV) supports multilingual users, meets accessibility standards, and ensures graceful functionality during offline usage. These features are critical for global adoption and fair learning access.

---

## 🌐 Localization (i18n)

### Supported Languages
- English (default)
- French
- Arabic (RTL support)

### Strategy
- UI text managed via `i18next` on frontend and Laravel `lang/` JSON files on backend
- Language detection from browser or user preference
- Stored in localStorage and synced with the user profile
- AI prompts localized before query execution
- Language-aware formatting for dates, numbers, plurals

---

## 📁 Folder Structure

```plaintext
frontend/
└── locales/
    ├── en/
    ├── fr/
    └── ar/
backend/
└── lang/
    ├── en.json
    ├── fr.json
    └── ar.json
```

---

## ♿ Accessibility (a11y)

### Compliance
- WCAG 2.1 AA standard
- Focus-visible and ARIA roles on all interactive elements
- Keyboard navigation support for modals, forms, quizzes
- Color contrast and font scaling via Tailwind theme tokens

### Tools
- Storybook a11y plugin
- eslint-plugin-jsx-a11y
- Manual screen reader checks (NVDA, VoiceOver)

### Inclusive UX
- Avoids auto-advancing elements
- Offers alternative text, tooltips, and hidden labels
- RTL mode enabled for Arabic users

---

## 🔌 Offline Mode

### Features Available Offline
- Cached lessons, quizzes, summaries
- Notes and whiteboard drafts
- Local XP progress
- Scheduled sync on reconnecting

### Technology
- PWA enabled via Vite & Workbox
- Service Workers cache all `/api/v1/static/` and preloaded lessons
- IndexedDB used for local persistence of:
  - User actions queue
  - Draft uploads
  - Failed API retries

### Offline UX
- Connection banner with sync countdown
- Conflict resolver UI on re-sync
- Background syncing process with retry logic

---

## 🛠 Developer Notes

> “Global and accessible by default: the UI adjusts per locale, and everything is cache-aware. No internet? Still works. Text scaling? Built-in. This is non-negotiable.”

---

## 📦 Dependencies

- i18next, Laravel Translation
- Vite PWA plugin + Workbox
- Tailwind Accessibility Plugin
- React Context for locale and direction
