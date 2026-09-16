# 🚀 Team Rocket — SWE Portfolio Website

> **ROCKET_OS // v1.0.exe** — A retro pixel-art themed portfolio for Team Rocket's Software Engineering project.

[![Deploy to GitHub Pages](https://github.com/Harshita445/SWE_portfolio_website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Harshita445/SWE_portfolio_website/actions/workflows/deploy.yml)

**Live site:** [https://harshita445.github.io/SWE_portfolio_website/](https://harshita445.github.io/SWE_portfolio_website/)

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (Static Export)
- **Styling:** TailwindCSS with custom Material Design 3 color tokens
- **Font:** Space Mono (Google Fonts)
- **Icons:** Material Symbols Outlined
- **Deployment:** GitHub Pages via GitHub Actions

## 🎨 Design

Built from the [Stitch](https://stitch.withgoogle.com/projects/11272994554493069001) design — retro pixel OS / terminal aesthetic:
- Hard drop shadows (`2px 2px 0 #1a1c1c`)
- Uppercase monospace typography
- Teal `#3d6568` primary color palette
- Scanline overlay for retro CRT effect
- Pixel cursor blink animation

## 📄 Pages

| Page | Description |
|---|---|
| `/` | Team Roster — crew member cards with skills & links |
| `/project` | Digital Graveyard — project details & pitch deck |

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static export
npm run build
```

## 🚀 Deployment

Every push to `main` triggers the GitHub Actions workflow:
1. Runs `npm run build` → generates `/out` directory
2. Deploys `/out` to GitHub Pages

**GitHub Pages source:** Must be set to **GitHub Actions** in repo settings.

## 👥 Team Members

| Member | Role |
|---|---|
| Lakshay | Backend Developer |
| Harshita | Frontend Developer |
| Parth | Database Architect |
| Arshdeep | Documentation & UML |

---

*© 2025 TEAM ROCKET LABS. ALL RIGHTS RESERVED.*
