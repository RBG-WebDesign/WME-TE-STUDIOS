# WME+ Interactive Executive Brief

This repo contains a single page React app used to present the WME+ partnership as an execution and delivery layer for below the line work.

It is not a marketing site. It is meant to function like a structured brief or internal deck that can be scrolled, presented, or exported as a PDF.

---

## What this is

- A scroll driven React experience
- Structured like an executive narrative, not a landing page
- Designed to explain the operating model, standards, and economics
- Can be exported as a clean landscape PDF for internal use

---

## Structure

The app is broken into sequential chapters that tell one linear story:

- Thesis
- Gap
- Shift
- Model
- Standards
- Economics
- Cases
- Fit
- Coverage
- Rollout
- Contact

Each chapter fills the viewport and snaps on scroll.

---

## Tech Stack

- React
- Tailwind CSS
- lucide-react for icons
- html2canvas and jspdf for PDF export

Everything lives in a single component file.

---

## Key Features

### PDF Export

- Captures each chapter as a slide
- Forces a 1920x1080 landscape layout
- Hides navigation and UI elements during capture
- Excludes the final Contact section from the PDF

### Navigation

- Scroll snap for controlled navigation
- IntersectionObserver to track the active chapter
- Keyboard support using arrow keys

---

## Usage

- Drop the component into a React project
- Make sure Tailwind is configured
- Install icons

```bash
npm install lucide-react
