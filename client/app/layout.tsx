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
  title: 'next-auth-v5',
  description: 'next-auth-v5',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <meta name="msapplication-square70x70logo" content="/favicon.ico" />
          <meta name="msapplication-square150x150logo" content="/favicon.ico" />
          <meta name="msapplication-square310x310logo" content="/favicon.ico" />
          <meta name="msapplication-wide310x150logo" content="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#111" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
            key="meta_description"
          />
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
