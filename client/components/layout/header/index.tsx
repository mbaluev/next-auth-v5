'use client';

import { ThemeToggle } from '@/components/layout/header/theme-toggle';
import { UserButton } from '@/components/layout/header/user-button';
import { Navbar } from '@/components/layout/header/navbar';

export const Header = () => {
  return (
    <div className="flex gap-4 justify-end items-start p-4 w-full">
      <Navbar />
      <ThemeToggle />
      {/*<ModeToggle />*/}
      <UserButton />
    </div>
  );
};
