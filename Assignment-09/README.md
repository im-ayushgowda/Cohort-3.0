# Two Leaves and a Bud — Frontend Clone

A pixel-perfect 1:1 frontend clone of [twoleavestea.com](https://www.twoleavestea.com), built with pure HTML, CSS, and vanilla JavaScript.

## 🌐 Live Demo

👉 [View Live Site](https://im-ayushgowda.github.io/Cohort-3.0/Assignment-09/)

---

---

## 📁 Project Structure

```
├── index.html       # Main HTML file
├── style.css        # All styles
└── README.md        # This file
```

---

## 🚀 Getting Started

1. Download `index.html` and `style.css` into the same folder
2. Open `index.html` in your browser, or run with a local server:

```bash
# Using VS Code Live Server
Right-click index.html → Open with Live Server

# Using Python
python -m http.server 5500

# Using Node
npx serve .
```

Then visit `http://127.0.0.1:5500/index.html`

---

## ✅ Features Implemented

### Header & Navigation
- Sticky floating navbar with pill shape
- Transforms to full-width on scroll
- **Shop mega dropdown** — Tea Varieties | Collections | Shop Best Sellers (3 product cards)
- **Learn mega dropdown** — 3 full-width image cards (Our Story, Our Spirit, For Cafes and Partners)
- Mobile hamburger drawer menu

### Hero Section
- Full-screen image slider with 2 slides
- Auto-plays every 6 seconds
- Dot navigation controls
- Scroll-down indicator button

### Product Carousel (Best Sellers)
- Horizontally scrollable product cards
- Left/right arrow navigation
- Pagination progress bars
- 9 product cards with colored backgrounds

### Find Your Cup
- Search input
- Clickable vibe suggestion tags

### Born in Colorado (Origins)
- Scroll-driven parallax storytelling
- 3 animated step panels triggered by scroll position
- Rotating "From Farm to Kettle" seal badge

### Testimonials
- 5 colorful review cards
- Product info with Shop button inside each card

### Barista Blends Slider
- Dynamic content switcher (5 latte products)
- Background color transitions per product
- Animated image and text transitions

### Tea Journal Blog Carousel
- Horizontally scrollable blog cards
- Arrow navigation + pagination bars

### Footer
- Newsletter signup form
- Social media icons (Facebook, Instagram, LinkedIn)
- 7-column link grid
- Mountain illustration socket with logo

---

## 🎨 Fonts Used

| Font | Usage |
|------|-------|
| RecklessCondensed | Display headings, product titles |
| MidnightSans | Section badges, "BORN IN COLORADO" |
| Figtree | Body text, navigation, buttons |
| Roboto Mono | Announcement bar, copyright |

> Fonts are loaded from Shopify CDN and Google Fonts — internet connection required.

---

## 🖼️ Images

All images are loaded directly from the Two Leaves and a Bud Shopify CDN:
```
https://www.twoleavestea.com/cdn/shop/files/...
```
> Internet connection required for images to load.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1024px` | Full desktop layout, mega menus visible |
| `768px – 1024px` | Tablet — 2-column product grid, hidden mega menus |
| `< 768px` | Mobile — hamburger menu, single column, touch carousels |

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — all interactivity, no frameworks
- **No dependencies** — zero npm packages or build tools needed

---

## 📝 Notes

- All links point to the real twoleavestea.com URLs (they will 404 locally — that's expected)
- Cart count is static (shows 0) — no backend connected
- Newsletter form shows a browser alert on submit — no backend connected
- Mega menus are desktop-only (hidden on mobile via CSS)

---

## 👨‍💻 Credits

Original site design by [Two Leaves and a Bud](https://www.twoleavestea.com) / [Manufactur](https://manufactur.co).
This is a frontend clone built for educational purposes only.
