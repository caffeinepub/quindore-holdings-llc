# Specification

## Summary
**Goal:** Replace the generated placeholder monogram in the site header with the uploaded QH gold monogram logo image, displayed with a transparent background alongside the "Quindore Holdings LLC" wordmark.

**Planned changes:**
- Edit the uploaded QH monogram image to remove its white background, producing a transparent PNG saved as `frontend/public/assets/generated/qh-logo.png`
- Update the Header component to display the transparent QH monogram logo image (height ~40–48px desktop, ~32px mobile), left-aligned
- Retain the "Quindore Holdings LLC" wordmark text in Playfair Display to the right of the monogram
- Ensure the logo links to the home page (/)
- Preserve all existing header navigation links and responsive hamburger menu behavior

**User-visible outcome:** The site header shows the real gold QH monogram logo with no white box, rendering cleanly against the dark header background, with the "Quindore Holdings LLC" wordmark beside it.
