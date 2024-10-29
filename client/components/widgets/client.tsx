import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { WidgetUserInfo } from '@/components/auth/widget-user-info';
import { MonitorSmartphone } from 'lucide-react';

export const WidgetClient = () => {
  const user = useCurrentUser();
  return <WidgetUserInfo user={user} icon={<MonitorSmartphone />} label="client component" />;
};
