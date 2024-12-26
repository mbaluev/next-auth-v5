'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { X } from 'lucide-react';
import { Fragment } from 'react';
import { menuTree, TMenuItemDTO } from '@/core/settings/menu';
import { TTreeDTO } from '@/core/utils/tree';

interface INavItemProps<T> {
  node: TTreeDTO<T>;
}
const NavItemContent = (props: INavItemProps<TMenuItemDTO>) => {
  const { node } = props;
  if (!node || !node.data) return null;
  return (
    <Fragment>
      {node.data.icon}
      <p>{node.data.label}</p>
    </Fragment>
  );
};
const NavItem = (props: INavItemProps<TMenuItemDTO>) => {
  const { node } = props;
  const pathname = usePathname();

  if (!node.data?.path) {
    return (
      <SidebarButton disabled variant={'ghost'}>
        <NavItemContent node={node} />
      </SidebarButton>
    );
  }

  return (
    <SidebarButton disabled asChild variant={pathname === node.data.path ? 'sidebar' : 'ghost'}>
      <Link href={node.data?.path || ''}>
        <NavItemContent node={node} />
      </Link>
    </SidebarButton>
  );
};
const Nav = () => {
  const user = useCurrentUser();
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
        {menuTree.flat().map((node, index) => (
          <NavItem key={index} node={node} />
        ))}
      </div>
    </div>
  );
};

export { Nav };
