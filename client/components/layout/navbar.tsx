'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { Dot, Plus, X } from 'lucide-react';
import { menuTree, TMenuItemDTO } from '@/core/settings/menu';
import { TTreeDTO } from '@/core/utils/tree';
import { Fragment, useEffect } from 'react';

interface INavItemProps<T> {
  node: TTreeDTO<T>;
}
const NavItemContent = (props: INavItemProps<TMenuItemDTO>) => {
  const { node } = props;
  return (
    <Fragment>
      {node.items.length > 0 && <Plus />}
      {Array.from({ length: node.state.level - 1 }).map((d, index) => (
        <Dot key={index} className="text-transparent" />
      ))}
      {node.data?.icon}
      <p>{node.data?.label}</p>
    </Fragment>
  );
};
NavItemContent.displayName = 'NavItemContent';

const NavItem = (props: INavItemProps<TMenuItemDTO>) => {
  const { node } = props;

  const handleClick = () => {
    menuTree.select(node.id, true);
  };

  if (!node.data?.path) {
    return (
      <SidebarButton variant={node.state.selected ? 'sidebar' : 'ghost'}>
        <NavItemContent node={node} />
      </SidebarButton>
    );
  }

  return (
    <SidebarButton
      onClick={handleClick}
      variant={node.state.selected ? 'sidebar' : 'ghost'}
      asChild
    >
      <Link href={node.data.path}>
        <NavItemContent node={node} />
      </Link>
    </SidebarButton>
  );
};
NavItem.displayName = 'NavItem';

const Navbar = () => {
  const user = useCurrentUser();
  const data = menuTree;
  const { toggleSidebar } = useSidebar();

  // init
  const pathname = usePathname();
  useEffect(() => {
    const node = menuTree.find((d) => d.data?.path === pathname);
    if (node) menuTree.select(node.id, true);
  }, [pathname]);

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
        {data.flat().map((node, index) => (
          <NavItem key={index} node={node} />
        ))}
      </div>
    </div>
  );
};
Navbar.displayName = 'Navbar';

export { Navbar, NavItem };
