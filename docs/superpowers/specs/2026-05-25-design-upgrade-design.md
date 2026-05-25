# CMG2 Design & Content Upgrade — Spec

**Date:** 2026-05-25  
**Approach:** B — Page-by-page, highest impact first  
**Design language:** Keep warm feel (gradients, Playfair Display), lift quality with better sections, real images, accent cards

---

## Goals

1. Elevate visual quality from "template" to "premium immigration firm"
2. Add depth to every page — real researched content, eligibility tables, fee tables, step-by-step processes
3. Introduce image variety — people (professionals, families), Australian cities (Sydney, Melbourne, Brisbane)
4. Cards with left-border or top-border accents in CMG Red or CMG Gold
5. Dark sections (navy) for visual contrast — especially testimonials and CTAs
6. Fix tools page UX — step-by-step calculator, filterable processing times
7. Upgrade navbar mega-menu to match reference design (visa subclasses by category)

---

## Design Tokens (unchanged)

| Token | Value |
|-------|-------|
| CMG Blue | `#1B3D8F` |
| CMG Red | `#C0392B` |
| CMG Navy | `#0D2357` |
| CMG Gold | `#D4A843` |
| CMG Slate | `#64748B` |
| CMG Light Blue | `#F0F4FF` |
| Heading font | Playfair Display |
| Body font | Inter |

---

## Component Patterns

### Accent Card
White card, 4px left border in CMG Red or CMG Gold, subtle shadow, hover lifts. Used for service cards, visa subclass cards, eligibility items.

### Dark Feature Section
`bg-cmg-navy` with white/gold text. Used for testimonials, CTA banners, stats bar. Breaks monotony of all-white pages.

### Image-Text Row
Full-width section, 2-col: one side is a real Unsplash photo (person or city), other side has heading + body + bullets + CTA button. Alternates photo left/right across pages.

### Stats Band
Dark navy band, no cards — just large bold numbers in CMG Gold with white labels beneath. `500+ Visas · 97% Success · 15 Years · 30 Countries`.

### Step Card
Numbered circle (CMG Blue filled), step title, description. Steps connected by a dotted line on desktop. Used in process sections.

### Feature Table
Styled `<table>` with CMG Blue header row, alternating row backgrounds (`white` / `cmg-light-blue`). Used for fees, processing times, eligibility requirements.

---

## Page 1 — Navbar Mega-Menu

**Visas dropdown** — 3 columns + featured panel:
- Column 1 — Skilled Migration: 189 Skilled Independent, 190 Skilled Nominated, 491 Skilled Regional, 191 Permanent Residence
- Column 2 — Family & Partner: 820/801 Partner (Onshore), 309/100 Partner (Offshore), 300 Prospective Marriage, 143 Parent Contributory
- Column 3 — Study & Visit: 500 Student, 485 Graduate, 600 Visitor, 858 Global Talent
- Featured panel (right): "Most Popular" — 189 Skilled Independent with short blurb + "Learn More →"

**Services dropdown** — 3 columns + featured:
- Assessment & Nomination: Skills Assessment, State Nomination, EOI Assistance, Visa Documentation
- Drafting & Appeals: CDR for Engineers, Reference Letters, Resume & SOP, Refusals & Appeals
- Coaching & Exams: IELTS Academic, IELTS General, PTE Academic, NAATI CCL
- Featured: "Refusals & AAT Appeals" differentiator panel

**Nav items:** Visas · Services · About · Resources · Tools · Contact  
**Right side:** Phone number visible on desktop + "Book Free Consultation" red pill CTA

---

## Page 2 — Homepage

### Section 1: Hero
- Full-bleed background: Sydney Harbour photo (`photo-1506905925346-21bda4d32df4`)
- Gradient overlay: left-to-right navy → transparent
- Headline: "Your Path to Australia Starts Here" (Playfair Display, 64px)
- Subheadline: current text
- CTAs: "Book a Free Consultation" (CMG Blue filled pill) + "Explore Visa Options" (white outline pill)
- Below headline: inline trust badges — MARA Registered · 500+ Visas · 97% Success Rate

