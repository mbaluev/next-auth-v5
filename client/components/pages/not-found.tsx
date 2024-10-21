import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/layout/form-alerts';
import Image from 'next/image';

export const NotFoundPage = () => {
  return (
    <section className="flex flex-grow items-center justify-center w-full relative">
      <div className="w-full h-full max-w-[600px] max-h-[600px] absolute">
        <Image src="/assets/no-signal.svg" alt="not-found" objectFit="cover" fill />
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-[5] bg-background opacity-90" />
      <div className="h-fit w-[min(400px,100%)] px-4 z-[8]">
        <CardWrapper
          headerLabel="a simple authentication service"
          backButtonLabel="back home"
          backButtonHref="/"
        >
          <FormError message="page not found" />
        </CardWrapper>
      </div>
    </section>
  );
};
