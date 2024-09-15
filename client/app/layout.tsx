import type { Viewport } from 'next';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/core/providers/theme-provider';
import './globals.css';

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'auth',
  description: 'a simple authentication service',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.ico" />
        </head>
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster richColors className={font.className} />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
