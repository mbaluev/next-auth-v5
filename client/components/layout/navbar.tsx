'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/auth/user-button';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 justify-between items-start p-4 w-full">
      <div className="flex flex-wrap gap-2">
        <Button asChild variant={pathname === '/server' ? 'default' : 'link'}>
          <Link href="/server">server</Link>
        </Button>
        <Button asChild variant={pathname === '/client' ? 'default' : 'link'}>
          <Link href="/client">client</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'link'}>
          <Link href="/admin">admin</Link>
        </Button>
        <Button asChild variant={pathname === '/settings' ? 'default' : 'link'}>
          <Link href="/settings">settings</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};
