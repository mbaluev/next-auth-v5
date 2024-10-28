import { currentUser } from '@/core/auth/lib/current-user';
import { UserInfo } from '@/components/auth/user-info';

const ServerPage = async () => {
  const user = await currentUser();
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <UserInfo user={user} label="🛠 server component" />
    </div>
  );
};

export default ServerPage;
