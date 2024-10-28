import { UserInfo } from '@/components/auth/user-info';
import { currentUser } from '@/core/auth/lib/current-user';

export const WidgetServer = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label="🛠 server component" />;
};
