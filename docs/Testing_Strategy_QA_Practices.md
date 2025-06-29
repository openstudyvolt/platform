# ✅ Chapter 11: Testing Strategy & QA Practices

## 🎯 Overview

Testing is integral to Open Study Volt’s (OSV) development lifecycle. Our goal is to ensure code correctness, UI reliability, and feature stability through automated and manual testing pipelines.

---

## 🔍 Testing Philosophy

- Test user journeys, not just code paths
- Prioritize reliability over 100% coverage
- Automate everything that can regress

---

## 🧪 Testing Types & Tools

| Type                | Tool(s)              | Scope                        |
|---------------------|----------------------|------------------------------|
| Unit                | Pest, Vitest         | Pure logic & functions       |
| Feature/Integration | Laravel TestSuite    | HTTP controllers, services   |
| End-to-End (E2E)    | Cypress              | UI → API flows               |
| Snapshot            | Vitest, Jest         | Components, regression diffs |
| Accessibility       | Axe-core + Storybook | Compliance via CI            |

---

## 🗂 Folder Structure (Laravel)

```plaintext
tests/
├── Unit/
├── Feature/
├── Traits/
└── Helpers/
```

## 🗂 Folder Structure (Frontend)

```plaintext
src/
└── __tests__/
    ├── components/
    ├── hooks/
    └── pages/
```

---

## 📈 Coverage Goals

| Layer            | Target (%) |
|------------------|------------|
| Backend Services | 90%        |
| API Controllers  | 80%        |
| Frontend Logic   | 80%        |
| E2E Flows        | 60%        |

---

## 🧪 Manual QA Process

- QA runs on every sprint deliverable
- Checklist includes:
  - UX bugs
  - Accessibility regressions
  - Mobile tests
  - Cross-browser testing (Chrome, Safari, Firefox)
- Regression suite in Notion linked to release tags

---

## 🧰 CI Integration

- Tests run on every pull request:
  - Linting + Unit + Feature (Laravel)
  - Vitest + Cypress (Frontend)
- Failures block PR merge
- E2E tests triggered nightly on staging

---

## 🧼 Data Strategy for Testing

- Use SQLite in-memory for backend tests
- Frontend uses mocked API responses
- Seeder scripts for realistic testing states

---

## 🔁 Continuous Feedback

- Bug reports flow into Linear from PostHog triggers
- Slack bot posts test failures from CI
- Error snapshots attached to QA tickets

---

## 🧠 QA Engineer Notes

> “We test what users actually do, not what we *think* works. Nothing ships without both automated coverage *and* real eyes on it.”

---

## 📦 Dependencies

- Pest, PestPHP
- Cypress, Vitest
- Storybook + Axe-core
- Faker, Laravel Factory
