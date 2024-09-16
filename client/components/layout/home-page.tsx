'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LockClosedIcon } from '@radix-ui/react-icons';
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
          <div>
            <LoginButton mode="redirect" asChild>
              <Button variant="default" size="lg">
                sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </section>
      <footer className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-between py-6 px-4 md:px-6">
        <p className="text-muted-foreground">© 2024 mbaluev. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link className="text-muted-foreground hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-muted-foreground hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
