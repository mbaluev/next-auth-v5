'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { SettingsForm } from '@/components/auth/settings-form';

const SettingsPage = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card variant="widget">
        <CardHeader>
          <p className="text-xl">⚙️ settings</p>
        </CardHeader>
        <CardContent>
          <SettingsForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
