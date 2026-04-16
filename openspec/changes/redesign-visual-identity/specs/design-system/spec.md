## ADDED Requirements

### Requirement: Sticky top navigation
The site SHALL provide a sticky top navigation bar fixed at viewport top (`position: sticky; top: 0`). It contains the brand (compact icon + textual wordmark with seção-brasileira subtitle) on the left, and up to 7 navigation links on the right rendered in small caps. Background is semi-translucent `--cream` with backdrop blur (`backdrop-filter: blur(8px)`) and a 1px bottom rule. Active link receives `--rubric` color and a 1px `--rubric` underline.

#### Scenario: Nav persists while scrolling
- **WHEN** the user scrolls past the hero
- **THEN** the `.nav` element remains visually pinned at the top.

#### Scenario: Active link is visually marked
- **WHEN** a nav `<a>` has `aria-current="page"`
- **THEN** its color is `--rubric` and its border-bottom is 1px solid `--rubric`.

#### Scenario: Responsive stacking on narrow viewports
- **WHEN** viewport width ≤ 720px
- **THEN** brand and nav links stack vertically and brand subtitle hides.

### Requirement: Hero with split composition
The home page SHALL present a hero with a two-column composition on viewports ≥ 900px: left column contains kicker (small-caps eyebrow), H1 with a rubric-colored first letter span (`.rubric-initial`), a dek paragraph, and two CTAs (primary + ghost). Right column contains a `.hero__figure` with a framed `.plate` rendering an SVG composition and a `.plate__caption`. Below 900px, the grid collapses to a single column with figure below text.

#### Scenario: Plate renders as a framed figure
- **WHEN** the hero is rendered
- **THEN** `.plate` has `background: var(--cream-deep)`, 1px `--rule` border, and thin rubric accent rules at top and bottom interior.

#### Scenario: Entrance animation staggers hero elements
- **WHEN** the home page loads without `prefers-reduced-motion`
- **THEN** kicker, title, dek, meta, and figure fade and rise in sequence with at least 120ms between each.

### Requirement: Threshold pause section
The design system SHALL provide a `.threshold` component rendering a full-width dark-background pause: `background: var(--ink)`, `color: var(--cream)`, centered max-width 52rem inner container, a pre-quote kicker in small caps `--rubric-soft`, a large italic-accented blockquote, and 48px × 1px `--rubric` horizontal rules above and below the quote. This component is used sparingly — at most one per top-level flow — and marks a dramatic chapter pause in the scroll rhythm.

#### Scenario: Threshold renders inverted colors
- **WHEN** a `.threshold` section is rendered
- **THEN** its computed background equals `--ink` and its quote text color equals `--cream`.

#### Scenario: Rubric rules frame the quote
- **WHEN** a `.threshold` is inspected
- **THEN** decorative 48px horizontal rules appear above and below `.threshold__quote`, each using `--rubric` background.

### Requirement: Section primitive with rubric label
The design system SHALL provide a `.section` primitive composed of a 2-column grid (minmax(0, 18ch) on the left for the label, fractional on the right for body), gapped by `--s-6` horizontally. Each section MUST have a `.section__label` in small caps `--rubric` with a 8x8 rubric-red square marker positioned to its left. Section body is a `.section__body` containing an H2, prose, and optional components (list, feature, gallery). Below 780px viewport, the grid collapses to one column.

#### Scenario: Section label carries rubric square
- **WHEN** any `.section__label` is rendered
- **THEN** an 8px × 8px `--rubric` square appears as `::before` pseudo-element positioned to its left.

#### Scenario: Alt-background variant
- **WHEN** a section has class `.section--alt`
- **THEN** its background is `--cream-deep`.

### Requirement: Editorial list
The design system SHALL provide an `.edlist` list component for news, courses, and people. Each `.edlist__item` is a row with three columns: date/label chip (small caps `--rubric`), title/name, and meta tag (small caps `--ink-muted`). Rows are separated by 1px `--rule-soft` borders and animate a subtle left-padding shift on hover. The title link hover renders a bottom-border growing from 0 → 100% width over 260ms. Below 680px, rows collapse to a vertical stack.

