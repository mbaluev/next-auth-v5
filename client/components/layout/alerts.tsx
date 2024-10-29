import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check, TriangleAlert } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

interface FormAlertProps {
  message?: string;
}

const AlertError = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="destructive">
      <TriangleAlert className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const AlertInfo = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="blue">
      <Spinner className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const AlertSuccess = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="emerald">
      <Check className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export { AlertError, AlertInfo, AlertSuccess };
