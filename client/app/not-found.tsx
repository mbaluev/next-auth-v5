import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/form-alerts/form-error';

export default function NotFound() {
  return (
    <main className="flex h-full relative items-center justify-center">
      <CardWrapper
        headerLabel="a simple authentication service"
        backButtonLabel="back home"
        backButtonHref="/"
        border={false}
      >
        <FormError message="page not found" />
      </CardWrapper>
    </main>
  );
}
