# Khateeb's Portfolio

Personal portfolio website for **A.Rahman S. Al-Khateeb (Khateeb)** — Fullstack Developer & Technical Trainer.

**Live site:** [khateeb.me](https://khateeb.me)

## Tech Stack

| Layer     | Technology                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------- |
| Framework | [Nuxt 4](https://nuxt.com) + [Vue 3](https://vuejs.org)                                            |
| Language  | TypeScript                                                                                         |
| Styling   | Tailwind CSS via [@nuxt/ui v4](https://ui.nuxt.com)                                                |
| Content   | [@nuxt/content v3](https://content.nuxt.com) (YAML)                                                |
| SEO       | [@nuxtjs/seo](https://nuxtseo.com) (sitemap, robots, schema-org, og-image)                         |
| Images    | [@nuxt/image](https://image.nuxt.com)                                                              |
| Fonts     | [@nuxt/fonts](https://fonts.nuxt.com) (Funnel Display Variable)                                    |
| PDF       | [jsPDF](https://github.com/parallax/jsPDF)                                                         |
| OG Images | [Satori](https://github.com/vercel/satori) + [@resvg/resvg-js](https://github.com/yisibl/resvg-js) |

## Features

- **Home page** — Hero, animated titles bar, about, stats, professional experience, skills, projects, social proof, articles, contact form, and resume download
- **Blog** — Articles on UX, software design, and engineering; linked to external publications
- **Projects** — Gallery with screenshots, tech stack, and live links
- **Experience** — Detailed career history with achievements per role
- **Skills** — Hard skills (with icons and detail pages) and soft skills
- **Resume generator** — Downloads a PDF resume built programmatically from content
- **OG images** — Auto-generated open graph images per page using Satori
- **SEO** — Sitemap, robots.txt, Schema.org structured data, Twitter cards
- **Responsive** — Mobile-first layout with accessible navigation
- **Contact form** — Powered by [Formspree](https://formspree.io)

## Project Structure

```
app/
├── components/       # UI components (home sections, app shell, OG images)
├── composables/      # useResumeGenerator
├── layouts/          # Default layout (header + footer)
├── pages/            # Routes: /, /blog, /experience, /projects, /skills
├── assets/css/       # Global styles
content/              # YAML content collections
├── personalInfo.yml
├── skills.yml
├── articles/
├── certifications/
├── courses/
├── education/
├── experience/
├── projects/
├── references/
├── social-proof/
public/               # Static assets (fonts, images)
content.config.ts     # @nuxt/content collection schemas (Zod)
resume.config.ts      # Resume PDF configuration
nuxt.config.ts
```

## Setup

Install dependencies:

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

## Production

Build for production:

```bash
npm run build
```

Generate static site:

```bash
npm run generate
```

Preview production build locally:

```bash
npm run preview
```

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for hosting options.

## Content

All content is managed as YAML files under `content/`. To update personal info, skills, experience, projects, or articles, edit the corresponding `.yml` file — no code changes needed.

Content collections are validated with [Zod](https://zod.dev) schemas defined in `content.config.ts`.
