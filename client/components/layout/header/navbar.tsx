'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

export const Navbar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <div className="flex-grow flex flex-wrap gap-4">
      <Button asChild variant={pathname === '/server' ? 'default' : 'ghost'}>
        <Link href="/server">server</Link>
      </Button>
      <Button asChild variant={pathname === '/client' ? 'default' : 'ghost'}>
        <Link href="/client">client</Link>
      </Button>
      <Button asChild variant={pathname === '/admin' ? 'default' : 'ghost'}>
        <Link href="/admin">admin</Link>
      </Button>
      <Button asChild variant={pathname === '/settings' ? 'default' : 'ghost'}>
        <Link href="/settings">settings</Link>
      </Button>
    </div>
  );
};
