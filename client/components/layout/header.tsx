'use client';

import { ModeToggle } from '@/components/layout/mode-toggle';

export const Header = () => {
  return (
    <div className="flex justify-end p-4 w-full">
      <ModeToggle />
    </div>
  );
};
