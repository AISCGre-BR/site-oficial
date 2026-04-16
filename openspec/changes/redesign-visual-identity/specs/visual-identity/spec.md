## ADDED Requirements

### Requirement: Brand-aligned color palette
The system SHALL expose a cohesive palette as CSS custom properties at `:root`, using these exact values: `--cream: #f6f1e7` (background), `--cream-deep: #ece3d0` (alt background), `--ink: #222222` (primary text, matches brand logo black), `--ink-soft: #3d342a` (secondary text), `--ink-muted: #7a6a58` (tertiary text/captions), `--rule: #d4c7ae` (borders), `--rule-soft: #e5dcc6` (subtle dividers), `--rubric: #a02531` (matches official AISCGre brand red), `--rubric-soft: #b93744` (hover/disabled variant).

#### Scenario: Hardcoded colors are absent from components
- **WHEN** a developer reviews any component CSS
- **THEN** no hex, rgb, or named color literal appears outside the `:root` token declarations; every color reference is a `var(--*)` call.

#### Scenario: Palette matches brand
- **WHEN** the computed background of `body` and the primary accent used for links/rubrics are sampled
- **THEN** background equals `#f6f1e7` and accent equals `#a02531`, matching the logo SVGs provided by AISCGre.

### Requirement: Red is used only for structural-semantic purposes
The rubric red (`--rubric`) SHALL be used exclusively for: (a) rubric-style section labels (small caps), (b) section-label square ornaments (8x8 filled square preceding labels), (c) active/hover state on navigation and links, (d) CTA arrow glyph, (e) H2 square ornaments on long-form articles, (f) first-letter capitular on long-form prose, (g) accent in selection, (h) date chips on editorial lists. It MUST NOT be used for decorative fills, full borders, body text, large icon fills, or background panels.

#### Scenario: Rubric red never fills a body paragraph
- **WHEN** any `<p>` of body prose is inspected
- **THEN** its computed `color` is never equal to `--rubric`.

#### Scenario: Rubric red is used on structural signifiers
- **WHEN** the active nav link, a section label, and the H2 ornament on `/sobre` are inspected
- **THEN** each uses `--rubric` as color or background.

### Requirement: Typography uses Source Serif 4 as the single family
The site SHALL load Source Serif 4 (variable, with italic) as the single type family for headings, body, display and labels. Fallback stack SHALL be `"Charter", "Iowan Old Style", Georgia, serif`. No other webfont is loaded. Base body size is 18px (`1.125rem`), base line-height 1.65, base weight 400. Display sizes use `clamp()` to remain readable down to mobile (see Typography scale requirement).

#### Scenario: Only Source Serif 4 is fetched
- **WHEN** the page is loaded
- **THEN** no `@font-face` or `<link>` loads a font other than Source Serif 4.

#### Scenario: Body reads at comfortable size
- **WHEN** a reader loads a desktop viewport ≥ 1024px
- **THEN** body `font-size` is `1.125rem` (18px) and `line-height` is `1.65`.

### Requirement: Typography scale
The system SHALL define a bounded type scale via `clamp()` ensuring minimum/maximum legible sizes across viewports. Hero H1: `clamp(2.5rem, 5.5vw, 4.75rem)`. Article H1: `clamp(2rem, 3.5vw + 1rem, 3.75rem)`. Section H2: `clamp(1.75rem, 1.8vw + 1rem, 2.5rem)`. Article H2 (long-form): `clamp(1.35rem, 1vw + 1rem, 1.7rem)`. Body text maintains 18px at ≥768px and gracefully reduces on narrow viewports via defaults.

#### Scenario: Scale responds to viewport
- **WHEN** the viewport shifts from 1440px to 390px
- **THEN** hero H1 scales monotonically between the specified max and min without overflow.

### Requirement: Small caps treatment for structural labels
Navigation items, section labels, eyebrow/kicker copy, date chips, and meta labels SHALL render in lowercase with `font-feature-settings: "smcp" on, "c2sc" on`, `text-transform: lowercase`, and `letter-spacing` between `0.14em` and `0.22em`. These serve as the "rubric" gesture without imitating medieval blackletter.

#### Scenario: Nav links render as small caps
- **WHEN** the top nav is inspected
- **THEN** each link uses small caps (`smcp`) and lowercase transform.

