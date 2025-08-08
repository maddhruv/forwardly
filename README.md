# Forwardly

<!-- markdownlint-disable MD033 -->
<p align="center">
  <img src="./public/next.svg" alt="Forwardly logo" height="64" />
</p>

<h2 align="center">Forwardly</h2>

<p align="center">A modern Next.js starter focused on type safety, accessibility, and a beautiful developer experience.</p>

<p align="center">
  <a href="https://nextjs.org"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" /></a>
  <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" /></a>
  <a href="https://www.typescriptlang.org"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" /></a>
  <a href="https://tailwindcss.com"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" /></a>
  <a href="https://ui.shadcn.com"><img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-111?logo=radixui&logoColor=white" /></a>
  <a href="https://biomejs.dev"><img alt="Biome" src="https://img.shields.io/badge/Biome-2D3A3A" /></a>
  <a href="https://typicode.github.io/husky"><img alt="Husky" src="https://img.shields.io/badge/Husky-000?logo=git&logoColor=white" /></a>
  <a href="https://vercel.com/docs/turbopack"><img alt="Turbopack" src="https://img.shields.io/badge/Turbopack-000000?logo=vercel&logoColor=white" /></a>
</p>
<!-- markdownlint-enable MD033 -->

---

## 🚀 Features

- **Next.js 15** - Latest version with App Router and React Server Components
- **React 19** - The latest version of React with improved performance
- **TypeScript** - Full type safety throughout the codebase
- **TailwindCSS 4** - Utility-first CSS framework with the latest features
- **shadcn/ui** - Beautiful, accessible component library built with Radix UI and Tailwind
- **Turbopack** - Lightning-fast development server
- **Dark Mode Support** - Automatic theme switching based on system preferences
- **Responsive Design** - Mobile-first approach for all components
- **Geist Fonts** - Beautiful typography with Geist Sans and Geist Mono

## 🛠️ Tooling

### Ultracite

Ultracite enforces strict type safety, accessibility standards, and consistent code quality using Biome's lightning-fast formatter and linter.

**Key Principles:**

- Zero configuration required
- Subsecond performance
- Maximum type safety
- AI-friendly code generation

### Biome

A high-performance JavaScript/TypeScript toolchain that replaces ESLint, Prettier, and more with a single tool.

- **Fast:** Written in Rust for maximum performance
- **Comprehensive:** Linting, formatting, and more in one tool
- **Consistent:** Enforces a consistent code style across your project

### Husky

Git hooks made easy for automated quality checks before commits.

### shadcn/ui

A collection of re-usable components built with Radix UI and Tailwind CSS.

- **Customizable:** Copy and paste components into your project and customize to your needs
- **Accessible:** All components follow WAI-ARIA guidelines and have appropriate ARIA attributes
- **Themeable:** Style components with your own theme using CSS variables
- **Style:** Using the "New York" style variant for a modern, clean look

## 🧩 Project Structure

```plaintext
forwardly/
├── app/                # Next.js App Router directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
├── components/         # Reusable UI components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions and shared code
├── public/             # Static assets
└── ...config files     # Various configuration files
```

## 📋 Scripts

```bash
# Development
npm run dev     # Start development server with Turbopack

# Production
npm run build   # Build for production
npm run start   # Start production server

# Quality
npm run lint    # Run linting checks
```

## 🔍 Code Quality Standards

This project enforces strict code quality standards including:

- **Accessibility (a11y)** - Ensuring all components are accessible
- **Type Safety** - No `any` types or type assertions
- **Best Practices** - Following React and Next.js best practices
- **Performance** - Optimizing for speed and efficiency
- **Consistency** - Uniform code style and patterns

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Biome Documentation](https://biomejs.dev/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
