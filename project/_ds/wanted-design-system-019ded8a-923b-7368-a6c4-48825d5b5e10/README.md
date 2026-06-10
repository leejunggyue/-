# Wanted Design System

## Overview

**Wanted** (원티드) is a Korean job platform and career tech company operated by **Wantedlab Inc.** (원티드랩). The company runs several interconnected products targeting job seekers, employers, freelancers, and career professionals — primarily in Korea, Japan, and globally.

This design system was derived from the **"Wanted Design System (Community)"** Figma file. The Figma file is a comprehensive design system covering colors, typography, spacing, icons, logos, and components across all Wanted products.

**Figma source:** `Wanted Design System (Community).fig`
*(Mounted as virtual filesystem — explore with fig_ls, fig_read tools if you have access)*

---

## Products Represented

| Product | Description |
|---|---|
| **Wanted** | Core job platform — job listings, company profiles, career content |
| **Wanted Space** | B2B HR/recruiting workspace tool for employers |
| **Wanted Gigs** | Freelance/contract work marketplace |
| **Wanted Agent** | AI-powered job matching & career agent service |
| **Wanted LaaS** | Labeling-as-a-Service (AI data labeling platform) |
| **Wanted OneID** | Unified login/SSO for Wanted ecosystem |

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **Primary language:** Korean (한국어), with English secondary. The UI is bilingual; most product copy is in Korean but technical tokens, component names, and design system documentation use English.
- **Japanese** (日本語) is a supported third language (font `Pretendard JP` covers all three scripts).
- **Tone:** Professional, clear, and efficient. Not overly casual, not stiff. The copy is direct and task-oriented — "사용자가 원하는 동작을 수행할 수 있도록 돕습니다" (Helps users perform the actions they want).
- **Casing:** Sentence case for Korean copy. Title case for English component/section names. No all-caps UI text.
- **Pronouns:** Formal but accessible — uses 합쇼체/해요체 (polite forms). B2B copy is slightly more formal than consumer-facing copy.
- **Emoji:** **Not used** in UI components or documentation. The system is purely typographic and iconographic.
- **Numbers/metrics:** Used sparingly as functional data, not decorative "data slop."
- **Copy style:** Minimal, purposeful. Labels are short. Descriptions are 1–2 lines max. Documentation copy is instructional.

### Examples
- Button label: `컴포넌트 보기` (View component), `원티드 브랜드 센터` (Wanted Brand Center)
- Description: `다양한 상황에서 일관된 목소리로 손쉽게 텍스트를 표시할 수 있습니다.`
  ("You can easily display text with a consistent voice in various situations.")
- Principle copy: `단순하며 상징적인 기호를 통해 특정 개념을 빠르게 전달합니다.`
  ("Quickly conveys specific concepts through simple, symbolic icons.")

---

## VISUAL FOUNDATIONS

### Colors
- **Background:** Pure white `#FFFFFF` and near-black `#000000` dominate. Light gray `#F7F7F8` for surface backgrounds.
- **Primary Blue:** `#0066FF` — brand action color, links, interactive elements.
- **Error/Danger:** `#FF4242` — red for error states, destructive actions.
- **Success:** `#00BF40` — green for positive/confirmation states.
- **Neutral palette:** A full scale of cool-neutral grays from `#F7F7F8` (lightest) to `#171719` (darkest). Step values: 100, 99, 98, 97, 96, 95, 90, 80, 70, 60, 50, 40, 30, 22, 20, 15, 10, 5, 0.
- **Cool Neutral:** Slightly cooler/bluer gray scale for surfaces. `#37383C` (body text), `#70737C` (secondary), `#DBDCDF` (dividers), `#F4F4F5` (subtle backgrounds).
- **Accent palette:** Blue, Red, Green, Red-Orange, Lime, Cyan, Light Blue, Violet, Purple — each with a 12-step tonal scale (0–99).
- **Semantic colors (Light mode):** Built from above palette — background, surface, foreground, border, interactive, status tokens.
- **Dark mode:** Full dark theme defined as a separate token set.

