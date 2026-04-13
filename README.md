# NeverGpDzy Personal Homepage

Static personal homepage for `nevergpdzy.cn`.

## Overview

This repository is a zero-build static site built with plain HTML, CSS, and JavaScript.
The site is designed to be deployed directly from the repository root and is suitable for GitHub Pages or any other static host.

Current entrypoints:

- `index.html`: main homepage
- `404.html`: custom 404 page
- `verification.html`: domain or platform verification page

## Features

- Responsive single-page homepage
- Custom external navigation to blog, docs, resume, and other sub-sites
- Time-based greeting and typewriter-style slogan
- One-click email copy interaction
- Konami-code easter egg
- No build step required

## Project Structure

```text
.
|-- .github/
|   `-- workflows/
|-- css/
|-- js/
|-- 404.html
|-- CNAME
|-- index.html
|-- verification.html
`-- README.md
```

## Local Development

You can open `index.html` directly in a browser, or serve the repository with a lightweight local server.

Python 3:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

### GitHub Pages

This repository now includes a GitHub Pages deployment workflow.

1. In the repository settings, set Pages to use `GitHub Actions` as the source.
2. Keep `CNAME` aligned with the production domain.
3. Push changes to `main` to trigger deployment.

### Other Static Hosts

You can also deploy the repository root directly to services such as Vercel, Netlify, Nginx, OSS, or any CDN-backed static host.

## GitHub Actions

The repository includes three workflows:

- `Site Checks`: runs HTML linting plus repository-specific validation for required metadata and local asset references
- `Deploy GitHub Pages`: publishes the repository root to GitHub Pages on pushes to `main`
- `Links Health`: runs on a weekly schedule to check external links and hosted assets

## Customization

Update content in `index.html` to change:

- site title and metadata
- avatar, greeting, and slogan
- external navigation links
- footer text

Update styles in `css/main.css` to change:

- background image
- colors
- spacing and layout

Update font definitions in `css/css.css` if you want to switch CDN or self-host fonts.

## Notes

- The current site does not use a frontend framework or package-based build pipeline.
- `README.md` has been aligned with the current codebase and workflows in this repository.
- The original visual foundation is based on the Dimension template from HTML5 UP.
