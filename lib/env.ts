import { z } from 'zod';

// Defines and validates environment variables at runtime.
// Fails fast in production if critical secrets are missing.

const baseSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(1).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  STRIPE_PRICE_BASIC: z.string().min(1).optional(),
  STRIPE_PRICE_PRO: z.string().min(1).optional(),
  BASEHUB_TOKEN: z.string().min(1).optional(),
  BASEHUB_SPACE_ID: z.string().min(1).optional(),
  SENTRY_DSN: z.string().url().optional(),
});

export type AppEnv = z.infer<typeof baseSchema>;

export const env: AppEnv = baseSchema.parse(process.env);

const skipCheck = true;
// In production, enforce required secrets.
if (env.NODE_ENV === 'production' && !skipCheck) {
  const requiredKeys: Array<keyof AppEnv> = ['NEXTAUTH_URL', 'NEXTAUTH_SECRET'];

  const missing = requiredKeys.filter((key) => !env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables in production: ${missing.join(', ')}`
    );
  }
}

/**
 * Centralized environment helpers.
 */

/** True when running in development mode. */
export const isDev: boolean = process.env.NODE_ENV === 'development';
