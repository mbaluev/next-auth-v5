'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/core/auth/schemas';
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
import { useState, useTransition } from 'react';
import { register } from '@/core/auth/actions/register';
import { InputPassword } from '@/components/ui/input-password';

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setError(undefined);
    setSuccess(undefined);
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      loading={isPending}
      headerLabel="create an account"
      backButtonLabel="already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="enter name"
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <InputPassword
                      {...field}
                      disabled={isPending}
                      placeholder="enter password"
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" size="lg" disabled={isPending}>
            create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
