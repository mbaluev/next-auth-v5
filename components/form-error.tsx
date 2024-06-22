import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-4 text-destructive">
      <ExclamationTriangleIcon className="h-6 w-6" />
      <p>{message}</p>
    </div>
  );
};
