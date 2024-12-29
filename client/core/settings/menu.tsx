import { ReactElement } from 'react';
import { CTree } from '@/core/utils/tree';
import {
  LayoutDashboard,
  MonitorSmartphone,
  Server,
  SwatchBook,
  TriangleAlert,
} from 'lucide-react';

type TMenuItemDTO = {
  path?: string | null;
  label?: string | null;
  icon?: ReactElement | null;
};

const menuTree = new CTree<TMenuItemDTO>();
menuTree.insert('dashboard', menuTree.root.id, {
  path: '/dashboard',
  label: 'dashboard',
  icon: <LayoutDashboard />,
});
menuTree.insert('page-not-found', menuTree.root.id, {
  path: '/xxx',
  label: 'page not found',
  icon: <TriangleAlert className="w-6 h-6" />,
});
menuTree.insert('samples', menuTree.root.id, {
  label: 'samples',
  icon: <SwatchBook />,
});
menuTree.insert('client', 'samples', {
  path: '/client',
  label: 'client',
  icon: <MonitorSmartphone />,
});
menuTree.insert('server', 'samples', {
  path: '/server',
  label: 'server',
  icon: <Server />,
});

export { menuTree };
export type { TMenuItemDTO };
