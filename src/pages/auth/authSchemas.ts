import { z } from 'zod';

export const signInSchema = z.object({
  login: z.string().min(1, 'Введите логин'),
  password: z.string().min(1, 'Введите пароль'),
});

export const signUpSchema = z.object({
  login: z.string()
    .min(1, 'Логин обязателен')
    .min(3, 'Логин должен содержать минимум 3 символа'),
  password: z.string()
    .min(1, 'Пароль обязателен')
    .min(6, 'Пароль должен быть не менее 6 символов'),
});