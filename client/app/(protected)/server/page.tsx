import { currentUser } from '@/core/auth/lib/current-user';
import { UserInfo } from '@/components/auth/user-info';

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label="🛠 server component" />;
};

export default ServerPage;
