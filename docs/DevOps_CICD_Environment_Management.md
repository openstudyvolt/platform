# 🔧 Chapter 10: DevOps, CI/CD & Environment Management

## 🎯 Overview

This chapter outlines how Open Study Volt (OSV) is built, tested, deployed, and maintained across environments. We use GitHub Actions for CI/CD, Docker for consistency, and best practices for performance, security, and uptime.

---

## ⚙️ CI/CD Pipeline

### Tooling
- **GitHub Actions** as the main CI/CD platform
- **Docker** for containerized app builds
- **Laravel Herd** for local parity

### Pipeline Steps
1. Lint (PHPStan, Pint, ESLint)
2. Run tests (Pest, Vitest, Cypress)
3. Build frontend via Vite
4. Package Docker image
5. Deploy (staging/production)
6. Run DB migrations
7. Slack notification on success/failure

---

## 🐳 Docker Setup

- Multi-stage Dockerfile: `dev`, `prod`, `testing`
- Separate containers:
  - PHP-FPM (Octane via FrankenPHP)
  - NGINX (optional, or Laravel Herd local)
  - PostgreSQL
  - Redis
  - Qdrant
  - MiniO

---

## 🛠 Environments

| Environment  | Purpose              | URL                           |
|--------------|----------------------|-------------------------------|
| Local        | Dev parity (Herd)    | `open-study-volt.test`        |
| Staging      | Internal QA/UAT      | `staging.open-study-volt.com` |
| Production   | Live deployment      | `app.open-study-volt.com`     |

### `.env` Setup
- Separate config per environment
- Secrets via GitHub Actions encrypted variables

---

## 🔁 Deployments

- Push to `main`: deploy to **staging**
- GitHub Release/tag: triggers **production**
- GitHub Actions for rollout
- Rollback via GitHub + Docker image version pinning

---

## 🔄 Queue & Worker Ops

- Redis-backed queues processed via `php artisan queue:work`
- Supervisor auto-restarts on failure
- Octane workers watched and restarted via `octane:reload`
- Queued jobs: summarization, transcription, notifications, analytics

---

## 🔐 Secrets & Config Management

- `.env` for all envs (versioned templates)
- Production secrets stored in GitHub repo settings
- Sensitive keys mounted as secrets in the deployment pipeline

---

## 📈 Observability

- Built-in health checks for:
  - Redis
  - Qdrant vector store
  - PostgreSQL
  - Auth0 availability

---

## 📦 Dependencies

- GitHub Actions
- Docker + Laravel Octane
- Laravel Herd (local)
- GitHub Actions
- Supervisor (queue workers)
