'use client';

import { UserInfo } from '@/components/user-info';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

const ClientPage = () => {
  const user = useCurrentUser();
  return <UserInfo user={user} label="😎 client component" />;
};

export default ClientPage;
