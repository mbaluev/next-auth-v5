'use client';

import { NavBar } from '@/components/layout/header/nav-bar';
import { SettingsBar } from '@/components/layout/header/settings-bar';
import { useScrollTop } from '@/core/hooks/use-scroll-top';
import { cn } from '@/core/utils/cn';

export const Header = () => {
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        'flex gap-4 justify-end items-start p-4 w-full z-[10] fixed top-0',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <NavBar />
      <SettingsBar />
    </header>
  );
};
