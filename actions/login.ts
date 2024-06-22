'use server';

import * as z from 'zod';
import { loginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid fields' };
  }

  return { success: 'email sent' };
};
