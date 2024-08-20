'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserButton } from '@/components/auth/user-button';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <Card className="flex justify-between items-center p-4 rounded-md shadow-sm">
      <div className="flex gap-x-2">
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
      <UserButton />
    </Card>
  );
};
