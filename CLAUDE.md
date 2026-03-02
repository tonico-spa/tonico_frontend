# Tónico — Frontend

Landing page for **Tónico**, a Chilean indie game studio producing narrative adventure games with a Latin American identity. The first project is **El Ritual del Dr. Mortis / The Ritual of Dr. Mortis**.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.1.6 (App Router) |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (uses `@import "tailwindcss"`) |
| Node | via npm |

---

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

---

## Project Structure

```
tonico_frontend/
├── public/                        # Static assets (empty — add images here)
├── images/                        # User-provided images (empty placeholder)
├── landing.pdf                    # Original design reference
└── src/
    ├── app/
    │   ├── layout.tsx             # Root layout — loads Google Fonts
    │   ├── globals.css            # Global styles + CSS variables
    │   ├── page.tsx               # / — Language selection screen
    │   └── [lang]/
    │       ├── page.tsx           # /es  /en — Main landing page
    │       └── dr-mortis/
    │           └── page.tsx       # /es/dr-mortis  /en/dr-mortis — Biography page
    ├── components/
    │   ├── TonicLogo.tsx          # "Tónico" logotype with SVG flask replacing the ó
    │   ├── Navbar.tsx             # Fixed top navbar, bilingual, optional back button
    │   ├── Footer.tsx             # Footer with institutional logos, CTA, social icons
    │   └── ImagePlaceholder.tsx   # Gray placeholder used wherever real images go
    └── lib/
        └── content.ts             # All text content for ES and EN (single source of truth)
```

---

## Routes

| URL | Description |
|---|---|
| `/` | Language selection — full-screen dark navy, Tónico logo, Chilean/US flag circles |
| `/es` | Main landing in Spanish |
| `/en` | Main landing in English |
| `/es/dr-mortis` | Dr. Mortis biography page in Spanish |
| `/en/dr-mortis` | Dr. Mortis biography page in English |

All `[lang]` pages use `generateStaticParams` so they are statically generated at build time.

---

## Design System

### Colors (defined as CSS vars in `globals.css`)

| Variable | Value | Usage |
|---|---|---|
| `--background` | `#060b28` | Main page background (very dark navy) |
| `--foreground` | `#ffffff` | Default text |
| `--accent` | `#e91e8c` | Hot pink — CTAs, badges, highlights |

Secondary dark shades used inline:
- `#0d1145` — card/section backgrounds
- `#1a1f4e` — placeholder backgrounds, subtle borders
- `#2a3070` — border color
- `#3a4080` — muted icon/label color

### Fonts (loaded via `next/font/google` in `layout.tsx`)

| CSS Variable | Font | Usage |
|---|---|---|
| `--font-alfa` | Alfa Slab One | "Tónico" logo, footer CTA headings |
| `--font-outfit` | Outfit (300–800) | Body text, all headings, nav |
| `--font-creepster` | Creepster | "Dr. MORTIS" horror title on biography page |

Apply fonts via inline `style={{ fontFamily: "var(--font-xxx)" }}` on elements, or via `font-family` in globals.css.

---

## Bilingual Content

All text lives in `src/lib/content.ts` as a `content` object with `es` and `en` keys. The exported `Lang` type is `"es" | "en"`.

```ts
import { content, type Lang } from "@/lib/content";
const t = content[lang]; // access ES or EN copy
```

Content covers:
- Navbar links
- Hero tagline + CTA
- Game info section (title, description lines, badge)
- About Mortis section (heading, text, CTA)
- Team member list (role + name)
- Footer copy
- Dr. Mortis biography page (intro, 3 article sections with paragraphs + image keys, Wikipedia attribution)

---

## Image Placeholders

Every image in the design is currently a gray placeholder rendered by `<ImagePlaceholder>`. To replace a placeholder with a real image:

1. Add the image file to `public/` (e.g. `public/hero-bg.jpg`)
2. Replace `<ImagePlaceholder>` with Next.js `<Image>` from `next/image`
3. Use `fill` for full-width/full-height sections, or explicit `width`/`height` for fixed sizes

### Placeholder map

