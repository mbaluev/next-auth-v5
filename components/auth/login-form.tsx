'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { login } from '@/actions/login';
import { Fragment, useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'email already in use with different provider'
      : '';

  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setError(undefined);
    setSuccess(undefined);
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError('something went wrong'));
    });
  };

  return (
    <CardWrapper
      loading={isPending}
      headerLabel="welcome back"
      backButtonLabel="don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel>two factor code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="enter code"
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <Fragment>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel>email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="enter email"
                          type="email"
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="enter password"
                          type="password"
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                      <Button variant="link" className="px-0" asChild>
                        <Link href="/auth/reset">forgot password?</Link>
                      </Button>
                    </FormItem>
                  )}
                />
              </Fragment>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" size="lg" disabled={isPending}>
            {showTwoFactor ? 'confirm' : 'login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
