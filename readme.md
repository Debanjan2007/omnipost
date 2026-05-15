<p align="center">
  <img src="./app/web/omnipost-web-ui/public/logo.png" alt="OmniPost Logo" width="120" />
</p>

<h1 align="center">OmniPost</h1>

<p align="center">
  <em>One place to create, manage, and publish content across every platform.</em>
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/status-early_development-orange" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61dafb?logo=react" />
</p>

---

## Overview

OmniPost is a planned SaaS platform for creators and teams who manage content across multiple social media channels. Instead of juggling separate tools for each platform, OmniPost brings post creation, scheduling, account management, and analytics into a single unified interface.

This repository — `omnipost-open` — is the **open-source web UI module** of the broader OmniPost platform. It is one of several components that will make up the full product. Other parts of the platform (backend services, integrations, billing, and scheduling infrastructure) are being developed separately and will be closed-source.

---

## Architecture

OmniPost is built as a modular platform:

| Module | Visibility | Description |
|---|---|---|
| `omnipost-open` (this repo) | Open source | Web frontend UI |
| Backend API & services | Closed source | Auth, post management, scheduling |
| Platform integrations | Closed source | Twitter, LinkedIn, Instagram, Facebook connectors |
| Billing & subscription | Closed source | SaaS plans and payments |

---

## Current Status

- Planned SaaS product — early development stage
- Frontend UI shell is feature-complete (no backend connected yet)

| Feature | Status |
|---|---|
| App layout & navigation | Done |
| Dashboard | Done |
| Post editor (UI) | Done |
| Connected accounts (UI) | Done |
| Post history (UI) | Done |
| Settings & profile (UI) | Done |
| Landing, login & signup pages | Done |
| Backend API integration | Planned |
| Real auth (OAuth) | Planned |
| Post scheduling | Planned |
| Analytics | Planned |

---

## Project Structure

```text
omnipost-open/
├── app/
│   └── web/
│       └── omnipost-web-ui/
│           ├── public/                  # Static assets, logo, favicon
│           ├── src/
│           │   ├── assets/              # SVG icons and platform logo components
│           │   ├── components/          # UI components and page sections
│           │   │   ├── Layout/          # Header, Sidebar, Footer
│           │   │   ├── HeroSection/     # Dashboard, post editor, accounts, settings
│           │   │   ├── Landing-page/    # Public landing page
│           │   │   ├── Login-signup/    # Auth pages
│           │   │   └── Error/           # 404 page
│           │   ├── Layout.jsx           # App layout wrapper
│           │   ├── main.jsx             # Entry point
│           │   └── index.css            # Global styles + Tailwind config
│           ├── package.json
│           ├── vite.config.js
│           └── eslint.config.js
├── .gitignore
└── readme.md
```

---

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **Language:** JavaScript (ESModules)
- **Linting:** ESLint

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Debanjan2007/Omnipost.git

# Navigate to the frontend app
cd omnipost-open/app/web/omnipost-web-ui

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the local URL shown by Vite in your browser.

---

## Available Scripts

From `app/web/omnipost-web-ui`:

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Contributing

This module is open source and contributions are welcome. For bugs, suggestions, or feature ideas, open an issue or a pull request.

Note that features requiring backend services (auth, publishing, scheduling) are out of scope for this repository.

---

## Author

Built by [Debanjan](https://github.com/Debanjan2007)
