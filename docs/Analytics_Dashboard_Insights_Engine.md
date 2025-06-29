# 📊 Chapter 15: Analytics Dashboard & Insights Engine

## 🎯 Overview

Open Study Volt (OSV) includes a rich analytics suite that empowers learners, educators, and administrators to track performance, optimize engagement, and surface personalized insights.

---

## 🧩 Target Audiences

| Role     | Dashboard Type                 |
|----------|--------------------------------|
| Learner  | Personal learning metrics      |
| Educator | Class performance + trends     |
| Admin    | System usage + growth tracking |

---

## 📈 Features for Learners

- Quiz success rate
- Summary reads and AI usage over time
- XP + badges history
- Heatmap of activity by day/hour
- Progress toward goals (custom targets)

---

## 🧑‍🏫 Features for Educators

- Average class scores
- Drop-off points in content
- Quiz participation rate
- Room activity and peer collaboration
- Top learners (XP, badge count)

---

## 🏢 Admin & Ops Metrics

- MAU / DAU trends
- Retention and churn analysis
- Language and platform distribution
- API response times
- AI cost usage by feature

---

## ⚙️ Technical Design

- React components using Recharts
- Backend via Laravel API + PostgreSQL views
- Some metrics piped through PostHog for behavior analysis
- Aggregations handled with scheduled jobs (`AnalyticsAggregatorJob`)

---

## 📊 Charts & Visualizations

| Chart Type     | Use Case                          |
|----------------|-----------------------------------|
| Line Chart     | XP growth, usage time             |
| Bar Chart      | Quiz scores, summary counts       |
| Pie Chart      | Device/language usage             |
| Heatmap        | Activity by hour                  |
| Leaderboard    | XP rank by user                   |

---

## 🔒 Privacy & Access

- Role-based visibility (RBAC)
- All data anonymized beyond user scope
- AI logs are stored separately from metrics
- Admins can export CSV or PDF snapshots

---

## 📁 Frontend Implementation

- Dynamic data fetching via SWR
- React context for current user role
- Lazy-loading of heavy charts
- Responsive card layout (Tailwind CSS grid)

---

## 🔄 Update Frequency

- Real-time for learner dashboard
- 15-min batch for educator metrics
- Daily roll-up for the admin dashboard

---

## 🧠 Product Owner Notes

> “Analytics isn't just data—it’s clarity. Each dashboard tells a story that nudges users to grow, reflect, and improve.”

---

## 📦 Dependencies

- Recharts, Chart.js
- PostHog
- Laravel Scheduler & Jobs
- TailwindCSS
