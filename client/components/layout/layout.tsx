'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar } from '@/components/layout/sidebar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-full bg-background">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
