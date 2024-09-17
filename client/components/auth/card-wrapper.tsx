'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Header } from '@/components/auth/header';
import { Social } from '@/components/auth/social';
import { BackButton } from '@/components/auth/back-button';
import { cn } from '@/core/utils/cn';

interface CardWrapperProps {
  children?: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  loading?: boolean;
  flat?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  loading,
  flat,
}: CardWrapperProps) => {
  return (
    <Card className={cn('w-full max-w-[400px] h-fit', flat && 'border-none shadow-none')}>
      <CardHeader className={cn(flat && 'pt-0 px-0')}>
        <Header loading={loading} label={headerLabel} />
      </CardHeader>
      <CardContent className={cn(flat && 'px-0')}>{children}</CardContent>
      {showSocial && (
        <CardFooter className={cn(flat && 'px-0')}>
          <Social />
        </CardFooter>
      )}
      <CardFooter className={cn(flat && 'p-0')}>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
