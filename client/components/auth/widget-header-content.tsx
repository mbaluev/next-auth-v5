import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';

interface HeaderProps {
  label?: string;
  loading?: boolean;
}

export const WidgetHeaderContent = ({ label, loading }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Button variant="ghost" className="text-3xl font-semibold" asChild>
        <Link href="/">
          {loading ? (
            <Spinner className="h-8 w-8 mr-3 animate-spin" />
          ) : (
            <Logo className="h-8 w-8 mr-3" />
          )}
          {process.env.APP_NAME}
        </Link>
      </Button>
      {label && <p className="text-muted-foreground">{label}</p>}
    </div>
  );
};
