'use client';

import Link from 'next/link';
import { cn } from '@/core/utils/cn';
import { useScrollTop } from '@/core/hooks/use-scroll-top';
import { usePathname } from 'next/navigation';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { useDeviceSize } from '@/core/hooks/use-device-size';
import { MEDIA_SM, useWindowSize } from '@/core/hooks/use-window-size';
import { SidebarTrigger } from '@/components/layout/sidebar';
import { Fragment, useEffect, useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { Logo } from '@/components/layout/logo';
import { useTheme } from 'next-themes';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ExitIcon, MoonIcon, PersonIcon, SunIcon } from '@radix-ui/react-icons';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogoutButton } from '@/components/auth/logout-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const scrolled = useScrollTop();
  return (
    <header
      className={cn(
        'flex gap-4 justify-end items-start p-4 w-full z-[8] sticky top-0',
        scrolled && 'bg-background border-b shadow-sm'
      )}
    >
      <HeaderLeftBar />
      <HeaderRightBar />
    </header>
  );
};

const HeaderLeftBar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  const { less } = useDeviceSize(MEDIA_SM);
  if (!user) return null;
  return (
    <nav className="flex-grow flex flex-wrap gap-4">
      <SidebarTrigger />
      <HeaderLeftLogoBtn />
      {!less && (
        <Fragment>
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
        </Fragment>
      )}
    </nav>
  );
};

const HeaderLeftLogoBtn = (props: ButtonProps) => {
  const { width } = useWindowSize();
  const [icon, setIcon] = useState(false);
  const user = useCurrentUser();

  useEffect(() => {
    if (width < MEDIA_SM) setIcon(true);
    else setIcon(false);
  }, [width]);

  if (icon) {
    return (
      <Button variant="ghost" size="icon" asChild {...props}>
        <Link href={user ? DEFAULT_LOGIN_REDIRECT : '/'}>
          <Logo className="w-6 h-6" />
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="ghost" className={cn('space-x-4', props.className)} asChild {...props}>
      <Link href={user ? DEFAULT_LOGIN_REDIRECT : '/'}>
        <Logo className="w-6 h-6" />
        <p>auth</p>
      </Link>
    </Button>
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

const HeaderRightThemeBtn = () => {
  const { setTheme, theme } = useTheme();
  const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={handleChangeTheme} className="flex-grow-0">
            <MoonIcon className="rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
            <SunIcon className="rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0 absolute" />
            <span className="sr-only">Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          Switch Theme
          <TooltipArrow className="fill-foreground" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
              <PersonIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="mr-4" />
            logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Header };
