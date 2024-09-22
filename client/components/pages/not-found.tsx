import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/form-alerts/form-error';
import Image from 'next/image';

export const NotFoundPage = () => {
  return (
    <section className="flex flex-grow items-center justify-center w-full">
      <Image src="/assets/not-found.jpg" alt="not-found" objectFit="cover" fill />
      <div className="absolute w-full h-full top-0 left-0 z-[5] bg-background opacity-80" />
      <CardWrapper
        headerLabel="a simple authentication service"
        backButtonLabel="back home"
        backButtonHref="/"
        border={false}
      >
        <FormError message="page not found" />
      </CardWrapper>
    </section>
  );
};
