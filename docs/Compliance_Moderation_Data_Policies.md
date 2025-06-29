# 🛡️ Chapter 17: Compliance, Moderation & Data Policies

## 🎯 Overview

Open Study Volt (OSV) adheres to international data laws, implements AI-assisted moderation, and ensures a respectful, secure, and privacy-compliant platform for global learners.

---

## 🏛️ Legal Compliance

| Regulation       | Strategy                            |
|------------------|-------------------------------------|
| GDPR             | Data export/delete, consent logging |
| COPPA            | Age-gated UX, no behavioral ads     |
| FERPA (optional) | Student record access restrictions  |

### Data Subject Rights

- Right to Access
- Right to be Forgotten
- Right to Export (JSON or CSV)

Endpoints:
```http
GET  /api/v1/user/export
POST /api/v1/user/delete
```

---

## 🧼 Moderation System

### Content Types Covered
- Chat messages
- Whiteboard drawings (OCR)
- Uploaded files (metadata)

### Moderation Tools

| Tool          | Functionality                    |
|---------------|----------------------------------|
| AI Classifier | Toxicity, spam, prompt injection |
| Flag Queue    | Manual review by moderators      |
| Rate Limits   | Abuse prevention                 |
| Rule Engine   | Auto-warnings, bans              |

---

## ⚙️ Role-Based Permissions (RBAC)

| Role      | Capabilities                           |
|-----------|----------------------------------------|
| Admin     | Full access, ban users, export logs    |
| Moderator | Review content, manage rooms           |
| Educator  | Create quizzes, manage learners        |
| Learner   | Join rooms, upload files, take quizzes |

RBAC is handled via Auth0 groups and Laravel middleware.

---

## 🗂️ Data Retention & Cleanup

| Data Type         | Retention Rule                            |
|-------------------|-------------------------------------------|
| Logs (activity)   | Archived after 90 days                    |
| Room recordings   | Deleted after 30 days (or user-triggered) |
| Inactive accounts | Anonymized after 12 months                |

Scheduled via Laravel `TaskScheduler`.

---

## 🔒 Security Measures

- All endpoints are protected via HTTPS and scoped JWTs
- Virus scanning for uploads
- Realtime moderation queue
- Audit trails for all mod actions

---

## 📢 User Feedback & Reporting

- In-app report button
- Modal with category + notes
- `/reports` admin UI with filters
- Status notifications post-resolution

---

## 🧠 Moderator Notes

> “Moderation isn’t just defense—it’s building trust. We’re transparent, responsive, and equipped with real tools to protect our users.”

---

## 📦 Dependencies

- Auth0
- Laravel Permissions
- AI Classifier (internal or OpenAI)
- OCR engine (Tesseract or Whisper for images)
