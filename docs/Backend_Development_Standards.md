# 🛠️ Chapter 6: Backend Development Standards

## 🎯 Overview

This chapter outlines the architectural principles, coding standards, best practices, and conventions adopted for the backend of Open Study Volt (OSV), built using **Laravel 12**, **PHP 8.4**, and **Laravel Herd**.

---

## ⚙️ Tech Environment

| Component       | Stack                            |
|-----------------|----------------------------------|
| Language        | PHP 8.4                          |
| Framework       | Laravel 12 + Octane (FrankenPHP) |
| Dev Environment | Laravel Herd                     |
| Queue System    | Redis                            |
| DB Layer        | PostgreSQL + Qdrant              |
| Auth System     | Auth0 + Laravel Passport         |
| File Storage    | MiniO                            |

---

## 🧱 Architectural Principles

- **Modularity:** Each domain (quizzes, summaries, rooms) has its own Service, Controller, Policy, and Repository layers.
- **SRP (Single Responsibility Principle):** Code is organized for testability and maintainability.
- **Service-Oriented:** Business logic goes into services, not controllers.
- **Queue First:** All heavy processing (AI, transcription, events) runs via Laravel Queues.

---

## 📁 Folder Structure

```plaintext
app/
├── Actions/
├── Console/
├── Events/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Requests/
│   └── Resources/
├── Jobs/
├── Models/
├── Policies/
├── Services/
└── Rules/
```

---

## 📐 Coding Conventions

- PSR-12 code formatting
- Constructor injection for all dependencies
- Explicit return types on all functions
- `readonly` properties when applicable
- Laravel Pint for auto-formatting

---

## 🧪 Testing Standards

| Layer             | Tool         | Coverage Target |
|-------------------|--------------|-----------------|
| Unit Tests        | Pest      | 90%+            |
| Feature Tests     | Laravel Test | Full user paths |
| Integration Tests | PestPHP      | Queued jobs/API |

Tests are required for:
- All Services
- All Controllers (via Feature tests)
- All queued Jobs

---

## 🔐 Security Conventions

- Always use `authorize()` inside form requests
- Use Laravel Policies for all model gates
- Escape all AI content outputs in views
- Logs encrypted and rotated
- File uploads scanned using ClamAV or similar

---

## 🔄 API Versioning & Format

- Routes under `/api/v1/`
- JSON:API-like structure
- Responses standardized with `ApiResponse` resource
- Use Laravel Form Requests for validation

```php
return ApiResponse::success([
  'data' => new SummaryResource($summary)
]);
```

---

## 📦 Package Standards

- Only install packages that are:
  - Well maintained
  - PSR-compliant
  - Compatible with Laravel 12 & PHP 8.4

Must be approved by Tech Lead.

---

## 🪝 Event-Driven Design

| Event              | Listener / Job          |
|--------------------|-------------------------|
| `DocumentUploaded` | `StartSummarizationJob` |
| `QuizCompleted`    | `UpdateProgressJob`     |
| `UserFlagged`      | `ModerationAlertJob`    |

---

## ⚙️ DevOps Standards

- `.env` structure defined per environment
- Use `artisan optimize:clear` + `octane:reload` on deploy
- Migrations auto-run with GitHub Actions on `main`
- Supervisor configured for queue workers

---

## 🧠 Senior Laravel Engineer Notes

> “Backend logic is designed for concurrency and safety. Jobs are decoupled and retry-safe. We treat the Queue like a first-class worker runtime.”
