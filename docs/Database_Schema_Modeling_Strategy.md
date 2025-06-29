# 🗄️ Chapter 7: Database Schema & Modeling Strategy

## 🎯 Overview

This chapter defines how data is structured, stored, and queried in Open Study Volt (OSV). The goal is to ensure performance, integrity, scalability, and AI readiness. We use PostgreSQL as the relational core and Qdrant for vector-based semantic indexing.

---

## 🧩 Core Models & Relationships

| Model                | Purpose                                    |
|----------------------|--------------------------------------------|
| User                 | Central identity (Auth0 synced)            |
| Document             | Uploaded files (PDF, audio, video, etc.)   |
| Summary              | AI-generated outputs from documents        |
| Recommendation       | AI-powered links between users and content |
| Quiz / Answer        | Interactive assessments and results        |
| Room / Participation | Real-time study environments               |
| ActivityLog          | User behavior tracking                     |
| Badge / Points       | Gamification and rewards engine            |

---

## 🔗 Entity Relationships

```plaintext
User
 ├── hasMany: Documents, Quizzes, Rooms, ActivityLogs
 ├── belongsToMany: Badges (via Awards)
Document
 └── hasOne: Summary
Summary
 └── storedIn: Qdrant (vector + metadata)
Quiz
 └── hasMany: Answers
Room
 └── hasMany: Participants
```

---

## 🧠 Qdrant Vector Indexing

- Summary embeddings are stored with:
  - `vector`: float array
  - `payload`: { summary_id, user_id, topic, created_at }
- Used for:
  - Similarity search
  - Contextual recommendations
  - AI assistant memory

---

## 🧮 Indexing & Optimization

| Table               | Indexes                        |
|---------------------|--------------------------------|
| users               | email (unique), role           |
| documents           | user_id, type, created_at      |
| summaries           | document_id, created_at        |
| quizzes             | user_id, created_at            |
| activity_logs       | user_id, event_type, timestamp |
| room_participations | room_id, user_id               |

- Composite indexes where applicable (e.g., `user_id + created_at`)

---

## 🔐 Constraints & Retention

- Foreign keys with `onDelete(cascade)`
- `deleted_at` soft deletes on all user content
- Scheduled tasks:
  - Archive logs after 90 days
  - Delete abandoned rooms after 30 days
  - Revoke expired recommendations

---

## 🗃️ Storage Strategy

| Resource    | Storage Method             |
|-------------|----------------------------|
| Files       | MiniO                      |
| Vectors     | Qdrant (self-hosted)       |
| DB Records  | PostgreSQL                 |
| Backups     | Daily cron job to S3       |

---

## 🧪 Migrations & Versioning

- Laravel migrations in `database/migrations`
- Use `id` for keys and the method `foreignIdFor` available in Laravel.
- Migration groups by domain: `user`, `quiz`, `ai`, `rooms`, `gamification`
- Table comments enabled for schema clarity

---

## 📤 Data Compliance

- GDPR-compliant `data_export`, `data_delete` endpoints
- Tokenized analytics for anonymity
- Vector payloads scrubbed after deletion
- Opt-out logging flag on user profile

---

## 🧠 Data Architect Notes

> “We strike a balance between relational integrity and semantic discovery. All heavy lifting (search, AI relevance) is offloaded to async vector layers while PostgreSQL handles transactional logic efficiently.”
