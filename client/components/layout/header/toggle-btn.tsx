'use client';

import * as React from 'react';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import useLocalStorage from '@/core/hooks/use-local-storage';
import { useMemo } from 'react';
import { cn } from '@/core/utils/cn';

export function ToggleBtn() {
  const [item, setItem] = useLocalStorage('menu', 'hide');
  const handleChangeTheme = () => setItem(item === 'show' ? 'hide' : 'show');
  const show = useMemo(() => item === 'show', [item]);
  const hide = useMemo(() => item === 'hide', [item]);
  return (
    <Button variant="ghost" size="icon" onClick={handleChangeTheme}>
      <DoubleArrowRightIcon
        className={cn(
          'rotate-180 scale-0 transition-transform ease-in-out duration-500',
          show && 'rotate-0 scale-100'
        )}
      />
      <DoubleArrowRightIcon
        className={cn(
          'rotate-0 scale-0 transition-transform ease-in-out duration-500 absolute',
          hide && 'rotate-180 scale-100'
        )}
      />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
}
