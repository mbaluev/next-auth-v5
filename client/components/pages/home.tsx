'use client';

import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import { useIsAuth } from '@/core/auth/hooks/use-is-auth';
import { Logo } from '@/components/layout/logo';

export default function HomePage() {
  const auth = useIsAuth();
  return (
    <div className="space-y-10 text-center">
      <div className="flex flex-row gap-x-6 items-center justify-center">
        <Logo className="h-14 w-14" />
        <h1 className="text-6xl font-semibold">auth</h1>
      </div>
      <div className="space-y-1">
        <p className="text-lg text-muted-foreground">a simple</p>
        <p className="text-lg text-muted-foreground">authentication service</p>
        <p className="text-lg text-muted-foreground">landing page</p>
      </div>
      {!auth && (
        <div className="flex justify-center gap-x-8">
          <LoginButton mode="redirect" asChild>
            <Button variant="default" size="lg">
              sign in
            </Button>
          </LoginButton>
          <LoginButton mode="modal" asChild>
            <Button variant="outline" size="lg">
              sign in modal
            </Button>
          </LoginButton>
        </div>
      )}
    </div>
  );
}
