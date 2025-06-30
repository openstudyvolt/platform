# 📡 Chapter 18: Offline Architecture & Sync Mechanisms

## 🎯 Objective

Ensure Open Study Volt (OSV) works seamlessly in environments with limited or no internet access by caching critical features offline and syncing changes when connectivity resumes.

---

## 🌍 Offline-Capable Features

| Feature               | Behavior While Offline                  |
|------------------------|------------------------------------------|
| Summaries              | Read from cache                         |
| Quizzes                | Playable; scores stored locally         |
| Whiteboard & Notes     | Editable and saved in browser storage   |
| XP & Achievements      | Updated locally                         |
| Uploads & Transcripts  | Queued for future processing            |

---

## 🧱 Offline Stack Overview

| Layer              | Technology                     |
|--------------------|--------------------------------|
| Caching            | Service Workers + Workbox      |
| Local Storage      | IndexedDB via LocalForage      |
| Background Sync    | SyncManager API (fallbacks)    |
| Server API         | Laravel `sync` endpoints       |

---

## 🔄 Sync Workflow

1. User interacts with app (e.g., fills quiz, takes notes)
2. App detects offline status
3. Data stored in IndexedDB queue
4. Connection restored
5. Queue is serialized and sent to `/api/v1/sync`
6. Server applies changes, responds with any updates
7. Local cache is refreshed

---

## 🧠 Conflict Management

- Uses `updated_at` timestamps and version hashes
- Conflicts are either:
  - Automatically merged
  - Prompted to the user
- Logs generated for unresolvable differences

---

## 🔁 Background Sync Logic

- Registered via `navigator.serviceWorker.ready`
- If `SyncManager` unavailable:
  - Fallback to interval-based sync
- Batched retry with increasing delay: 1m → 3m → 5m

---

## 📱 Mobile-Optimized Behavior

- Cache size controlled to avoid quota issues
- Media deferred if connection is 3G or lower
- UI prompts users when actions are pending sync

---

## 🧪 Developer Experience

- Offline dev mode: `window.debugOffline = true`
- Devtools log all IndexedDB writes
- Mock sync endpoint enabled via `.env.debug`

---

## 🛡️ Security Considerations

- Data encrypted in IndexedDB using AES
- No JWT tokens or credentials stored offline
- Sync endpoints require fresh JWT per batch
- Expired queues are purged after 24h

---

## 📦 Key Dependencies

- `Workbox`
- `LocalForage`
- `Dexie.js` (optional)
- Laravel 12 API

---

## 🧠 Tech Lead Notes

> “Offline-first isn’t a nice-to-have—it’s equity. This approach makes learning inclusive for everyone, no matter the network.”

