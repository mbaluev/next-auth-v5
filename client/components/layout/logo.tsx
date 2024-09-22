'use client';

import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/core/utils/cn';

interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  callback?: Function;
}

export const Logo = (props: LogoProps) => {
  return (
    <div {...props} className={cn('relative', props.className)}>
      <Image src="/logo.svg" fill alt="logo" className="dark:hidden" />
      <Image src="/logo-dark.svg" fill alt="logo-dark" className="hidden dark:block" />
    </div>
  );
};