### Typography
- **Primary typeface:** `Pretendard JP` — covers Korean, English, Japanese. Used for all UI text.
  - Weights used: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)
- **Brand typeface:** `Wanted Sans` / `Wanted Sans Variable` — used for logo labels, brand headlines.
- **Mono:** `SF Mono` — used for code samples and technical strings.
- **Type scale (18 levels across 7 tiers):**
  | Name | Size | Line Height | Letter Spacing |
  |---|---|---|---|
  | Display 1 | 48px | – | – |
  | Display 2 | 40px | 52px (1.3) | -0.028em |
  | Display 3 | 36px | 48px (1.334) | -0.027em |
  | Title 1 | 32px | 44px (1.375) | -0.025em |
  | Title 2 | 28px | 38px (1.358) | -0.024em |
  | Title 3 | 24px | 32px (1.334) | -0.023em |
  | Heading 1 | 22px | 30px (1.364) | -0.019em |
  | Heading 2 | 20px | 28px (1.4) | -0.012em |
  | Headline 1 | 18px | 26px (1.445) | -0.002em |
  | Headline 2 | 17px | 24px (1.412) | 0em |
  | Body 1/Normal | 16px | 24px (1.5) | +0.006em |
  | Body 1/Reading | 16px | 26px (1.625) | +0.006em |
  | Body 2/Normal | 15px | 22px (1.467) | +0.010em |
  | Body 2/Reading | 15px | 24px (1.6) | +0.010em |
  | Label 1/Normal | 14px | 20px (1.429) | +0.015em |
  | Label 1/Reading | 14px | 22px (1.571) | +0.015em |
  | Label 2 | 13px | 18px (1.385) | +0.019em |
  | Caption 1 | 12px | 16px (1.334) | +0.025em |
  | Caption 2 | 11px | 14px (1.273) | +0.031em |

### Spacing
- **Base unit:** 4px grid. Spacing tokens follow a 4px progression with denser options near 0 and larger jumps at higher values.
- **Common values:** 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 128, 160, 192, 224
- **Mobile platform safe area** (status bar, bottom nav) spacing handled via dedicated tokens.

### Backgrounds & Surfaces
- **Light backgrounds:** White `#FFFFFF`, off-white `#F7F7F8`, `rgba(112,115,124,0.05)` for subtle tinting.
- **No full-bleed photography** in UI components — images appear in cards/thumbnails with rounded corners.
- **No gradients** in UI chrome. Flat, clean surfaces throughout.
- **No hand-drawn or illustrated backgrounds.** Clean, minimal surfaces.

### Borders & Dividers
- **Default border:** `1px solid rgba(112,115,124,0.22)` — semi-transparent gray.
- **Dividers:** `1px solid rgba(112,115,124,0.22)` or solid black `4px` for major section breaks.
- **Corner radii:** 
  - XSmall: 4px, Small: 8px, Medium: 12px, Large: 16px, XLarge: 24px, 2XLarge: 32px, Full: 9999px (pill)
  - Cards: 16–24px. Modals: 24–32px. Chips: pill shape. Bottom sheets: top-corners 24–32px.

