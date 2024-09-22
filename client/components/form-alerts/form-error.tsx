import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
