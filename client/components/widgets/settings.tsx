import { FormSettings } from '@/components/auth/form-settings';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetIcon,
  WidgetProps,
  WidgetTitle,
} from '@/components/layout/widget';
import { Cog, Ellipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TooltipText } from '@/components/ui/tooltip';

export const WidgetSettings = (props: WidgetProps) => {
  return (
    <Widget variant="border" {...props}>
      <WidgetHeader variant="background">
        <WidgetIcon>
          <Cog />
        </WidgetIcon>
        <WidgetTitle>settings</WidgetTitle>
      </WidgetHeader>
      <WidgetContent variant="padding" className="space-y-4">
        <FormSettings />
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
