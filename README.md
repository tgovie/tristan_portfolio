# Tristan Govier — Portfolio

A short personal site with the hero, about, experience, selected work, athletics and contact sections. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion and Lucide.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
npm run lint
```

## Where things live

All content is in `data/`. You shouldn't need to touch components to update the site.

| File | What it controls |
| --- | --- |
| `data/site.ts` | Name, hero copy, about text, education card, skills lines, athletics section, contact copy, domain, résumé path |
| `data/experience.ts` | Experience rows, plus the independent markets entry |
| `data/projects.ts` | Projects (homepage + `/projects`) |
| `data/socials.ts` | GitHub / LinkedIn / email |
| `data/navigation.ts` | Navbar links |

Routes: `/` (homepage), `/projects` (all projects), and `/resume`, which redirects to the PDF.

## Common edits

**Add a project link.** In `data/projects.ts`, set `link` (where the card goes when clicked) and optionally `github` (adds a small GitHub button). Cards with no `link` or `github` are shown but aren't clickable.

**Add a project.** Append an object to `projects`. `featured: true` shows it on the homepage with a visual; `featured: false` lists it only on `/projects`. Keep the homepage to about five.

**Use a real screenshot.** Put the image in `public/projects/` and set `image: "/projects/name.png"` (16:10 works best). Without an image, the card shows the built-in mockup named by `preview`.

**Add GitHub.** Set `GITHUB_URL` in `data/socials.ts`. Empty links are hidden everywhere.

**Replace the résumé.** Overwrite `public/resume.pdf`. The navbar, the hero and `/resume` all point to it.

**Change the photo.** Replace `public/images/swim-start.jpg`, or change `personal.photo` in `data/site.ts`.

## Deploy (Vercel)

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). The defaults work and no environment variables are required.

- **Analytics (optional):** enable Web Analytics in Vercel and set `NEXT_PUBLIC_ENABLE_ANALYTICS=1`.
- **Custom domain:** update `url` in `data/site.ts` to match.
