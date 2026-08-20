# Hometown Handyman Co. — Website

A professional, fully responsive marketing website for a handyman business.
Built as a fast, dependency-free static site (HTML, CSS, vanilla JS) so it
opens instantly and can be hosted anywhere.

## What's inside

- **Sticky header** with desktop nav + animated mobile menu
- **Hero** with headline, dual CTAs, and trust stats
- **Trust bar** (licensed/insured, upfront pricing, on-time, guarantee)
- **Services** grid (8 tiles incl. a "don't see it here?" CTA)
- **About** with photo, experience badge, and checklist
- **How It Works** 4-step process
- **Our Work** photo gallery
- **Why Choose Us** feature grid + sticky CTA card
- **Reviews** with star ratings
- **CTA strip** and a **contact / free-quote form** (front-end validation)
- **Footer** with sitemap and business details

## Run it locally

Any static server works. For example:

```bash
# Python (no install needed)
python3 -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve .
```

## File structure

```
index.html        # all page markup
css/styles.css    # design system + all styling
js/main.js        # mobile menu, scroll effects, form validation
```

## Customizing for a real client

Everything is placeholder content for **"Hometown Handyman Co."** Swap these:

| What | Where |
|---|---|
| Business name / logo text | `index.html` — `.brand-text`, `<title>`, footer |
| Phone number | search `(205) 555-0142` and `tel:+12055550142` |
| Email | search `hello@hometownhandyman.co` |
| Service area / hours | Contact section + footer |
| Brand colors | `css/styles.css` — `:root` variables (`--navy`, `--amber`) |
| Reviews / stats | Reviews section + hero badges in `index.html` |

### Adding real photos

The site ships **100% self-contained** — the hero, about panel, and gallery
use designed CSS gradients + inline SVG so nothing is ever a broken image.
To use real client photos instead, drop them in `assets/` and set a
`background-image` on the relevant element in `css/styles.css`:

- **Hero:** add `background-image` to `.hero-bg` (put it above the gradient)
- **About:** set `.about-img-1 { background: url("../assets/about.jpg") center/cover; }` and remove the `.about-art` SVG
- **Gallery:** set `background: url("../assets/kitchen.jpg") center/cover;` on `.g1`–`.g6`

## Note on the form

The quote form is front-end only (validates and shows a confirmation). To
actually receive submissions, wire the submit handler in `js/main.js` to an
email/form backend (e.g. Formspree, Resend, or a serverless function).
