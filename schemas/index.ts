import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'email is required',
    })
    .email({
      message: 'invalid email',
    }),
  password: z.string().min(1, {
    message: 'password is required',
  }),
});
