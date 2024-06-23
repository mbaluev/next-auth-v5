import { Alert, AlertDescription } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';

interface FormInfoProps {
  message?: string;
}

export const FormInfo = ({ message }: FormInfoProps) => {
  if (!message) return null;
  return (
    <Alert variant="blue">
      <Spinner className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
