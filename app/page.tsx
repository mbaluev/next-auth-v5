import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-600
        {/*bg-sky-300*/}
        "
    >
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white">🤙 Auth</h1>
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
