'use client';

import {
  ComponentProps,
  createContext,
  ElementRef,
  forwardRef,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { cn } from '@/core/utils/cn';
import { useIsMobile } from '@/core/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { useCookies } from 'next-client-cookies';

const SIDEBAR_STORAGE_NAME = 'sidebar';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SIDEBAR_DEFAULT_OPEN = true;
const SIDEBAR_TRANSITION_DURATION = 100;
const SIDEBAR_EVENT_START = 'sidebar-start';
const SIDEBAR_EVENT_END = 'sidebar-end';

type SidebarContext = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
const SidebarContext = createContext<SidebarContext | null>(null);
function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within a Sidebar.');
  return context;
}

type SidebarProviderBaseProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
type SidebarProviderProps = ComponentProps<'div'> & SidebarProviderBaseProps;
const SidebarProvider = forwardRef<HTMLDivElement, SidebarProviderProps>((props, ref) => {
  const cookies = useCookies();
  let _defaultOpen: any = cookies.get(SIDEBAR_STORAGE_NAME);
  _defaultOpen = _defaultOpen ? _defaultOpen === 'true' : SIDEBAR_DEFAULT_OPEN;

  const {
    defaultOpen = _defaultOpen,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    children,
    ..._props
  } = props;
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const res = typeof value === 'function' ? value(open) : value;
      if (setOpenProp) return setOpenProp?.(res);
      cookies.set(SIDEBAR_STORAGE_NAME, String(res));
      _setOpen(value);
    },
    [setOpenProp, open, cookies]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    window.dispatchEvent(new Event(SIDEBAR_EVENT_START));
    setTimeout(() => {
      window.dispatchEvent(new Event(SIDEBAR_EVENT_END));
    }, SIDEBAR_TRANSITION_DURATION * 2);
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed';

  const contextValue = useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={cn('flex min-h-full relative', className)} ref={ref} {..._props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = 'SidebarProvider';

type SidebarBaseProps = {};
type SidebarProps = ComponentProps<'div'> & SidebarBaseProps;
const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { className, children, ..._props } = props;
  const { isMobile, open, openMobile, toggleSidebar } = useSidebar();

  const user = useCurrentUser();
  if (!user) return null;

  const classNavDesktop = cn(
    'w-[240px] min-h-full flex-grow-0 flex-shrink-0 flex-basis-auto',
    !open && 'ml-[-240px]'
  );
  const classNavMobile = cn(
    'w-[calc(100%-12px)] max-w-[300px] fixed top-0 bottom-0 z-[10]',
    openMobile ? 'left-0 right-4' : 'left-[-100%] right-[100%]'
  );
  const classNav = cn(
    `transition-all duration-${SIDEBAR_TRANSITION_DURATION}`,
    isMobile ? classNavMobile : classNavDesktop,
    className
  );

  const classDivMobile = cn('h-full shadow-md rounded-r-lg');
  const classDivDesktop = cn('fixed w-[240px] h-full');
  const classDiv = cn(
    'bg-sidebar text-sidebar-foreground',
    isMobile ? classDivMobile : classDivDesktop
  );

  return (
    <Fragment>
      <nav className={classNav} ref={ref} {..._props}>
        <div className={classDiv}>{children}</div>
      </nav>
      {isMobile && openMobile && (
        <div
          className={cn('absolute top-0 left-0 w-full h-full z-[9] bg-black/25')}
          onClick={toggleSidebar}
        />
      )}
    </Fragment>
  );
});
Sidebar.displayName = 'Sidebar';

type SidebarTriggerProps = ComponentProps<typeof Button>;
const SidebarTrigger = forwardRef<ElementRef<typeof Button>, SidebarTriggerProps>((props, ref) => {
  const { onClick, ..._props } = props;
  const { toggleSidebar, isMobile, open, openMobile } = useSidebar();
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {..._props}
    >
      {!(isMobile ? openMobile : open) && <ChevronsRight />}
      {(isMobile ? openMobile : open) && <ChevronsLeft />}
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';

type SidebarButtonProps = ComponentProps<typeof Button>;
const SidebarButton = forwardRef<ElementRef<typeof Button>, SidebarButtonProps>((props, ref) => {
  const { onClick, children, ..._props } = props;
  const { toggleSidebar, isMobile } = useSidebar();
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
    if (isMobile) toggleSidebar();
  };
  return (
    <Button size="flex-start" onClick={handleClick} {..._props}>
      {children}
    </Button>
  );
});
SidebarButton.displayName = 'SidebarButton';

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarButton,
  useSidebar,
  SIDEBAR_EVENT_START,
  SIDEBAR_EVENT_END,
};
