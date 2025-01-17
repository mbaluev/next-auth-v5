import { ReactElement } from 'react';
import { CTree } from '@/core/utils/tree';
import {
  LayoutDashboard,
  MonitorSmartphone,
  Server,
  SwatchBook,
  TriangleAlert,
} from 'lucide-react';
import { ROUTES } from '@/core/settings/routes';

type TMenuItemDTO = {
  path?: string | null;
  label?: string | null;
  icon?: ReactElement | null;
};

const menuTree = new CTree<TMenuItemDTO>();
menuTree.insert(ROUTES.DASHBOARD.name, menuTree.root.id, {
  path: ROUTES.DASHBOARD.path,
  label: ROUTES.DASHBOARD.label,
  icon: <LayoutDashboard />,
});
menuTree.insert(ROUTES.NOT_FOUND.name, menuTree.root.id, {
  path: ROUTES.NOT_FOUND.path,
  label: ROUTES.NOT_FOUND.label,
  icon: <TriangleAlert className="w-6 h-6" />,
});
menuTree.insert(ROUTES.SAMPLES.name, menuTree.root.id, {
  label: ROUTES.SAMPLES.label,
  icon: <SwatchBook />,
});
menuTree.insert(ROUTES.SAMPLE_CLIENT.name, ROUTES.SAMPLES.name, {
  path: ROUTES.SAMPLE_CLIENT.path,
  label: ROUTES.SAMPLE_CLIENT.label,
  icon: <MonitorSmartphone />,
});
menuTree.insert(ROUTES.SAMPLE_SERVER.name, ROUTES.SAMPLES.name, {
  path: ROUTES.SAMPLE_SERVER.path,
  label: ROUTES.SAMPLE_SERVER.label,
  icon: <Server />,
});

export { menuTree };
export type { TMenuItemDTO };
