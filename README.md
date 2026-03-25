# harryturnbull.com

Personal portfolio site for Harry Turnbull.

## Stack

- [Astro](https://astro.build/) — static site generator
- CSS — styling
- Deployed on [Netlify](https://app.netlify.com/projects/harryturnbull/overview) (sign in with GitHub)

## Pages

- `/` — About/home
- `/projects` — Project showcase (currently suspended)

## Content

Project content lives in `src/content/projects/` as Markdown files with YAML frontmatter. Project images are in `public/projects/`.

## Dev

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build locally
```
