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

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'email is required',
    })
    .email({
      message: 'invalid email',
    }),
  password: z.string().min(6, {
    message: 'minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'name is required',
  }),
});
