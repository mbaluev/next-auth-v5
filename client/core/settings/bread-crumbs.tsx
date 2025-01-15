'use client';

import { ReactNode } from 'react';

interface ICrumbDTO {
  path: string;
  icon?: ReactNode;
  label?: string;
  loading?: boolean;
}

const BREAD_CRUMBS: Record<string, ICrumbDTO[]> = {
  '/': [],
  '/chart': [{ path: '/chart', label: 'chart', loading: false }],
  '/client': [{ path: '/client', label: 'client', loading: false }],
  '/server': [{ path: '/server', label: 'server', loading: false }],
};

export { BREAD_CRUMBS };
export type { ICrumbDTO };
