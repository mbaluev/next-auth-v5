import { Alert, AlertDescription } from '@/components/ui/alert';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <Alert variant="emerald">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
