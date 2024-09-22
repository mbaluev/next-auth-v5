'use client';

import { NavBar } from '@/components/layout/header/nav-bar';
import { SettingsBar } from '@/components/layout/header/settings-bar';

export const Header = () => {
  return (
    <header className="flex gap-4 justify-end items-start p-4 w-full z-[10]">
      <NavBar />
      <SettingsBar />
    </header>
  );
};
