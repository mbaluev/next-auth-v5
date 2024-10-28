'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardProps } from '@/components/ui/card';
import { CardHeaderContent } from '@/components/auth/card-header-content';
import { Social } from '@/components/auth/social';
import { BackButton } from '@/components/auth/back-button';

interface CardWrapperProps extends CardProps {
  children?: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  loading?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  loading,
  ..._props
}: CardWrapperProps) => {
  return (
    <Card variant="transparent" className="z-[10]" {..._props}>
      <CardHeader>
        <CardHeaderContent loading={loading} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