### Section 2: Stats Band
- Dark navy background
- 4 stats in a row: `500+` Visas Approved · `97%` Success Rate · `15+` Years Experience · `30+` Countries Served
- Numbers in CMG Gold (Playfair Display 56px), labels in white/70

### Section 3: Services Grid
- Section heading + subheading
- 3×2 grid of Accent Cards (red left-border)
- Each card: Lucide icon (CMG Blue bg circle), title, 2-line description, "Learn More →" link
- Hover: shadow-hover, slight translateY(-2px)

### Section 4: Image-Text Feature Row
- Left: Melbourne city photo (`photo-1514395462725-fb4566210144` or similar)
- Right: "Why MARA Registration Matters"
  - 3 bullet points: legally authorised, accountable to OMARA, protected by code of conduct
  - "About CMG →" CTA button

### Section 5: Process Steps
- Light blue (`cmg-light-blue`) background
- 4 steps with numbered circles (CMG Blue), connecting dotted line
- Step titles + expanded 2-line descriptions (not just 1-liners)

### Section 6: Testimonials
- Dark navy background (`cmg-navy`)
- Section heading in white, gold stars
- 3-col grid of testimonial cards: white/10 background, quotation mark in CMG Gold, client name, role, route (e.g. "India → Melbourne")
- Client avatar: Unsplash face photo (diverse professionals)

### Section 7: CTA Banner
- Full-bleed city night photo with dark overlay
- Headline: "Ready to Start Your Australian Journey?"
- Two buttons: "Book Free Consultation" (white filled) + "Call Us Now" (white outline)

---

## Page 3 — Service Pages (shared template, applied to all 5)

### Skilled Migration (189/190/491)
### Employer Sponsored (482/186)
### Family & Partner (820/309/143)
### Student (500/485)
### Business & Investor (188/888/132)

**Section structure per page:**

1. **Hero** — page-specific photo, headline, subheadline, two CTAs
2. **Overview** — 2-col: intro paragraph (left) + key facts sidebar card (right): processing time range, cost estimate, outcome, visa type (temporary/permanent)
3. **Eligibility Requirements** — 2-3 col grid of accent cards, each card: icon + requirement name + detail (e.g. "Age Under 45", "English: Competent / IELTS 6.0", "Skills Assessment: Required")
4. **Visa Subclasses** — 3-col accent cards, each: subclass number badge + name + key difference + "Learn More" link
5. **Step-by-Step Process** — numbered step cards (5–7 steps), each with icon + title + 2-line description
6. **Fees & Timeline** — styled table: item | government fee | notes; plus processing time bar chart (visual)
7. **Required Documents** — 2-col checklist with checkmark icons
8. **FAQ** — FAQAccordion, 6–8 questions per visa type (real questions)
9. **CTA** — dark banner

**Research content per page:**

**Skilled Migration:**
- Points test: Age (30 pts max), English (20 pts), Overseas experience (15 pts), Australian experience (20 pts), Education (20 pts), Other (specialist education, partner, community language, regional study, STEM, professional year)
- 189: no state nomination required, score typically 85-95+ for invitation
- 190: state nomination adds 5 pts, score typically 75-85+
- 491: regional, adds 15 pts, leads to 191 PR after 3 years
- Government fees 2025-26: 189/190 = AUD $4,770 primary + $2,385 secondary adult
- Processing: 75% in 12-24 months, 90% in 24-36 months

**Employer Sponsored:**
- 482 TSS: 2-year stream (occupation list) or 4-year stream (MLTSSL), employer must be approved sponsor
- 186 ENS: Direct Entry or Temporary Residence Transition (TRT) stream
- Labour market testing requirements
- Genuine temporary entrant (GTE) not required for 186
- Fees: 482 = AUD $3,115 primary; 186 = AUD $4,770

