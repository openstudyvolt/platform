# 🕹️ Chapter 13: Gamification System Design

## 🎯 Overview

To foster motivation and sustained engagement, Open Study Volt (OSV) includes a structured gamification layer. This system uses points, badges, leaderboards, and unlockable content to reinforce learning.

---

## 🧩 Core Concepts

| Feature      | Description                                       |
|--------------|---------------------------------------------------|
| Points       | XP for completing quizzes, summaries, rooms, etc. |
| Badges       | Milestone-based visual rewards                    |
| Leaderboards | Weekly & all-time rankings by XP and impact       |
| Streaks      | Daily learning streaks tracked per user           |
| Unlockables  | Hidden content/modules based on earned XP         |

---

## 🛠 Architecture

### Models

- `PointsLog`: XP events (`user_id`, `event_type`, `amount`, `metadata`)
- `Badge`: available badges with unlocked rules
- `BadgeAward`: pivot table of `user_id` ↔ `badge_id`
- `LeaderboardSnapshot`: cache of rankings

### Flow

```plaintext
Event Trigger → PointsLog + Badge Award → XP Aggregator → Leaderboard
```

---

## 🏆 Badges Strategy

| Badge Name       | Unlock Criteria                 |
|------------------|---------------------------------|
| “First Summary”  | Upload + summarize one document |
| “Quiz Master”    | 10 quizzes completed            |
| “Daily Streak 7” | 7 consecutive learning days     |
| “Room Hero”      | Host or join 5 study sessions   |
| “Early Adopter”  | Signup in launch phase          |

All badges are localized and include SVG icon, gradient class, and tooltip.

---

## 🧮 Points System

| Event                     | Points |
|---------------------------|--------|
| Upload document           | 10     |
| Create quiz               | 20     |
| Complete quiz             | 25     |
| Join study room           | 15     |
| Contribute in whiteboard  | 10     |
| Receive badge             | 50     |
| Invite friend (accepted)  | 75     |

---

## 🧑‍💻 Dev Implementation

- Points handled via a central `GamificationService`
- Badge rules defined as `UnlockBadge` jobs
- Leaderboards cached daily with `LeaderboardSnapshotJob`
- Gamification UI widgets powered by `/api/v1/gamification/` endpoints

---

## 🖼️ Frontend UX

- Floating XP tracker
- Badge gallery with filters and animations
- Real-time leaderboard in home/dashboard
- XP progress bar and modal on the new badge

---

## 📈 Analytics

- Events logged via PostHog
- Correlate XP progression with retention and engagement
- Heatmap of streak loss points

---

## 🔐 Integrity Controls

- Events signed server-side
- Anti-spam checks for repeated actions
- Temporal throttling for point floods
- Admin tools to adjust or revoke badges

---

## 🧠 Product Owner Notes

> “We reward learning, not just usage. Every XP is a signal of progress. Gamification is a sidekick, not the goal.”

---

## 📦 Dependencies

- Laravel Queues, Events
- Blade Components (Badge, XP Toast, etc.)
- PostHog
