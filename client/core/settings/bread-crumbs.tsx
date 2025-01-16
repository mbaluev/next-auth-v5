'use client';

import { ReactNode } from 'react';

interface IBreadCrumbDTO {
  path?: string;
  icon?: ReactNode;
  label?: string;
}

const BREAD_CRUMBS: Record<string, IBreadCrumbDTO[]> = {};
BREAD_CRUMBS['/'] = [];
BREAD_CRUMBS['/dashboard'] = [{ path: '/dashboard', label: 'dashboard' }];
BREAD_CRUMBS['/client'] = [{ label: 'sample' }, { path: '/client', label: 'client' }];
BREAD_CRUMBS['/server'] = [{ label: 'sample' }, { path: '/server', label: 'server' }];

export { BREAD_CRUMBS };
export type { IBreadCrumbDTO };
