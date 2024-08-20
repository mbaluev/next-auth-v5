import { currentUser } from '@/lib/auth';
import { UserInfo } from '@/components/user-info';

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label="💻 server component" />;
};

export default ServerPage;
