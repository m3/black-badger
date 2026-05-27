# Black Badger — Avant-Garde Materials & Luminous Industrial Jewelry

An avant-garde, premium single-page digital platform for **Black Badger** (James Thompson's design studio, Gothenburg, Sweden), sculpted utilizing **Vite 8 + React 19 + Vanilla CSS**. 

This repository replicates the high-speed static architecture of the *Port Arthur* project, tailored with a luxury industrial dark aesthetic, custom luminescent themes, dynamic bilingual (EN/SV) copy, and a fully parsed Shopify product catalog.

👉 **GitHub Repository**: [https://github.com/m3/black-badger](https://github.com/m3/black-badger)

---

## 1. Key Architectural Features

* **Real Shopify Catalog Integration**: Powered by real products scraped from the Shopify products endpoint. Data is structured locally inside `src/data/products.json`, featuring product descriptions, pricing, sizing matrices, availability states, and image lists.
* **Premium Product Showcase**: Product grids with interactive filter tabs, visual image-swap on mouse hover, glowing availability pulses, responsive sizing pills, and smart inquiry form integration (pre-fills the build request form with the selected ring).
* **Robust Multi-Lingual Sync**: Seamless bilingual switcher (English / Swedish) that persists dynamically across all sections, navigation buttons, specification grids, and form overlays. Document language metadata is automatically synchronized to prevent crawler crawl jumps.
* **Dynamic Luminous Dual-Theme (with Pink Lume)**:
  * **Dark Theme** (Default): Matte carbon backgrounds (`#0b0c0f`) combined with a vibrant Swiss Super-LumiNova powered neon Badgerite glow (`#10f3c1`).
  * **Light Theme**: Brushed steel & titanium backgrounds (`#f2f4f7`) with a daytime teal pigmented core outline (`#02b396`).
  * **Pink Theme**: Rose gold & blush backgrounds (`#0f0a0c`) with a warm, neon-pink luminous rose glow (`#ff6b9d`).
* **Symmetrical Geometric SVG Logo**: Brand identity is built using a custom, high-end inline SVG badger face emblem. Using `stroke="currentColor"`, it adapts instantly and remains completely visible in all themes (charcoal in light, silver-white in dark).
* **Zero Jitter Layout Stabilization**: Navigation grids, action bars, and logo linkages have pre-allocated dimensions to guarantee zero horizontal shifting (Cumulative Layout Shift) when toggling between Swedish and English characters.
* **Glassmorphism Nav Backdrops**: Theme-specific translucent header backdrops resolve legacy transparent layout overlapping when scrolling.
* **GitHub Actions Hetzner VPS CI/CD**: Automatic deployment workflow triggered on every push to the `main` branch, building and syncing static assets securely to your VPS via SSH.

---

## 2. Project File Structure

```
BlackBadger/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Automated GitHub Actions deployment pipeline (Hetzner VPS)
├── .gitignore
├── index.html                ← SEO headers, google fonts, JSON-LD structured business schema
├── package.json              ← React 19, Vite 8, and npm script targets
├── vite.config.js            ← Vite config layout
├── public/
│   └── assets/               ← Client-supplied brand images
└── src/
    ├── main.jsx              ← React entry mount
    ├── App.jsx               ← Primary component layer, state machines, and ProductCard cards
    ├── index.css             ← Responsive layouts, theme design tokens, and micro-interactions
    └── data/
        ├── collections.json  ← Bilingual category/material descriptions
        └── products.json     ← Shopify-parsed catalog data
```

---

## 3. Local Development Setup

To preview and edit the platform locally on your machine, follow these steps:

### A. Clone and Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
# Clone the repository
git clone git@github.com:m3/black-badger.git
cd black-badger

# Install dependencies
npm install
```

### B. Start Dev Server
Spin up the local development environment:
```bash
npm run dev
```
👉 **Interactive preview will be served at [http://localhost:5173/](http://localhost:5173/)** (with instant Hot Module Replacement).

### C. Build Verification
To compile the production-ready static bundle:
```bash
npm run build
```
The optimized bundle will compile inside `/dist` in under **300ms** with zero errors or warnings.

---

## 4. Automated VPS Deployment Configuration

To host the site under a subdomain (e.g. `blackbadger.runthetable.app`) on your **Hetzner VPS**, add the following credentials inside your GitHub repository settings under **Settings -> Secrets and variables -> Actions**:

1. `HETZNER_SSH_KEY` — Your private SSH key authorizing secure rsync access.
2. `HETZNER_VPS_IP` — The public IP address of your Hetzner VPS.
3. `HETZNER_VPS_USER` — The SSH deployment user (typically `root`).
4. `HETZNER_DEPLOY_PATH` — The directory on the VPS where the static files are hosted (e.g. `/var/www/blackbadger`).

### VPS Nginx Configuration
Create a server configuration block on the VPS to point Nginx to the deploy path:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name blackbadger.runthetable.app;

    root /var/www/blackbadger;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
Secure the server block utilizing certbot: `certbot --nginx -d blackbadger.runthetable.app`
