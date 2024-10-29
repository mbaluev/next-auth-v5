'use client';

import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/core/utils/cn';

interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  callback?: Function;
}

const Logo = (props: LogoProps) => {
  return (
    <div {...props} className={cn('relative', props.className)}>
      <Image src="/assets/logo.svg" fill alt="logo" className="dark:hidden" />
      <Image src="/assets/logo-dark.svg" fill alt="logo-dark" className="hidden dark:block" />
    </div>
  );
};

export { Logo };
