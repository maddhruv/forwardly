# Starter Kit Technical Plan (Next.js App Router)

This is a pragmatic, executable checklist to build a production‑grade Next.js starter with: Supabase (Postgres + Auth/Storage), NextAuth, Resend email, Basehub CMS, Stripe payments, best‑practice security, SEO (search + AI), Vitest + Playwright, and CI/CD. Tasks are grouped for sequential execution and designed so each can land as an independent PR.

---

## Assumptions

- Next.js 14 (App Router) + TypeScript strict mode
- Node.js 20+; package manager: `pnpm` or `yarn` (commands shown with `yarn`)
- Deployment on Vercel; GitHub Actions for CI
- Database: Supabase (managed Postgres), migrations with Drizzle ORM
- Auth: NextAuth (Auth.js) using email + OAuth providers, DB session store
- Email: Resend (production) + local preview in dev
- CMS: Basehub (GraphQL). Note: "CMD" interpreted as CMS
- Payments: Stripe (Checkout + Billing Portal + webhooks)
- Lint/format: Biome + Ultracite (per workspace rules)
- Testing: Vitest + React Testing Library, Playwright for E2E

---

## Phase 0 — Repo Foundation and DX

- [x] Initialize TypeScript Strict

  - [x] Enable `"strict": true`, `"noUncheckedIndexedAccess": true`, `"noImplicitOverride": true` in `tsconfig.json`.
  - [x] Enforce `import type` and `export type` for types.

- [x] Biome + Ultracite

  - [x] Ensure `biome.jsonc` present and aligned with workspace rules.
  - [x] Add scripts: `format`, `lint`, and `lint:strict` using Ultracite.
  - [ ] Configure pre-commit hooks via `lefthook` or `husky` + `lint-staged` to run format/lint/typecheck.

- [x] Project structure and path aliases

  - [x] Add `@/*` path alias in `tsconfig.json` and Next config. (Alias already active; Next.js resolves via bundler.)

- [x] Env management

  - [x] Create `.env.example` with all keys (see Secrets Checklist below).
  - [x] Add runtime validation with `zod` + a tiny `src/lib/env.ts` that fails fast in dev/test/prod.

- [x] Accessibility & i18n foundations
  - [x] Add base `lang` attribute and meta.
  - [x] Add ESLint/BIOME rules aligned with a11y list.

---

## Phase 1 — UI & Theming Essentials

- [ ] Global styles

  - [ ] Set up CSS variables for light/dark theme.
  - [ ] Install and configure a minimal component library (or keep current UI primitives) with accessible patterns.

- [ ] Layout
  - [ ] Define `src/app/layout.tsx` with metadata, theme provider, and safe fonts.
  - [ ] Add a responsive navigation with keyboard support.

---

## Phase 2 — Database with Supabase + Drizzle

- [ ] Dependencies and tooling

  - [ ] `yarn add drizzle-orm @vercel/postgres postgres @supabase/supabase-js zod` (or `pg` for node runtime)
  - [ ] `yarn add -D drizzle-kit` and configure `drizzle.config.ts`.

