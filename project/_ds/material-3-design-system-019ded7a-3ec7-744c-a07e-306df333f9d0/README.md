# Material 3 Design System

## Overview

This is a design system based on **Google's Material Design 3** (M3), the latest evolution of Material Design. It provides a comprehensive set of design tokens, components, and guidelines for building adaptive, accessible, and expressive Android, web, and cross-platform UIs.

Material 3 is the design system behind Google's core apps (Gmail, Maps, Calendar, Drive, etc.) and Android 12+. It introduces **dynamic color** (personalized theming from wallpaper), **updated typography** using the M3 type scale, expressive shape systems, and a fully rethought elevation system.

## Sources

- **Figma file**: Material 3 Design Kit (Community) — full Figma link if you have access: `https://www.figma.com/community/file/1035203688168086460`
  - 32 pages covering every major component category
  - Includes light & dark scheme color palettes, tonal palette scales, type scale, shape system, elevation system
- No external codebase was provided; this system is derived solely from the Figma source.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Functional and direct**: Material copy is concise, purposeful, and action-oriented. No fluff.
- **Sentence case throughout**: Button labels, headings, navigation items — all use sentence case (not Title Case or ALL CAPS), except for proper nouns.
- **Second-person "you"**: Content addresses the user directly. "Save your changes", not "The user's changes".
- **Inclusive and neutral**: No slang, idioms, or culturally specific metaphors.
- **No emoji**: Material Design UI components never use emoji for icons or semantic indicators — they use Material Symbols (outlined icon font) instead.
- **Brevity over description**: Labels like "Save", "Cancel", "Done", "Add", "Edit" — never "Click here to save your file".

### Casing
- **Sentence case** for all UI text: button labels, dialog text, tooltips, snackbars, field labels
- **Title case** only for product names or proper nouns
- **No ALL CAPS** in the modern M3 spec (removed from M2)

### Example copy patterns
- Buttons: "Save", "Cancel", "Add item", "Learn more", "Get started"
- Snackbars: "Changes saved", "Item deleted", "Couldn't connect"
- Dialogs: "Discard changes?", "Are you sure you want to delete this?"
- Labels: "Email address", "First name", "Date of birth"

---

## VISUAL FOUNDATIONS

### Color System
Material 3 uses a **tonal palette system** with five key palettes: Primary, Secondary, Tertiary, Neutral, and Neutral Variant — each with 13 tonal stops (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100). Dynamic Color generates these from a seed color.

**Default seed color: Purple `rgb(103,80,164)` / `#6750A4`**

#### Light Scheme Semantic Colors
| Role | Color | Token |
|------|-------|-------|
| Primary | `#6750A4` | P-40 |
| On Primary | `#FFFFFF` | P-100 |
| Primary Container | `#EADDFF` | P-90 |
| On Primary Container | `#21005D` | P-10 |
| Secondary | `#625B71` | S-40 |
| On Secondary | `#FFFFFF` | S-100 |
| Secondary Container | `#E8DEF8` | S-90 |
| On Secondary Container | `#1D192B` | S-10 |
| Tertiary | `#7D5260` | T-40 |
| On Tertiary | `#FFFFFF` | T-100 |
| Tertiary Container | `#FFD8E4` | T-90 |
| On Tertiary Container | `#31111D` | T-10 |
| Error | `#B3261E` | E-40 |
| On Error | `#FFFFFF` | E-100 |
| Error Container | `#F9DEDC` | E-90 |
| On Error Container | `#410E0B` | E-10 |
| Surface | `#FEF7FF` | N-98 |
| Surface Container Low | `#F7F2FA` | N-96 |
| Surface Container | `#F3EDF7` | N-94 |
| Surface Container High | `#ECE6F0` | N-92 |
| Surface Container Highest | `#E6E0E9` | N-90 |
| On Surface | `#1D1B20` | N-10 |
| On Surface Variant | `#49454F` | NV-30 |
| Outline | `#79747E` | NV-50 |
| Outline Variant | `#CAC4D0` | NV-80 |
| Inverse Surface | `#322F35` | N-20 |
| Inverse On Surface | `#F5EFF7` | N-95 |
| Inverse Primary | `#D0BCFF` | P-80 |
| Scrim / Shadow | `#000000` | N-0 |

### Typography
Material 3 uses the **M3 Type Scale** — a 15-step system across 5 categories × 3 sizes. Fonts are **Roboto** (baseline) and **Google Sans / Google Sans Text** (emphasis/display).

| Category | Size | Font Size | Line Height | Letter Spacing | Weight |
|----------|------|-----------|-------------|----------------|--------|
| Display Large | — | 57px | 64px | -0.25 | Regular |
| Display Medium | — | 45px | 52px | 0 | Regular |
| Display Small | — | 36px | 44px | 0 | Regular |
| Headline Large | — | 32px | 40px | 0 | Regular |
| Headline Medium | — | 28px | 36px | 0 | Regular |
| Headline Small | — | 24px | 32px | 0 | Regular |
| Title Large | — | 22px | 28px | 0 | Regular |
| Title Medium | — | 16px | 24px | +0.15 | Medium |
| Title Small | — | 14px | 20px | +0.1 | Medium |
| Label Large | — | 14px | 20px | +0.1 | Medium |
| Label Medium | — | 12px | 16px | +0.5 | Medium |
| Label Small | — | 11px | 16px | +0.5 | Medium |
| Body Large | — | 16px | 24px | +0.5 | Regular |
| Body Medium | — | 14px | 20px | +0.25 | Regular |
| Body Small | — | 12px | 16px | +0.4 | Regular |

