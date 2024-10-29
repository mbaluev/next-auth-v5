'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { MonitorSmartphone, Server, LayoutDashboard, X, TriangleAlert } from 'lucide-react';
import Link from 'next/link';

export const Nav = () => {
  const user = useCurrentUser();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  if (!user) return null;
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 p-4 justify-between">
        <SidebarButton asChild variant="ghost">
          <Link href="/">
            <Logo className="w-6 h-6" />
            <p>{process.env.APP_NAME}</p>
          </Link>
        </SidebarButton>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X />
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-4 p-4">
        <SidebarButton asChild variant={pathname === '/dashboard' ? 'sidebar' : 'ghost'}>
          <Link href="/dashboard">
            <LayoutDashboard />
            <p>dashboard</p>
          </Link>
        </SidebarButton>
        <SidebarButton asChild variant={pathname === '/client' ? 'sidebar' : 'ghost'}>
          <Link href="/client">
            <MonitorSmartphone />
            <p>client</p>
          </Link>
        </SidebarButton>
        <SidebarButton asChild variant={pathname === '/server' ? 'sidebar' : 'ghost'}>
          <Link href="/server">
            <Server />
            <p>server</p>
          </Link>
        </SidebarButton>
        <SidebarButton asChild variant={pathname === '/xxx' ? 'sidebar' : 'ghost'}>
          <Link href="/xxx">
            <TriangleAlert className="w-6 h-6" />
            <p>page not found</p>
          </Link>
        </SidebarButton>
      </div>
    </div>
  );
};
