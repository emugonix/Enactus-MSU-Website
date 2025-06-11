# Enactus MSU Website – TASK.md

## Phase 1 – Setup & Navigation

- [x] Update `index.html` navbar: remove "Home" link, add "Projects" link (2025-06-11)
- [x] Anchor About link in `index.html` to `#about` section (2025-06-11)
- [x] Create global nav component for consistent use across all pages (2025-06-11)
- [x] Add footer section across all pages (2025-06-11)

## Phase 2 – Projects Page

- [ ] Create `projects.html` structure with hero title and intro
- [ ] Add three completed project cards with image, title, and impact summary
- [ ] Add one ongoing/upcoming project card with distinct visual styling
- [ ] Style all cards for desktop and mobile responsiveness
- [ ] Optimize and compress all project-related images (WebP or JPEG)
- [ ] Add "Join Us" CTA section linking to `contact.html`

## Phase 3 – Contact Page

- [ ] Create `contact.html` layout
- [ ] Add contact form with name, email, message fields
- [ ] Connect form to Formspree or Google Forms endpoint
- [ ] Style contact form for accessibility and responsiveness
- [ ] Add optional section with email and social links

## Phase 4 – Membership Application

- [ ] Create `#join-application` section in `index.html` or separate `apply.html`
- [ ] Design and publish a Google Form for applications (with CV upload enabled)
- [ ] Embed Google Form using iframe with JavaScript date gating (e.g., show only between 1–22 June)
- [ ] Add message for when applications are closed
- [ ] Add "Apply Now" button on home or projects page that scrolls to or links to the application

## Phase 5 – Polish & Final Touches

- [ ] Add Open Graph/meta tags for SEO and social sharing
- [ ] Verify all links and anchor navigation works correctly
- [ ] Cross-browser and mobile testing
- [ ] Confirm all project impact stats with Enactus committee
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
