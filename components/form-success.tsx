import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-4 text-emerald-500">
      <CheckCircledIcon className="h-6 w-6" />
      <p className="text-md">{message}</p>
    </div>
  );
};
