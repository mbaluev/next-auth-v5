'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LockClosedIcon } from '@radix-ui/react-icons';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { LoginButton } from '@/components/auth/login-button';

export default function HomePage() {
  return (
    <div className="flex flex-grow flex-col">
      <section className="flex flex-grow items-center justify-center w-full">
        <div className="space-y-10 text-center">
          <div className="flex flex-row gap-x-4 items-center justify-center">
            <LockClosedIcon className="h-14 w-14" />
            <h1 className="text-6xl font-semibold">auth</h1>
          </div>
          <div className="space-y-1">
            <p className="text-lg text-muted-foreground">a simple</p>
            <p className="text-lg text-muted-foreground">authentication service</p>
            <p className="text-lg text-muted-foreground">landing page</p>
          </div>
          <div className="flex gap-x-8">
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
        </div>
      </section>
      <footer className="flex flex-wrap gap-x-4 gap-y-2 justify-between px-4 md:px-6 py-6">
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
          <p className="text-muted-foreground">© 2024 mbaluev</p>
          <DotFilledIcon className="text-muted h-4 w-4" />
          <p className="text-muted-foreground">All rights reserved</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
          <Button variant="link" className="px-0 py-0 h-auto" asChild>
            <Link href="#">Terms of Service</Link>
          </Button>
          <DotFilledIcon className="text-muted h-4 w-4" />
          <Button variant="link" className="px-0 py-0 h-auto" asChild>
            <Link href="#">Privacy</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
