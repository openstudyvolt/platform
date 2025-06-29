# 📊 Chapter 8: Monitoring, Observability & Analytics

## 🎯 Overview
This chapter ensures that Open Study Volt (OSV) is fully observable—errors are caught, performance is tracked, and user behavior informs growth.

---

## 🛠️ Logging & Error Tracking
- **Sentry (self-hosted)** for real-time error capturing and performance traces.
- **Logtail** for centralized search and retention of API logs.
- Structured JSON logging used throughout Laravel and workers.
- Frontend errors are also captured via Sentry Browser SDK.

---

## 📉 Metrics & Monitoring
- **Prometheus** collects backend metrics (CPU, memory, queue times).
- **Grafana** dashboards for key metrics:
    - Queue lengths, job duration
    - API latency (p50/p95)
    - Error rates by endpoint
    - System health

---

## 👁️ Frontend Analytics
- **PostHog** for in-app event tracking:
    - User flow events (login, summary-created, quiz-completed)
    - Feature usage metrics (chat queries per session)
- Funnels set up for onboarding → AI use → retention milestones.

---

## 📈 Business Dashboards
- **Recharts** / Chart.js display within the Admin Dashboard:
    - DAUs/MAUs, session length, retention curves.
    - Leaderboards and XP trends.
    - Room participation heatmap.

---

## ⚠️ Alerting & On‑Call
- **Grafana alerts** for:
    - Increased error thresholds
    - Job queue spikes
    - CPU/RAM exhaustion
- **Slack integrations** for alerts, deploy success/failures.
- **On-call schedule** managed via PagerDuty.

---

## 🧭 Observability Practices
- **Tag traces** with user ID, endpoint, feature.
- **Distributed tracing** for complex flows (upload → AI → DB → UI).
- **Runbooks** defined for key alerts (e.g., backup failure, queue backlog).

---

## 🔐 Data Privacy
- Filter PII from logs (< 30 days retention).
- All analytics request explicit opt-in.
- GDPR deletion propagates to logs and metrics.

---

## 📦 Dependencies
- Sentry, Grafana, Prometheus, PostHog, Logtail

---

## 📝 DevOps Notes
> “Monitoring is required for trust. We define success not only by uptime but user happiness—in-session errors should be <0.1%.”
