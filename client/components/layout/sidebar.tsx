'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

export const Sidebar = () => {
  const user = useCurrentUser();

  if (!user) return null;

  return (
    <nav className="flex flex-col min-h-full p-4 w-[240px] bg-secondary border-r">
      <Button variant="sidebar">navigation</Button>
    </nav>
  );
};
