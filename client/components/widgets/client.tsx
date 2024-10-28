import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { UserInfo } from '@/components/auth/user-info';

export const WidgetClient = () => {
  const user = useCurrentUser();
  return <UserInfo user={user} label="😎 client component" />;
};