- [ ] Supabase project

  - [ ] Create Supabase project; add `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
  - [ ] Create a service role key `SUPABASE_SERVICE_ROLE` (used only server-side).

- [ ] Schema and migrations

  - [ ] Define initial schema: `users`, `accounts` (for NextAuth), `sessions`, `verificationTokens`, `profiles`, `subscriptions`, `audit_log`.
  - [ ] Generate SQL migrations with `drizzle-kit` and apply via `supabase` or direct `psql`.
  - [ ] Add RLS policies for application tables (strict by default; row ownership via user id).

- [ ] Data access layer
  - [ ] Create `src/server/db/index.ts` for Drizzle client + type exports.
  - [ ] Add Zod schemas mirroring DB shapes for input validation.

---

## Phase 3 — Authentication with NextAuth (Auth.js)

- [ ] Install

  - [ ] `yarn add next-auth @auth/drizzle-adapter` (or custom Drizzle adapter mapping to schema above).

- [ ] Providers

  - [ ] Email provider via Resend: transactional magic link for sign in.
  - [ ] OAuth providers (start with GitHub/Google): add client IDs/secrets.

- [ ] Sessions and security

  - [ ] Use secure cookies with `__Secure-` prefix in production.
  - [ ] Configure session strategy (JWT vs database). Prefer DB for revocation.
  - [ ] Implement email verification flow (verification tokens table).

- [ ] Route handlers

  - [ ] `src/app/api/auth/[...nextauth]/route.ts` with configured providers and adapter.
  - [ ] Strong CSRF defaults from NextAuth; ensure `NEXTAUTH_URL` and `NEXTAUTH_SECRET`.

- [ ] UI
  - [ ] Sign in/up screens with accessible forms and passwordless email.
  - [ ] Add `useSession()` and server helpers for RSC (`auth()` wrapper).

---

## Phase 4 — Email with Resend

- [ ] Setup

  - [ ] `yarn add resend @react-email/components`.
  - [ ] Add `RESEND_API_KEY`. Configure domain, DKIM, and production sender.

- [ ] Templates

  - [ ] Create `src/emails/*` React email templates (layout + components).
  - [ ] Utility `sendEmail` with types and error handling + rate limit.

- [ ] Events
  - [ ] Hook into NextAuth Email provider, signup confirmations, passwordless sign in, receipt emails from Stripe webhook events.

---

## Phase 5 — CMS with Basehub

- [ ] Install + config

  - [ ] `yarn add graphql graphql-request`.
  - [ ] Add `BASEHUB_TOKEN` and `BASEHUB_SPACE_ID` (if applicable). Store server-side only.

- [ ] Content model

  - [ ] Define content types: `page`, `blog_post`, `navigation`, `seo_defaults`.
  - [ ] Model rich text and media; enable preview API token for drafts.

- [ ] Queries and SDK

  - [ ] Create `src/server/cms/basehub.ts` wrapper using `GraphQLClient` with typed queries.
  - [ ] Utility to map Basehub rich text to React components (SSR-safe).

- [ ] Pages
  - [ ] Dynamic routes pulling content at build/request time with ISR.
  - [ ] Live preview toggle via draft token in dev.

---

## Phase 6 — Payments with Stripe

- [ ] Install + env

  - [ ] `yarn add stripe`.
  - [ ] Add `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_IDS`.

- [ ] Checkout + portal

  - [ ] `src/app/api/stripe/checkout/route.ts` creates Checkout Session for a plan.
  - [ ] `src/app/api/stripe/portal/route.ts` returns Billing Portal URL.
  - [ ] Client hooks and buttons to invoke both endpoints.

- [ ] Webhooks

  - [ ] `src/app/api/stripe/webhook/route.ts` verifying signature, handling events: `checkout.session.completed`, `customer.subscription.updated|deleted`, `invoice.paid|payment_failed`.
  - [ ] Update `subscriptions` table, emit emails via Resend, write to `audit_log`.

- [ ] Entitlements
  - [ ] Add RBAC/feature flags mapped to subscription tier.
  - [ ] Gate protected routes and server actions.

---

## Phase 7 — Security Hardening

- [ ] Headers and CSP

  - [ ] Configure security headers in `next.config.js`/`middleware.ts`: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`, `Referrer-Policy`.
  - [ ] Use nonces/hashes for inline styles if needed.

- [ ] Input validation and sanitization

  - [ ] Zod for all server actions and API inputs; reject on parse fail.
  - [ ] HTML sanitization for user-generated content.

- [ ] Rate limiting and bot protection

  - [ ] Add IP/user rate limits to auth/email endpoints (e.g., Upstash Redis or Supabase RLS counters).
  - [ ] Add Turnstile/HCaptcha to public write forms.

- [ ] Secrets and cookies

  - [ ] Mark cookies `Secure`, `HttpOnly`, `SameSite=Lax|Strict`.
  - [ ] Verify all secrets only loaded server-side; forbid exposing service role keys.

- [ ] Audit + logs
  - [ ] Append `audit_log` entries for auth, payment, admin actions.

---

## Phase 8 — SEO for Search and AI

- [ ] Next.js metadata API

  - [ ] Implement `generateMetadata` per route; default site metadata in layout.
  - [ ] Dynamic OG images using `@vercel/og`.

- [ ] Structured data

  - [ ] JSON-LD for Organization, WebSite, BreadcrumbList, Article/BlogPosting, Product (for plans), FAQ.

- [ ] Indexing hygiene

  - [ ] `robots.txt`, `sitemap.xml` (including dynamic CMS pages), canonical URLs, hreflang (if i18n).
  - [ ] Add `X-Robots-Tag` and meta robots for previews.

- [ ] AI readiness
  - [ ] Provide clean, well-structured content (headings, landmarks, schema).
  - [ ] Optional: publish FAQ/HowTo JSON‑LD for LLM snippets.

---

## Phase 9 — Testing: Vitest + Playwright

- [ ] Unit and integration (Vitest)

  - [ ] `yarn add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom`.
  - [ ] Configure `vitest.config.ts` with `jsdom` and alias.
  - [ ] Add sample tests for components, server utilities, and auth routes.

- [ ] E2E (Playwright)

  - [ ] `yarn add -D @playwright/test` then `npx playwright install --with-deps`.
  - [ ] Define core journeys: sign up, sign in, subscribe, billing portal, CMS page render.
  - [ ] Use test users + seeded DB; run against Vercel Preview URL in CI.

- [ ] Coverage and reports
  - [ ] Enable coverage in Vitest; upload to Codecov in CI.

---

## Phase 10 — CI/CD

- [ ] GitHub Actions

  - [ ] Workflows: `ci.yml` (install, cache, typecheck, lint, test, build), `e2e.yml` (deploy preview → run Playwright on preview URL).
  - [ ] Secrets in GitHub: only for CI needs (never service role in client).

- [ ] Vercel

  - [ ] Connect repo; configure env vars per environment.
  - [ ] Protect production with required checks; preview comments with links.

- [ ] Release
  - [ ] Conventional commits; `changesets` for versioning if publishing template.

---

## Phase 11 — Observability and Runtime Ops

- [ ] Error monitoring: `yarn add @sentry/nextjs` (or alternative). Configure DSN and source maps.
- [ ] Analytics: Vercel Analytics + optional PostHog.
- [ ] Health checks: simple `/api/health` using DB ping.

---

## Project Scripts (package.json)

- [ ] `dev`: `next dev`
- [ ] `build`: `next build`
- [ ] `start`: `next start`
- [ ] `typecheck`: `tsc --noEmit`
- [ ] `lint`: `npx ultracite lint`
- [ ] `format`: `npx ultracite format`
- [ ] `test:unit`: `vitest --run`
- [ ] `test:e2e`: `playwright test`
- [ ] `db:generate`: `drizzle-kit generate`
- [ ] `db:migrate`: `drizzle-kit migrate`
- [ ] `email:preview`: start a local email preview server if desired

---

## Secrets Checklist (.env.example)

- [ ] `NEXTAUTH_URL=`
- [ ] `NEXTAUTH_SECRET=`
- [ ] `RESEND_API_KEY=`
- [ ] `SUPABASE_URL=`
- [ ] `SUPABASE_ANON_KEY=`
- [ ] `SUPABASE_SERVICE_ROLE=` (server only)
- [ ] `STRIPE_SECRET_KEY=`
- [ ] `STRIPE_WEBHOOK_SECRET=`
- [ ] `STRIPE_PRICE_BASIC=` / `STRIPE_PRICE_PRO=`
- [ ] `BASEHUB_TOKEN=`
- [ ] `BASEHUB_SPACE_ID=` (if applicable)
- [ ] Optional: `SENTRY_DSN=`

---

## Acceptance Criteria per Epic

- [ ] Foundation: Type checks pass, lint/format clean, CI green on empty app.
- [ ] DB: Migrations apply cleanly; RLS enabled; CRUD server actions covered by unit tests.
- [ ] Auth: Email + at least one OAuth provider; protected routes working; session persisted; CSRF verified.
- [ ] Email: Transactional emails send in prod; dev preview works; templates covered by snapshot tests.
- [ ] CMS: Content renders with ISR; preview mode functional; SEO fields sourced from CMS.
- [ ] Payments: Checkout + portal working; webhooks update DB; entitlements enforced; receipts sent.
- [ ] Security: Security headers present; rate limits in place; inputs validated; no secret leakage.
- [ ] SEO: Sitemaps, robots, canonical; JSON-LD validated by Rich Results test; dynamic OG images.
- [ ] Testing: Unit + E2E core flows; coverage threshold set and met.
- [ ] CI/CD: PRs run full checks; previews auto-deploy; main deploys to production after checks.

---

## Initial Implementation Order (PR-sized Batches)

1. Foundation (TS, Biome/Ultracite, env validation, scripts)
2. DB + Drizzle + Supabase bootstrapping
3. NextAuth core (email provider via Resend)
4. OAuth providers (GitHub/Google)
5. UI auth screens + protected routes
6. Basehub CMS integration + a CMS-driven page
7. Stripe Checkout + webhooks + entitlements
8. Security headers + rate limit + audit log
9. SEO and dynamic OG images
10. Vitest unit tests + baseline Playwright E2E
11. CI workflows + Vercel wiring
12. Observability (Sentry) + health check

---

## Notes

- Keep service-role keys strictly server-side. Never expose in client bundles.
- Prefer server actions and Route Handlers over legacy API routes when possible.
- Use Zod schemas at boundaries; return typed results.
- Adhere to accessibility rules and avoid interactive roles on non-interactive elements.
