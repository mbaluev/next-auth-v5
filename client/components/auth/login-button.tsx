'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/auth/login-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogToolbar,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface LoginButtonProps {
  children?: ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const LoginButton = ({ children, mode = 'redirect', asChild }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="max-w-lg" close>
          <VisuallyHidden>
            <DialogHeader>
              <DialogToolbar title="login to application login to application login to application login to application" />
              <DialogDescription>login to application</DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
