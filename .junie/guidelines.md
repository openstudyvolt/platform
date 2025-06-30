# Design System & Theme Guide

This prompt outlines the design system and theming guidelines for the Open Study Volt project. Use it to guide JetBrains Junie AI when updating CSS, configuration files, and components to match our minimalist, ADHD-friendly, scoped Tailwind theme.

---

## 1. Project Context

* **Framework**: Laravel + React, using Tailwind CSS via PostCSS (or CDN in dev environments).
* **Goal**: Apply a cohesive, minimalist, ADHD-friendly design system. Prioritize simplicity, clarity, and focus.

---

## 2. Core Principles

1. **Simplicity**: Only show essential UI elements. Avoid clutter.
2. **Clear Hierarchy**: Use size, weight, and spacing consistently.
3. **Calm Visuals**: Neutral backgrounds, limited accents, ample whitespace.
4. **Predictable Patterns**: Standardized component placement and interaction.
5. **Progressive Disclosure**: Reveal advanced controls on user demand.

---

## 3. Theme Tokens & Variables

### 3.1 CSS Variables (PostCSS)

Place in a global CSS file (e.g., `resources/css/theme.css`):

```css
:root {
  /* Colors */
  --color-primary: #1D4ED8;
  --color-primary-dark: #1D4ED8;
  --color-secondary: #1D4ED8;
  --color-accent: #93C5FD;
  --color-background: #F9FAFB;
  --color-surface: #FFFFFF;
  --color-text-primary: #111827;
  --color-text-secondary: #374151;
  --color-border: #E5E7EB;
  --color-warning: #FBBF24;
  --color-error: #EF4444;
  --color-success: #10B981;

  /* Typography */
  --text-h1: 1.875rem;
  --text-h2: 1.5rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;

  /* Radius & Spacing */
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;

  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
}
```

### 3.2 Tailwind Config (tailwind.config.js)

Extend the theme to map CSS variables to Tailwind utilities:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontSize: {
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      spacing: {
        4: 'var(--spacing-4)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
      },
    }
  }
};
```

---

## 4. Component Guidelines

* **Buttons**: `bg-primary text-white rounded-lg py-3 px-6 shadow-sm hover:shadow-md`
* **Cards**: `bg-surface p-6 rounded-xl shadow-sm`
* **Inputs**: `border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary`
* **Headings**: `text-h1 font-bold text-text-primary` (H1), `text-h2 font-semibold text-text-primary` (H2)
* **Body text**: `text-base text-text-secondary`

---

## 5. Usage Examples

```jsx
// React Component Example
export default function DashboardCard() {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-sm">
      <h2 className="text-h2 font-semibold text-text-primary mb-4">
        Your Progress
      </h2>
      <p className="text-base text-text-secondary">
        Complete your next lesson to earn a badge.
      </p>
      <button className="mt-6 w-full py-3 font-medium rounded-lg bg-primary text-white">
        Continue Lesson
      </button>
    </div>
  );
}
```

---

*End of Guide*
