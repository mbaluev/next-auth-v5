import * as React from 'react';
import { cn } from '@/core/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const widgetVariants = cva('flex flex-col flex-grow gap-6 max-h-full', {
  variants: {
    variant: {
      default: 'p-6 bg-sidebar text-sidebar-foreground rounded-md',
      section: 'p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface WidgetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof widgetVariants> {}
const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(widgetVariants({ variant, className }))}
      data-type="widget"
      {...props}
    />
  )
);
Widget.displayName = 'Widget';

const WidgetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-0 gap-4 justify-between', className)} {...props} />
  )
);
WidgetHeader.displayName = 'WidgetHeader';

const WidgetIcon = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex-0', className)} {...props} />
);
WidgetIcon.displayName = 'WidgetIcon';

const WidgetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('flex-1', className)} {...props} />
));
WidgetTitle.displayName = 'WidgetTitle';

const WidgetButtons = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex-0 flex gap-2', className)} {...props} />
));
WidgetButtons.displayName = 'WidgetButtons';

const WidgetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex-1', className)} {...props} />
);
WidgetContent.displayName = 'WidgetContent';

export { Widget, WidgetHeader, WidgetIcon, WidgetTitle, WidgetContent, WidgetButtons };
