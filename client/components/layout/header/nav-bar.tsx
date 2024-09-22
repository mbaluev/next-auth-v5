'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { ToggleBtn } from '@/components/layout/header/toggle-btn';
import { LogoBtn } from '@/components/layout/header/logo-btn';

export const NavBar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <nav className="flex-grow flex flex-wrap gap-4">
      <ToggleBtn />
      <LogoBtn />
      <Button asChild variant={pathname === '/server' ? 'secondary' : 'ghost'}>
        <Link href="/server">server</Link>
      </Button>
      <Button asChild variant={pathname === '/client' ? 'secondary' : 'ghost'}>
        <Link href="/client">client</Link>
      </Button>
      <Button asChild variant={pathname === '/admin' ? 'secondary' : 'ghost'}>
        <Link href="/admin">admin</Link>
      </Button>
      <Button asChild variant={pathname === '/settings' ? 'secondary' : 'ghost'}>
        <Link href="/settings">settings</Link>
      </Button>
    </nav>
  );
};
