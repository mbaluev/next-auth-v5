'use client';

import { Fragment, ReactNode } from 'react';
import { UserRole } from '@prisma/client';
import { useCurrentRole } from '@/core/auth/hooks/use-current-role';
import { FormError } from '@/components/form-error';

interface RoleGateProps {
  children?: ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="you do not have permission to view this content" />;
  }

  return <Fragment>{children}</Fragment>;
};
