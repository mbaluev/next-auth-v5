import {
  ComponentProps,
  createContext,
  ElementRef,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { cn } from '@/core/utils/cn';
import { useIsMobile } from '@/core/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import useLocalStorage from '@/core/hooks/use-local-storage';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

const SIDEBAR_STORAGE_NAME = 'sidebar:state';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SIDEBAR_DEFAULT_OPEN = false;

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
  const [_, setOpenStorage] = useLocalStorage(SIDEBAR_STORAGE_NAME, String(SIDEBAR_DEFAULT_OPEN));
  const {
    defaultOpen = window.localStorage.getItem(SIDEBAR_STORAGE_NAME) === 'true',
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
      setOpenStorage(String(res));
      _setOpen(value);
    },
    [setOpenProp, open, setOpenStorage]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
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
      <div className={cn('flex min-h-full', className)} ref={ref} {..._props}>
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
  const { isMobile, open, openMobile } = useSidebar();

  const user = useCurrentUser();
  if (!user) return null;

  if (isMobile) {
    return (
      <nav
        className={cn(
          'w-[calc(100%-12px)] bg-popover fixed z-[10] top-[57px] bottom-4 shadow-md rounded-r-md border-t border-r border-b',
          'transition-all duration-100',
          openMobile ? 'left-0 right-4' : 'left-[-100%] right-[100%]',
          className
        )}
        ref={ref}
        {..._props}
      >
        {children}
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        'w-[240px] bg-popover border-r min-h-full',
        'transition-all duration-100',
        !open && 'ml-[-240px]',
        className
      )}
      ref={ref}
      {..._props}
    >
      {children}
    </nav>
  );
});
Sidebar.displayName = 'Sidebar';

type SidebarTriggerProps = ComponentProps<typeof Button>;
const SidebarTrigger = forwardRef<ElementRef<typeof Button>, SidebarTriggerProps>((props, ref) => {
  const { onClick, ..._props } = props;
  const { toggleSidebar, isMobile, open, openMobile } = useSidebar();
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
      <DoubleArrowRightIcon
        className={cn(
          'rotate-180 scale-0 transition-transform ease-in-out duration-500',
          !(isMobile ? openMobile : open) && 'rotate-0 scale-100'
        )}
      />
      <DoubleArrowRightIcon
        className={cn(
          'rotate-0 scale-0 transition-transform ease-in-out duration-500 absolute',
          (isMobile ? openMobile : open) && 'rotate-180 scale-100'
        )}
      />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';

export { SidebarProvider, Sidebar, SidebarTrigger, useSidebar };
