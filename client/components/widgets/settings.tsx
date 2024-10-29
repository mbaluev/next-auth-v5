import { FormSettings } from '@/components/auth/form-settings';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetIcon,
  WidgetTitle,
} from '@/components/layout/widget';
import { Cog, Settings, Settings2, Wrench } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const WidgetSettings = () => {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetIcon>
          <Cog />
        </WidgetIcon>
        <WidgetTitle>settings</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="space-y-4">
        <Separator />
        <FormSettings />
      </WidgetContent>
    </Widget>
  );
};
