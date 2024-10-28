'use client';

import { UserInfo } from '@/components/auth/user-info';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

const ClientPage = () => {
  const user = useCurrentUser();
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <UserInfo user={user} label="😎 client component" />
    </div>
  );
};

export default ClientPage;
