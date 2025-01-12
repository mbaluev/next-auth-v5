import type { Viewport } from 'next';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/layout/theme';
import { Spinner } from '@/components/ui/spinner';
import { Layout } from '@/components/layout/layout';
import { Check, Info, OctagonX, TriangleAlert } from 'lucide-react';
import { CookiesProvider } from 'next-client-cookies/server';
import './globals.css';

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${process.env.APP_NAME}`,
  description: 'a simple authentication service',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/logo.svg',
        href: '/assets/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/logo-dark.svg',
        href: '/assets/logo-dark.svg',
      },
    ],
  },
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
    <CookiesProvider>
      <SessionProvider session={session}>
        <html lang="en" suppressHydrationWarning>
          <body className={font.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Layout>{children}</Layout>
              <Toaster
                visibleToasts={5}
                position="bottom-right"
                className={font.className}
                toastOptions={{
                  unstyled: true,
                  classNames: {
                    toast: 'flex gap-x-3 px-5 py-4 w-full rounded-lg border bg-card',
                    title: '',
                    icon: 'm-0',
                    closeButton: 'bg-background hover:bg-secondary border-none',
                    success: 'text-success border-success',
                    warning: 'text-warning border-warning',
                    error: 'text-destructive border-destructive',
                    info: 'text-primary border-primary',
                  },
                }}
                icons={{
                  success: <Check />,
                  info: <Info />,
                  warning: <TriangleAlert />,
                  error: <OctagonX />,
                  loading: <Spinner />,
                }}
              />
            </ThemeProvider>
          </body>
        </html>
      </SessionProvider>
    </CookiesProvider>
  );
}
