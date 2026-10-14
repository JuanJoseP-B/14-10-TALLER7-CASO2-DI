# DAKINGO — Pixel-Perfect Design Spec (Home Page)

> **Objective for the AI IDE (Antigravity):** recreate the reference image EXACTLY as a static visual structure (HTML + CSS, no backend logic). Use this document as the single source of truth. Do not add sections, change order, or "improve" the design.
>
> **Reference image:** 768 × 1344 px. **Build target:** desktop at **2× scale** → all measurements below are already multiplied ×2 (reference px × 2). The design card is **1356 px wide**, centered on a page of **1536 px** wide.
>
> **Typos in the mockup:** the image contains AI-generated typos ("Chroctate", "Occaions", "Wark", "Cbesda"…). Section 9 lists the **corrected copy** to use. If you need it 100% identical including errors, use the "literal" column.

---

## 0. Stack (MANDATORY)

- **Next.js (App Router, latest stable) + TypeScript + Tailwind CSS v4.** No other UI or CSS libraries (no Bootstrap, MUI, shadcn, styled-components, CSS modules).
- Tokens from section 1 go into `app/globals.css` with Tailwind v4 `@theme` (colors `--color-*`, radius `--radius-*`, shadows `--shadow-*`, fonts `--font-*`) so utilities like `bg-primary`, `rounded-card`, `shadow-card`, `font-display` exist. Avoid arbitrary values `[...]` except for one-off decorative positions (bubbles).
- Fonts with **`next/font/google`** (not `<link>`): `Poppins` (400, 500, 600, 700, 800) and `Dancing Script` (500), exposed as CSS variables.
  - Headings, logo, hero title: Poppins 700/800. Body/UI: Poppins 400/500. Script accent ("Special Offer!", swash): Dancing Script.
- Icons: **`lucide-react`**, stroke 2, maroon (Cake, Truck, ShoppingCart, Search, User, Heart, Plus, ChevronDown, Ticket, CircleHelp…).
- Images: **`next/image`** with `fill` + `object-cover` + `sizes` inside relatively positioned wrappers; files in `/public/images/...` (section 10). `priority` only on the hero main image.
- Static page: Server Components by default. `"use client"` ONLY for the mobile menu (hamburger toggle).
- All content (nav, products, stats, gallery, footer links) lives in `lib/data.ts` and is rendered with `.map()`, never hardcoded repeatedly.

---

## 1. Design tokens

```css
:root {
  /* Colors */
  --page-bg:        #F6E7D3;  /* cream outside the card */
  --card-bg:        #FBEDEA;  /* light pink of the main card */
  --panel-bg:       #FDF3F1;  /* content panel overlapping the hero */
  /* In Tailwind v4 declare these inside @theme as --color-page, --color-card,
     --color-panel, --color-primary, etc. → bg-page, bg-card, bg-panel, text-primary */
  --surface:        #FFFFFF;  /* white cards */
  --surface-tint:   #FCE9E7;  /* light pink boxes (Promise, Ticket, Social) */
  --primary:        #A3262F;  /* maroon: buttons, titles, logo */
  --primary-dark:   #8A1E26;  /* hover / banner bottom */
  --primary-soft:   #F3D3D1;  /* icon circles in the Menu section */
  --hero-from:      #E8838A;  /* hero gradient, left side */
  --hero-to:        #A82A33;  /* hero gradient, right side */
  --text-strong:    #9E2A2B;  /* maroon headings */
  --text-body:      #5B3A3A;  /* body text */
  --text-muted:     #8C7472;  /* secondary text, footer */
  --star:           #E8A93B;  /* rating stars */
  --border:         #EBD3D0;  /* fine dividers / input borders */
  --white:          #FFFFFF;

  /* Radii */
  --r-card:   36px;   /* outer card */
  --r-xl:     48px;   /* white content panel */
  --r-lg:     24px;   /* product cards, boxes */
  --r-md:     20px;   /* gallery photos */
  --r-pill:   999px;  /* buttons, inputs */

  /* Shadows */
  --shadow-card:  0 8px 24px rgba(163, 38, 47, 0.08);
  --shadow-soft:  0 4px 14px rgba(163, 38, 47, 0.10);
  --shadow-page:  0 20px 60px rgba(120, 60, 40, 0.12);
}
```

### Type scale (at 2× scale)

