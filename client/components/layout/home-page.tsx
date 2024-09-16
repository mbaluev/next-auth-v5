'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LockClosedIcon } from '@radix-ui/react-icons';
import { LoginButton } from '@/components/auth/login-button';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-:36 xl:py-48 h-[calc(95vh-57px)]">
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
      <hr />
      <section className="w-full py-12 md:py-24 lg:py-:36 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get notified about product updates
              </p>
              <form className="flex max-w-sm space-x-4">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <Link
              className="text-muted-foreground hover:text-primary underline underline-offset-4"
              href="#"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
      {/* bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary */}
      <hr />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-muted-foreground">© 2024 mbaluev. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
