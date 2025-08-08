import {
  Blocks,
  Component,
  Moon,
  Palette,
  Rocket,
  ShieldCheck,
  Type as TypeIcon,
  Wrench,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { Button } from '@/components/ui/button';

export default function Home(): React.ReactElement {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:px-8 md:px-10 md:pt-24">
      {/* Hero */}
      <section className="relative isolate">
        <div className="-z-10 pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,oklch(62.31%_0.188_259.81_/_0.15),transparent_60%)]" />
        <div className="fade-in mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground text-xs shadow-xs">
            Type-safe. Accessible. Beautiful DX.
          </div>

          <div className="mb-6 opacity-90">
            <Image
              alt="Forwardly logomark"
              height={56}
              priority
              src="/logo-primary.png"
              width={200}
            />
          </div>

          <h1 className="text-balance bg-gradient-to-br from-primary to-[#7c3aed] bg-clip-text font-semibold text-4xl text-transparent tracking-tight sm:text-5xl md:text-6xl">
            Build production apps at ludicrous speed
          </h1>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Forwardly is a modern Next.js starter that bakes in strict type
            safety, a11y-first components, and a delightful developer
            experience. Ship faster without compromising quality.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="#get-started">Get started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#features">Explore features</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-muted-foreground text-xs">
            <TechPill label="Next.js 15" />
            <TechPill label="React 19" />
            <TechPill label="TypeScript" />
            <TechPill label="Tailwind 4" />
            <TechPill label="shadcn/ui" />
            <TechPill label="Turbopack" />
            <TechPill label="Biome" />
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section
        className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        id="features"
      >
        <BentoCard
          body="Leverage React Server Components, streaming, and route conventions for real-world scale."
          icon={<Rocket aria-hidden className="size-5" />}
          title="Next.js 15 + App Router"
        />
        <BentoCard
          body="Sub-second HMR for a flow state that sticks. Spend time building, not waiting."
          icon={<Zap aria-hidden className="size-5" />}
          title="Turbopack dev server"
        />
        <BentoCard
          body="Design tokens out of the box with OKLCH palettes and a composable theme."
          icon={<Palette aria-hidden className="size-5" />}
          title="Tailwind CSS 4"
        />
        <BentoCard
          body="Accessible, themeable primitives that look great and scale with you."
          icon={<Component aria-hidden className="size-5" />}
          title="shadcn/ui + Radix"
        />
        <BentoCard
          body="Automatic theme switching with carefully tuned contrast in light and dark."
          icon={<Moon aria-hidden className="size-5" />}
          title="Dark mode by default"
        />
        <BentoCard
          body="End-to-end TypeScript so you can refactor fearlessly and ship with confidence."
          icon={<TypeIcon aria-hidden className="size-5" />}
          title="Type-safety everywhere"
        />
      </section>

      {/* Time saved */}
      <section aria-labelledby="savings-heading" className="mt-20">
        <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2
                className="text-balance font-semibold text-2xl tracking-tight sm:text-3xl"
                id="savings-heading"
              >
                Start days ahead, not hours
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Forwardly bundles setup most teams repeat every project. Skip
                boilerplate and move straight to shipping.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary to-[#7c3aed] px-5 py-3 text-primary-foreground shadow-xs">
              <div className="text-center">
                <div className="font-semibold text-3xl leading-none sm:text-4xl">
                  30–40 hrs
                </div>
                <div className="mt-1 text-xs opacity-90">
                  estimated setup saved
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <SavingItem label="Next.js + App Router wiring" value="~4 hrs" />
            <SavingItem label="Tailwind v4 + tokens + theme" value="~4 hrs" />
            <SavingItem label="shadcn/ui install + theming" value="~6 hrs" />
            <SavingItem
              label="A11y + lint + format via Ultracite/Biome"
              value="~6–8 hrs"
            />
            <SavingItem
              label="DX defaults (fonts, dark mode, layout)"
              value="~3 hrs"
            />
            <SavingItem label="Nav + buttons + primitives" value="~3–5 hrs" />
          </div>
        </div>
      </section>

      {/* Tooling benefits */}
      <section aria-labelledby="tooling-heading" className="mt-20">
        <h2
          className="text-balance font-semibold text-2xl tracking-tight sm:text-3xl"
          id="tooling-heading"
        >
          Batteries-included tooling that sweats the details
        </h2>
        <p className="mt-2 text-muted-foreground">
          Opinionated defaults from tools you already love, so you can focus on
          product.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            icon={<ShieldCheck aria-hidden className="size-5" />}
            items={[
              'Zero-config standards',
              'A11y and type safety rules',
              'AI-friendly code generation',
            ]}
            title="Ultracite"
          />
          <BenefitCard
            icon={<Wrench aria-hidden className="size-5" />}
            items={[
              'Single-tool lint + format',
              'Ridiculously fast (Rust)',
              'Consistent style everywhere',
            ]}
            title="Biome"
          />
          <BenefitCard
            icon={<Blocks aria-hidden className="size-5" />}
            items={[
              'Accessible Radix primitives',
              'Copy-paste then theme',
              'Beautiful New York styling',
            ]}
            title="shadcn/ui"
          />
          <BenefitCard
            icon={<Zap aria-hidden className="size-5" />}
            items={[
              'Pre-commit quality gates',
              'No more broken main',
              'Automated checks that fly',
            ]}
            title="Husky"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="mt-20 rounded-xl border bg-card p-8 shadow-sm"
        id="get-started"
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-semibold text-xl tracking-tight">
              Start building in minutes
            </h3>
            <p className="mt-1 text-muted-foreground text-sm">
              Clone, install, and run — your modern stack is already wired up.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/">Use this template</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.next-forge.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                See inspiration
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechPill({ label }: { label: string }): React.ReactElement {
  return (
    <span className="rounded-md border border-border bg-muted px-2.5 py-1 text-foreground/70 text-xs">
      {label}
    </span>
  );
}

function BentoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}): React.ReactElement {
  return (
    <article className="group hover:-translate-y-0.5 relative overflow-hidden rounded-xl border bg-card p-5 shadow-xs transition-all hover:bg-accent">
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-md border bg-background text-foreground/80 shadow-xs transition-colors group-hover:bg-card">
        {icon}
      </div>
      <h3 className="font-semibold text-base tracking-tight">{title}</h3>
      <p className="mt-1 text-muted-foreground text-sm">{body}</p>
      <div className="-right-8 -top-8 pointer-events-none absolute size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-60" />
    </article>
  );
}

function BenefitCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}): React.ReactElement {
  return (
    <article className="rounded-xl border bg-card p-5 shadow-xs">
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-md border bg-background text-foreground/80 shadow-xs">
        {icon}
      </div>
      <h3 className="font-semibold text-base tracking-tight">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-muted-foreground text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function SavingItem({
  label,
  value,
}: {
  label: string;
  value: string;
}): React.ReactElement {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-background px-4 py-3 text-foreground/80">
      <span>{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
