'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = async () => {
    await logout();
    await signOut();
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="break-words">{user ? JSON.stringify(user, null, 4) : '{ ... }'}</p>
      <Button onClick={onClick} className="w-fit">
        sign out
      </Button>
    </div>
  );
};

export default SettingsPage;
