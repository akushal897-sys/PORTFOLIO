# Kush Agarwal — Finance Portfolio

A single-page finance portfolio site (Investment Banking / Equity Research / Corporate Finance / FP&A / Valuation) built with **TanStack Start v1** (React 19 + Vite 7) and **Tailwind CSS v4**.

## Run it locally

Requires [Bun](https://bun.sh) (or npm).

```bash
bun install        # or: npm install
bun run dev        # starts the dev server
```

Then open the URL the dev server prints (by default http://localhost:8080).

Build for production:

```bash
bun run build
bun run preview
```

Lint / format:

```bash
bun run lint
bun run format
```

## What's inside

| Path | Purpose |
|---|---|
| `src/routes/index.tsx` | The whole portfolio page: cover, about, skills, experience, signature projects, live web platforms, certifications, achievements, contact |
| `src/routes/__root.tsx` | App shell, head metadata, theme init script, toasts |
| `src/styles.css` | Design tokens (navy / gold / accent gradient), dark + light themes, print rules |
| `src/assets/kushal_profile.png` | Cover headshot |
| `src/components/ui/` | shadcn/ui primitives |
| `src/lib/` | Error capture and reporting helpers |
| `src/routeTree.gen.ts` | Auto-generated route tree — do not edit by hand |

## Features

- **Dark / light mode** — toggle in the top navigation, choice saved in `localStorage`, dark by default.
- **Floating WhatsApp button** — bottom-right, opens a pre-filled chat.
- **Contact form** — validates name, email, subject and message, then sends to the configured inbox with success / error toasts.

## Editing content

Almost everything you would want to change lives in `src/routes/index.tsx` as plain data at the top of the file:

- `NAV` — section links
- `PROJECTS` — signature project cards (title, link, problem, objective, methodology, insights, impact)
- `WEBSITES` — the live web platform cards
- Certifications, achievements and experience are written inline in the matching sections

## Notes

- `src/assets/kushal_profile.png.asset.json` is the hosting pointer used when the project runs inside Lovable. When running from this archive, the page imports the real `kushal_profile.png` file instead.
- The contact form delivers to `kush29681@gmail.com`. If it stops arriving, the inbox may need re-confirmation on the form service — check the browser console when submitting.
- No database or login is required; the site is fully static apart from the contact-form submission.
