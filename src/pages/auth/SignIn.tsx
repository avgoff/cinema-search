import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { AuthForm } from './AuthForm';

export const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ login: '', password: '', common: '' });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      login: login.trim() ? '' : 'Введите логин',
      password: password.trim() ? '' : 'Введите пароль',
      common: ''
    };

    if (newErrors.login || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setErrors({ ...newErrors, common: 'Пользователь не найден' });
      return;
    }

    const { login: storedLogin, password: storedPassword } = JSON.parse(storedUser);

    if (login !== storedLogin || password !== storedPassword) {
      setErrors({ ...newErrors, common: 'Неправильный логин или пароль' });
      return;
    }

    localStorage.setItem('isAuthenticated', 'true');
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
      onLoginChange={setLogin}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};
