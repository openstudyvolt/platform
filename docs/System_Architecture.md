# 🏗️ Chapter 2: System Architecture & Infrastructure

## 🧱 Overview

Open Study Volt (OSV) is built as a **modular, scalable, cloud-ready web application** optimized for:
- AI-enhanced features
- Realtime collaboration
- Mobile-first experiences
- Global accessibility (offline, low-bandwidth, i18n)

This chapter outlines the full technical foundation including hosting strategy, tech stack, API structure, and system integrations.

---

## 🔧 Tech Stack Overview

| Layer          | Technology                                 |
|----------------|--------------------------------------------|
| Frontend       | React 19 + TailwindCSS                     |
| Backend API    | Laravel 12 + Octane (FrankenPHP)           |
| Worker Queue   | Laravel Queues + Redis                     |
| DB Layer       | PostgreSQL + Qdrant (for AI vector search) |
| Realtime       | Laravel Reverb (Pusher alternative)        |
| AI Gateway     | Ollama                                     |
| Authentication | Auth0 + Laravel Passport fallback          |
| File Storage   | MiniO                                      |
| Transcription  | Whisper API                                |
| CI/CD          | GitHub Actions                             |
| Hosting        | Kubernetes ready                           |
| Monitoring     | Sentry Self Hosted in the same infra       |

---

## 🧭 System Diagram (Logical View)

```mermaid
graph TD
  subgraph Client
    A[User Browser] -->|HTTPS| B[React Frontend]
  end

  subgraph API Layer
    B --> C[Laravel API (Octane)]
    C --> D[PostgreSQL]
    C --> E[Redis Queue]
    C --> F[Qdrant Vector DB]
    C --> G[OpenAI API Proxy]
    C --> H[Auth0]
  end

  subgraph Realtime
    B --> I[Reverb Gateway]
    I --> C
  end

  subgraph Async Jobs
    E --> J[LLM Summarizer Job]
    E --> K[Audio Transcription Job]
    E --> L[Analytics Event Logger]
  end
```

---

## 🔁 Data Flow (Summarization Use Case)

1. **User uploads a document (PDF/MP4)**
2. **Frontend** sends it to Laravel API
3. Laravel stores the file in S3 and queues a `SummarizationJob`
4. Worker:
    - Transcribes (if audio/video)
    - Parses text + metadata
    - Builds dynamic prompt
    - Sends to OpenAI
    - Saves result to `summaries` table and Qdrant
5. Summary returned via API and shown in React UI

---

## ⚙️ API Architecture

- REST-first, GraphQL planned
- Versioned under `/api/v1/`
- JWT-based user auth via Passport/Auth0
- Modular Controllers & Services (SRP)
- API Rate Limiting via Laravel Throttle
- Logs stored in JSON for aggregation

**Example API endpoints:**
```http
GET    /api/v1/summary/{id}
POST   /api/v1/upload/document
GET    /api/v1/user/stats
POST   /api/v1/ai/chat
```

---

## 🧩 Microservice Opportunities (Future)

| Candidate       | Justification                              |
|-----------------|--------------------------------------------|
| `ai-service`    | Summarization and chat decoupled for scale |
| `quiz-engine`   | Adaptive quiz logic could be separate      |
| `event-tracker` | Log ingestion and analytics                |

---

## 🚀 Hosting Strategy

- **Development**: Docker Compose (Nginx + PHP + Redis + Postgres)
- **Staging**: DO droplet with CI deployment from GitHub
- **Production**: VPS or Kubernetes (CI/CD via GitHub Actions)

**Production Includes:**
- Laravel Octane running under RoadRunner
- Supervisor-managed workers
- Redis as central queue + pub/sub for websockets
- Daily DB and storage backups

---

## 🛡️ Security Architecture

- All API requests HTTPS + JWT signed
- Role-Based Access Control (RBAC) using Auth0 groups
- CSRF protection for web-based sessions
- All AI queries sanitized (prevent prompt injection)
- File uploads virus scanned
- Logs encrypted and rotated

---

## 📦 CI/CD Pipeline

**Tool:** GitHub Actions  
**Triggers:**
- On PR merge to `main`: run build, tests, deploy to staging
- Manual release tags: deploy to production via SSH/Laravel Deployer

**Steps:**
1. Run PHPStan, Pint, Pest
2. Lint & Build React frontend
3. Run Cypress UI tests
4. Package & deploy Docker image
5. Run `php artisan migrate --force`
6. Notify Slack on success/failure

---

## 📈 Observability

| Tool       | Purpose                           |
|------------|-----------------------------------|
| Sentry     | Frontend + Backend error tracking |
| Grafana    | System metrics & uptime           |
| Prometheus | Collect metrics from services     |
| Logtail    | Centralized Laravel log viewing   |
| PostHog    | User behavior analytics           |

---

## 🔄 Backup & Disaster Recovery

| Layer      | Strategy                            |
|------------|-------------------------------------|
| Database   | Daily snapshot (Amazon RDS or cron) |
| S3 Storage | Versioning + lifecycle policy       |
| Redis      | RDB snapshots every hour            |
| AI Logs    | Exported to cold storage weekly     |

---

## 📂 Environments

| Environment  | Purpose                     | Domain Example              |
|--------------|-----------------------------|-----------------------------|
| `local`      | Developer machines (Docker) | open-study-volt.test        |
| `staging`    | Internal QA + UAT           | staging.open-study-volt.com |
| `production` | Live traffic                | app.open-study-volt.com     |

---

## 📝 Tech Lead Notes

> “This setup is built for scale *and* modularity. AI workloads are offloaded asynchronously. Core services are containerized and queued. We’ll evolve to microservices once team velocity requires it.”

---

## 🔗 Dependencies

- Laravel Octane, Telescope, Passport
- React, SWR, TailwindCSS
- Qdrant (or Weaviate/FAISS if fallback needed)
- Redis, PostgreSQL 15+
- GitHub Actions
- Auth0
