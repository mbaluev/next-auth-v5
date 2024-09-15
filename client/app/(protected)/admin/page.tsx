'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
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

  return (
    <Card className="border-none space-y-6">
      <CardHeader className="p-0">
        <p className="text-xl">🔑 admin</p>
      </CardHeader>
      <CardContent className="space-y-6 p-0">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="you are allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-md px-4 py-2 border border-gray-200">
          <p>admin-only api route</p>
          <Button variant="link" className="px-0 py-0 h-auto" onClick={onApiRouteClick}>
            click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-md px-4 py-2 border border-gray-200">
          <p>admin-only server action</p>
          <Button variant="link" className="px-0 py-0 h-auto" onClick={onServerActionClick}>
            click to test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
