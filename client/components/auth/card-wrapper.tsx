'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CardHeaderContent } from '@/components/auth/card-header-content';
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
  border?: boolean;
  padding?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  loading,
  border = true,
  padding = true,
}: CardWrapperProps) => {
  return (
    <Card className={cn(!border && 'border-none shadow-none')}>
      <CardHeader className={cn(!padding && 'pt-0 px-0')}>
        <CardHeaderContent loading={loading} label={headerLabel} />
      </CardHeader>
      <CardContent className={cn(!padding && 'px-0')}>{children}</CardContent>
      {showSocial && (
        <CardFooter className={cn(!padding && 'px-0')}>
          <Social />
        </CardFooter>
      )}
      <CardFooter className={cn(!padding && 'p-0')}>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
