import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <Alert variant="emerald">
      <CheckIcon className="h-6 w-6" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
