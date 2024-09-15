'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SettingsForm from '@/components/auth/settings-form';

const SettingsPage = () => {
  return (
    <Card>
      <CardHeader>
        <p className="text-xl">⚙️ settings</p>
      </CardHeader>
      <CardContent>
        <SettingsForm />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
