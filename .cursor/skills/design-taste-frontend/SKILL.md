---
name: design-taste-frontend
description: Apply high-taste visual design when building or styling frontend UI with React and Tailwind CSS. Covers layout, spacing, typography, color, hierarchy, depth, motion, and polish. Use when creating components, pages, or screens; restyling existing UI; choosing colors, fonts, or spacing; or when the user mentions design, aesthetics, polish, "make it look good", or UI/UX quality.
---

# Frontend Design Taste (React + Tailwind)

Build interfaces that look intentional, calm, and premium. Default to restraint: most "ugly" UI comes from too much (too many colors, weights, borders, shadows, sizes), not too little. The goal is hierarchy and clarity, not decoration.

## Operating principles

1. **Hierarchy first.** Every screen has exactly one primary action and one focal point. Size, weight, and color earn attention — spend them deliberately.
2. **Systematize, don't improvise.** Use a fixed spacing scale, a small type scale, and a constrained palette. Repetition reads as "designed."
3. **Whitespace is a feature.** When unsure, add space, not elements. Generous padding signals quality.
4. **Borrow taste.** Match the polish of Linear, Vercel, Stripe, and Apple: neutral grounds, one accent, soft depth, crisp type.

## Spacing

- Use a 4px base scale only: Tailwind `1, 2, 3, 4, 6, 8, 12, 16, 24` (4–96px). Avoid arbitrary values.
- Space scales with element importance: section gaps > card gaps > element gaps. Outer padding ≥ inner gaps.
- Group related items tightly; separate unrelated groups generously (proximity = relationship).
- Section rhythm: `py-16 md:py-24` between major page sections; `gap-6`/`gap-8` within content.

## Typography

- One typeface for UI is plenty (e.g. Inter, Geist). Add a second only for display contrast, never more.
- Limit to ~4 sizes on a screen. Suggested scale: `text-sm` (meta), `text-base` (body), `text-xl`/`text-2xl` (headings), `text-4xl`+ (hero).
- Two weights carry most UI: `font-normal` for body, `font-semibold` for emphasis/headings. Avoid `font-bold` everywhere.
- Body text: `leading-relaxed`, measure capped at `max-w-prose` (~65ch). Headings: `tracking-tight`, `leading-tight`.
- Mute secondary text with color (`text-muted-foreground` / `text-neutral-500`), not smaller fonts alone.

## Color

- Build on neutrals (white/zinc/slate). Reserve **one** accent for primary actions and key highlights.
- Use opacity and tint over many discrete colors: `bg-primary/10`, `border-black/5`.
- State colors only for state: green=success, amber=warning, red=destructive. Never decorative.
- Ensure WCAG AA contrast (4.5:1 body text). Don't put light gray text on white.
- Support dark mode via tokens/`dark:` from the start; don't hardcode `#fff`/`#000`.

## Depth & borders

- Prefer soft, low shadows for elevation: `shadow-sm`/`shadow-md`. Avoid heavy `shadow-2xl` except deliberate modals/popovers.
- Borders should whisper: `border border-black/5` or `border-neutral-200`. One separation cue per edge — border OR shadow OR background change, rarely all three.
- Consistent radius: pick one (`rounded-lg` or `rounded-xl`) and apply it across cards, inputs, buttons.

## Layout

- Constrain content width (`max-w-5xl`/`max-w-6xl mx-auto`) with responsive padding (`px-4 sm:px-6 lg:px-8`).
- Use a real grid; align everything to a consistent column structure. Optical alignment beats accidental misalignment.
- Mobile-first: design the small screen, then enhance with `sm:`/`md:`/`lg:`. Tap targets ≥ 40px.
- Avoid full-bleed text; let line length breathe.

## Motion

- Motion clarifies, never decorates. Animate `opacity` and `transform` only (GPU-friendly).
- Durations: 150–250ms for UI feedback; ease-out for entrances. Use `transition-colors`/`transition-transform`.
- Always add hover/focus/active states for interactive elements; visible focus rings for accessibility (`focus-visible:ring-2`).
- Respect `prefers-reduced-motion`.

## Component defaults

- **Buttons:** clear primary (filled accent) vs secondary (subtle/ghost) vs tertiary (text). One primary per view. Comfortable padding (`px-4 py-2`), `font-medium`.
- **Cards:** padding `p-6`, subtle border + `shadow-sm`, consistent radius. Don't nest cards in cards.
- **Forms:** label above input, generous height (`h-10`+), clear focus state, inline validation, helper text in muted color.
- **Empty states:** never show a blank box — add an icon, one line of guidance, and the primary action.
- **Icons:** one icon set (e.g. lucide-react), consistent stroke and size (`size-4`/`size-5`), aligned to text baseline.

## Workflow

When building or restyling UI:

1. Identify the one primary action and the visual focal point.
2. Establish layout: container width, grid, section rhythm.
3. Apply the type scale (≤4 sizes, 2 weights) and neutral + single-accent palette.
4. Add depth sparingly (one cue per edge) with a consistent radius.
5. Add interactive states (hover/focus/active) and restrained motion.
6. Run the self-review checklist below; cut anything that doesn't earn its place.

## Self-review checklist

```
- [ ] Exactly one clear primary action / focal point per view
- [ ] Spacing uses the 4px scale; no random arbitrary values
- [ ] ≤4 font sizes and ≤2 weights on the screen
- [ ] Neutral base + a single accent; state colors only for state
- [ ] One separation cue per edge (not border + shadow + bg together)
- [ ] Consistent corner radius everywhere
- [ ] All interactive elements have hover + focus-visible states
- [ ] Text meets AA contrast; works in dark mode
- [ ] Mobile layout verified; tap targets ≥40px
- [ ] Nothing decorative that doesn't aid hierarchy or usability
```

## Anti-patterns

- Multiple competing primary buttons or accent colors.
- Stacking border + shadow + background as redundant dividers.
- Center-aligning long paragraphs or whole forms.
- Pure black (`#000`) on pure white; harsh full-saturation colors as large fills.
- Inconsistent radii, mixed icon sets, or 5+ font sizes.
- Animating layout-triggering properties (width/height/top/left) or gratuitous bounce.
