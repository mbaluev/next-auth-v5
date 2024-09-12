'use client';

import { CardWrapper } from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const CardError = () => {
  return (
    <CardWrapper
      headerLabel="oops! something went wrong"
      backButtonLabel="back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="w-12 h-12 text-destructive" />
      </div>
    </CardWrapper>
  );
};
