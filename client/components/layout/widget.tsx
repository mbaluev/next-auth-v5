import * as React from 'react';
import { cn } from '@/core/utils/cn';

const Widget = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col flex-grow rounded-md bg-sidebar text-sidebar-foreground',
        className
      )}
      {...props}
    />
  )
);
Widget.displayName = 'Widget';

const WidgetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-0 justify-between p-4 pb-0', className)} {...props} />
  )
);
WidgetHeader.displayName = 'WidgetHeader';

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
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 p-4', className)} {...props} />
  )
);
WidgetContent.displayName = 'WidgetContent';

export { Widget, WidgetHeader, WidgetTitle, WidgetContent, WidgetButtons };
