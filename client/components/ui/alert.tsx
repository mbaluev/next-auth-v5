import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/core/utils/cn';
import { Check, TriangleAlert } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

const alertVariants = cva('relative flex space-x-3 w-full rounded-md border px-4 py-3', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      emerald:
        'border-emerald-500/50 text-emerald-500 dark:border-emerald-500 [&>svg]:text-emerald-500',
      blue: 'border-blue-500/50 text-blue-500 dark:border-blue-500 [&>svg]:text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('[&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

// variants

interface AlertProps {
  message?: string;
}

const AlertError = ({ message }: AlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="destructive">
      <TriangleAlert className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const AlertInfo = ({ message }: AlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="blue">
      <Spinner className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const AlertSuccess = ({ message }: AlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="emerald">
      <Check className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export { Alert, AlertTitle, AlertDescription, AlertError, AlertInfo, AlertSuccess };
