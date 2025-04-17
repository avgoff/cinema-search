import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { AuthForm } from './AuthForm';

export const SignUp: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ login: '', password: '' });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedLogin = login.trim();
    const trimmedPassword = password.trim();

    const newErrors = {
      login: !trimmedLogin
        ? 'Логин обязателен'
        : trimmedLogin.length < 3
        ? 'Логин должен содержать минимум 3 символа'
        : '',
      password: !trimmedPassword
        ? 'Пароль обязателен'
        : trimmedPassword.length < 6
        ? 'Пароль должен быть не менее 6 символов'
        : '',
    };

    setErrors(newErrors);

    if (newErrors.login || newErrors.password) return;

    const userData = { login, password };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <AuthForm
      title="РЕГИСТРАЦИЯ"
      buttonText="Зарегистрироваться"
      linkText="Авторизоваться"
      linkTo={ROUTES.SIGN_IN}
      login={login}
      password={password}
      errors={errors}
      onLoginChange={setLogin}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};
