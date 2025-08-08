import { isDev } from './env';

/**
 * Site-wide configuration for metadata and URLs.
 */
export type SiteConfig = {
  description: string;
  title: string;
  url: string;
};

/**
 * Global site config used across the app.
 * Keys are alphabetized for consistency.
 */
export const siteConfig = {
  description:
    'A modern Next.js starter focused on type safety, accessibility, and a beautiful developer experience.',
  title: 'Forwardly',
  url: isDev ? 'http://localhost:3000' : 'https://forwardly.maddhruv.dev',
} as const satisfies SiteConfig;
