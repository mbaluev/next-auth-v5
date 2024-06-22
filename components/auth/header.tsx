import { LockClosedIcon } from '@radix-ui/react-icons';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderProps {
  label: string;
  loading?: boolean;
}

export const Header = ({ label, loading }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-row items-center">
        {loading ? (
          <Spinner className="h-8 w-8 animate-spin" />
        ) : (
          <LockClosedIcon className="h-8 w-8" />
        )}
        <Button variant="link" className="text-3xl font-semibold" asChild>
          <Link href="/">auth</Link>
        </Button>
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
