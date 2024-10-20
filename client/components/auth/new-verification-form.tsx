'use client';

import { CardWrapper } from '@/components/auth/card-wrapper';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/core/auth/actions/new-verification';
import { FormSuccess, FormError, FormInfo } from '@/components/custom/form-alerts';
import { router } from 'next/client';

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('missing token');
      return;
    }
    newVerification(token)
      .then((data) => {
        if (data.success) {
          setSuccess(data.success);
          router.push('/auth/login');
        }
        if (data.error) {
          setError(data.error);
        }
      })
      .catch(() => {
        setError('something went wrong');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="confirming you verification"
      backButtonLabel="back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex flex-col space-y-6 items-center w-full justify-center">
        {!success && !error && <FormInfo message="verificatoin in progress..." />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
