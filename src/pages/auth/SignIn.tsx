import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css'; 

const SignIn: React.FC = () => {
  return (
    <div className="background">
      <form className="form">
        <Link to="/signup" className="form__signs">Зарегистрироваться</Link>
        <h1 className="form__title">ВХОД</h1>
        <div className="form__fields input">
          <input type="text" name="login" placeholder="Логин" />
          <span className="error"> </span>

          <input type="password" name="password" placeholder="Пароль" />
          <span className="error"> </span>

          <button type="submit" className="form__btn">Войти</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;