# Black Badger — Avant-Garde Materials & Luminous Industrial Jewelry

An avant-garde, premium single-page digital platform for **Black Badger** (James Thompson's design studio, Gothenburg, Sweden). The platform authentically represents the "Industrial Intellectual" brand, bridging the gap between a high-end art gallery and a raw industrial workshop.

Built with **Vite 8 + React 19 + Vanilla CSS**.

👉 **GitHub Repository**: [https://github.com/m3/black-badger](https://github.com/m3/black-badger)

---

## 1. Brand Identity & Goal
The project transforms the digital presence of Black Badger using core brand pillars:
* **High-Art Theory**: Objects treated as industrial history/sculptures with clean "Museum" spacing.
* **Industrial Grit**: Authentic, technical, process-driven visuals.
* **Industrial Wit**: Conversational "Lab Notes" that explain complex materials with warmth and humor.

## 2. Core Technical Stack
* **Vite 8**: High-speed, optimized build tooling.
* **React 19**: Modern component architecture for a reactive user interface.
* **Vanilla CSS**: Bespoke styling without heavy framework dependencies, utilizing custom properties and deep control over the design system.

## 3. New UI Concepts
The platform introduces several key user interface systems to support the narrative:
* **BlueprintGrid**: A global layout wrapper inspired by industrial blueprints. It features a 30px base grid, 1px solid borders, and crosshairs (`+`) at intersections, complete with monospaced technical annotations.
* **ProvenanceCards**: Rich, annotated product detail components that trace "The Billet Journey" from raw material to the finished object.
* **LumeToggle**: An interactive Day/Night toggle component allowing users to view products under natural workshop lighting or long-exposure night shots highlighting the vibrant Badgerite glow.

## 4. Local Development Setup

To preview and edit the platform locally on your machine:

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
