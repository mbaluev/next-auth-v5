import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import { LockClosedIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-950
        "
    >
      <div className="space-y-6 text-center">
        <div className="flex flex-row gap-x-4 items-center justify-center">
          <LockClosedIcon className="h-14 w-14 text-white" />
          <h1 className="text-6xl text-white font-semibold">auth</h1>
        </div>
        <p className="text-lg text-white">a simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
