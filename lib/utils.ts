import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merges conditional class names and resolves Tailwind CSS conflicts.
export function cn(
  ...inputs: Array<
    string | number | null | undefined | false | Record<string, boolean>
  >
): string {
  return twMerge(clsx(inputs));
}
