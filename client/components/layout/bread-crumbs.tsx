'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { IBreadCrumbDTO } from '@/core/settings/bread-crumbs';
import { Logo } from '@/components/layout/logo';
import { ReactNode } from 'react';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

interface IBreadCrumbWrapperProps {
  children: ReactNode;
  divider?: boolean;
}
const BreadCrumbWrapper = (props: IBreadCrumbWrapperProps) => {
  const { children, divider } = props;
  return (
    <div className="flex gap-2 items-center">
      {children}
      {divider && <ChevronRight className="text-muted-foreground" />}
    </div>
  );
};

interface IBreadCrumbHomeProps {
  divider?: boolean;
}
const BreadCrumbHome = (props: IBreadCrumbHomeProps) => {
  const { divider } = props;
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <BreadCrumbWrapper divider={divider}>
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <Logo />
        </Link>
      </Button>
    </BreadCrumbWrapper>
  );
};

interface IBreadCrumbProps {
  key: number;
  data: IBreadCrumbDTO;
  divider: boolean;
}
const BreadCrumbLabel = (props: IBreadCrumbProps) => {
  const { key, data, divider } = props;
  const { icon, label } = data;
  if (!label) return null;
  return (
    <BreadCrumbWrapper key={key} divider={divider}>
      <Button variant="ghost" size="bread-crumb" disabled>
        {icon}
        <p className="flex-1 text-left">{label}</p>
      </Button>
    </BreadCrumbWrapper>
  );
};
const BreadCrumbIcon = (props: IBreadCrumbProps) => {
  const { key, data, divider } = props;
  const { icon } = data;
  if (!icon) return null;
  return (
    <BreadCrumbWrapper key={key} divider={divider}>
      <Button variant="ghost" size="icon" disabled>
        {icon}
      </Button>
    </BreadCrumbWrapper>
  );
};
const BreadCrumbLabelLink = (props: IBreadCrumbProps) => {
  const { key, data, divider } = props;
  const { path, icon, label } = data;
  if (!path || !label) return null;
  return (
    <BreadCrumbWrapper key={key} divider={divider}>
      <Button variant="ghost" size="bread-crumb" asChild>
        <Link href={path}>
          {icon}
          <p className="flex-1 text-left">{label}</p>
        </Link>
      </Button>
    </BreadCrumbWrapper>
  );
};
const BreadCrumbIconLink = (props: IBreadCrumbProps) => {
  const { key, data, divider } = props;
  const { path, icon } = data;
  if (!path || !icon) return null;
  return (
    <BreadCrumbWrapper key={key} divider={divider}>
      <Button variant="ghost" size="icon" asChild>
        <Link href={path}>{icon}</Link>
      </Button>
    </BreadCrumbWrapper>
  );
};

interface IBreadCrumbsComponentProps {
  home?: boolean;
  breadCrumbs: IBreadCrumbDTO[];
}
const BreadCrumbs = (props: IBreadCrumbsComponentProps) => {
  const { home, breadCrumbs } = props;
  return (
    <div className="flex-grow flex flex-wrap gap-2">
      {home && <BreadCrumbHome divider={breadCrumbs && breadCrumbs.length > 0} />}
      {breadCrumbs?.map((d, i, arr) => {
        const divider = i < arr.length - 1;
        if (!d.path && d.label) return <BreadCrumbLabel key={i} data={d} divider={divider} />;
        if (!d.path && d.icon) return <BreadCrumbIcon key={i} data={d} divider={divider} />;
        if (d.path && d.label) return <BreadCrumbLabelLink key={i} data={d} divider={divider} />;
        if (d.path && d.icon) return <BreadCrumbIconLink key={i} data={d} divider={divider} />;
        return null;
      })}
    </div>
  );
};

export { BreadCrumbs };
