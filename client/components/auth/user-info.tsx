import { ExtendedUser } from '@/next-auth';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as React from 'react';
import { cn } from '@/core/utils/cn';
import { forwardRef, HTMLAttributes } from 'react';

interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = forwardRef<HTMLDivElement, UserInfoProps>((props, ref) => {
  const { user, label, ..._props } = props;
  return (
    <Card ref={ref} {..._props}>
      <CardHeader>
        <p className="text-xl">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between">
          <p className="font-medium">id</p>
          <p>{user?.id}</p>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between">
          <p className="font-medium">name</p>
          <p>{user?.name}</p>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between">
          <p className="font-medium">email</p>
          <p>{user?.email}</p>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between">
          <p className="font-medium">role</p>
          <p>{user?.role}</p>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between">
          <p className="font-medium">two factor authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'on' : 'off'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
});
UserInfo.displayName = 'Card';

export { UserInfo };
