'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'forwardly-theme';

type ThemeMode = 'light' | 'dark';

/**
 * ThemeToggle renders an accessible button to toggle light/dark themes.
 * It persists the user's choice in localStorage and respects system preference.
 */
export default function ThemeToggle(): React.ReactElement {
  const [mode, setMode] = useState<ThemeMode>('light');

  // Initialize from storage or system preference
  const applyTheme = useCallback((next: ThemeMode): void => {
    if (typeof document === 'undefined') {
      return;
    }
    const root = document.documentElement;
    if (next === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures */
    }
  }, []);

  useEffect((): void => {
    const stored =
      (typeof window !== 'undefined'
        ? (window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null)
        : null) ?? null;
    const prefersDark =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false;
    const initial: ThemeMode = stored ?? (prefersDark ? 'dark' : 'light');
    applyTheme(initial);
    setMode(initial);
  }, [applyTheme]);

  const handleToggle = (): void => {
    const next: ThemeMode = mode === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setMode(next);
  };

  const isDark = mode === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <Button
      aria-label={label}
      aria-pressed={isDark}
      onClick={handleToggle}
      size="icon"
      type="button"
      variant="ghost"
    >
      {isDark ? (
        <Sun aria-hidden className="size-4" />
      ) : (
        <Moon aria-hidden className="size-4" />
      )}
    </Button>
  );
}
