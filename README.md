# NexaTech — Digital Solutions Agency

A complete responsive multi-page business website created for a Week 4 Web Development project.

## Project Overview

NexaTech is a fictional digital solutions agency. The website demonstrates website architecture, responsive design, JavaScript interactivity, accessibility, performance-conscious assets and deployment readiness.

## Pages

- `index.html` — Home
- `about.html` — Company story, values and team
- `services.html` — Services and capabilities
- `contact.html` — Contact form with client-side validation

## Features

- Responsive mobile-first layout
- Semantic HTML5 structure
- CSS Grid and Flexbox
- CSS custom properties
- Smooth hover and reveal animations
- Mobile navigation menu
- Contact form validation using JavaScript
- Accessible labels, navigation landmarks and live form status
- Reduced-motion support
- Lightweight CSS-generated visual assets
- No external JavaScript libraries
- GitHub Pages ready

## Folder Structure

```text
nexatech-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## Setup

1. Download or clone the project.
2. Open the folder in VS Code.
3. Open `index.html` with a browser, or use the VS Code Live Server extension.
4. Test all navigation links and the contact form.

No npm installation is required.

## Testing Evidence

Recommended test cases:

| Test | Expected Result |
|---|---|
| Click Home/About/Services/Contact | Correct page opens |
| Resize to mobile | Layout becomes single-column and menu works |
| Submit empty form | Validation messages appear |
| Invalid email | Email error appears |
| Valid form | Success status appears |
| Keyboard navigation | Form controls and links are reachable |
| Reduced motion enabled | Animations are minimized |

## Performance & Accessibility

- Uses a lightweight local structure with no heavy frameworks.
- Uses CSS-generated decorative visuals rather than large image files.
- Images folder is reserved for optimized WebP/AVIF assets if real photography is added.
- Images added later should use descriptive `alt` text.
- Form controls have explicit labels.
- Navigation uses semantic `<nav>`.
- Form status uses `aria-live`.
- `prefers-reduced-motion` is supported.

## Deployment — GitHub Pages

1. Create a GitHub repository named `nexatech-website`.
2. Upload all project files.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save and wait for GitHub Pages to publish the site.
7. Open the generated Pages URL and test every page.

## Design Decisions

The visual system uses a dark professional base with warm gold accents. This creates a premium agency feel while keeping text contrast strong. Grid is used for major page layouts, Flexbox handles navigation and smaller alignment tasks, and CSS variables keep the theme easy to maintain.

## Architecture

The project follows a simple static multi-page architecture:

HTML → page structure and semantic content  
CSS → responsive presentation and animation  
JavaScript → navigation behavior, scroll reveal and form validation

## License

Created as an educational project.