| Token | Usage | Size / line-height | Weight | Color |
|---|---|---|---|---|
| `logo` | "Dakingo" header & footer | 44px / 1 | 800 | --primary |
| `hero-title` | DECADENT CHOCOLATE BLISS! | 60px / 1.05, letter-spacing 1px, UPPERCASE | 800 | white |
| `hero-sub` | Satisfy Your Sweet Cravings | 34px / 1.2 | 400 | white |
| `h2` | Menu / Our Promise | 48px / 1.1 | 800 | --primary |
| `h3` | Bestsellers from Across the Country | 30px / 1.2 | 700 | --primary |
| `banner` | Dakingo – Your Trusted… | 32px / 1.2 | 700 | white |
| `nav` | top menu items | 20px | 500 | --primary |
| `body` | descriptions | 20px / 1.4 | 400 | --text-body |
| `card-title` | product name | 20px / 1.25 | 500 | --primary |
| `small` | prices, labels, footer | 16–18px | 500 | --text-muted |
| `btn` | buttons | 20px, UPPERCASE | 700 | white |

---

## 2. Global layout

```
<body>  bg: --page-bg, padding: 44px 0
  .page-card  width 1356px, margin 0 auto, bg --card-bg, radius --r-card,
              overflow hidden, shadow --shadow-page
     1. header (topbar)          height ~88px
     2. nav (categories)         height ~84px
     3. hero                     height ~470px  (red/pink gradient)
     4. .content-panel (white/pink with large top radius, OVERLAPS the hero ~150px)
          4a. Menu
          4b. Bestsellers
          4c. Our Promise (2 columns)
          4d. Red banner
     5. footer
```

Approximate vertical positions in the reference image (×2 = real px):

| Section | Ref Y (img) | Real Y (×2) |
|---|---|---|
| Card start | 22 | 44 |
| Header | 22–66 | 44–132 |
| Nav | 66–108 | 132–216 |
| Hero | 108–412 | 216–824 |
| White panel starts (overlaps the hero) | 342 | 684 |
| Menu | 360–455 | 720–910 |
| Bestsellers title | 488 | 976 |
| Product cards | 518–656 | 1036–1312 |
| VIEW ALL | 668–692 | 1336–1384 |
| Our Promise | 700–745 | 1400–1490 |
| Promise columns | 767–1130 | 1534–2260 |
| Red banner | 1160–1214 | 2320–2428 |
| Footer | 1230–1320 | 2460–2640 |
| Card end | 1330 | 2660 |

Horizontal inner padding of the card: **~80px** (40 ref) on each side → usable content width ≈ **1196px**.

> **Important — fixed vs. fluid:** every pixel value in sections 3–7 is the **desktop reference at ≥1440px viewport**. Implement them as `max-w-*` / fluid widths (`w-full max-w-[1356px] mx-auto`), grids and `aspect-*`, NEVER as fixed widths that cause horizontal scroll. Pixel-perfect is validated only at **1536px** viewport; other breakpoints follow section 12.

---

## 3. Header (topbar)

- Height 88px, bg `--card-bg`, bottom border 1px `--border`.
- `display:flex; align-items:center; justify-content:space-between; padding: 0 80px`.
- **Left:** logo "Dakingo" (logo token).
- **Right** (gap 24px):
  - **Search input:** width 340px, height 46px, radius pill, bg white, border 1.5px `--primary`. Left magnifier icon (18px, `--text-muted`), placeholder "Search" (18px, `--text-muted`). At the right end, a **40px maroon circle** (`--primary`) with a white chevron/user icon inside (small "≡/⌄" in the mockup).
  - **Cart:** cart icon 24px `--primary` + text "Login/Signup" 18px `--primary` 500, gap 10px.

---

## 4. Nav (categories)

- Height 84px, `padding: 0 80px`, flex, `justify-content: space-between`, `align-items:center`.
- Items (20px, 500, `--primary`): **Cakes · Theme Cakes · Desserts · Birthday · Hampers · Anniversary · Occasions · Occasions** (yes, "Occasions" appears twice in the mockup).
- Right end: **"ORDER NOW" button** → height 48px, padding 0 28px, radius pill, bg `--primary`, white text, 20px/700 uppercase.

---

## 5. Hero

