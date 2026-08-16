# Ideas Premium Solutions — Corporate Website

A lightweight, static, dependency-free corporate website for **Ideas Premium
Solutions, Inc.** Production domain: `https://ideaspremium.com`.

This is a **single-page** site. Its purpose is to establish a corporate
presence and direct visitors to the two product websites:

- **RiskyID** → https://riskyid.com/
- **Plus Comply** → https://pluscomply.com/

No frameworks, no build step, no backend, no database, no analytics/tracking.
Plain HTML5, CSS3, and a few lines of vanilla JavaScript.

---

## 1. File structure

```
/
├── index.html            Homepage (single page, all sections)
├── privacy-policy.html    Privacy Policy — English then Spanish, same page
├── terms-of-use.html       Terms of Use — English then Spanish, same page
├── 404.html               Custom "page not found" page
├── robots.txt
├── sitemap.xml
├── favicon.svg             Placeholder "IP" favicon — see note below
├── css/
│   └── styles.css          All styling; brand colors as CSS variables at the top
├── js/
│   └── main.js              Mobile nav toggle + auto-updating footer year
├── assets/
│   ├── logo/
│   │   └── IPSLogo.png       Official company logo (from project files)
│   └── images/
│       └── clients/            10 client/partner logos used in "Our Clients"
├── .htaccess                Optional Apache config (HTTPS/www redirect, security headers)
└── README.md                 This file
```

## 2. Local preview

No build tools required. From the project root, run:

```bash
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080
```

## 3. Deploying to conventional web hosting (shared hosting / cPanel)

1. Upload **all files and folders** in this directory to your host's
   document root — commonly `public_html/` or `www/`.
2. Make sure `index.html` sits directly inside that root folder (not in a
   subfolder), so it's served at `https://ideaspremium.com/`.
3. `.htaccess` is included for Apache hosts. It:
   - Redirects `www.ideaspremium.com` → `ideaspremium.com` (canonical domain).
   - Forces HTTPS.
   - Serves `404.html` for missing pages.
   - Sets a few optional security headers.
   - Adds light caching for static assets.

   If your host already manages redirects/headers at the server level,
   review `.htaccess` for conflicts before enabling it.

## 4. Nginx (optional reference)

If hosting on Nginx instead of Apache, a minimal equivalent server block:

```nginx
server {
    listen 443 ssl;
    server_name ideaspremium.com;

    root /var/www/ideaspremium.com;
    index index.html;

    error_page 404 /404.html;

    location / {
        try_files $uri $uri/ =404;
    }

    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "DENY";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}

server {
    listen 80;
    server_name ideaspremium.com www.ideaspremium.com;
    return 301 https://ideaspremium.com$request_uri;
}
```

## 5. Static hosting alternatives

The site is fully portable and can also be hosted (no changes needed) on:

- Cloudflare Pages
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

None of these are required — any conventional web server works.

## 6. HTTPS and domain

- Canonical URL: `https://ideaspremium.com/`
- `https://www.ideaspremium.com` should redirect permanently (301) to the
  canonical domain — handled in `.htaccess` for Apache, or configure the
  equivalent at your DNS/CDN provider if not using Apache.
- DNS was **not** modified by this project — configure your domain's DNS
  records with your registrar/host as usual.

## 7. Missing information / items to review before production

- **Favicon**: `favicon.svg` is a placeholder typographic "IP" mark, not the
  official brand mark. Replace it with an official favicon asset if one is
  produced later.
- **Logo file**: `assets/logo/IPSLogo.png` is the official logo file found
  in the project. If a vector (SVG) or higher-resolution version becomes
  available, swap it in for sharper rendering at large sizes.
- **Brand colors**: CSS variables in `css/styles.css` (`:root` block) were
  derived directly from the official logo (gray `#7D7E82` and lime-green
  `#C7D93B`). Adjust the values there if brand guidelines specify exact
  colors.
- **Analytics/cookies**: none are included. If analytics are added later,
  review cookie-consent requirements at that time (GDPR/ePrivacy, CCPA,
  etc. depending on target audience).
- **Legal pages effective date**: `privacy-policy.html` and
  `terms-of-use.html` were transcribed from the approved Word document
  ("Politicas-IdeasPremium-EN-ES.docx"), which lists an effective date of
  April 01, 2026 inside the policy text. Update that date manually in both
  HTML files if the policies are revised.

## 8. Content restrictions honored

Per the project brief, the site does **not** include: fabricated
statistics, customer counts, revenue figures, partnerships, certifications,
regulatory approvals, customer logos, testimonials, awards, or employee
counts. It does not describe Ideas Premium Solutions as a regulator,
financial institution, consulting firm, or law firm. It does not imply
Dow Jones ownership of RiskyID, or that Ideas Premium owns Dow Jones data,
and does not list Adverse Media as a RiskyID capability.

## 9. Confirmations

- Production homepage file: **`index.html`** ✅
- No backend, database, or server-side code required ✅
- The site runs by uploading static files to any conventional web server ✅
- No `npm install` or build command is needed at any point ✅
