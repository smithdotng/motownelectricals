# Motown Electrical Services Limited — Website

Corporate website for Motown Electrical Services Limited, built with Next.js 15 (App Router) and
styled with the same design system as `adasomilogistics_dd/adasomi-next` — Bootstrap 5.3, the Jost
typeface, Font Awesome 6 and a CSS-variable theme in `app/globals.css`.

The palette is sampled directly from the 2026 company profile PDF:

| Token | Hex | Use |
| --- | --- | --- |
| `--thm-navy` | `#07184a` | Headings, banners, footer |
| `--thm-primary` | `#078fcb` | Links, buttons, accents |
| `--thm-cyan` | `#11b8cd` | Diagonal accents, gradients |
| `--thm-yellow` | `#ffd21a` | CTA buttons, rules, highlights |
| `--thm-bg` | `#f3f7fa` | Page background |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/
  globals.css              design system (theme tokens + components)
  layout.tsx               root layout, fonts, CDN styles, metadata
  (site)/
    layout.tsx             header + footer shell
    page.tsx               Home
    about/page.tsx         About / company overview
    services/page.tsx      Services & capabilities
    projects/page.tsx      Projects & portfolio
    contact/page.tsx       Contact + enquiry form + map
components/
  Header.tsx               sticky nav with contact strip
  Footer.tsx               navy footer with yellow/cyan accent bar
  EnquiryForm.tsx          client-side enquiry form
lib/
  company.ts               single source of truth for company details & content
public/images/             photography extracted from the company profile PDF
```

## Editing content

Company details (address, phone, email, RC number), the six services and the delivery scope all live
in `lib/company.ts`. Change them there and every page updates.

## SEO & social sharing

`lib/seo.ts` holds the canonical site URL (`https://motownelectricals.com`), the shared
`pageMetadata()` builder and the `Organization` / `ElectricalContractor` JSON-LD emitted from the
root layout. Every page gets a canonical link, Open Graph tags (`og:title`, `og:description`,
`og:url`, `og:image` with width/height/alt, `og:type`, `og:locale`, `og:site_name`) and a
`summary_large_image` Twitter card.

`app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at build time.

Five 1200x630 share cards live in `public/images/`, one per page — `og-image.jpg` (home),
`og-about.jpg`, `og-services.jpg`, `og-projects.jpg`, `og-contact.jpg`. Each pairs the navy/cyan
brand panel (logo, headline, tagline, domain) with a project photograph. To regenerate one, edit the
card and re-export at 1200x630; the filenames are referenced from each page's `pageMetadata()` call.

After deploying, re-scrape the cards with Facebook's Sharing Debugger and LinkedIn's Post Inspector
so the platforms pick up the new images.

## Enquiry form

`components/EnquiryForm.tsx` currently composes a pre-filled `mailto:` to
`info@motownelectricals.com`. To capture submissions server-side instead, add a route handler at
`app/api/enquiry/route.ts` and POST the form state to it (nodemailer or a transactional email
provider), then replace the `window.location.href` line with a `fetch` call.

## Images

All photography in `public/images/` was extracted from
`Motown_Electrical_Services_Company_Profile_Print.pdf`. Replace any file with a higher-resolution
original of the same name and no code changes are needed.
# motownelectricals
