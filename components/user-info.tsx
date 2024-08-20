import { ExtendedUser } from '@/next-auth';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="rounded-md shadow-sm max-w-[500px] w-full">
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
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