Primary font: **Roboto** (Regular, Medium, Bold)
Display/emphasis font: **Google Sans** / **Google Sans Text** (Regular, Medium, Bold)
Monospace: **Roboto Mono** (Regular, Bold)

### Shape System
Material 3 uses a **10-step corner radius scale** (None → Full):
| Token | Radius |
|-------|--------|
| None | 0px |
| Extra Small | 4px |
| Small | 8px |
| Medium | 12px |
| Large | 16px |
| Extra Large | 28px |
| Full | 50% (pill) |

Buttons use Large (16px) or Full (pill). Cards use Medium (12px). Dialogs use Extra Large (28px). FABs use Large (16px) or Extra Large (28px). Navigation rails use Full.

### Elevation
Six elevation levels expressed as box-shadows on tinted surfaces:
| Level | Shadow |
|-------|--------|
| 0 | none |
| 1 | `0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)` |
| 2 | `0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)` |
| 3 | `0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.3)` |
| 4 | `0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.3)` |
| 5 | `0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.3)` |

In dark mode, elevation is expressed via surface tints (primary color layered at increasing opacity) rather than shadows alone.

### Backgrounds
- Light surfaces: near-white with a subtle purple tint (`#FEF7FF`)
- Dark surfaces: near-black with a subtle purple tint (`#1C1B1F`)
- No gradients on surfaces — flat fills only
- Background images used only for example screens (editorial content areas)
- No textures, patterns, or noise

### Animation
- Easing: **Emphasized** (fast start, decelerate into position), **Standard** (symmetric ease-in-out), **Decelerate** (enter), **Accelerate** (exit)
- Duration: Short 1 (50ms) through Long 4 (600ms+)
- Motion is purposeful and spatial — elements move from where they came from
- No gratuitous bounce or spring; subtle ease is the default

### Hover & Press States
- **Hover**: 8% opacity state layer (primary color or on-surface) overlaid on the component
- **Pressed**: 12% opacity state layer (ripple)
- **Focused**: 12% opacity state layer + focus indicator ring
- **Dragged**: 16% opacity state layer
- Colors come from the component's "on" color (e.g., `on-primary` for primary buttons)

### Borders & Dividers
- Outlined components (text fields, outlined buttons, outlined cards): `1px solid outline-variant` (`#CAC4D0` light, `#49454F` dark)
- Dividers: `1px solid outline-variant`
- Focus rings: `3px solid primary`
- No drop shadows on text or icons (only elevation surfaces)

### Cards
- Corner radius: Medium (12px)
- Three styles: **Elevated** (Level 1 shadow + Surface fill), **Filled** (Surface Container Highest), **Outlined** (1px outline-variant border)
- No dramatic shadows — cards are subtle, flat-ish
- Inner padding: 16px standard

### Use of Transparency & Blur
- State layers use transparency (8–16% opacity overlays)
- Scrim (behind dialogs/sheets): `rgba(0,0,0,0.32)` — no blur
- No frosted glass / backdrop blur in standard M3

### Imagery
- Photography in examples tends to be warm, lifestyle-oriented (people, food, nature)
- Images are used in cards as 16:9 or square media thumbnails
- No branded illustration style — M3 is system-agnostic

### Corner Radii
- Chips: Full (pill)
- Buttons: Full (pill) for most, Large (28px) for XL
- Cards: Medium (12px)
- Dialogs: Extra Large (28px)
- Navigation Rail container: Full (pill-shaped)
- FAB: Large (16px) small, Extra Large (28px) large, Extra Extra Large for extended

---

## ICONOGRAPHY

Material 3 uses **Material Symbols** — a variable icon font from Google. Available from: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`

- **Style**: Outlined (default), Rounded, Sharp
- **Sizes**: 20px, 24px (standard), 40px, 48px
- **Fill**: 0 (outlined) or 1 (filled) — animatable
- **Weight**: 100–700 (variable font axis)
- **Grade**: -25 to 200 (fine-tune thickness)
- **Optical Size**: 20–48 (matches display size)
- Over 2,500 symbols available
- No emoji used for functional icons
- No custom SVG icons — always use the Material Symbols system
- Icon color always matches the component's text/on-color
- 24px is the default touch-target icon size; 48px containers for icon buttons

### Key icons used in this kit
`stars_filled`, `stars`, `arrow_right`, `check`, `person`, `wifi`, `menu`, `search`, `close`, `add`, `edit`, `delete`, `home`, `settings`, `more_vert`, `favorite`, `share`

---

## FILE INDEX

```
README.md                          — This file: overview, guidelines, index
SKILL.md                           — Agent skill descriptor
colors_and_type.css                — CSS custom properties: all color tokens + type scale
assets/                            — Logos, icons, and visual assets
  material-symbols-info.txt        — How to load Material Symbols
preview/                           — Design system card previews (shown in Design System tab)
  colors-primary.html
  colors-secondary-tertiary.html
  colors-neutral.html
  colors-semantic-light.html
  colors-semantic-dark.html
  type-scale.html
  type-specimens.html
  shape-tokens.html
  elevation.html
  spacing.html
  component-buttons.html
  component-cards.html
  component-navigation.html
  component-inputs.html
  component-chips-badges.html
ui_kits/material3/                 — High-fidelity Material 3 UI kit
  index.html                       — Interactive M3 demo app
  README.md                        — UI kit notes
```
