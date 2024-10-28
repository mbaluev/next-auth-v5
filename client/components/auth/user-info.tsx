import { ExtendedUser } from '@/next-auth';
import { Card, CardContent, CardHeader, CardProps } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as React from 'react';
import { forwardRef } from 'react';
import { Separator } from '@/components/ui/separator';

interface UserInfoProps extends CardProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = forwardRef<HTMLDivElement, UserInfoProps>((props, ref) => {
  const { user, label, ..._props } = props;
  return (
    <Card variant="widget" ref={ref} {..._props}>
      <CardHeader>
        <p className="text-xl">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <p className="font-medium">id</p>
          <p>{user?.id}</p>
        </div>
        <Separator />
        <div className="flex flex-row gap-4 items-center justify-between">
          <p className="font-medium">name</p>
          <p>{user?.name}</p>
        </div>
        <Separator />
        <div className="flex flex-row gap-4 items-center justify-between">
          <p className="font-medium">email</p>
          <p>{user?.email}</p>
        </div>
        <Separator />
        <div className="flex flex-row gap-4 items-center justify-between">
          <p className="font-medium">role</p>
          <p>{user?.role}</p>
        </div>
        <Separator />
        <div className="flex flex-row gap-4 items-center justify-between">
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
