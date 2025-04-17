import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkText: string;
  linkTo: string;
  login: string;
  password: string;
  errors: { login: string; password: string; common?: string };
  onLoginChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  linkText,
  linkTo,
  login,
  password,
  errors,
  onLoginChange,
  onPasswordChange,
  onSubmit
}) => {
  return (
    <div className="background">
      <form className="form" onSubmit={onSubmit}>
        <Link to={linkTo} className="form__signs">{linkText}</Link>
        <h1 className="form__title">{title}</h1>
        <div className="form__fields input">
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => onLoginChange(e.target.value)}
          />
          <span className="error">{errors.login}</span>

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />
          <span className="error">{errors.password}</span>

          {errors.common && <span className="error common-error">{errors.common}</span>}

          <button type="submit" className="form__btn">{buttonText}</button>
        </div>
      </form>
    </div>
  );
};