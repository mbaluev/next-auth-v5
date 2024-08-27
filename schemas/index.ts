import * as z from 'zod';
import { UserRole } from '@prisma/client';

export const settingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(1)),
    newPassword: z.optional(z.string().min(1)),
  })
  .refine((data) => !(data.newPassword && !data.password), {
    message: 'password is required',
    path: ['password'],
  })
  .refine((data) => !(data.password && !data.newPassword), {
    message: 'new password is required',
    path: ['newPassword'],
  });

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
  code: z.optional(z.string()),
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
  password: z
    .string()
    .min(1, {
      message: 'password is required',
    })
    .min(6, {
      message: 'minimum 6 characters required',
    }),
  name: z.string().min(1, {
    message: 'name is required',
  }),
});

export const resetSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'email is required',
    })
    .email({
      message: 'invalid email',
    }),
});

export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(1, {
      message: 'password is required',
    })
    .min(6, {
      message: 'minimum 6 characters required',
    }),
});
