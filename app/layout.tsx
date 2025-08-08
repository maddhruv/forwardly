import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import ThemeToggle from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { siteConfig } from '@/lib/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Floating centered navigation with container width matching main content */}
        <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
          <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
            <nav className="flex w-full items-center justify-between gap-3 rounded-full border bg-background/80 px-3 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center gap-2 pr-1">
                {/* Light theme logo */}
                <Image
                  alt="Forwardly logo"
                  className="inline rounded-sm dark:hidden"
                  height={20}
                  priority
                  src="/logo.png"
                  width={120}
                />
                {/* Dark theme logo */}
                <Image
                  alt="Forwardly logo"
                  className="hidden rounded-sm dark:inline"
                  height={20}
                  src="/logo-white.png"
                  width={120}
                />
              </div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
