# Specification

## Summary
**Goal:** Build Quindore Holdings LLC — a fully responsive, institutional corporate website with a dark/gold visual theme across multiple pages and sections.

**Planned changes:**

### Global Theme & Layout
- Background `#0B0B0B`, primary text `#EDEDED`, accent gold `#C6A85E` site-wide
- Playfair Display for all headings, Inter for all body copy (via Google Fonts)
- Subtle low-opacity architectural grid/diagonal texture behind all content
- Thin gold horizontal divider lines between sections; minimum 120px vertical section padding
- CSS-only subtle fade-on-scroll; no JS animation libraries, no sliders, no stock photos

### Header
- Sticky/fixed header with semi-transparent dark background and bottom gold accent line
- Left-aligned logo lockup (wordmark + Q monogram image asset)
- Right-aligned nav: About, Structure, Governance, Contact
- Hamburger menu on mobile (< 768px)

### Home Page (`/`) Sections
- **Hero**: Full viewport height, centered; headline "Structured Ownership. Disciplined Governance. Long-Term Value.", subtext about Quindore Holdings LLC, outlined gold CTA button "Contact" smooth-scrolling to Contact section
- **About**: Two-column desktop / single-column mobile; covers parent holding company role, centralized governance, long-term capital discipline, asset development focus; includes verbatim disclaimer "This domain does not process consumer transactions directly."
- **Operating Structure**: Labeled grid/stacked card layout with gold accent borders; four tiers: parent entity, controlled subsidiaries, independent operating platforms, trade name note
- **Compliance & Governance**: Four-block grid with gold-accented labels; covers U.S. federal/Wyoming regulations, internal compliance, financial reporting, third-party payment processors
- **Contact**: Minimal section; formal introductory line; `info@quindore.com` as styled mailto link; no form

### Additional Pages
- **`/structure`**: Executive summary paragraph + CSS/SVG dark/gold hierarchical tree diagram (Quindore Holdings LLC → subsidiary placeholders → operating platform placeholders)
- **`/governance`**: Two-column editorial layout; four sections (board oversight, audit/compliance, risk management, reporting obligations); sticky right-side in-page navigation
- **`/privacy`**: Long-form document; numbered sections covering data collection, cookies, third-party services, privacy contact, Wyoming governing law; "Last Updated" date
- **`/terms`**: Long-form document; sections covering informational purpose, no warranties, liability limitation, IP, Wyoming governing law, legal contact
- **`/legal`**: Long-form document; informational-only disclaimer, not-a-financial-advisor notice, subsidiary independence note, no-consumer-transactions note

### Footer
- Registered address: "5830 E 2nd St, Ste 7000 #32674, Casper, WY 82609, United States"
- Copyright: "© Quindore Holdings LLC. All rights reserved."
- Links to /privacy, /terms, /legal in muted gold small Inter typography

### Responsiveness
- Fully responsive at 320px, 768px, 1280px breakpoints
- All grids stack to single column on mobile; no horizontal scroll; 44px minimum touch targets

**User-visible outcome:** A complete, multi-page institutional corporate website for Quindore Holdings LLC that reads as compliance-grade and conservative, with all specified pages, sections, legal content, and exact text strings rendered in the dark/gold serif theme.
