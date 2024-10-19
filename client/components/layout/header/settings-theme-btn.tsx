'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

export function SettingsThemeBtn() {
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
}
