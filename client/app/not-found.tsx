import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/layout/form-alerts';

export default function NotFound() {
  return (
    <section className="flex flex-grow justify-center items-center">
      <div className="h-fit w-[min(350px,100%)] px-4">
        <CardWrapper
          headerLabel="a simple authentication service"
          backButtonLabel="back home"
          backButtonHref="/"
          variant="transparent"
        >
          <FormError message="page not found" />
        </CardWrapper>
      </div>
    </section>
  );
}
