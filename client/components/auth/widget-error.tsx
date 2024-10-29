'use client';

import { WidgetWrapper } from '@/components/auth/widget-wrapper';
import { TriangleAlert } from 'lucide-react';

export const WidgetError = () => {
  return (
    <WidgetWrapper
      headerLabel="oops! something went wrong"
      backButtonLabel="back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="w-12 h-12 text-destructive" />
      </div>
    </WidgetWrapper>
  );
};
