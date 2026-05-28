# Black Badger "Controlled Explosion" Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the site from "ordered industrial" to a "controlled workshop explosion" by breaking grid symmetry, industrializing vocabulary, and increasing typographic contrast.

**Architecture:** We will refine existing React components and CSS utilities to introduce asymmetry and higher visual tension. This includes CSS Grid overrides for "Featured Billets" and SVG narrative connectors.

**Tech Stack:** React, Vanilla CSS, Vite.

---

### Task 1: Typographic Tension & Industrial Vocabulary

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Overhaul Typography Scale**
Increase the scale of Hero titles and shrink technical metadata to create "MFA Curator" contrast.
```css
.hero-title {
  font-size: clamp(4rem, 12vw, 8rem); /* 2x scale */
  letter-spacing: -0.04em;
}

.tech-label, .lab-note .note-label {
  font-size: 0.6rem; /* Shrink for technical feel */
  opacity: 0.7;
}

.blueprint-border::before, .blueprint-border::after {
  font-size: 1.5rem; /* Larger crosshairs */
}
```

- [ ] **Step 2: Add Machined Metal Texture**
Update `--border-soft` with a repeating linear gradient to simulate brushed titanium.
```css
.blueprint-border {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.01) 0px,
    rgba(255, 255, 255, 0.01) 1px,
    transparent 1px,
    transparent 10px
  );
}
```

- [ ] **Step 3: Industrialize Vocabulary**
Update `translations` in `src/App.jsx`.
- `inquireBtn`: "INITIATE BUILD" (EN), "STARTA BYGGE" (SV)
- `inquiryTitle`: "TECHNICAL SPECIFICATION REQUEST" (EN), "TEKNISK SPECIFIKATION" (SV)

- [ ] **Step 4: Commit**
`git add src/index.css src/App.jsx && git commit -m "style: increase typographic tension and industrialize vocabulary"`

---

### Task 2: Asymmetric "Maker" Grid

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Break Grid Symmetry**
Update the `.products-grid` mapping to make every 3rd item a "Featured" card.
```jsx
{filteredProducts.map((product, index) => (
  <ProductCard
    key={product.id}
    product={product}
    isFeatured={index % 3 === 0}
    // ...
  />
))}
```

- [ ] **Step 2: Implement Featured Card CSS**
Add `isFeatured` prop logic to `ProductCard`.
```css
.product-card.is-featured {
  grid-column: span 2;
  flex-direction: row; /* Horizontal layout for featured items */
}
@media (max-width: 768px) {
  .product-card.is-featured { grid-column: span 1; flex-direction: column; }
}
```

- [ ] **Step 3: Commit**
`git add src/App.jsx && git commit -m "feat: implement asymmetric grid with featured billets"`

---

### Task 4: Visual Causality Connectors

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/LabNote.jsx`

- [ ] **Step 1: Add Narrative Arrows**
Add a dashed SVG path between the `product-image-wrapper` and the `LabNote` to show causality (Billet -> Process -> Result).

- [ ] **Step 2: Commit**
`git add src/App.jsx src/components/LabNote.jsx && git commit -m "feat: add visual narrative connectors to Billet Journey"`

---

### Task 5: The "Secret Lab" Easter Egg

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add Hidden Technical Coordinate**
In the footer, add a subtle technical string: `[ ACCESS_LAB: 57.7089° N, 11.9746° E ]`.

- [ ] **Step 2: Implement Secret Lab Modal**
Clicking this coordinate opens a high-grit "Secret Lab" modal featuring macro photography of Badgerite dust and a Canadian maple leaf stamped in titanium.

- [ ] **Step 3: Commit**
`git add src/App.jsx && git commit -m "feat: add Secret Lab easter egg for industrial wit"`

---

### Task 6: Verification

- [ ] **Step 1: Final build**
`npm run build`
- [ ] **Step 2: Check Layout**
Verify the grid is asymmetric and the typography is bold.