| Location | Label in placeholder | Suggested filename |
|---|---|---|
| Hero background | "Hero — Woman at computer" | `hero-bg.jpg` |
| Game art banner | "Game Art Banner — Dr. Mortis atmospheric scene" | `game-banner.jpg` |
| Video thumbnail | "YouTube Video Thumbnail" | `video-thumb.jpg` |
| Scene 1 | "Game Scene — Library interior" | `scene-library.jpg` |
| Scene 2 | "Game Scene — Street/outdoor scene" | `scene-street.jpg` |
| About Mortis | "Book Cover — Mortis: Eterno Retorno" | `mortis-book.jpg` |
| Team avatars (×8) | Circular avatar placeholders | `team-[name].jpg` |
| Bio page — radio photo | "Radio actors — historical photo" | `radio-actors.jpg` |
| Bio page — comics (×3) | "Comic cover 1/2/3" | `comic-cover-1.jpg`, etc. |
| Bio page — Eterno Retorno (×3) | "Mortis: Eterno Retorno cover 1/2/3" | `mortis-eterno-1.jpg`, etc. |
| Footer — Ministry logo | Institutional logo box | `ministerio-logo.png` |

---

## Components

### `TonicLogo`
```tsx
<TonicLogo size="sm" | "lg" href="/es" />
```
Renders the "Tónico" wordmark with a custom SVG flask (with pink liquid) replacing the `ó`. Uses `Alfa Slab One` font. Pass `href=""` to render without a link.

### `Navbar`
```tsx
<Navbar lang="es" | "en" showBack={false} />
```
Fixed top bar. When `showBack={true}` (Dr. Mortis page), adds a `← Volver / ← Return` link in pink on the left side of the nav links.

### `Footer`
```tsx
<Footer lang="es" | "en" />
```
Three-column layout: institutional logos + funding text (left), large CTA text with pink highlight + social icons (center), spacer (right). Has `id="contacto"` for anchor nav.

### `ImagePlaceholder`
```tsx
<ImagePlaceholder label="Description" aspectRatio="aspect-video" className="..." />
```
Dark navy box with a dashed border, image icon, and uppercase label. Pass `aspectRatio=""` and control height via `className` for full-bleed sections.

---

## Landing Page Sections (`/[lang]/page.tsx`)

1. **Hero** — Full viewport, image background with gradient overlay, large bold tagline, pink CTA button linking to `#proximo`
2. **Game Info** (`#proximo`) — Dark section, centered title + description lines + animated badge with down arrow
3. **Full-width Game Art Banner** — `aspect-[16/7]` image placeholder
4. **Video Section** — YouTube-style player placeholder with pink play button overlay
5. **Scene Images** — Two `aspect-[21/9]` full-width scene placeholders
6. **About Mortis** — Two-column: book cover (left) + heading/text/CTA button linking to `/{lang}/dr-mortis` (right)
7. **Team** (`#equipo`) — 4-column grid (2 rows × 4 members), circular avatars with role label in pink and name in white
8. **Footer** (`#contacto`)

---

## Biography Page Sections (`/[lang]/dr-mortis/page.tsx`)

1. **Navbar** with back arrow (← Volver / ← Return)
2. **"Dr. MORTIS" title** — Large, red, using Creepster font with CSS drop shadow glow
3. **Intro paragraph** — All-caps small text summarizing the character
4. **TRAYECTORIA heading** — Pink uppercase section divider
5. **Section 1** — Radio theater origins: two-column text+image layout, aside text, full-width continuation
6. **Section 2** — Comics leap: text paragraphs + 3-column image grid
7. **Section 3** — Resurgence: text paragraphs + 3-column image grid
8. **Bottom nav row** — Back link (left) + Wikipedia attribution button (right)
9. **Footer**

---

## What Was Built (Session Log)

The entire project was built from scratch in a single session based on a PDF design (`landing.pdf`).

- Initialized Next.js 16 + TypeScript + Tailwind v4 + App Router
- Recreated 5 design screens from the PDF:
  - Language selection screen (page 1 of PDF)
  - Spanish main landing (page 2)
  - English main landing (page 3)
  - Spanish Dr. Mortis biography (page 4)
  - English Dr. Mortis biography (page 5)
- All images left as labeled gray placeholders for manual replacement
- Bilingual routing via `[lang]` dynamic segment with static generation
- Fonts identified from the PDF: Alfa Slab One (logo), Outfit (body), Creepster (horror title)
- Color palette extracted from the PDF: dark navy `#060b28`, hot pink `#e91e8c`
- Custom SVG Chilean and US flags drawn inline for the language selector
- Custom SVG flask drawn inline for the Tónico logo
