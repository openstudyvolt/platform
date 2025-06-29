# 🛣️ Chapter 20: Roadmap, Versioning & Contribution Workflow

## 🎯 Overview

This chapter outlines Open Study Volt’s current roadmap planning phase, our versioning strategy, and how contributors can engage with the product lifecycle even during pre-MVP definition.

---

## 📆 Roadmap (Planning Stage Only)

| Milestone                        | Target Window | Status      | Notes                                       |
|----------------------------------|---------------|-------------|---------------------------------------------|
| Documentation Blueprint          | ✅ Complete    | ✅ Done      | 20 chapters including tech + product vision |
| MVP Scope Finalization           | Week 1 (Q3)   | 🧭 Planning | Epic/ticket breakdown + Figma in progress   |
| UI/UX Design System Setup        | Week 2 (Q3)   | 🧭 Planning | Design tokens, components, layout grid      |
| Auth & Security Implementation   | Week 3 (Q3)   | 🔜 Upcoming | Auth0 + Passport fallback planning          |
| Summarizer & AI Core Prototyping | Week 4 (Q3)   | 🔜 Upcoming | Whisper + Prompt Templates                  |
| First End-to-End MVP Integration | Week 5 (Q3)   | 🔜 Upcoming | Upload → Summarize → Read View              |
| Internal Preview (Alpha)         | Week 6 (Q3)   | ⏳ Expected  | With basic dashboard, auth, AI features     |

---

## 🔢 Versioning Strategy

- **Backend**: Follows [Semantic Versioning](https://semver.org/)
- **Frontend**: Tied to backend version and patch
  - `v0.1.0` during MVP phase
- **API**: Versioned via prefix (`/api/v1/`)
- **Docs**: `main` branch for current, tags per release

---

## 🌱 Feature Lifecycle (Early Phase)

| Stage        | Owner                  | Artifacts                                 |
|--------------|------------------------|-------------------------------------------|
| Proposal     | Product Owner          | Epic ticket, Notion spec                  |
| Design       | UX Team                | Figma prototype, edge case notes          |
| Dev Planning | Engineering Leads      | Task breakdown, estimates                 |
| Development  | Dev Team               | PRs, reviews, branch tracking             |
| QA & UAT     | QA Team + Stakeholders | Test cases, bug logs, UAT feedback        |
| Release      | DevOps                 | Changelog, Slack notify, monitoring setup |

---

## 🤝 Contribution Guide (Internal & Community)

### Branching Model

- `main`: stable releases
- `develop`: integration + staging
- `feature/{name}`: per-feature branches
- `fix/{name}`: hotfixes
- `docs/{topic}`: documentation-only changes

### Guidelines

- Follow lint + test rules before PR
- All commits in English
- PR template auto-assigned
- Internal features use Epic tag in the PR title

---

## 🔄 Feedback Loops

- Weekly standups
- Async proposals via Linear
- Figma/Notion sync-ups for UI
- Early feedback from test users before alpha

---

## 📜 Changelog Example

```md
## [0.1.0] - 2025-07-01
### Added
- Project scaffolding, Auth0 integration
- Initial summarization job flow (Whisper → OpenAI)
```

---

## 🧠 Product Owner Notes

> “This roadmap is about alignment and velocity. We’re building clarity early so we don’t rewrite later.”

---

## 📦 Dependencies

- GitHub Actions
- Linear
- Notion
- Semantic Release (optional)
