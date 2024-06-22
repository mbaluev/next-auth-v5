'use server';

import * as z from 'zod';
import { registerSchema } from '@/schemas';

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid fields' };
  }

  return { success: 'email sent' };
};
