# Heavy Waste Types – Redesign

This project is a redesigned version of the "Choose Skip Size" page from the We Want Waste web application. The goal was to improve the layout and appearance while keeping all core functionality intact.

## What I Did

- Created a new page for selecting a skip, populated using the provided JSON data.
- Built a reusable `SkipCard` component with a horizontal layout (image on the left, details on the right).
- Preserved selection logic, visual highlighting for selected cards, and price display.

## Structure

- `ChooseSkip.jsx` – the page where users choose a skip.
- `SkipCard.jsx` – displays an individual skip with image, details, and button.
- `skips.json` – local static data source containing all skip information.
- Images are placed in `public/images/` and dynamically loaded based on skip size.

## Design

The design is clean and modern, using gradients, bold typography, and generous spacing. On desktop, cards are laid out horizontally with clearly structured sections. On mobile, they stack vertically with full-width layout and touch-friendly buttons.

All styling is handled via custom CSS to have full control over responsiveness and appearance, without relying on external UI libraries.
