'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import Link from 'next/link';

export const Nav = () => {
  const user = useCurrentUser();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  if (!user) return null;
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-4 justify-between">
        <Button variant="ghost">navigation</Button>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'ghost'}
          className="justify-start"
        >
          <Link href="/server">server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'ghost'}
          className="justify-start"
        >
          <Link href="/client">client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/admin' ? 'default' : 'ghost'}
          className="justify-start"
        >
          <Link href="/admin">admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'ghost'}
          className="justify-start"
        >
          <Link href="/settings">settings</Link>
        </Button>
      </div>
    </div>
  );
};
