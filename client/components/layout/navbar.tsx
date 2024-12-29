'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarButton, useSidebar } from '@/components/layout/sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/logo';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { menuTree, TMenuItemDTO } from '@/core/settings/menu';
import { CTree, TTreeDTO } from '@/core/utils/tree';
import { createContext, Fragment, ReactNode, useContext, useEffect, useState } from 'react';

const NAVBAR_PADDING_ITEM = 15;

type NavbarContext = CTree<TMenuItemDTO>;
const NavbarContext = createContext<NavbarContext | null>(null);
function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) throw new Error('useNavbar must be used within a Navbar.');
  return context;
}

type NavbarProviderProps = { children: ReactNode; collapsed?: boolean };
const NavbarProvider = (props: NavbarProviderProps) => {
  const { children, collapsed, ..._props } = props;
  if (collapsed) menuTree.collapseTo(1);
  return (
    <NavbarContext.Provider {..._props} value={menuTree}>
      {children}
    </NavbarContext.Provider>
  );
};

interface INavItemPaddingProps<T> {
  node: TTreeDTO<T>;
}
const NavItemPadding = (props: INavItemPaddingProps<TMenuItemDTO>) => {
  const { node } = props;
  if (!node.state.level || node.state.level <= 1) return null;
  return <div style={{ width: `${(node.state.level - 1) * NAVBAR_PADDING_ITEM}px` }} />;
};
NavItemPadding.displayName = 'NavItemPadding';

interface INavItemContentProps<T> {
  node: TTreeDTO<T>;
}
const NavItemContent = (props: INavItemContentProps<TMenuItemDTO>) => {
  const { node } = props;
  return (
    <Fragment>
      {node.data?.icon}
      <p className="flex-1 text-left">{node.data?.label}</p>
      {node.items.length > 0 && node.state.collapsed && <ChevronUp />}
      {node.items.length > 0 && !node.state.collapsed && <ChevronDown />}
    </Fragment>
  );
};
NavItemContent.displayName = 'NavItemContent';

interface INavItemProps<T> {
  node: TTreeDTO<T>;
  onClick?: (node: TTreeDTO<TMenuItemDTO>) => void;
}
const NavItem = (props: INavItemProps<TMenuItemDTO>) => {
  const { node, onClick } = props;

  const handleToggle = () => {
    if (onClick) onClick(node);
  };
  if (!node.data?.path) {
    return (
      <div className="flex">
        <NavItemPadding node={node} />
        <Button
          size="flex-start"
          variant={node.state.selected ? 'sidebar' : 'ghost'}
          className="flex-1"
          onClick={handleToggle}
        >
          <NavItemContent node={node} />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex">
      <NavItemPadding node={node} />
      <SidebarButton variant={node.state.selected ? 'sidebar' : 'ghost'} className="flex-1" asChild>
        <Link href={node.data.path}>
          <NavItemContent node={node} />
        </Link>
      </SidebarButton>
    </div>
  );
};
NavItem.displayName = 'NavItem';

const Navbar = () => {
  const user = useCurrentUser();
  const { toggleSidebar } = useSidebar();
  const [state, setState] = useState<TTreeDTO<TMenuItemDTO>[]>();
  const navbar = useNavbar();

  // init
  const pathname = usePathname();
  useEffect(() => {
    const node = navbar.find((d) => d.data?.path === pathname);
    if (node) navbar.select(node.id, true);
    else navbar.deselect();
    setState(navbar.flat());
  }, [pathname, navbar]);

  // handlers
  const handleToggle = (node: TTreeDTO<TMenuItemDTO>) => {
    navbar.toggle(node.id);
    setState(navbar.flat());
  };

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
        {state
          ?.filter((d) => !d.state.hidden)
          .map((node, index) => <NavItem key={index} node={node} onClick={handleToggle} />)}
      </div>
    </div>
  );
};
Navbar.displayName = 'Navbar';

export { Navbar, NavItem, NavbarProvider };