- Height 608px (incl. the part covered by the panel). Visible area above the panel ≈ 470px.
- Background: `linear-gradient(100deg, var(--hero-from) 0%, #D45A62 35%, var(--hero-to) 100%)`.
- **Decorative bubbles:** 5–6 circles `rgba(255,255,255,0.10)` with different diameters (60–200px), e.g. top-center (x≈640, y≈0, Ø120), right (x≈1260, y≈200, Ø60), bottom-left (x≈150, y≈520, Ø80), bottom-right large (x≈1240, y≈560, Ø200).
- **Main image (left):** circle Ø **400px**, white border **10px**, shadow `0 10px 30px rgba(0,0,0,.25)`. Position: left 92px, top 36px from hero start. Photo: chocolate cake with berries on top.
- **Center text block** (left ≈ 540px, top ≈ 90px):
  - "DECADENT / CHOCOLATE / BLISS!" in 3 lines, hero-title.
  - Thin white cursive swash/flourish to the right of "BLISS!" (SVG ~ 150×40, stroke 2px, opacity .8).
  - "Satisfy Your Sweet Cravings" hero-sub, margin-top 12px.
  - **Offer pill**: margin-top 36px. Pill bg `--primary-dark` (#8E1F28), height 64px, padding 0 32px, radius pill, text "SAVE 20%" 34px/800 white. Above-left, overlapping the pill, a small label "Special Offer!" in script/italic 16px white (`position:absolute; top:-12px; left:20px`).
- **Two small circular images (right):** Ø **184px** each, white border 8px, shadow. Right edge ≈ 150px from the card's right edge. Top one at y≈40 (lava cake / molten chocolate), bottom one at y≈260 (slice of chocolate cake).

---

## 6. Content panel (overlaps the hero)

- `margin-top: -140px` relative to the hero, `margin: 0 32px` horizontally (visible pink side gaps), bg `--card-bg` (slightly lighter: `#FDF3F1`), `border-radius: 48px 48px 0 0`, `padding: 40px 48px`, `position:relative; z-index:2`.

### 6a. Menu (2-column grid: 440px | rest)

- **Left:**
  - "Menu" h2.
  - "What will you wish for?" 20px `--text-body`, margin-top 6px.
  - 3 circles Ø **56px**, bg `--primary-soft`, maroon icon 24px (cake, cake slice, cup). gap 16px, margin-top 22px.
- **Right:** 4 white tiles, each **150×150px**, radius 24px, shadow `--shadow-card`, gap 24px, aligned right.
  - Maroon icon 56px centered (top), label below 16px/600 UPPERCASE `--primary`: **CLASSIC · GOURMET · DESSERTS · COOKIES**.

### 6b. Bestsellers

- Title h3 "Bestsellers from Across the Country", margin-top 56px.
- 4-column grid, gap 24px, margin-top 36px. Each **card 280×276px**, bg white, radius 24px, shadow `--shadow-card`, padding 18px.
  - Product image **without background** (PNG cutout), centered, height ~130px.
  - Small heart icon 18px `--primary` (filled) at the top-left of the text area.
  - Name: card-title, 2 lines.
  - Row: price "₹500" 18px/700 `--text-body` + 5 stars 14px `--star` + "(Reviews)" 14px `--text-muted`. Below: "★★★★★ 500" small.
  - **Add button**: circle Ø 28px `--primary`, white "+" / chevron icon, `position:absolute; right:18px; bottom:18px`.
- Products (in order):
  1. Rich Chocolate Truffle Cake — ₹500
  2. Choco Chip Truffle Cake — ₹509
  3. Tropical Fruit N Almond Cake — ₹509
  4. Rich Butterscotch Crunch Cake — ₹359
- **VIEW ALL** button: right-aligned, margin-top 24px, height 48px, padding 0 36px, pill, bg `--primary`, white text 18px/700.

### 6c. Our Promise

- h2 "Our Promise" + subtitle "There's no secret spell – only honest hard work!" (20px `--text-body`).
- Grid **2 columns: 540px | 1fr**, gap 60px, margin-top 40px.

**Left column (stacked boxes, gap 30px):**

1. **Stats box** — bg `--surface-tint`, radius 20px, padding 32px, height ~260px.
   - Centered title: "A glimpse into our sweet world!" 20px/600 `--primary`.
   - 4 columns: circle Ø 72px with 2px `--primary` border, maroon icon 32px; label below 15px/700 uppercase `--primary`, 2 lines:
     **ON-TIME DELIVERY · 5000+ DESIGNS · 2 CR+ ORDERS · BAKED FRESH**.
2. **Magical Ticket box** — bg `--surface-tint`, radius 20px, padding 32px, height ~290px. Flex row.
   - Left: golden ticket illustration (~150px) with confetti (pink, gold, blue).
   - Right: "THE MAGICAL TICKET" 28px/800 `--primary`; text "Add 3 reminders in your account. Win offers worth Rs. 750" 18px `--text-body`; **UNLOCK NOW** button (height 48px, pill, `--primary`, white text).
3. **Social box** — bg `--surface-tint`, radius 20px, height ~100px, padding 0 24px, flex center.
   - 5 circular avatars Ø 40px with 2px white border, overlapping −6px.
   - "Follow us on social!" 18px/500 `--text-body`, margin-left 40px.

**Right column — photo gallery:** grid 2×3, gap 18px, each photo **~288×224px**, radius 20px, `object-fit:cover`. Each photo has a small white caption at bottom-left (14px, text-shadow).
| Pos | Content |
|---|---|
| 1,1 | Tiered white cake with golden decoration, pink/warm background |
| 1,2 | Smiling woman holding a chocolate cake in a bakery |
| 2,1 | Couple celebrating with a two-tier cake ("With you we celebrate…") |
| 2,2 | Two young men with a cake, overlay text "Celebrate…" |
| 3,1 | Two bakers presenting a tiered pink cake |
| 3,2 | Tiered cake with flowers, overlay text "Special Celebration" |

### 6d. Red banner

- Full panel width (≈1196px), height 108px, radius 24px, bg `linear-gradient(90deg, #A3262F, #B7333B)`, margin-top 60px.
- Centered text banner-token: "Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration".

---

## 7. Footer

- bg `--card-bg`, padding 40px 80px 50px. Grid: `260px 1fr`.
- **Left:** logo "Dakingo" (40px) + vertical list 15px `--text-muted`, line-height 1.6: Our Story · Contact Us · Locate Us · Media · Careers.
- **Right:** 4 columns (gap 60px), header 14px/700 uppercase `--primary`, links 15px `--text-muted`:
  - **KNOW US:** Contact Us, Blog
  - **NEED HELP:** Cancellation And Refund, Privacy Policy
  - **MORE INFO:** Terms And Conditions, Customer Grievance
  - **MORE INFO:** Coupons & Offers, Download App
- **Newsletter row** (aligned under the columns, margin-top 30px): input "Enter Email Address" width 360px, height 50px, pill, white bg, border 1px `--border` + **SUBSCRIBE** button (height 50px, pill, `--primary`, white 18px/700), gap 12px.
- **Help widget** (bottom right): circle Ø 40px with 2px `--primary` border, down-arrow/info icon, and below "Hey, need any help?" 14px `--primary`.

---

## 8. Next.js project structure

```
app/
  layout.tsx            # next/font, <html lang="en">, body bg-page
  page.tsx              # composes the sections in order
  globals.css           # @import "tailwindcss"; @theme { tokens }
components/
  ui/Button.tsx         # variants: primary (pill maroon), size md/lg
  ui/SectionTitle.tsx
  layout/Header.tsx     # topbar + search + cart/login
  layout/CategoryNav.tsx# desktop links + mobile menu ("use client")
  layout/Footer.tsx
  home/Hero.tsx
  home/MenuSection.tsx
  home/ProductCard.tsx
  home/Bestsellers.tsx
  home/PromiseSection.tsx  # StatsBox, TicketBox, SocialBox, Gallery
  home/TrustBanner.tsx
lib/data.ts             # all copy & lists (typed)
public/images/...       # assets from section 10
```

`page.tsx` structure:

```tsx
<div className="min-h-screen bg-page py-0 lg:py-11">
  <div className="mx-auto w-full max-w-[1356px] overflow-hidden bg-card shadow-page lg:rounded-card">
    <Header /> <CategoryNav />
    <Hero />
    <main className="relative z-10 -mt-24 lg:-mt-36 mx-3 lg:mx-8 rounded-t-[32px] lg:rounded-t-[48px] bg-panel px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
      <MenuSection /> <Bestsellers /> <PromiseSection /> <TrustBanner />
    </main>
    <Footer />
  </div>
</div>
```

Semantics/accessibility: `<header>`, `<nav aria-label>`, `<main>`, `<section aria-labelledby>`, one `<h1>` (hero), `alt` on every image, buttons as `<button>` / links as `<Link>`, visible focus `focus-visible:ring-2 ring-primary`.

---

## 9. Copy (corrected vs. literal)

| Element | Corrected (use this) | Literal from the mockup |
|---|---|---|
| Nav item 7 | Occasions | Occaions |
| Hero label | Special Offer! | Speoial Offer! |
| Tile 2 | GOURMET | DOURMET |
| Product 1 | Rich Chocolate Truffle Cake | Rich Chroctate Truffle Truffle Cake |
| Product 2 | Choco Chip Truffle Cake | Checo Chip Truffle Cake Cake |
| Product 3 | Tropical Fruit N Almond Cake | Tropical Frutl N Almond Cake Cake |
| Product 4 | Rich Butterscotch Crunch Cake | Rich Buttenscoch Crunch Caeib Cake |
| Promise subtitle | There's no secret spell – only honest hard work! | Therts no secret spell – only honest the Wark! |
| Stats title | A glimpse into our sweet world! | A glinpes roa secret spell – only hocial world! |
| Stat 2 | 5000+ DESIGNS | 5100+ DESIGNS |
| Ticket text | Add 3 reminders in your account. Win offers worth Rs. 750 | …Win effers worth Rs. 750 |
| Footer | Terms And Conditions / Customer Grievance | Termi And Giffcy / Custorm Grerbrane |

---

## 10. Images / assets (PROVIDED — use these exact files)

The real HD images already exist in the folder **`assets/`** at the project root (sibling of the spec). They have descriptive Spanish names with spaces/parentheses, which are NOT web-safe. **Step 1 of the build: copy each file into `public/images/` with the web-safe name below** (do not modify or re-encode the originals; do not delete `assets/`).

| Original file in `assets/` | Copy to `public/images/` as | Used in | Render size (desktop) | Treatment |
|---|---|---|---|---|
| Imagen Principal (Pastel de chocolate con frutos rojos).jpg | hero-main.jpg | Hero, big left circle | Ø400 | `rounded-full`, 10px white border, `object-cover`, `priority` |
| Miniatura Superior Derecha (Volcán de chocolate).jpg | hero-side-top.jpg | Hero, top-right circle | Ø184 | `rounded-full`, 8px white border |
| Miniatura Inferior Derecha (Porción cuadrada de pastel de chocolate).jpg | hero-side-bottom.jpg | Hero, bottom-right circle | Ø184 | `rounded-full`, 8px white border |
| Tarjeta 1 Rich Chocolate Truffle Cake - seccion best sellers.jpg | product-1.jpg | Bestsellers card 1 | ~244×130 area | `object-contain` (see note) |
| Tarjeta 2 Choco Chip Truffle Cake.jpg | product-2.jpg | Bestsellers card 2 | ~244×130 | `object-contain` |
| Tropical Fruit N Almond Cake.jpg | product-3.jpg | Bestsellers card 3 | ~244×130 | `object-contain` |
| Rich Butterscotch Crunch Cake.jpg | product-4.jpg | Bestsellers card 4 | ~244×130 | `object-contain` |
| Cuadrícula de fotos - Fila 1, Izquierda.jpg | gallery-1.jpg | Gallery row 1, left | 288×224 | `rounded-[20px] object-cover` |
| Cuadrícula de fotos - Fila 1, Derecha (Mujer sosteniendo pastel con velas).jpg | gallery-2.jpg | Gallery row 1, right | 288×224 | idem |
| Cuadrícula de fotos - Fila 2, Izquierda.jpg | gallery-3.jpg | Gallery row 2, left | 288×224 | idem |
| Cuadrícula de fotos - Fila 2, Derecha.jpg | gallery-4.jpg | Gallery row 2, right | 288×224 | idem |
| Cuadrícula de fotos - Fila 3, Izquierda.jpg | gallery-5.jpg | Gallery row 3, left | 288×224 | idem |
| Cuadrícula de fotos - Fila 3 Derecha.jpg | gallery-6.jpg | Gallery row 3, right | 288×224 | idem |

Notes:
- Filenames contain accents (`Cuadrícula`, `Volcán`) and one has no comma (`Fila 3 Derecha`): match them exactly when copying (quote the paths).
- **Product images are JPG (no transparency).** If their background is white/near-white, place them on the white card with `object-contain` — it will look like a cutout. If the background is NOT white, use `object-cover` inside a `rounded-2xl` box of the same area instead; never stretch.
- Always use `next/image` with `fill` + `sizes` (e.g. hero `sizes="(min-width:1280px) 400px, 260px"`, gallery `sizes="(min-width:1024px) 288px, 50vw"`). Next.js optimizes the 2–3 MB originals automatically; do not hand-compress them.
- The captions visible inside the mockup gallery photos are NOT added as text overlays unless the photo itself contains them.
- **Not provided** (build them in code, do not invent photos):
  - Golden ticket: inline SVG (gold `#E8B64C` ticket shape + small confetti in pink/gold/blue).
  - 5 social avatars: circles Ø40 with initials on `--primary-soft` background, or `placehold.co` until real ones exist.
  - Swash in the hero: inline SVG line.
- `alt` texts: describe the food (e.g. "Chocolate cake with ganache and fresh berries").

---|---|---|---|
| hero-main | Chocolate cake with ganache drip, strawberries, blueberries and blackberries, dark background | JPG, circular crop | 400×400 |
| hero-side-1 | Molten chocolate lava cake with powdered sugar | JPG circular | 184×184 |
| hero-side-2 | Slice of layered chocolate cake | JPG circular | 184×184 |
| prod-1…4 | Chocolate cakes (cutouts, no background) | PNG transparent | 260×140 |
| gallery-1…6 | Celebration/bakery photos (see 6c) | JPG | 576×448 |
| ticket | Golden ticket illustration + confetti | PNG/SVG | 300×220 |
| avatars ×5 | Face avatars | JPG circular | 80×80 |

While there are no real assets, use `https://placehold.co/400x400/6b2b1f/fff?text=Cake` or solid brown backgrounds with the same size and border-radius so the layout is not broken.

---

## 11. Acceptance criteria (pixel-perfect checklist)

- [ ] Card 1356px wide, centered, radius 36px, cream outer background visible.
- [ ] Hero with pink→maroon gradient left-to-right and translucent bubbles.
- [ ] Main hero circle 400px with thick white border; 2 small circles on the right.
- [ ] Content panel overlaps the hero ~140px with a 48px top radius.
- [ ] 4 Menu tiles are white squares with soft shadow, aligned to the right.
- [ ] 4 product cards with equal height, circular "+" button bottom-right.
- [ ] Our Promise in 2 columns: 3 pink boxes left, 2×3 photo grid right.
- [ ] Full-width maroon banner with centered white text.
- [ ] Footer: logo + list left, 4 columns, newsletter, help widget.
- [ ] All maroon is exactly `#A3262F`; no extra colors.
- [ ] Overlay the reference image at 50% opacity (e.g. "PerfectPixel" extension) at 2× scale and adjust until it matches.

## 12. Responsive (MANDATORY)

The mockup is desktop only. Desktop (`xl` ≥1280, validated at 1536) must match the image; smaller sizes keep the same style, colors, radii and order, adapting the layout like this (Tailwind default breakpoints, mobile-first):

| Section | base (<640) | sm (≥640) | md (≥768) | lg (≥1024) | xl (≥1280) |
|---|---|---|---|---|---|
| Outer card | full width, no radius, no outer padding | same | same | radius 36, outer padding 44px top/bottom | as image |
| Header | logo + cart icon + hamburger; search moves to a full-width row below | same | search inline (flex-1) | full layout | as image |
| Category nav | hidden; hamburger opens a vertical panel with links + ORDER NOW | same | horizontal scroll row (`overflow-x-auto`, no scrollbar) | all 8 links + button in one row | as image |
| Hero | stacked & centered: main image Ø220 → text → pill; side circles hidden | main Ø260 | side circles shown in a row under the text (Ø120) | 3 columns: main Ø320, text, side Ø150 | main Ø400, side Ø184 |
| Hero title | 34px | 40px | 46px | 52px | 60px |
| Panel overlap | -mt-16 | -mt-20 | -mt-24 | -mt-32 | -mt-36 |
| Menu | intro on top, tiles grid 2×2 (square, `aspect-square`) | 4 cols | 4 cols | intro left / tiles right | as image |
| Bestsellers | 1 col (or horizontal snap carousel `snap-x`) | 2 cols | 2 cols | 4 cols | 4 cols |
| VIEW ALL | full width centered | right-aligned | → | → | → |
| Promise | 1 col: stats (2×2 icons) → ticket (stacked) → social → gallery 2 cols | stats 4 icons in a row | → | 2 cols (left 45% / gallery) | 540px / 1fr |
| Gallery | 2 cols, `aspect-[9/7]` | 2 cols | 3 cols | 2 cols | 2 cols |
| Trust banner | text 18px, padding 20px | 22px | 24px | 28px | 32px |
| Footer | 1 col; links in accordions or 2×2 grid; newsletter input+button stacked full width | 2 cols | 4 cols | logo col + 4 cols | as image |

Rules: no horizontal page scroll at any width from **360px**; touch targets ≥44px; text never smaller than 14px; images keep aspect with `aspect-*` + `next/image fill`.