# ALX Listing App

An Airbnb clone listing page built with **Next.js (Pages Router)**, **TypeScript**, and **TailwindCSS**.

This project is part of the **ALX Software Engineering Program**. The goal of this milestone is to scaffold a well-structured Next.js app, establish reusable components, and create a maintainable foundation for future features like property listings, booking, and UI enhancements.

---

## 🚀 Project Goals

- Scaffold a Next.js app with **TypeScript**, **ESLint**, and **TailwindCSS**
- Use the **Pages Router** (App Router disabled)
- Maintain a **clear project structure** with reusable components
- Organize assets in a scalable way (`public/assets`)
- Provide a base for building a listing page similar to Airbnb

---

## 📂 Project Structure

alx-listing-app/
├── components/
│ └── common/
│ ├── Card.tsx # Reusable Card component (property details)
│ └── Button.tsx # Reusable Button component (Book Now, Details, etc.)
│
├── constants/
│ └── index.ts # Centralized constants (API URLs, configs, UI strings)
│
├── interfaces/
│ └── index.ts # TypeScript interfaces (CardProps, ButtonProps, etc.)
│
├── pages/
│ ├── api/ # API routes (default from Next.js Pages Router)
│ └── index.tsx # Main entry page
│
├── public/
│ └── assets/ # Images & SVGs (property images, icons, etc.)
│
├── styles/
│ └── globals.css # Tailwind base, components, utilities
│
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md # Project documentation

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app

2. Install Dependencies
npm install

Run the Development Server
npm run dev

ech Stack

Next.js (Pages Router)
 – React framework for SSR and routing

TypeScript – Type safety & maintainability

TailwindCSS – Utility-first CSS framework for responsive UI

ESLint – Enforcing clean, consistent code

Assets Handling

All project assets (images, icons, SVGs) should be placed in:

public/assets/

Notes

App Router is disabled → using Pages Router

No src/ directory → files are placed directly under the project root

Default Next.js import alias is preserved (no customization)

Components, constants, and interfaces are modularized for reusability and clarity

```
