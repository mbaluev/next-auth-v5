import { toast } from 'sonner';
import { admin } from '@/core/auth/actions/admin';
import { RoleGate } from '@/components/auth/role-gate';
import { UserRole } from '@prisma/client';
import { AlertSuccess } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Ellipsis, Shield } from 'lucide-react';
import { TooltipText } from '@/components/ui/tooltip';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetIcon,
  WidgetProps,
  WidgetTitle,
} from '@/components/layout/widget';

export const WidgetAdmin = (props: WidgetProps) => {
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
    <Widget variant="border" {...props}>
      <WidgetHeader variant="background">
        <WidgetIcon>
          <Shield />
        </WidgetIcon>
        <WidgetTitle>admin</WidgetTitle>
      </WidgetHeader>
      <WidgetContent variant="padding" className="space-y-6">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <AlertSuccess message="you are allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-md p-4 gap-4 border">
          <p>admin-only api route</p>
          <Button variant="ghost" onClick={onApiRouteClick}>
            click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-md p-4 gap-4 border">
          <p>admin-only server action</p>
          <Button variant="ghost" onClick={onServerActionClick}>
            click to test
          </Button>
        </div>
        <div>
          <Button variant="destructive" onClick={error}>
            click to error
          </Button>
        </div>
        <div>
          <Button variant="warning" onClick={warning}>
            click to warning
          </Button>
        </div>
        <div>
          <Button variant="success" onClick={success}>
            click to success
          </Button>
        </div>
        <div>
          <Button variant="default" onClick={info}>
            click to info
          </Button>
        </div>
      </WidgetContent>
      <WidgetHeader className="p-4 justify-end">
        <TooltipText title="more actions" side="left">
          <Button variant="ghost" size="icon">
            <Ellipsis />
          </Button>
        </TooltipText>
      </WidgetHeader>
    </Widget>
  );
};
