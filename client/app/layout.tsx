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

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'auth',
  description: 'a simple authentication service',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.ico',
        href: '/favicon.ico',
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
            {children}
            <div className="bg-destructive" />
            <Toaster
              // expand
              visibleToasts={3}
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
