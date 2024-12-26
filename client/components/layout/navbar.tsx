'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { X } from 'lucide-react';
import { menuTree, TMenuItemDTO } from '@/core/settings/menu';
import { TTreeDTO } from '@/core/utils/tree';

interface INavItemProps<T> {
  node: TTreeDTO<T>;
}
const NavItem = (props: INavItemProps<TMenuItemDTO>) => {
  const { node } = props;
  const pathname = usePathname();
  return (
    <SidebarButton asChild variant={node.data?.path === pathname ? 'sidebar' : 'ghost'}>
      <Link href={node.data?.path || ''}>
        {node.data?.icon}
        <p>{node.data?.label}</p>
      </Link>
    </SidebarButton>
  );
};
NavItem.displayName = 'NavItem';

const Navbar = () => {
  const user = useCurrentUser();
  const data = menuTree;
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
        {data.flat().map((node, index) => (
          <NavItem key={index} node={node} />
        ))}
      </div>
    </div>
  );
};
Navbar.displayName = 'Navbar';

export { Navbar, NavItem };
