# Black Badger "Industrial Intellectual" Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the generic Black Badger website into the "Industrial Intellectual" brand identity, featuring a technical blueprint layout, rich material narratives, and interactive lume toggles.

**Architecture:** A React-based "Blueprint" design system. We will introduce a global `BlueprintGrid` overlay, a `ProvenanceCard` for product details, and a `LumeToggle` for day/night material visualization. The design relies on a rigid technical grid and monospaced annotations to capture James's maker ethos.

**Tech Stack:** React, Vanilla CSS, Vite.

---

### Task 1: Global Styles & Typography Update

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Update CSS Variables and Typography**
Update `:root` in `src/index.css` with the new palette and font families.

- [ ] **Step 2: Add Blueprint Grid Background**
Apply the `radial-gradient` grid to the `body` in `src/index.css`.

- [ ] **Step 3: Commit**
`git add src/index.css && git commit -m "style: update palette and typography for Industrial Intellectual brand"`

---

### Task 2: Data Schema Extension

**Files:**
- Modify: `src/data/products.json`

- [ ] **Step 1: Update products with rich metadata**
Add `material_origin`, `billet_image`, `lume_image`, and `lab_note` to the products in `src/data/products.json`.

- [ ] **Step 2: Commit**
`git add src/data/products.json && git commit -m "data: extend product schema with material provenance and lab notes"`

---

### Task 3: Blueprint System Components

**Files:**
- Create: `src/components/BlueprintGrid.jsx`
- Create: `src/components/LabNote.jsx`

- [ ] **Step 1: Create BlueprintGrid Component**
Implement `BlueprintGrid` with corner crosshairs and technical labels.

- [ ] **Step 2: Create LabNote Component**
Implement `LabNote` for James's quirky anecdotes.

- [ ] **Step 3: Commit**
`git add src/components/ && git commit -m "feat: add BlueprintGrid and LabNote system components"`

---

### Task 4: Interaction - LumeToggle

**Files:**
- Create: `src/components/LumeToggle.jsx`

- [ ] **Step 1: Implement the Day/Night Switch**
Implement `LumeToggle` component.

- [ ] **Step 2: Commit**
`git add src/components/LumeToggle.jsx && git commit -m "feat: add LumeToggle for day/night material visualization"`

---

### Task 5: Main Page Integration (Redesign)

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace generic Hero with "Industrial Intellectual" Hero**
Refactor hero section in `src/App.jsx`.

- [ ] **Step 2: Update Product Card to use ProvenanceCard and LumeToggle**
Refactor product listing in `src/App.jsx`.

- [ ] **Step 3: Final Style Polishing**
Apply dashed borders and crosshair styles across `src/App.jsx`.

- [ ] **Step 4: Commit**
`git add src/App.jsx && git commit -m "feat: integrate Industrial Intellectual redesign into main App"`

---

### Task 6: Final Verification

- [ ] **Step 1: Run build to verify no regressions**
`npm run build`

- [ ] **Step 2: Verify visual identity in browser**
Manual check of colors, typography, grid, and toggles.
