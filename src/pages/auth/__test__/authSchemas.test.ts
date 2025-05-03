import { describe, it, expect } from 'vitest';
import { signInSchema, signUpSchema } from '../authSchemas';

describe('signInSchema', () => {
  it('should pass with valid data', () => {
    const result = signInSchema.safeParse({ login: 'user', password: '123456' });
    expect(result.success).toBe(true);
  });

  it('should fail with empty fields', () => {
    const result = signInSchema.safeParse({ login: '', password: '' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.login).toContain('Введите логин');
      expect(result.error.flatten().fieldErrors.password).toContain('Введите пароль');
    }
  });
});

describe('signUpSchema', () => {
  it('should pass with valid data', () => {
    const result = signUpSchema.safeParse({ login: 'newuser', password: '12345678' });
    expect(result.success).toBe(true);
  });

  it('should fail with short login and password', () => {
    const result = signUpSchema.safeParse({ login: 'a', password: '123' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.login?.[0]).toBe('Логин должен содержать минимум 3 символа');
      expect(result.error.flatten().fieldErrors.password?.[0]).toBe('Пароль должен быть не менее 6 символов');
    }
  });
});
