<p align="center">
  <img src="./app/web/omnipost-web-ui/public/logo.png" alt="OmniPost Logo" width="120" />
</p>

<h1 align="center">OmniPost</h1>

<p align="center">
  <em>Exploring simpler ways to create and share content across platforms.</em>
</p>

<p align="center">
  🚧 Early-stage project — things will break, change, or disappear.
</p>

---

## 📌 Overview

OmniPost is an experimental content creation and publishing UI built to explore how creators can manage posts and connected channels from a single interface.

The repository currently contains the frontend web application. Backend services and integrations are planned for later phases.

---

## ⚙️ Current Status

- ✅ Frontend scaffold created with Vite and React
- ✅ UI layout, pages, and core dashboard components added
- ⚙️ Feature development is ongoing
- 🚧 No production release yet

---

## 📁 Project Structure

```text
omnipost-open/
├── app/
│   └── web/
│       └── omnipost-web-ui/
│           ├── public/                  # Static assets and favicon/logo files
│           ├── src/                     # Source code for the React app
│           │   ├── assets/              # SVG icons and logo components
│           │   ├── components/          # App UI components and sections
│           │   └── index.css            # Global styles
│           │   └── main.jsx             # App entry point
│           │   └── Layout.jsx           # Shared layout wrapper
│           ├── package.json             # Frontend dependencies and scripts
│           ├── vite.config.js           # Vite configuration
│           └── eslint.config.js         # ESLint configuration
├── .gitignore
└── readme.md
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS
- **Routing:** React Router DOM
- **Linting:** ESLint
- **Package management:** npm
- **Build tool:** Vite

> Note: This workspace currently contains the frontend app only.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Debanjan2007/Omnipost.git

# Change into the frontend app directory
cd omnipost-open/app/web/omnipost-web-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local development URL shown by Vite in your browser.

---

## 🧩 Available Scripts

From `app/web/omnipost-web-ui`:

- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

---

## 👤 Contributor

- Debanjan
