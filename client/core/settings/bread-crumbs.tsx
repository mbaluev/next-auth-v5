'use client';

import { LayoutDashboard, MonitorSmartphone, Server } from 'lucide-react';
import { ReactNode } from 'react';

interface ICrumbDTO {
  path: string;
  icon?: ReactNode;
  label?: string;
  loading?: boolean;
}

const BREAD_CRUMBS: Record<string, ICrumbDTO[]> = {
  '/': [],
  '/dashboard': [
    {
      path: '/dashboard',
      icon: <LayoutDashboard />,
      label: 'dashboard',
      loading: false,
    },
  ],
  '/client': [
    {
      path: '/client',
      icon: <MonitorSmartphone />,
      label: 'client',
      loading: false,
    },
  ],
  '/server': [
    {
      path: '/server',
      icon: <Server />,
      label: 'server',
      loading: false,
    },
  ],
};

export { BREAD_CRUMBS };
export type { ICrumbDTO };
