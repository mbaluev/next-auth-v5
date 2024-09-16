import { LockClosedIcon } from '@radix-ui/react-icons';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderProps {
  label?: string;
  loading?: boolean;
}

export const Header = ({ label, loading }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-row items-center gap-x-3">
        <Button variant="ghost" className="text-3xl font-semibold" asChild>
          <Link href="/">
            {loading ? (
              <Spinner className="h-8 w-8 mr-3 animate-spin" />
            ) : (
              <LockClosedIcon className="h-8 w-8 mr-3" />
            )}
            auth
          </Link>
        </Button>
      </div>
      {label && <p className="text-muted-foreground">{label}</p>}
    </div>
  );
};
