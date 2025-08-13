# LocalLens – UI / UX Design Specification

## 1. Product Vision
LocalLens is a hyper-local marketplace that formalises India’s unorganised service sector. The application must feel *trustworthy*, *premium*, and *approachable* while remaining light-weight for Tier-2/3 connectivity constraints.

## 2. Design Pillars
1. **Trust-centric** – Verified badges, transaction history, subtle success colours.
2. **Apple-like minimalism** – Generous whitespace, clear information hierarchy, SF-style typeface.
3. **Friendly like Airbnb** – Rounded corners, soft shadows, approachable iconography.
4. **Hyper-local readiness** – Local language toggle, low-bandwidth asset choices, accessibility.

## 3. Brand & Style Guide
| Token | Usage | HEX | Example |
|-------|-------|-----|---------|
| `--ll-bg` | Default page background | `#F9F9F9` |
| `--ll-surface` | Cards / sheets | `#FFFFFF` |
| `--ll-neutral-05` | Hairlines | `#E5E5E5` |
| `--ll-neutral-80` | Primary text | `#1C1C1E` |
| `--ll-accent-500` | Primary action (buttons, links) | `#223A7A` *(Royal Blue)* |
| `--ll-accent-300` | Accent hover | `#2F4BA1` |
| `--ll-success` | Verified badge | `#34C759` |
| `--ll-warning` | Pending states | `#FF9F0A` |

Typography (web fallback displayed):
* **Display / H1** – *SF Pro Display* 32/38 px, semibold 600
* **Headline / H2** – 24/30 px, semibold
* **Title / H3** – 20/26 px, medium 500
* **Body** – 16/22 px, regular
* **Caption** – 13/18 px, regular

Corner radius: `12 px` on cards & inputs.
Shadow: `0 2px 8px rgba(0,0,0,0.05)`.

## 4. Key Components
1. **AI Search Bar**
   * Full-width, centred on Home.
   * Placeholder: *“Describe your problem… (e.g. ‘geyser leaking’)”*.
   * Displays intelligent suggestions in a dropdown (`max-height: 280 px`, scrollable).
2. **Category Chips**
   * Rounded pill buttons; icon + label (Plumbing, Electrical, Carpentry…).
3. **Provider Card**
   * Avatar, name + verification badge.
   * Rating ☆ 4.8 (120) · `₹` symbol hourly rate.
   * CTA: *View Profile*.
4. **Wallet / UPI Widget**
   * Balance, *Add Money* button.
5. **Rating Selector**
   * 5 interactive stars, photo upload thumbnail grid.
6. **Language Toggle**
   * Globe icon; dropdown with `🇮🇳 English`, `हिन्दी`, `मराठी` …

## 5. Screen Layouts
### 5.1 Home Screen
* **AppBar (desktop)** – Logo left, language toggle & profile/avatar right.
* **Hero Section** – AI search bar centre, subtle background illustration (map markers).
* **Service Categories** – Responsive grid (mobile 2 × N, desktop 4 × N).
* **Recommended Professionals** – Horizontal scroll (mobile) / grid (desktop).

### 5.2 Provider Profile
* Header with photo backdrop, circular avatar overlay, verified badge.
* Name + rating + “Book Now” button (accent).
* Tabs: *About* · *Reviews* · *Service History*.
* Sticky “Book” footer on mobile.

### 5.3 Payment Flow
1. **Select Method** – UPI (default), Card, Wallet.
2. **Confirm Details** – Amount, provider, service summary.
3. **UPI Intent** – Trigger external UPI collect request.
4. **Success Screen** – Confetti animation, receipt card.

### 5.4 Review Submission
* Post-job, modal sheet.
* Rating stars widget, 140-char textarea, photo upload (max 3, 2 MB each).
* Submit → success toast.

### 5.5 User Profile
* Avatar, name, verified badge.
* Wallet balance, *Add Money*.
* Service history list (status chips: Completed, Pending, Warranty).
* Settings: Language, Payments, Support.

## 6. Responsive Behaviour
* **Mobile (≤600 px)** – Single-column, bottom nav: Home · Bookings · Wallet · Profile.
* **Tablet (600–960 px)** – Two-column where feasible (categories left, results right).
* **Desktop (>960 px)** – Max-width 1280 px, side navigation collapsible.

## 7. Accessibility
* Colour contrast ≥ WCAG AA.
* Dynamic type scaling (React Native) / `rem` units (web).
* Screen-reader labels on all actionable controls.

## 8. Implementation Notes & Tech Stack
* **Web** – Next.js + TypeScript + TailwindCSS (custom theme from tokens).
* **Mobile** – Expo React Native + `nativewind` or styled-components.
* **State** – React Query + Context for user/session.
* **Icons** – Phosphor or Heroicons (rounded style).
* **i18n** – `i18next` with JSON namespaces.
* **AI Autocomplete** – Edge function hitting Gemini model (serverless) with debounced input.

Sample Tailwind config snippet:
```js
theme: {
  extend: {
    colors: {
      ll: {
        bg: '#F9F9F9',
        surface: '#FFFFFF',
        neutral: {
          5: '#E5E5E5',
          80: '#1C1C1E',
        },
        accent: {
          500: '#223A7A',
          300: '#2F4BA1',
        },
        success: '#34C759',
        warning: '#FF9F0A',
      },
    },
    borderRadius: {
      lg: '12px',
    },
  },
}
```

## 9. Wireframe Thumbnails (ASCII)
```txt
Home (mobile)
┌──────────────────────────────┐
│ Logo        🔔  🌐  🙂 │
│                              │
│  [ AI Search …            ]  │
│                              │
│  ▢ Plumbing   ▢ Electrical   │
│  ▢ Carpentry  ▢ Appliances   │
│                              │
│   Recommended Near You       │
│  ┌───────┐  ┌───────┐        │
│  │card 1 │  │card 2 │  …     │
└──────────────────────────────┘
```

---

This document serves as a single source of truth for engineers and designers to rapidly prototype the LocalLens experience across web and mobile.