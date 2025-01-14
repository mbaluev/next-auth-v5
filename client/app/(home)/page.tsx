'use client';

import { useIsAuth } from '@/core/auth/hooks/use-is-auth';
import { Logo } from '@/components/layout/logo';
import { ButtonLogin } from '@/components/auth/button-login';
import { Button } from '@/components/ui/button';

export default function Home() {
  const auth = useIsAuth();
  return (
    <div className="space-y-10 text-center">
      <div className="text-6xl flex flex-row gap-x-8 items-center justify-center">
        <Logo />
        <h1 className="text-6xl font-semibold">{process.env.APP_NAME}</h1>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-lg text-muted-foreground">simple authentication service</p>
        <p className="text-lg text-muted-foreground">next.js - tailwind - lucide icons</p>
        <p className="text-lg text-muted-foreground">layouts - sidebar</p>
        <p className="text-lg text-muted-foreground">d3.js charts</p>
      </div>
      {!auth && (
        <div className="flex justify-center gap-6">
          <ButtonLogin mode="redirect" asChild>
            <Button variant="default" size="lg">
              sign in
            </Button>
          </ButtonLogin>
          <ButtonLogin mode="modal" asChild>
            <Button variant="outline" size="lg">
              sign in dialog
            </Button>
          </ButtonLogin>
        </div>
      )}
    </div>
  );
}
