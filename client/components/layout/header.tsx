'use client';

import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SidebarTrigger } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { TooltipText } from '@/components/ui/tooltip';
import { LogOut, Moon, Sun, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ButtonLogout } from '@/components/auth/button-logout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { BREAD_CRUMBS } from '@/core/settings/bread-crumbs';
import { BreadCrumbs } from '@/components/layout/bread-crumbs';

const HeaderRightThemeBtn = () => {
  const { setTheme, theme } = useTheme();
  const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <TooltipText title="switch theme" side="left">
      <Button variant="ghost" size="icon" onClick={handleChangeTheme} className="flex-grow-0">
        <Moon className="rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
        <Sun className="rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0 absolute" />
      </Button>
    </TooltipText>
  );
};

const HeaderRightUserBtn = () => {
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar>
            <AvatarImage src={user?.image || ''} />
            <AvatarFallback className="bg-transparent hover:bg-secondary hover:text-secondary-foreground">
              <User />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ButtonLogout>
          <DropdownMenuItem>
            <LogOut className="mr-4" />
            logout
          </DropdownMenuItem>
        </ButtonLogout>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HeaderRightBar = () => {
  return (
    <nav className="flex-grow-0 flex gap-4">
      <HeaderRightThemeBtn />
      <HeaderRightUserBtn />
    </nav>
  );
};

const HeaderBreadCrumbs = () => {
  const pathname = usePathname();
  const breadCrumbs = BREAD_CRUMBS[pathname as keyof typeof BREAD_CRUMBS];
  return (
    <div className="flex-grow flex flex-wrap gap-4">
      <SidebarTrigger />
      <BreadCrumbs breadCrumbs={breadCrumbs} home />
    </div>
  );
};

const Header = () => {
  // const scrolled = useScrollTop();
  return (
    <header className="flex gap-4 justify-end items-start p-4 w-full z-[8] sticky top-0 bg-background">
      <HeaderBreadCrumbs />
      <HeaderRightBar />
    </header>
  );
};

export { Header };
