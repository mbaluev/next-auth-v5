'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settings } from '@/actions/settings';
import { useTransition } from 'react';
import { useSession } from 'next-auth/react';

const SettingsPage = () => {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({
        name: 'something different 1',
      }).then(() => {
        update();
      });
    });
  };

  return (
    <Card className="rounded-md shadow-sm w-full">
      <CardHeader>
        <p className="text-xl">⚙️ settings</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button disabled={isPending} onClick={onClick}>
          update name
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
