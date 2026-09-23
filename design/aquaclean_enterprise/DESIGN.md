---
name: AquaClean Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#464651'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#777683'
  outline-variant: '#c7c5d3'
  surface-tint: '#5156aa'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#070666'
  on-primary-container: '#777cd3'
  inverse-primary: '#bfc1ff'
  secondary: '#186586'
  on-secondary: '#ffffff'
  secondary-container: '#99daff'
  on-secondary-container: '#0e6081'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f0069'
  on-tertiary-container: '#7a78e1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#bfc1ff'
  on-primary-fixed: '#070666'
  on-primary-fixed-variant: '#393d91'
  secondary-fixed: '#c3e8ff'
  secondary-fixed-dim: '#8dcff3'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c68'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3c379f'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.04em
  code-num:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-dense: 0.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 1.75rem
  space-2xl: 2.5rem
---

## Brand & Style

This design system embodies high-throughput enterprise reliability, clinical hygiene, and logistical clarity for multi-branch laundry, dry-cleaning, and garment care operations. Designed for desk clerks, store managers, logistics couriers, and multi-unit enterprise franchisees, the interface must balance rapid point-of-sale transactional speed with deep inventory and workflow oversight.

The visual style blends **Corporate / Modern SaaS** with **Crisp Productivity-First Industrialism**. It communicates trust and immaculateness through a structured, high-density layout. Generous white-space is replaced by structured information density, high-contrast typography, and tactile status indicators that emulate real-world laundry tags, sorting racks, and processing stages. Visual elements are decisive, avoiding frivolous ornamental trends to minimize cognitive friction during rapid counter intake and fleet tracking.

## Colors

The palette establishes an authoritative, clean foundation inspired by deep water, clinical sanitation, and precision tracking.

- **Primary Canvas & Surfaces**: The base canvas operates on Crisp Ice White Slate (`#F8FAFC`), layered with pure White (`#FFFFFF`) containers. Surface borders rely on ultra-subtle cool slate borders (`#E2E8F0`).
- **Primary Deep Navy (`#030164`)**: Used for the master application shell, navigation sidebars, high-priority operational summaries, and primary terminal headers.
- **Primary Accent Indigo (`#363199`)**: Used for active states, interactive controls, primary action buttons (e.g., "Create Order", "Process Payment"), and focused selection rings.
- **Secondary Ocean Teal (`#2D7495`)**: Applied to garment service identifiers, delivery/courier status indicators, and aquatic batch tracking.
- **Accent Highlight Lemon Gold (`#E8E085`)**: A functional highlighter reserved for express order callouts, VIP tags, spot/stain inspection flags, and key order warnings.
- **Text & Hierarchy**: Primary typography leverages Deep Slate Navy (`#0F172A`) for maximum contrast and legibility under counter lighting. Secondary labels and metadata utilize Slate (`#475569`), with muted helper text rendered in Slate Muted (`#94A3B8`).
- **Operational Status Palette**: 
  - Emerald Green (`#10B981`) for "Ready for Pickup", "Paid", and "Delivered".
  - Warm Amber (`#F59E0B`) for "In Wash", "Drying", and "Pending Inspection".
  - Coral Red (`#EF4444`) for "Damaged Item", "Refunded", and "Overdue SLA".

## Typography

Typography prioritizes scanning speed and transaction accuracy. **Plus Jakarta Sans** provides structural character and approachability across primary headings, card titles, and high-level branch KPI stats. **Inter** handles high-volume tabular grids, transactional receipt breakdowns, forms, and dense terminal workflows.

Numbers in POS lists, weight measurements (kg/lb), unit counts, and barcode summaries utilize tabular figures (`font-variant-numeric: tabular-nums`) to preserve optical column alignments in dynamic data grids. Micro-badges use uppercase, tracking-boosted `label-xs` typography to create immediately recognizable status chips at a glance.

## Layout & Spacing

The layout is constructed for high-density, desktop-first productivity. It features a collapsible master navigation rail (64px collapsed, 240px expanded) paired with an operational work-surface.

- **POS Workspace Structure**: Split-pane interface on screens ≥ 1280px. The left/center pane hosts multi-column category/item grids (garment selection, laundry services, wash-fold batches) using a flexible 12-column layout with 16px (`1rem`) gutters. The right pane is pinned at a fixed 380px or 420px width, functioning as the persistent live cart, customer intake, and tender drawer.
- **Data & Fleet Density**: Table layouts implement dense 36px–40px row heights with 8px–12px horizontal cell padding to maximize visible orders on standard counter monitors (1920x1080 and 1366x768).
- **Responsive Adaptability**: Below 1024px, the layout reflows into a single-column stacked view where the persistent cart converts into a sticky bottom summary bar triggering a slide-over modal for checkout. Outer margins dynamically scale down from 24px on desktop to 12px on mobile devices.

