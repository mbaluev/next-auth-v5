'use client';

import { ReactNode } from 'react';
import { Footer } from '@/components/molecules/layout/footer';
import { SidebarTrigger } from '@/components/molecules/layout/sidebar';
import { Header } from '@/components/molecules/layout/header';
import { Menu, Menu2 } from '@/components/molecules/layout/menu';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Menu>
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex flex-grow">
          {/*  */}
          <Menu2>
            <div className="p-4">
              <SidebarTrigger />
            </div>
            {children}
          </Menu2>
          {/*  */}
        </main>
        <Footer />
      </div>
    </Menu>
  );
};
