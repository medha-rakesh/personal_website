# Medha Rakesh — Personal Website

Editorial single-page portfolio built with React + Vite. Recruiting-focused:
Projects → Experience → Skills → About → Contact, with a one-click résumé.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All content lives in plain data files — no component changes needed:

- **Projects** — `src/data/projects.js`
- **Experience** — `src/data/experience.js`
- **Skills** — `src/components/Skills.jsx` (the `groups` array at top)
- **About / Contact copy** — `src/components/About.jsx`, `src/components/Contact.jsx`
- **Résumé PDF** — replace `public/resume.pdf`

## Theming

Swap the single `--accent` value in `src/index.css` (`:root` and the dark-mode block)
to re-color the whole site. Light and dark modes both follow the visitor's OS theme.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at vercel.com → New Project. Framework preset: **Vite**.
   Build command `npm run build`, output dir `dist`. Deploy.
