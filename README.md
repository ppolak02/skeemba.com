# Skeemba — GitHub Pages static site

A responsive, single-page portfolio template for Skeemba (mobile apps, games and websites).

## Getting started

1. Upload `index.html`, `styles.css`, `script.js` and `favicon.svg` to the **root** of your GitHub Pages repository (the branch/folder configured in Settings → Pages).
2. Keep `skeemba.com` configured as your custom domain. If GitHub has created a `CNAME` file, **do not delete it**. If missing, you can add a file named `CNAME` containing only `skeemba.com`.
3. Replace the three **EXAMPLE PROJECT** cards in `index.html` with your actual projects. Do not publish fictional work as real work.
4. In `script.js`, replace `hello@example.com` in `CONTACT_EMAIL` with the email where you want to receive enquiries.
5. Update About copy, project descriptions, and contact details to match your business.

## Contact form

The form currently opens the visitor's **email application** with a prepared message using a `mailto:` link. This is intentionally not a live server-backed submission form. It won't send mail automatically, and may not work if the visitor has no email app configured. For a form that submits directly in-browser, connect a service such as Formspree or Netlify Forms and add a privacy notice / spam protection as appropriate.

## Hosting

Works on GitHub Pages with **no paid hosting**. Just publish the four main files in your repository and keep your custom-domain DNS configuration.

## Local preview

Open `index.html` in your browser. Fonts load from Google Fonts when online; system fonts are used if unavailable.
