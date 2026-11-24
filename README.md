# Northstar — Startup Landing Page

**Student:** Anant Sinha  
**Roll Number:** 23BCON1670  
**Section:** P  
**Semester:** VII

A responsive, editorial-style landing page for a fictional founder support studio called **Northstar**. The site communicates a four-week founder sprint through clear messaging, responsive sections, and a lightweight inquiry form.

> This is a front-end demonstration project. The contact form validates inputs in the browser and displays a confirmation message; it does not send data to a server.

## Objective
Build a modern responsive business landing page with HTML, CSS, and JavaScript that presents a startup service, explains its approach and program, and provides an inquiry form.

## Features
- Responsive layout for desktop, tablet, and mobile
- Announcement banner and navigation links
- Hero section with abstract orbit illustration built with CSS
- Approach/principles section
- Four-week program overview
- Founder-story style feature section
- Contact form with HTML validation and client-side confirmation
- Mobile navigation toggle with accessible expanded state
- Semantic HTML and descriptive page metadata

## Tech stack
- HTML5
- CSS3 (custom properties, grid, flexbox, responsive media queries)
- Vanilla JavaScript
- Google Fonts (DM Sans and Space Grotesk)

## Project structure
```text
Project_2_Startup_Landing_Page/
├── index.html       # Page structure and content
├── styles.css      # Layout, typography, responsive styling
├── script.js       # Mobile navigation and form interaction
└── README.md       # Project documentation
```

## Run locally
No package installation or build step is required.

### Option A: VS Code Live Server
1. Extract the project ZIP.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click and choose **Open with Live Server**.
5. View the page in the browser at the local URL provided by Live Server.

### Option B: Direct file
Open `index.html` in a browser. Most features work without a server; Live Server is recommended for a consistent local development experience.

## Usage
- Use the navigation to jump to sections.
- On small screens, use the menu button to open/close navigation.
- Fill out the contact form and submit to see the browser validation and demo confirmation.
- The form is not connected to an email service or backend.

## Responsive behavior
- Desktop: split hero and content grids, horizontal navigation, multi-column program cards.
- Tablet: grids collapse and content stacks.
- Mobile: single-column layout, collapsible navigation, compact spacing and typography.

## Learning outcomes
- Creating a semantic landing-page structure
- Styling layouts with CSS Grid and Flexbox
- Designing responsive breakpoints
- Handling DOM events and form submission with JavaScript
- Basic accessibility considerations for labels, status messages, and navigation state
- Writing project documentation and preparing a project for GitHub

## Future improvements
- Connect the contact form to a backend or form service
- Add real program testimonials and brand assets
- Add analytics and SEO metadata
- Add automated accessibility and responsive checks

## License
Created as a college lab demonstration project.
