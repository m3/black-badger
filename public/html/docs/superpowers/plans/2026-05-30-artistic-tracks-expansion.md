# Artistic Tracks Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the three artistic directions (The Archive, The Journal, and The Lab) into full multi-page prototypes (Index, Products, About, Product Detail).

**Architecture:** Each track lives in its own directory to maintain visual isolation. Shared data (products, images) is referenced from the root. Pages are self-contained HTML/CSS/JS to avoid complex build steps and ensure immediate preview.

**Tech Stack:** Vanilla HTML5, CSS3 (Modern features: Grid, OKLch, Container Queries), Vanilla JS.

---

### Task 1: Setup and Shared Data

**Files:**
- Create: `data.js` (Unified product data with all image variants)
- Create: `archive/index.html` (Track 1 Shell)
- Create: `journal/index.html` (Track 2 Shell)
- Create: `lab/index.html` (Track 3 Shell)

- [ ] **Step 1: Refine `data.js` with all metadata**
Ensure `data.js` has:
  - `slug`
  - `name`
  - `price`
  - `description`
  - `materials` (array)
  - `labNote`
  - `images` (object with: `main`, `billet`, `lume`, `process`)
  - `sketches` (object with: `blueprint`, `technical`)

- [ ] **Step 2: Create directory structure**
```bash
mkdir -p archive journal lab
```

---

### Task 2: Track 1 — The Archive (Blueprint/Technical)

**Visual Language:** Blueprint blue (#003366), White pencil lines, Drafting grids, Monospace type (IBM Plex Mono).

**Files:**
- Create: `archive/index.html`
- Create: `archive/products.html`
- Create: `archive/about.html`
- Create: `archive/product.html`

- [ ] **Step 1: Build `archive/index.html`**
  - Hero: Animated blueprint of the 20th Anniversary Ring.
  - Section: "The Engineering Mind" (James's approach to technical archeology).
  - Navigation: Drafting grid based menu.

- [ ] **Step 2: Build `archive/products.html`**
  - Grid: Products presented as "Technical Drawings" in a catalog.
  - Filtering: By material alloy.

- [ ] **Step 3: Build `archive/about.html`**
  - Story: "From Sketch to Steel" (The technical history of Black Badger).

- [ ] **Step 4: Build `archive/product.html`**
  - Detail: Exploded view diagram of the ring using the technical sketches.
  - Content: Material specs and alloy percentages.

---

### Task 3: Track 2 — The Journal (Studio/Process)

**Visual Language:** Warm paper tones (#f5f0e8), Dark wood, Metal dust, Hand-written notes, Serif headlines (Iowan Old Style).

**Files:**
- Create: `journal/index.html`
- Create: `journal/products.html`
- Create: `journal/about.html`
- Create: `journal/product.html`

- [ ] **Step 1: Build `journal/index.html`**
  - Hero: Full-bleed workshop photo with hand-written overlay.
  - Section: "Diary of a Maker" (First-person storytelling).

- [ ] **Step 2: Build `journal/products.html`**
  - Grid: "The Archive Grid" (Polaroid-style product shots on a workbench).

- [ ] **Step 3: Build `journal/about.html`**
  - Story: "The 40 Hour Week" (The sweat and fail of the workshop).

- [ ] **Step 4: Build `journal/product.html`**
  - Detail: Process-first narrative. Why this piece happened.
  - Content: Lab notes from the day it was made.

---

### Task 4: Track 3 — The Lab (Manga/Pastel)

**Visual Language:** Sakura pink, Lavender, Powder blue, Halftone dots, Speech bubbles, High-contrast comic panels.

**Files:**
- Create: `lab/index.html`
- Create: `lab/products.html`
- Create: `lab/about.html`
- Create: `lab/product.html`

- [ ] **Step 1: Build `lab/index.html`**
  - Hero: Splash panel manga scene starring the 20th Anniversary Ring.
  - Section: "A Universe of Materials" (Comic-style intro).

- [ ] **Step 2: Build `lab/products.html`**
  - Grid: Sequential panels where each product is a "Character" card.

- [ ] **Step 3: Build `lab/about.html`**
  - Story: "Project Sabotage" (The origin story in comic form).

- [ ] **Step 4: Build `lab/product.html`**
  - Detail: "Episode: [Product Name]". Story unfolding in panels as you scroll.
  - Content: "Badgerite Power" glow interactive moment.

---

### Task 5: Launch Integration

- [ ] **Step 1: Update root `index.html`**
  - Create a "Universe Launcher" page allowing the user to enter any of the 3 tracks.
  - Visuals: 3 large vertical panels representing each track's visual DNA.
