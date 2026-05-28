# Design Spec: Black Badger "Industrial Intellectual" Website Redesign

**Date:** 2026-05-28
**Status:** Approved by User
**Topic:** Brand Identity & Website Redesign
**Primary Persona:** James Thompson, MFA (Canadian Expat, Industrial Maker)

## 1. Mission & Vision
To transform the current "generic" Black Badger website into a visually striking, narrative-driven platform that authentically represents James Thompson's "Industrial Intellectual" persona. The site will bridge the gap between a high-end art gallery and a raw industrial workshop.

## 2. Core Brand Pillars

### A. High-Art Theory (The MFA)
*   **Concept:** Every object is a piece of industrial history/sculpture.
*   **Visuals:** Clean "Museum" spacing, high-contrast typography (Space Grotesk).
*   **Tone:** Sophisticated, conceptual, emphasizing "Provenance" and "Curation."

### B. Industrial Grit (The Workshop)
*   **Concept:** Authentic, technical, and process-driven.
*   **Visuals:** "The Blueprint" layout system. Background grids, dashed lines, corner crosshairs (`+`), and monospaced technical annotations (Space Mono).
*   **Palette:** Matte Carbon (#0b0c10), Badgerite Green (#10f3c1), Industrial Red (#ff4444).

### C. Industrial Wit (The Quirk)
*   **Concept:** A "Quirky Canadian in Sweden."
*   **Visuals:** "GÖTEBORG via CANADA" stamps, hand-drawn-style annotations.
*   **Tone:** "The Enthusiastic Expert." Warm, conversational "Lab Notes" that explain complex materials with humor.

## 3. Visual Specification

### Palette
*   **Primary Background:** `Matte Carbon` (#0b0c10).
*   **Accent 1 (Glow):** `Badgerite Green` (#10f3c1). Used for CTAs, data labels, and hover glows.
*   **Accent 2 (Alert/Origin):** `Industrial Red` (#ff4444). Sparse use for the "Expat Stamp" and specific markers.
*   **Typography:**
    *   **Headings:** `Space Grotesk` (700).
    *   **Technical/Quirks:** `Space Mono`.
    *   **Body:** `Outfit` (400).

### Layout: The Blueprint System
*   **Global Grid:** 30px base grid managed via a `GridProvider`.
*   **Containers:** Defined by 1px solid #222 borders with `+` symbols at every intersection.
*   **Annotations:** All product images and sections feature monospaced technical tags (e.g., `[ BATCH_ID: DET-74 ]`).

## 4. Interaction & Content Strategy

### "The Billet Journey"
Product pages will follow a narrative scroll:
1.  **The Raw:** Macro shot of the raw material (Fordite/Carbon/Damasteel).
2.  **The Process:** Workshop photo (Lathe/Caliper) with a "Lab Note" quirk.
3.  **The Object:** The finished ring/dial.

### The Day/Night Toggle
Interactive toggle on product cards to switch between:
*   **Day:** Natural workshop lighting.
*   **Night:** Long-exposure shot showing the **Badgerite** glow.

## 5. Technical Implementation Details

### Data Schema (products.json)
Extended to support the narrative:
```json
{
  "id": "ring-01",
  "name": "Fordite Billet 72",
  "billet_image": "assets/materials/fordite_raw.jpg",
  "lume_image": "assets/materials/fordite_glow.jpg",
  "lab_note": "Sourced from a 1970s Ford plant. Smells like industrial history and optimism."
}
```

### Key Components
*   `BlueprintGrid`: Global layout wrapper with technical overlay.
*   `ProvenanceCard`: The rich, annotated product detail component.
*   `LumeToggle`: Component for the Day/Night visual switch.

## 6. Success Criteria
*   The site feels like a bespoke atelier, not a template.
*   The "Material Story" is clear and justifies luxury price points.
*   James's personality (Technical + Quirky) is woven into the UX.

## 7. Spec Self-Review
*   **Placeholder scan:** No TBDs. All palettes and fonts defined.
*   **Internal consistency:** Tone, visuals, and technical architecture align.
*   **Scope check:** Defined as a brand and layout redesign. Functional commerce (Shopify) remains.
*   **Ambiguity check:** "Industrial Red" usage strictly defined as sparse/stamps.