### Requirement: Spacing scale
The system SHALL define a rhythm via CSS tokens `--s-1` through `--s-9` (0.25rem, 0.5rem, 1rem, 1.5rem, 2.25rem, 3.5rem, 5.5rem, 8rem, 12rem). Components MUST use these tokens for padding/margin/gap; arbitrary values are not permitted except for fine-tuning internal component detail (under 8px).

#### Scenario: Section padding uses the scale
- **WHEN** a `.section` is inspected
- **THEN** its top/bottom padding equals `var(--s-8)` (8rem).

### Requirement: Ornament is confined to thresholds
Decorative/ornamental elements (abstract marks, quote pauses, dark-background sections, framed plates, capitulars) SHALL only appear at *thresholds*: hero composition, chapter pauses, section openers, and the first paragraph of a long-form article. They MUST NOT be scattered across body content, background surfaces, or repeated as texture. Textured/patterned backgrounds, faux parchment, pseudo-medieval icons, and blackletter lettering are forbidden.

#### Scenario: No background texture
- **WHEN** the `background` and `background-image` of any full-width surface are inspected
- **THEN** the value is a solid color (`--cream`, `--cream-deep`, or `--ink`) and never a raster texture or repeating pattern.

#### Scenario: Threshold moments are bounded per page
- **WHEN** the home page is loaded
- **THEN** there is exactly one hero plate, at most one `.threshold` dark-background pause per top-level flow, and one capitular (`::first-letter`) per long-form article.

### Requirement: Logo system uses official AISCGre assets
The site SHALL include the official logos provided by AISCGre in `docs/.vitepress/public/brand/`, with the following files available: `logo.svg` (full horizontal, positive), `logo-compact.svg` (square, positive), `logo-mono.svg` (monochromatic), `logo-negative.svg` (for dark backgrounds), `logo-compact-negative.svg`, `icon.svg` (pictographic mark only, positive), `icon-negative.svg`. The compact/icon variants are used in nav and footer; full logo is used on emphatic contexts (e.g., PDF exports, social cards). Logos MUST NOT be recolored, stretched, or combined with textual marks other than those already engraved in the original files.

#### Scenario: Nav uses the compact icon
- **WHEN** the top nav is rendered
- **THEN** the element with class `.brand__mark` loads `/brand/icon.svg` and renders at 40px × 40px.

#### Scenario: No logo recoloring via CSS
- **WHEN** any stylesheet is inspected
- **THEN** no rule applies `filter`, `fill` override, or `color` to logo SVG paths.

### Requirement: Image usage rules
Content imagery (photos of scholas, manuscripts, events) SHALL be treated as figures with captions, enclosed in framed plates (`.plate` or `.gallery__frame`) on `--cream-deep` with a `--rule` border. Full-bleed hero background images are prohibited. Background photography is prohibited. When no real photograph is available, a custom SVG illustration in the palette tokens is used as placeholder — never stock imagery of pseudo-medieval aesthetic.

#### Scenario: Gallery tile uses framed treatment
- **WHEN** a `.gallery__item` is inspected
- **THEN** it contains a `.gallery__frame` with aspect ratio 4:3, `--cream-deep` background, and `--rule` border, followed by a `<p class="gallery__caption">`.

### Requirement: Motion respects reduced-motion
All entrance/interaction animations SHALL be disabled or reduced to ≤1ms when `@media (prefers-reduced-motion: reduce)` is set. Entrance animations on the hero MUST stagger by at least 120ms between elements and complete within 1500ms after page load. Hover transitions MUST complete within 260ms.

#### Scenario: Reduced motion disables entrance animations
- **WHEN** a user with `prefers-reduced-motion: reduce` loads the home page
- **THEN** the hero elements appear immediately without `rise` animation duration exceeding 1ms.

### Requirement: Contrast meets WCAG AA
All text/background pairings in the system SHALL achieve a minimum contrast ratio of 4.5:1 for body and small text, and 3:1 for large text (≥18.66px bold or ≥24px regular). The required pairings are: `--ink` on `--cream`, `--ink-soft` on `--cream`, `--rubric` on `--cream`, `--cream` on `--ink` (threshold), `--rubric-soft` on `--ink` (threshold kicker).

#### Scenario: Body text meets AA
- **WHEN** contrast ratio is computed between `--ink` (#222222) and `--cream` (#f6f1e7)
- **THEN** the ratio is ≥ 4.5:1.

#### Scenario: Rubric on cream meets AA for small text
- **WHEN** contrast ratio is computed between `--rubric` (#a02531) and `--cream` (#f6f1e7)
- **THEN** the ratio is ≥ 4.5:1.
