# Forwardly

A modern, high-performance Next.js application with strict type safety, accessibility standards, and consistent code quality.

## 🚀 Features

- **Next.js 15** - Latest version with App Router and React Server Components
- **React 19** - The latest version of React with improved performance
- **TypeScript** - Full type safety throughout the codebase
- **TailwindCSS 4** - Utility-first CSS framework with the latest features
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

## 🧩 Project Structure

```
forwardly/
├── app/                # Next.js App Router directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
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
