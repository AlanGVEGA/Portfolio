# Alan Vega — Portfolio

Static, responsive portfolio built with HTML, CSS, and JavaScript. No build step is required.

## Local preview

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.

## Source organization

- `index.html`: semantic page sections, professional content, and asset links.
- `style.css`: fonts, design tokens, base styles, component styles, and mobile layout.
- `script.js`: mobile navigation and the copyright year.
- `images/`: profile photography, existing images, and the AV favicon.
- `fonts/`: locally hosted DM Sans and Space Mono fonts with their license files.
- `.prettierrc.json`: consistent formatting rules for future edits.

The source files use two-space indentation and explanatory section comments. To check formatting:

```sh
npm exec --yes --package prettier@3.6.2 -- prettier --check index.html style.css script.js .prettierrc.json README.md
```

## Publishing and caching

GitHub Pages publishes the site from the repository's publishing branch. Stylesheets and scripts have content-based version parameters in `index.html` so browsers request the correct assets after a release. Update those parameters when changing their file contents.

The site serves fonts from `fonts/`; visitors do not need to contact Google Fonts. Both font families use the SIL Open Font License, included beside the font files.

## Content

Education, professional experience, verified academic projects, skills, and contact links. Project descriptions reflect their current repository documentation and distinguish academic prototypes from production systems.

## Accessibility

Semantic landmarks, a skip link, visible keyboard focus, reduced-motion support, native section anchors, and a mobile menu with expanded-state announcements and Escape support.
