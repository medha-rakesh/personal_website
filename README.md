# Medha Rakesh's Personal Website

Live at **[medharakesh.vercel.app](https://medharakesh.vercel.app)**.

An editorial, single-page personal site built with React and Vite. Recruiting focused,
with a light cream aesthetic, bold Space Grotesk headlines, and hand-placed botanical
accents. Sections run: Intro (photo and about) → Projects → Experience → Skills → Contact,
with a one-click resume.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

Most content lives in plain data files, so no component changes are needed:

- Projects: `src/data/projects.js`
- Experience: `src/data/experience.js`
- Skills: `src/components/Skills.jsx` (the `groups` array at the top)
- Intro / about copy: `src/components/Intro.jsx`
- Contact copy: `src/components/Contact.jsx`
- Resume PDF: replace `public/resume.pdf`
- Headshot: replace `public/headshot.jpg`
- Nature accents: images in `public/nature/`

## Theming

Swap the single `--accent` value in `src/index.css` (the `:root` block) to re-color the
whole site. The site is committed to a light cream theme.

## Analytics

Vercel Web Analytics and Speed Insights are wired in via `@vercel/analytics` and
`@vercel/speed-insights` in `src/App.jsx`, and enabled in the Vercel dashboard.

## Deploy

Hosted on Vercel. Every push to `main` redeploys automatically. Framework preset is
Vite, build command `npm run build`, output directory `dist`.