### Shadows & Elevation
- **Shadows are subtle.** Three levels:
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` — card hover/default
  - `box-shadow: 0 4px 12px rgba(0,0,0,0.12)` — elevated modals
  - `box-shadow: 0 2px 6px rgba(23,23,23,0.07)` — subtle lift
- No decorative or colorful shadows.

### Animation & Motion
- **Transitions:** Subtle and functional. Standard duration ~200–300ms.
- **Easing:** Ease-in-out for most transitions.
- **No bounces** or springy animations visible in the system.
- **Skeleton loading:** Full skeleton state variants available for cards and lists.

### Hover & Interaction States
- **Hover:** Slight background tint (opacity overlay ~5–8%). No color shifts on text.
- **Press/Active:** Slightly darker overlay (~10–12%).
- **Disabled:** Opacity reduction (~40%). Color unchanged.
- **Focus:** Border outline in primary blue.

### Cards
- **Card style:** White background, `1px solid rgba(112,115,124,0.22)` border, `border-radius: 16–24px`, subtle shadow.
- **No colored left-border accent** pattern.
- **List cells:** Horizontal rows with leading content (icon/image), body (title/subtitle), and trailing content (value/chevron/badge).

### Imagery
- **Profile images:** Circle-cropped avatars.
- **Content images:** 1:1 square or 16:9 horizontal thumbnails, corner-rounded.
- **Color vibe:** Neutral/natural. No heavy filters.
- **No grain or texture effects.**

### Iconography approach
- **Custom icon set** — Wanted has its own icon library (`Icon/Normal`, `Icon/Tight`, `Icon/Thick` variants).
- Icons are **24×24px** default, with smaller tight (20px) and larger sizes available.
- **Stroke-based** with consistent stroke weight. Clean, geometric, modern.
- No emoji used as icons. No third-party icon fonts.

---

## ICONOGRAPHY

Wanted uses a **proprietary custom icon system** defined in the Figma file under the `Icon` page. Icons are organized as follows:

### Structure
- **Normal icons** (`Icon/Normal/...`): Standard 24×24px icons, standard stroke weight. Used in most UI contexts.
- **Tight icons** (`Icon/Tight/...`): Compact variants for dense UIs and small sizes.
- **Thick icons** (`Icon/Thick/...`): Bold/heavier weight variants for emphasis.
- **Fill icons** (`Icon/Fill/...`): Filled/solid versions for selected/active states.

### Icon naming convention
Icons are named by semantic concept: `circle`, `location`, `pin`, `ticket`, `check`, `square-check`, `circle-dot`, `close`, `square`, `chevron-right`, `navigation-recruit`, `navigation-career`, `navigation-social`, `navigation-mypage`, `navigation-menu`, `logo-apple`, `logo-facebook`, `logo-google`, etc.

### Usage
- Icons are SVG-based, rendered as inline components.
- Color is inherited from parent (`fill="currentColor"`).
- **No third-party icon font or CDN library** is used — the icon system is fully custom.
- Assets are stored in `/assets/icons/` (see below).

### Brand/product icons
Logo marks for Wanted, Wanted Space, Wanted Gigs, Wanted Agent are stored in `/assets/logos/`.

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill descriptor
├── colors_and_type.css          ← CSS design tokens (colors + typography)
├── assets/
│   └── logos/
│       ├── wanted-logotype.svg  ← "wanted" wordmark SVG
│       ├── wanted-symbol.png    ← W symbol/mark (PNG)
│       ├── wanted-symbol-mask.svg
│       ├── wanted-agent-logotype.svg
│       ├── wanted-gigs-logotype.svg
│       └── wanted-space-logotype.svg
├── preview/
│   ├── colors-neutral.html      ← Neutral & common color scales
│   ├── colors-brand.html        ← Brand/accent color scales
│   ├── colors-semantic.html     ← Semantic color tokens
│   ├── typography-scale.html    ← Full type scale specimen
│   ├── typography-weights.html  ← Font weight showcase
│   ├── spacing-tokens.html      ← Spacing scale tokens
│   ├── radius-shadow.html       ← Border radius & shadow system
│   ├── logo-brand.html          ← Logo & brand mark showcase
│   └── components-buttons.html ← Button component states
└── ui_kits/
    └── wanted-app/
        ├── README.md
        ├── index.html           ← Interactive app prototype
        ├── tokens.js            ← Shared design tokens
        ├── Header.jsx
        ├── BottomNav.jsx
        ├── JobCard.jsx
        └── components.jsx
```
