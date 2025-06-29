# 🧑‍🏫 Chapter 14: Study Rooms & Collaboration Features

## 🎯 Overview

Study Rooms in Open Study Volt (OSV) are virtual collaborative spaces designed for real-time interaction between learners. They include audio/video, shared whiteboards, and quiz co-solving to enhance peer learning.

---

## 🔧 Core Features

| Feature            | Description                            |
|--------------------|----------------------------------------|
| Video & Audio Chat | Real-time communication via WebRTC     |
| Shared Whiteboard  | Live drawing, annotations, note-taking |
| Co-Solve Quiz Mode | Group attempts of adaptive quizzes     |
| Chat + Reactions   | In-room messaging, emoji reactions     |
| Room Scheduling    | Timed events with calendar invites     |

---

## 🧩 Technical Architecture

### WebRTC

- Peer-to-peer via SFU (Selective Forwarding Unit)
- Integrated with `mediasoup` or `livekit` hosted instance

### Realtime Sync

- Powered by **Laravel Reverb** for:
  - Whiteboard sync
  - Chat events
  - Presence (joined/left)
  - Collaborative quiz state

---

## 🗂️ Data Model

- `rooms`: id, title, type (public/private), created_by
- `room_participants`: room_id, user_id, joined_at, role
- `whiteboard_states`: JSON blobs per session
- `room_events`: stream of typed events (chat, draw, answer)

---

## 🧠 User Roles

| Role        | Permissions                            |
|-------------|----------------------------------------|
| Host        | Full control, kick/mute, start session |
| Participant | Interact, answer, draw, chat           |
| Observer    | View-only, no interaction              |

---

## 🎨 Whiteboard

- Built with `Excalidraw` + CRDT sync
- Exportable to PNG/SVG
- Supports math, text, arrows, color tools

---

## 🧪 Quiz Collaboration

- Real-time quiz solving
- Shared progress state
- Results shown to all participants
- XP split between contributors

---

## 🔐 Security & Moderation

- Role-based room access via signed invites
- JWT-scoped socket auth
- Kick/ban + profanity filter
- All messages and events are logged with timestamps

---

## 📱 Mobile UX

- Responsive layout with swipe-to-switch (chat ↔ video ↔ whiteboard)
- Connection quality auto-scaling (low-bandwidth mode)
- Push notifications for room invites

---

## 📦 Dependencies

- Laravel Reverb
- Mediasoup or Livekit
- Excalidraw
- Pusher-compatible client
- Inertia.js (for whiteboard modal)

---

## 🧠 Tech Lead Notes

> “We built rooms like multiplayer games: async-safe, low-latency, and replayable. The whiteboard state is a living document.”
