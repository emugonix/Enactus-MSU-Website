# Enactus MSU Website – PLANNING.md

## Purpose

**Vision**  
Develop a simple, responsive website for Enactus Midlands State University to showcase projects, engage with stakeholders, and drive student participation. The site will feature a home page with anchored sections, and two additional dedicated pages for projects and contact. It will also include a date-restricted membership application form.

## Architecture Overview

- **Site Type**: Static website (HTML, CSS, JS)
- **Pages**: `index.html`, `projects.html`, `contact.html` (optional: `apply.html`)
- **Home Page**: Contains hero, "Who We Are" section, CTA, and optionally the application form
- **Navigation**: Consistent across all pages (Home, About, Projects, Contact)
- **Forms**: Formspree for contact, Google Form for applications
- **Deployment**: GitHub Pages or Netlify
- **Assets**: Optimized images, icons, and accessible alt text

## Navigation Design

All pages include:
```html
<nav>
  <a href="index.html">Home</a>
  <a href="index.html#about">About</a>
  <a href="projects.html">Projects</a>
  <a href="contact.html">Contact</a>
</nav>
```

## Projects Page Structure

- Title and short intro
- Three completed project cards
- One ongoing/upcoming project card
- "Join Us" CTA at the bottom linking to Contact

## Contact Page Structure

- Title and description
- Form (name, email, message) via Formspree
- Additional contact options (email, social links)

## Membership Application Section

- Section or dedicated page with embedded Google Form
- JavaScript date-check to restrict visibility (e.g., 1–22 June)
- Message display if outside date window

## Technologies Used

- HTML5, CSS3, JavaScript (Vanilla)
- Optional: Tailwind CSS
- Form Handling: Formspree.io and Google Forms
- Deployment: Netlify or GitHub Pages

## Goals

- Clear structure and usability
- Mobile-first and responsive
- Fast-loading with compressed media
- Easy to maintain without backend
- Date-restricted membership recruitment

## Risks & Mitigation

| Risk                             | Impact     | Mitigation                                   |
|----------------------------------|------------|----------------------------------------------|
| Poor navigation between pages    | Medium     | Add clear, consistent nav on all pages       |
| Media files increase load times  | High       | Use WebP & compress all images               |
| Future maintainability           | Medium     | Keep HTML/CSS/JS modular and well-commented  |
| Form abuse / spam                | Medium     | Use Formspree validation / reCAPTCHA         |
| Application visibility timing    | Medium     | Use date-based JS control logic              |
