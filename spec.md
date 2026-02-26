# Specification

## Summary
**Goal:** Replace the existing site logo with the uploaded QH monogram, removing its black background so only the gold monogram appears on a transparent background.

**Planned changes:**
- Remove the black background from the uploaded QH monogram image, keeping only the gold QH monogram with a transparent background, and save it as `frontend/public/assets/generated/qh-logo.png`
- Update the Header component to use the new `qh-logo.png` instead of any previously generated or placeholder logo
- Update the Footer to use the new `qh-logo.png` wherever a logo mark appears

**User-visible outcome:** The site header and footer display the gold QH monogram logo against the dark site background with no visible black bounding box or background fill.
