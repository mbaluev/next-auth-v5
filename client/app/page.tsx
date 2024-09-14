import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import { LockClosedIcon } from '@radix-ui/react-icons';
import { Header } from '@/components/layout/header';

export default function Home() {
  return (
    <main className="flex h-full flex-col bg-background">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="space-y-10 text-center">
          <div className="flex flex-row gap-x-4 items-center justify-center">
            <LockClosedIcon className="h-14 w-14" />
            <h1 className="text-6xl font-semibold">auth</h1>
          </div>
          <div className="space-y-1">
            <p className="text-lg text-muted-foreground">a simple</p>
            <p className="text-lg text-muted-foreground">authentication service</p>
            <p className="text-lg text-muted-foreground">landing page</p>
          </div>
          <div>
            <LoginButton mode="redirect" asChild>
              <Button variant="default" size="lg">
                sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </main>
  );
}
