'use client';

import { ReactNode } from 'react';
import { Footer } from '@/components/layout/footer';
import { SidebarProvider, Sidebar } from '@/components/layout/sidebar';
import { Navbar, NavbarProvider } from '@/components/layout/navbar';
import { Header } from '@/components/layout/header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <NavbarProvider collapsed>
      <SidebarProvider>
        <Sidebar>
          <Navbar />
        </Sidebar>
        <div className="flex-grow flex flex-col">
          <Header />
          <main className="flex flex-grow">{children}</main>
          <Footer />
        </div>
      </SidebarProvider>
    </NavbarProvider>
  );
};
