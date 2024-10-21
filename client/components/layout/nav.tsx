'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';

export const Nav = () => {
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <div className="flex flex-col p-4">
      <Button variant="ghost">navigation</Button>
    </div>
  );
};
