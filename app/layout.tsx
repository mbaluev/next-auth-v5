import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-auth-v5',
  description: 'next-auth-v5',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
