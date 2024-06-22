import { LockClosedIcon, ReloadIcon } from '@radix-ui/react-icons';

interface HeaderProps {
  label: string;
  loading?: boolean;
}

export const Header = ({ label, loading }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-row gap-x-4 items-center">
        {loading ? (
          <ReloadIcon className="h-6 w-6 animate-spin" />
        ) : (
          <LockClosedIcon className="h-6 w-6" />
        )}
        <h1 className="text-3xl font-semibold">auth</h1>
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
