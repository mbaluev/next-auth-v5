'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { useSidebar } from '@/components/layout/sidebar';
import { X } from 'lucide-react';

export const Nav = () => {
  const user = useCurrentUser();
  const { toggleSidebar } = useSidebar();
  if (!user) return null;
  return (
    <div className="flex flex-col p-4">
      <div className="flex gap-4 justify-between">
        <Button variant="ghost">navigation</Button>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X />
        </Button>
      </div>
    </div>
  );
};
