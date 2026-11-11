# The-Tiny Website

A responsive landing page prototype for a URL-shortening service. It includes a URL-shortening form, sample popular links, pricing and feature sections, and a mobile navigation menu.

## Features

- Responsive layout built with Tailwind CSS.
- Mobile menu toggle and demo URL-form interactions powered by vanilla JavaScript.
- Copy button for the generated demo URL.
- Static sections for popular links, pricing, product features, and company information.

## Run locally

No build step or package installation is required. Open `index.html` in a browser, or serve the project from the workspace root with a local web server. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

This is a front-end demo, not a connected URL-shortening service. The form generates a random example code in the browser; it does not create or redirect to a real short link. The displayed popular links, statistics, and other service information are static sample content. Tailwind CSS, DaisyUI, and Font Awesome are loaded from CDNs, so an internet connection is needed for those assets.
