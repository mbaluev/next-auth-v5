import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SettingsForm } from '@/components/auth/settings-form';

export const WidgetSettings = () => {
  return (
    <Card variant="widget">
      <CardHeader>
        <p className="text-xl">⚙️ settings</p>
      </CardHeader>
      <CardContent>
        <SettingsForm />
      </CardContent>
    </Card>
  );
};
