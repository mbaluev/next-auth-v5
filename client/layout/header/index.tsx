'use client';

import { NavBar } from '@/layout/header/nav-bar';
import { SettingsBar } from '@/layout/header/settings-bar';

export const Header = () => {
  return (
    <header className="flex gap-4 justify-end items-start p-4 w-full">
      <NavBar />
      <SettingsBar />
    </header>
  );
};
