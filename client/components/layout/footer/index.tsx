'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DotFilledIcon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-x-4 gap-y-2 justify-between px-4 md:px-6 py-6 z-[10]">
      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
        <Button variant="link" className="px-0 py-0 h-auto" asChild>
          <Link href="/">© 2024 mbaluev</Link>
        </Button>
        <DotFilledIcon className="text-muted h-4 w-4" />
        <p className="text-muted-foreground">all rights reserved</p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
        <Button variant="link" className="px-0 py-0 h-auto" asChild>
          <Link href="#">privacy policy</Link>
        </Button>
        <DotFilledIcon className="text-muted h-4 w-4" />
        <Button variant="link" className="px-0 py-0 h-auto" asChild>
          <Link href="#">terms & conditions</Link>
        </Button>
      </div>
    </footer>
  );
}
