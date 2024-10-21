'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/custom/form-alerts';
import { UserRole } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { admin } from '@/core/auth/actions/admin';

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('allowed api route', { duration: 10000 });
      } else {
        toast.error('forbidden api route', { duration: 10000 });
      }
    });
  };
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }
      if (data.success) {
        toast.success(data.success);
      }
    });
  };
  const success = () => toast.success('success');
  const warning = () => toast.warning('warning');
  const error = () => toast.error('error');
  const info = () => toast.info('info');

  return (
    <Card>
      <CardHeader>
        <p className="text-xl">🔑 admin</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="you are allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-md p-4 border">
          <p>admin-only api route</p>
          <Button variant="ghost" onClick={onApiRouteClick}>
            click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-md p-4 border">
          <p>admin-only server action</p>
          <Button variant="ghost" onClick={onServerActionClick}>
            click to test
          </Button>
        </div>
        <div>
          <Button variant="ghost" onClick={success}>
            click to success
          </Button>
        </div>
        <div>
          <Button variant="ghost" onClick={warning}>
            click to warning
          </Button>
        </div>
        <div>
          <Button variant="ghost" onClick={error}>
            click to error
          </Button>
        </div>
        <div>
          <Button variant="ghost" onClick={info}>
            click to info
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
