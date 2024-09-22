'use client';

import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/core/utils/cn';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/layout/logo';

export const LogoBtn = (props: ButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === '/' ? 'secondary' : 'ghost'}
      className={cn('space-x-3', props.className)}
      asChild
      {...props}
    >
      <Link href="/">
        <Logo className="w-6 h-6" />
        <p className="hidden md:flex">auth</p>
      </Link>
    </Button>
  );
};
