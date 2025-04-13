import React from 'react';
import { Link } from "react-router-dom";
import './AuthPages.css'; 

const SignUp: React.FC = () => {
  return (
    <div className="background">
      <form className="form">
        <Link to="/signin" className="form__signs">Авторизоваться</Link>
        <h1 className="form__title">РЕГИСТРАЦИЯ</h1>
        <div className="form__fields input">
          <input type="text" name="login" placeholder="Логин" />
          {}
          <span className="error"> </span>

          <input type="password" name="password" placeholder="Пароль" />
          {}
          <span className="error"> </span>

          <button type="submit" className="form__btn">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;