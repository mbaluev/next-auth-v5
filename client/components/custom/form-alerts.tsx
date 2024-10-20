import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Spinner } from '@/components/ui/spinner';

interface FormAlertProps {
  message?: string;
}

const FormError = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const FormInfo = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="blue">
      <Spinner className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const FormSuccess = ({ message }: FormAlertProps) => {
  if (!message) return null;
  return (
    <Alert variant="emerald">
      <CheckIcon className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export { FormError, FormInfo, FormSuccess };
