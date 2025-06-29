# 🌍 Chapter 19: Internationalization (i18n) & Multilingual Design

## 🎯 Overview

Open Study Volt (OSV) is designed for a global audience with full support for internationalization (i18n), RTL (right-to-left) languages, and adaptive content localization. This chapter outlines how we manage translations, formatting, and accessibility in multilingual contexts.

---

## 🌐 Supported Languages

| Language | Direction | Status   |
|----------|-----------|----------|
| English  | LTR       | ✅ Stable |
| French   | LTR       | ✅ Stable |
| Arabic   | RTL       | 🧪 Beta  |

---

## 🛠️ i18n Frameworks

| Layer     | Library/Tool             |
|-----------|--------------------------|
| Frontend  | `next-intl`, `i18next`   |
| Backend   | Laravel Lang JSON files  |
| Date/Time | `date-fns`, Intl API     |

---

## 🧩 Translation Strategy

- Text keys stored in language JSON files
- Components use `t('key')` style accessors
- Markdown content auto-detected and wrapped
- Dynamic content (AI, quizzes) localized post-processing

---

## 🔄 Runtime Switching

- Locale set via:
  - URL prefix (`/fr/`, `/ar/`)
  - Browser default
  - User preference (stored in DB)
- SSR ready (Next.js-compatible fallback loading)

---

## ✍️ RTL Support

- Tailwind RTL plugin used
- Auto-layout flipping based on locale
- Specific direction-sensitive components wrapped in `<DirSwitcher>`

---

## 📄 Example

```json
// en.json
{
  "dashboard.welcome": "Welcome back!"
}

// ar.json
{
  "dashboard.welcome": "مرحبًا بعودتك!"
}
```

```tsx
<Text>{t('dashboard.welcome')}</Text>
```

---

## 🌐 Content Localization

- AI summaries and quizzes are auto-localized with a language tag
- Date/number formats auto-adjusted (e.g., `1.000,00` vs `1,000.00`)
- Language fallback: user language → English → key

---

## 🧪 QA & Validation

- Manual RTL smoke test
- Translation coverage % reported in CI
- i18n linting on PR
- Native speaker review loop

---

## 👤 User Settings

- UI setting in Profile → Language
- Stored in `users.locale`
- Re-applied on every login and client hydration

---

## 🧠 Content Strategist Notes

> “Translation isn’t the final step—it’s the foundation. Localized education respects culture, clarity, and comfort.”

---

## 📦 Dependencies

- i18next / next-intl
- Laravel Lang
- Tailwind RTL plugin
- Intl.DateTimeFormat
