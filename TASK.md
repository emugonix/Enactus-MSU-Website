# Enactus MSU Website – TASK.md

## Phase 1 – Setup & Navigation

- [x] Update `index.html` navbar: remove "Home" link, add "Projects" link (2025-06-11)
- [x] Anchor About link in `index.html` to `#about` section (2025-06-11)
- [x] Create global nav component for consistent use across all pages (2025-06-11)
- [x] Add footer section across all pages (2025-06-11)

## Phase 2 – Projects Page

### 🔳 Project Sections (Layout & Content)

#### 🥇 Delta Corporation Campaign
- [x] Use both `delta1` and `delta2` images at the top of the projects page (2025-06-12)
- [x] Display side-by-side with text (image left, text right or stacked for mobile) (2025-06-12)
- [x] Highlight this project first to emphasize its visibility and competition prestige (2025-06-12)
- [x] Placeholder text area: *User will supply description and impact* (2025-06-12)

#### 🏥 New Life Direction Foundation (NLF Outreach)
- [x] Use `nlf` image (2025-06-12)
- [x] Layout: Image left, text right (2025-06-12)
- [x] Emphasize community outreach and student engagement (2025-06-12)
- [x] Placeholder text area: *User will supply summary and outcomes* (2025-06-12)

#### ⚙️ Schneider Project (Ongoing)
- [x] Use `shneider` image (2025-06-12)
- [x] Layout: Image right, text left (alternating style for visual rhythm) (2025-06-12)
- [x] Highlight that it is currently ongoing (2025-06-12)
- [x] Placeholder text area: *User will supply brief explanation of goals* (2025-06-12)

### 💡 Additional Tasks
- [x] Ensure all images are optimized (e.g., WebP or compressed JPEG) (2025-06-12)
- [x] Make layout responsive using CSS Grid or Flexbox (2025-06-12)
- [x] Use consistent padding, background colors, and typography (2025-06-12)
- [x] Style headers and captions with Enactus branding (2025-06-12)
- [x] Add “Join Us” CTA section at bottom linking to `contact.html` (2025-06-12)

## Phase 3 – Contact Page

- [x] Create `contact.html` layout (2025-06-12)
- [x] Add contact form with name, email, message fields (2025-06-12)
- [x] Connect form to Formspree or Google Forms endpoint (2025-06-12)
- [x] Style contact form for accessibility and responsiveness (2025-06-12)
- [x] Add optional section with email and social links (2025-06-12)

## Phase 4 – Membership Application

- [x] Create `#join-application` section in `index.html` or separate `apply.html` (2025-06-12)
- [x] Design and publish a Google Form for applications (with CV upload enabled) (2025-06-12)
- [x] Embed Google Form using iframe with JavaScript date gating (e.g., show only between 1–22 June) (2025-06-12)
- [x] Add message for when applications are closed (2025-06-12)
- [x] Add "Apply Now" button on home or projects page that scrolls to or links to the application (2025-06-12)

## Phase 5 – Polish & Final Touches

- [x] Add Open Graph/meta tags for SEO and social sharing (2025-06-12)
- [x] Verify all links and anchor navigation works correctly (2025-06-12)

## Final Steps for Launch

- [ ] **Replace Placeholders:**
  - Update the Formspree link in `contact.html` with your actual form ID.
  - [x] Embed the final Google Form in `apply.html`. (2025-07-01)
  - Fill in the project descriptions in `projects.html`.
- [ ] **Content Review:**
  - Confirm all project impact statistics with the Enactus committee.
  - Proofread all text content.
- [ ] **Testing:**
  - Conduct final cross-browser and mobile testing.
- [ ] Optimize all assets and ensure responsiveness on various screen sizes

## Milestones

| ID | Name               | Completion Criteria                                      |
|----|--------------------|----------------------------------------------------------|
| M1 | Navbar Revamp       | Navbar updated across all pages                         |
| M2 | Projects Page Ready | 4 project entries created, styled, and visible          |
| M3 | Contact Page Ready  | Contact form styled and linked with working submission  |
| M4 | Application Feature | Application form visible only within recruitment window |
| M5 | Polish Complete     | Optimized, responsive, accessible and SEO-ready website |

## Notes / Discoveries

- Project titles and blurbs will be collected from team members
- Ongoing project: Tech Literacy Bootcamps to be visually highlighted
- Formspree free tier supports simple contact forms without login
- University subdomain setup pending IT department approval
- Google Forms is used for membership applications with file upload enabled
- Conditional visibility of application form is handled via JavaScript date check
