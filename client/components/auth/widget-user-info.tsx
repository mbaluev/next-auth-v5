import { ExtendedUser } from '@/next-auth';
import { Badge } from '@/components/ui/badge';
import { forwardRef, ReactElement } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetIcon,
  WidgetProps,
  WidgetTitle,
} from '@/components/layout/widget';

interface UserInfoProps extends WidgetProps {
  user?: ExtendedUser;
  icon?: ReactElement;
  label: string;
}

const WidgetUserInfo = forwardRef<HTMLDivElement, UserInfoProps>((props, ref) => {
  const { user, icon, label, ..._props } = props;
  return (
    <Widget ref={ref} {..._props}>
      <WidgetHeader>
        {icon && <WidgetIcon>{icon}</WidgetIcon>}
        <WidgetTitle>{label}</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="space-y-4">
        <Separator />
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
      </WidgetContent>
    </Widget>
  );
});
WidgetUserInfo.displayName = 'UserInfo';

export { WidgetUserInfo };