## Elevation & Depth

Visual hierarchy is maintained through crisp structural borders, surface layering, and controlled, cool-tinted ambient drop shadows. Floating or fuzzy skeuomorphic shadows are prohibited to preserve an efficient enterprise feel.

- **Level 0 (Base Canvas)**: Background canvas (`#F8FAFC`) with zero elevation.
- **Level 1 (Operational Cards & Grid Tiles)**: Pure white `#FFFFFF` surface enclosed by a fine 1px border (`#E2E8F0`). Drop shadow: `0 1px 3px 0 rgba(3, 1, 100, 0.04), 0 1px 2px -1px rgba(3, 1, 100, 0.03)`.
- **Level 2 (Interactive Hover, Dropdowns & Action Bars)**: Applied when hovering garment cards, opening branch pickers, or elevating active cart items. Drop shadow: `0 4px 6px -1px rgba(3, 1, 100, 0.07), 0 2px 4px -2px rgba(3, 1, 100, 0.05)`. Border shifts to `#CBD5E1`.
- **Level 3 (Modals, Slide-over Drawers & POS Tender Dialogs)**: Overlaid against a 40% deep navy tinted backdrop (`rgba(3, 1, 100, 0.45)`). Drop shadow: `0 20px 25px -5px rgba(3, 1, 100, 0.12), 0 8px 10px -6px rgba(3, 1, 100, 0.08)`.

## Shapes

The design system employs a **Soft** shape archetype (`roundedness: 1`), keeping corner radii tightly disciplined between 4px (`0.25rem`) and 8px (`0.5rem`). This geometric precision reinforces the feel of automated machinery, organized industrial shelving, and clean laundry sorting bins.

- **Buttons, Inputs & Form Fields**: 6px (`rounded-md`) corner radius.
- **Cards, POS Service Tiles & Panels**: 8px (`rounded-lg`) corner radius.
- **Status Pills & Stage Trackers**: Fully pill-shaped (`9999px`) to immediately distinguish workflow statuses and laundry tag identifiers from standard rectangular containers and buttons.
- **Modals & Flyout Sheets**: 10px to 12px max to maintain structural authority.

## Components

### Buttons & Interactive Controls
- **Primary Buttons**: Filled with Royal Indigo (`#363199`) with white text. Hover transitions to Deep Midnight Navy (`#030164`). Height is 40px for desktop workflows, 48px for touch-enabled POS terminal actions. Focus states display an offset ring in `#363199` at 2px spacing.
- **Secondary Buttons**: White background, 1px border (`#CBD5E1`), text `#0F172A`. Hover shifts to `#F8FAFC` with a border of `#94A3B8`.
- **Destructive Actions**: Filled or ghost styles using `#EF4444` with matching focus rings for stain overrides or order cancellations.

### Workflow Status Pills & Micro-Badges
- Status pills reflect real-time production status using low-saturation pastel backgrounds coupled with dark, high-contrast text and a leading 6px colored dot:
  - *Intake / Tagged*: Slate background (`#F1F5F9`), text `#334155`.
  - *Washing / Processing*: Soft Teal tint (`#E0F2FE`), text `#0369A1`.
  - *Ready for Delivery / Pickup*: Emerald tint (`#ECFDF5`), text `#065F46`.
  - *Express / Urgent*: Lemon Gold tint (`#FEF9C3`), text `#854D0E`, with an optional pulsing dot.

### Garment & Service Selection Tiles (POS)
- Compact cards (height ~90px–110px) with subtle 1px border (`#E2E8F0`), featuring garment icon, title, unit price, and standard turnaround estimate. When selected, the card gains a 2px outline in `#363199` and an accent check badge on the top right.

### Input Fields & Barcode Intake
- Single-line fields feature 38px heights, 1px slate borders (`#CBD5E1`), and inset padding of 12px. Input fields designated for barcode/scanner listeners feature an integrated barcode glyph and an active cyan pulse animation when receiving automated serial streams.

### POS Order Cart List
- Split-row line items displaying item count, sub-tags (e.g., "Heavy Starch", "Cold Wash", "Silk Delicate"), itemized weights/prices, and inline increment/decrement steppers. Every item includes an actionable defect/tag icon button to record rips, missing buttons, or stains before laundering.

### Branch Switcher & Multi-Unit Header
- A compact top-level control featuring branch identity, current terminal ID, drawer cash state, and online sync status. Utilizes a segmented dropdown with quick switching between processing hubs and pickup retail depots.