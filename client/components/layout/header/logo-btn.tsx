'use client';

import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/core/utils/cn';
import { Logo } from '@/components/layout/logo';
import { MEDIA_SM, useWindowSize } from '@/core/hooks/use-window-size';
import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';

export const LogoBtn = (props: ButtonProps) => {
  // const pathname = usePathname();
  const { width } = useWindowSize();
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (width < MEDIA_SM) setIcon(true);
    else setIcon(false);
  }, [width]);

  if (icon) {
    return (
      <Button variant="ghost" size="icon" asChild {...props}>
        <Link href="/">
          <Logo className="w-6 h-6" />
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="ghost" className={cn('space-x-4', props.className)} asChild {...props}>
      <Link href="/">
        <Logo className="w-6 h-6" />
        <p>auth</p>
      </Link>
    </Button>
  );
};
