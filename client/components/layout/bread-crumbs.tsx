'use client';

import Link from 'next/link';
import { SidebarTrigger } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BREAD_CRUMBS } from '@/core/settings/bread-crumbs';

const BreadCrumbs = () => {
  const pathname = usePathname();
  return (
    <div className="flex-grow flex flex-wrap gap-4">
      <SidebarTrigger />
      <div className="flex-grow flex flex-wrap gap-2">
        {BREAD_CRUMBS[pathname as keyof typeof BREAD_CRUMBS]?.map((d, i, arr) => {
          if (d.icon && d.label) {
            return (
              <div key={i} className="flex gap-2 items-center">
                <Button variant="ghost" size="flex-start" asChild>
                  <Link href={d.path}>
                    {d.icon}
                    <p className="flex-1 text-left">{d.label}</p>
                  </Link>
                </Button>
                {i < arr.length - 1 && <ChevronRight />}
              </div>
            );
          }
          if (d.icon && !d.label) {
            return (
              <div key={i} className="flex gap-2 items-center">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={d.path}>{d.icon}</Link>
                </Button>
                {i < arr.length - 1 && <ChevronRight />}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { BreadCrumbs };
