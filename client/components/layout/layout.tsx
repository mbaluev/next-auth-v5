'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Nav } from '@/components/layout/nav';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-full bg-background">
      <Nav />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
