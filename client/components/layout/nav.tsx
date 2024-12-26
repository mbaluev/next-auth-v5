'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { MonitorSmartphone, Server, LayoutDashboard, X, TriangleAlert } from 'lucide-react';
import { guid } from '@/core/utils/guid';
import { CTree } from '@/core/utils/tree';
import { useEffect } from 'react';

export const Nav = () => {
  const user = useCurrentUser();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const id_root = guid();
  const id_1 = guid();
  const id_2 = guid();
  const id_3 = guid();
  const _tree = new CTree(id_root, { level: 0, hidden: false, collapsed: false });
  _tree.insert(id_1, id_root, { level: 1, hidden: false, collapsed: false });
  _tree.insert(id_2, id_root, { level: 1, hidden: false, collapsed: false });
  _tree.insert(id_3, id_2, { level: 2, hidden: false, collapsed: false });
  useEffect(() => console.log(_tree, _tree.flat()));

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
