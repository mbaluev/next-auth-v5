'use client';

import { ReactNode } from 'react';
import { ROUTES } from '@/core/settings/routes';

interface IBreadCrumbDTO {
  path?: string;
  icon?: ReactNode;
  label?: string;
}

const BREAD_CRUMBS: Record<string, IBreadCrumbDTO[]> = {};
BREAD_CRUMBS[ROUTES.HOME.path] = [];
BREAD_CRUMBS[ROUTES.DASHBOARD.path] = [
  { path: ROUTES.DASHBOARD.path, label: ROUTES.DASHBOARD.label },
];
BREAD_CRUMBS[ROUTES.SAMPLE_CLIENT.path] = [
  { label: ROUTES.SAMPLES.label },
  { path: ROUTES.SAMPLE_CLIENT.path, label: ROUTES.SAMPLE_CLIENT.label },
];
BREAD_CRUMBS[ROUTES.SAMPLE_SERVER.path] = [
  { label: ROUTES.SAMPLES.label },
  { path: ROUTES.SAMPLE_SERVER.path, label: ROUTES.SAMPLE_SERVER.label },
];

export { BREAD_CRUMBS };
export type { IBreadCrumbDTO };
