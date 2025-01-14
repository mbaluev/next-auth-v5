'use client';

import Link from 'next/link';
import { SidebarTrigger } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BREAD_CRUMBS } from '@/core/settings/bread-crumbs';
import { Logo } from '@/components/layout/logo';
import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

interface IBreadCrumbProps {
  children: ReactNode;
  divider?: boolean;
}
const BreadCrumb = (props: IBreadCrumbProps) => {
  const { children, divider } = props;
  return (
    <div className="flex gap-2 items-center">
      {children}
      {divider && <ChevronRight />}
    </div>
  );
};
BreadCrumb.displayName = 'BreadCrumb';

interface IBreadCrumbHomeProps {
  divider?: boolean;
}
const BreadCrumbHome = (props: IBreadCrumbHomeProps) => {
  const { divider } = props;
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <BreadCrumb divider={divider}>
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <Logo />
        </Link>
      </Button>
    </BreadCrumb>
  );
};
BreadCrumbHome.displayName = 'BreadCrumbHome';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  const breadCrumbs = BREAD_CRUMBS[pathname as keyof typeof BREAD_CRUMBS];
  return (
    <div className="flex-grow flex flex-wrap gap-4">
      <SidebarTrigger />
      {user && <Separator orientation="vertical" className="h-auto" />}
      <div className="flex-grow flex flex-wrap gap-2">
        <BreadCrumbHome divider={breadCrumbs && breadCrumbs.length > 0} />
        {breadCrumbs?.map((d, i, arr) => {
          if (d.label) {
            return (
              <BreadCrumb key={i} divider={i < arr.length - 1}>
                <Button variant="ghost" size="bread-crumb" asChild>
                  <Link href={d.path}>
                    {d.icon}
                    <p className="flex-1 text-left">{d.label}</p>
                  </Link>
                </Button>
              </BreadCrumb>
            );
          }
          if (d.icon) {
            return (
              <BreadCrumb key={i} divider={i < arr.length - 1}>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={d.path}>{d.icon}</Link>
                </Button>
              </BreadCrumb>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
BreadCrumbs.displayName = 'BreadCrumbs';

export { BreadCrumbs };
