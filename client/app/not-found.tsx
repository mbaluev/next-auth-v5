import Image from 'next/image';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/form-error';

export default function NotFound() {
  return (
    <main className="flex h-full relative items-center justify-center">
      <Image src="/static/not-found.jpg" alt="not-found" objectFit="cover" fill className="z-[0]" />
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
