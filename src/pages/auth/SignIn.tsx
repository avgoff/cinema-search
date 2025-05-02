import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { AuthForm } from './AuthForm';
import { signInSchema } from './authSchemas';
import { STORAGE_KEYS } from '../../constants/storageKeys';

const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ login: '', password: '', common: '' });

  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    setErrors(prev => ({ ...prev, login: '' }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors(prev => ({ ...prev, password: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = signInSchema.safeParse({ login, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        login: fieldErrors.login?.[0] || '',
        password: fieldErrors.password?.[0] || '',
        common: '',
      });
      return;
    }

    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (!storedUser) {
      setErrors({ login: '', password: '', common: 'Пользователь не найден' });
      return;
    }

    const { login: storedLogin, password: storedPassword } = JSON.parse(storedUser);
    if (login !== storedLogin || password !== storedPassword) {
      setErrors({ login: '', password: '', common: 'Неправильный логин или пароль' });
      return;
    }

    localStorage.setItem(STORAGE_KEYS.IS_AUTH, 'true');
    navigate(ROUTES.HOME);
  };

  return (
    <AuthForm
      title="ВХОД"
      buttonText="Войти"
      linkText="Зарегистрироваться"
      linkTo={ROUTES.SIGN_UP}
      login={login}
      password={password}
      errors={errors}
      onLoginChange={handleLoginChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;