import type { Viewport } from 'next';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import {
  CheckIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
  CircleBackslashIcon,
} from '@radix-ui/react-icons';
import './globals.css';
import { Spinner } from '@/components/ui/spinner';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'auth',
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
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-full bg-background">
              <Header />
              <main className="flex flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster
              // expand
              visibleToasts={3}
              position="bottom-center"
              className={font.className}
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast: 'flex gap-x-3 px-5 py-4 w-full rounded-lg border bg-card',
                  title: '',
                  icon: 'm-0',
                  closeButton: 'bg-background hover:bg-secondary border-none',
                  success: 'text-emerald-500 border-emerald-500',
                  warning: 'text-yellow-500 border-yellow-500',
                  error: 'text-destructive border-destructive',
                  info: 'text-primary border-primary',
                },
              }}
              icons={{
                success: <CheckIcon />,
                info: <InfoCircledIcon />,
                warning: <ExclamationTriangleIcon />,
                error: <CircleBackslashIcon />,
                loading: <Spinner />,
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
