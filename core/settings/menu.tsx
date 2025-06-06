import {
  AppWindowMac,
  Code,
  LayoutDashboard,
  MonitorSmartphone,
  OctagonX,
  Server,
  SwatchBook,
  UserPen,
} from 'lucide-react';
import { CTree } from '@/core/utils/tree';
import { TRouteDTO, ROUTES } from '@/core/settings/routes';

const MENU: Record<string, TRouteDTO> = {
  DEBUG: { ...ROUTES.DEBUG, icon: <Code /> },
  PROFILE: { ...ROUTES.PROFILE, icon: <UserPen /> },
  DASHBOARD: { ...ROUTES.DASHBOARD, icon: <LayoutDashboard /> },
  SAMPLES: { ...ROUTES.SAMPLES, icon: <SwatchBook /> },
  SAMPLE_CLIENT: { ...ROUTES.SAMPLE_CLIENT, icon: <MonitorSmartphone /> },
  SAMPLE_SERVER: { ...ROUTES.SAMPLE_SERVER, icon: <Server /> },
  ERRORS: { ...ROUTES.ERRORS, icon: <AppWindowMac /> },
  NOT_FOUND: { ...ROUTES.NOT_FOUND, icon: <OctagonX /> },
};
const menuTree = new CTree<TRouteDTO>();
menuTree.insert(ROUTES.DEBUG.name, menuTree.root.id, MENU.DEBUG);
menuTree.insert(ROUTES.PROFILE.name, menuTree.root.id, MENU.PROFILE);
menuTree.insert(ROUTES.DASHBOARD.name, menuTree.root.id, MENU.DASHBOARD);
menuTree.insert(ROUTES.SAMPLE_CLIENT.name, menuTree.root.id, MENU.SAMPLE_CLIENT);
menuTree.insert(ROUTES.SAMPLE_SERVER.name, menuTree.root.id, MENU.SAMPLE_SERVER);
// menuTree.insert(ROUTES.SAMPLES.name, menuTree.root.id, MENU.SAMPLES);
// menuTree.insert(ROUTES.SAMPLE_CLIENT.name, ROUTES.SAMPLES.name, MENU.SAMPLE_CLIENT);
// menuTree.insert(ROUTES.SAMPLE_SERVER.name, ROUTES.SAMPLES.name, MENU.SAMPLE_SERVER);

export { menuTree };
