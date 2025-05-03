import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { AuthForm } from './AuthForm';
import { signUpSchema } from './authSchemas';
import { STORAGE_KEYS } from '../../constants/storageKeys';

const SignUp: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ login: '', password: '' });

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

    const result = signUpSchema.safeParse({ login, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        login: fieldErrors.login?.[0] || '',
        password: fieldErrors.password?.[0] || '',
      });
      return;
    }

    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify({ login, password }));
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
      onLoginChange={handleLoginChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
};
export default SignUp;