**Family & Partner:**
- 820/801 (onshore) vs 309/100 (offshore)
- Sponsorship requirements: Australian citizen/PR, aged 18+, financial capacity
- Relationship evidence: 4 categories — financial, household, social, commitment
- Processing: 820 = 12-24 months currently; 309 offshore = 24-36 months
- Parent 143: Contributory — AUD $47,825 primary applicant (one of most expensive visas)

**Student:**
- 500: GTE requirement, must maintain enrolment + 80% attendance
- 485 Graduate: 2-year (bachelor) or 4-year (masters/PhD) post-study work rights
- AUD $1,680 for 500; $1,895 for 485
- Work rights: 48 hours/fortnight during study, unlimited during breaks

**Business & Investor:**
- 188A: Business Innovation (AUD $2M turnover, 51% ownership)
- 188B: Investor ($1.5M investment in State/Territory bonds for 4 years)
- 188C: Significant Investor ($5M in complying investments for 4 years)
- 888: Permanent after meeting stream requirements
- 132: Business Talent — direct PR, $400k asset, $300k turnover OR significant venture capital

---

## Page 4 — Tools Page

### Points Calculator (redesigned)
- Step-by-step accordion: one category at a time (Age → English → Overseas Experience → etc.)
- Running score sidebar (sticky on desktop, bottom bar on mobile)
- Result panel: total score + colour bar (green if ≥65, amber if 45-64, red if <45)
- Eligibility badges: shows which visas are likely achievable
- Disclaimer below result

### Fee Estimator (redesigned)
- Step 1: Choose visa type (large clickable cards with visa name + subclass)
- Step 2: Family composition inputs (adults, children)
- Step 3: Itemised breakdown table — Government application fee · Biometrics · Health exam · Skills assessment · IELTS × members · CMG service fee (POA)
- Grand total with disclaimer

### Processing Times (redesigned)
- Filter by visa category (Skilled / Family / Student / Business)
- Card per visa: subclass badge + name + 75th percentile bar + 90th percentile bar (visual progress bars)
- "As at July 2025" source note + disclaimer

---

## Page 5 — Resources / Blog

- **Featured post** at top: large card spanning full width, left = photo, right = category + title + excerpt + "Read More →"
- **Category filter pills**: All · Skilled Migration · Employer Sponsored · Family & Partner · Student · Business
- **3-col grid**: each card has image, category badge (coloured by type), title, excerpt, author avatar + name, date, read time
- Blog post page: article header with hero image, author bio card, related posts at bottom, sidebar with "Book Consultation" CTA

---

## Image Sources (Unsplash)

| Location | Usage | URL hint |
|----------|-------|----------|
| Sydney Harbour Bridge + Opera House | Home hero | `photo-1506905925346-21bda4d32df4` |
| Melbourne CBD skyline | Image-text row | `photo-1514395462725-fb4566210144` |
| Professional woman at desk (Indian) | Skilled migration hero | `photo-1573497019940-1c28c88b4f3e` |
| Business handshake in office | Employer sponsored | `photo-1497366216548-37526070297c` |
| Happy family outdoors | Family & partner | `photo-1511895426328-dc8714191011` |
| University campus / students | Student visa | `photo-1523050854058-8df90110c9f1` |
| City skyline night | Business & investor | `photo-1486325212027-8081e485255e` |
| Professional diverse group | Testimonials avatars | Various portrait shots |
| Sydney Opera House close | CTA banner | `photo-1559508551-44bff1de756b` |

---

## Implementation Order (Approach B)

1. Navbar mega-menu (affects all pages immediately)
2. Homepage — all 7 upgraded sections
3. Skilled Migration page (establishes service page template)
4. Roll template to other 4 service pages with unique content
5. Tools page redesign
6. Resources/blog upgrade

---

## Out of Scope

- Sanity CMS integration (blog stays static)
- Real Resend email (env var required by operator)
- Google Maps embed (API key required)
- Authentication or user accounts
- Actual Calendly/booking integration