#### Scenario: Hover grows underline animation
- **WHEN** the user hovers an `.edlist__title a`
- **THEN** a `--rubric` underline grows from 0 to full width of the link over ~260ms.

#### Scenario: People variant smaller date chip
- **WHEN** a list has class `.edlist--people`
- **THEN** its date chip font-size is reduced and letter-spacing is `0.18em` to accommodate role labels rather than dates.

### Requirement: Gallery with framed tiles
The design system SHALL provide a `.gallery` grid rendering 3 columns on desktop (4:3 aspect ratio tiles), collapsing to 1 column below 780px. Each `.gallery__item` contains a `.gallery__frame` (border `--rule`, background `--cream-deep`, contains SVG or `<img>`) and a `.gallery__caption` with date chip and descriptive text. On hover, the frame border transitions to `--rubric`.

#### Scenario: Frame hover transitions border color
- **WHEN** the user hovers a `.gallery__item`
- **THEN** the `.gallery__frame` border-color transitions to `--rubric` within 220ms.

### Requirement: Feature callout
The design system SHALL provide a `.feature` component for highlighted items (next course, featured publication). It uses a 1px `--ink` top border and a 1px `--rule` bottom border to signal prominence, with a kicker, title, meta grid (date/location/status with small-caps strong labels), and a primary CTA.

#### Scenario: Feature borders signal prominence
- **WHEN** a `.feature` is rendered
- **THEN** its top border is 1px solid `--ink` and bottom border is 1px solid `--rule`.

### Requirement: Footer
The design system SHALL provide a `.foot` component with `--cream-deep` background, 1px `--rule` top border, containing: (a) brand icon, (b) meta paragraph (name, description, contact), (c) colophon in small caps. Uses a 3-column grid at ≥720px, collapses to 1 column below.

#### Scenario: Colophon right-aligns on desktop
- **WHEN** viewport ≥ 720px
- **THEN** `.foot__colophon` is right-aligned in its grid cell.

### Requirement: Long-form article layout
The design system SHALL provide an `.article` layout for content pages. It consists of: `.article__header` with eyebrow (small caps `--rubric`) and large H1; `.article__body` with a left `.article__rail` (~18ch) containing ficha/metadata entries and a right `.article__prose` (max 38rem) for reading. Prose styling: 1.18rem font-size, 1.72 line-height, first-letter capitular in `--rubric` at 4.2em float-left on the first paragraph, H2 with rubric square pseudo-element, blockquote with left `--rubric` border.

#### Scenario: Capitular appears only on first paragraph
- **WHEN** the `.article__prose` is inspected
- **THEN** `::first-letter` styling applies only to the first `<p>` via `>p:first-of-type::first-letter`.

#### Scenario: Rail displays ficha entries
- **WHEN** an `.article__rail strong` is rendered
- **THEN** it appears as a small-caps `--rubric` label positioned above its associated value paragraph.

### Requirement: CTA button-link
The design system SHALL provide a `.cta` inline link variant with a bottom-border underline, a `--rubric` arrow glyph rendered via `::after`, gap between label and arrow that expands on hover, and a ghost variant `.cta--ghost` with no underline. All transitions complete within 220ms.

#### Scenario: Arrow translates on hover
- **WHEN** the user hovers a `.cta`
- **THEN** the arrow glyph translates 2px right and the gap grows from 0.75rem to 1.1rem.

### Requirement: VitePress theme integration
The design system SHALL be implemented as a VitePress custom theme at `docs/.vitepress/theme/` exporting a default theme object with `Layout` component, `enhanceApp` hook, and a CSS entry importing the token file and component sheets. The theme MUST preserve VitePress routing, frontmatter handling, and markdown rendering behaviors; it replaces only the presentation layer.

#### Scenario: VitePress dev server runs
- **WHEN** `npm run dev` is executed after the theme is in place
- **THEN** the dev server starts without errors and the home page renders the new hero, sections, and footer.

#### Scenario: Markdown content still renders
- **WHEN** a markdown file under `docs/` is opened in the dev server
- **THEN** its content renders with the new article layout and typography.
