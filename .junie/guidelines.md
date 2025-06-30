# .junie/guidelines.md

## Minimalist & ADHD-Friendly Tailwind Design Spec for OpenStudy Volt

Refined UI guidelines leveraging our Tailwind CSS theme for an intuitive, clean, and distraction-minimized experience—ideal for neurodiverse users.

---

### 1. Core Principles

- **Simplicity First:** Only present essential information and actions per screen.
- **Clear Hierarchy:** Use size, weight, and spacing to guide focus.
- **Predictable Patterns:** Consistent component placement and behavior.
- **Calm Visuals:** Neutral backgrounds, limited accent usage, and ample whitespace reduce a cognitive load.
- **Progressive Disclosure:** Show advanced options or details on demand.

---

### 2. Streamlined Color Usage

- **Primary Accent (Focus):** `bg-primary` for one call-to-action per view.
- **Supportive Accent:** `bg-secondary` for secondary actions only.
- **Neutral Palette:** Mostly `gray.50`, `gray.100`, and `white` backgrounds.
- **Text:** `gray.900` for high contrast headings; `gray.700` for body copy.
- **Feedback:** Single-color alerts—`green.500` for success, `red.500` for errors, `yellow.500` for warnings.

> ✦ **Tip:** Limit palette to 2–3 colors per screen.

---

### 3. Typography & Readability

| Element | Class       | Size     | Weight          | Spacing     |
|---------|-------------|----------|-----------------|-------------|
| H1      | `text-3xl`  | 1.875rem | `font-bold`     | `mb-4`      |
| H2      | `text-2xl`  | 1.5rem   | `font-semibold` | `mb-3`      |
| Body    | `text-base` | 1rem     | `font-normal`   | `leading-7` |
| Small   | `text-sm`   | 0.875rem | `font-normal`   | `leading-6` |

- **Line Length:** Keep 45–75 characters per line.
- **Whitespace:** `mt-4`/`mb-4` around paragraphs.

---

### 4. Component Guidelines

#### 4.1 Buttons

- **Style:** Full-width on mobile, `rounded-lg`, `py-3`, `font-medium`.
- **Hierarchy:** Primary (`bg-primary text-white`), Secondary (`border border-gray-300 text-gray-800 bg-white`).
- **Spacing:** `mt-6` for isolated CTAs; grouped actions use `space-x-4`.

#### 4.2 Cards & Containers

- **Shape:** `rounded-lg`, subtle `shadow-sm`.
- **Padding:** `p-6` inside cards; `gap-6` in grid lists.
- **Use Cases:** Break content into digestible chunks; limit card to 1–2 key actions.

#### 4.3 Forms & Inputs

- **Labels:** Floating labels if multiple fields; otherwise `text-sm mb-2` above input.
- **Inputs:** `px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary`.
- **Error State:** Icon + red text below field; no inline complexity.

#### 4.4 Navigation

- **Simplify Menus:** Only 3–5 top-level items.
- **Sticky Header:** Minimal height (`h-16`), logo + one-hamburger menu on mobile.

---

### 5. Layout & Spacing

- **Grid:** Use `grid-cols-1` or `grid-cols-2`; avoid more than two columns for clarity.
- **Section Padding:** `py-12` for major sections; internal gaps `gap-8`.
- **Container:** `max-w-4xl mx-auto px-4` to center content.

---

### 6. ADHD-Friendly UX Patterns

- **Progress Indicators:** Show step progress for multistep flows.
- **Chunking:** Break long forms/pages into short sections or accordions (`<details>`).
- **Focus States:** Clear focus outlines (`ring-primary`) to assist navigation.
- **Minimal Animations:** Subtle fades (`transition-opacity`) only—no flashy motion.
- **One Task at a Time:** Highlight primary action; grayout or hide others until completion.

---

### 7. Example: Minimalist Dashboard Card

```html
<div class="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
  <div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">Your Progress</h3>
    <p class="text-base text-gray-700">Complete your next lesson to earn a badge.</p>
  </div>
  <button class="mt-6 w-full py-3 font-medium rounded-lg bg-primary text-white">
    Continue Lesson
  </button>
</div>
```

---

### 8. JetBrains Junie Instructions

- Add this file under `.junie/guidelines.md`.
- When giving code-generation prompts, reference this file directly.
- Example: “Junie, update our CTA buttons using the `.junie/guidelines.md` design spec.”
