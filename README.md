# p12-site

## Overview

p12-site is a barebones HTML template for building a storefront that sells iOS
`.p12` certificates and related provisioning files. It includes a landing page,
pricing page, simple account pages, and order forms so you can quickly launch
your own branded site.

## Setup

1. Clone this repository.
2. Serve the root directory with any static web server. For example:

   ```bash
   npx serve .
   ```

   You can also open `index.html` directly in your browser for local testing.

## Deployment

Deploy the contents of this repository to any static hosting provider such as
GitHub Pages, Netlify, or Vercel. Upload the files at the project root and
configure your domain to point to the hosting service.

## Customization

### Pricing

Edit `pricing.html` and any pricing snippets in `index.html` to reflect your own
plans and rates. Replace the example amounts and messaging with your terms.

### Branding

Update titles, navigation text, and logos in the HTML files to use your brand.
Add or modify `assets/css/style.css` to adjust colors, fonts, and other visual
styles. Replace or remove placeholder assets in the `assets` directory.

### Forms

The forms in `CreateOrder`, `Account`, and `help.html` currently submit to
placeholder JavaScript handlers. Replace these with your own endpoints or form
services and adjust the fields as needed for your workflow.

