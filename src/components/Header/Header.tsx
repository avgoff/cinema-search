import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import logo from '../../assets/logo/logo.svg'
import './Header.css';
import { STORAGE_KEYS } from '../../constants/storageKeys';

export const Header: React.FC = () => {
    const navigate = useNavigate();
  
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    const login = user ? JSON.parse(user).login : null;

    const handleLogout = () => {
      localStorage.removeItem(STORAGE_KEYS.USER);
      navigate(ROUTES.HOME);
   };
  
    return (
        <header className="header">
        <div className="header__container">
        <Link to={ROUTES.HOME} className="header__logo"> <img src={logo} alt="Лого" className="header__logo" />
        </Link>
  
          <div className="header__right">
            {login ? (
              <>
                <span className="header__user">{login}</span>
                <button className="header__btn">Избранное</button>
                <button className="header__btn">История</button>
                <button onClick={handleLogout} className="header__btn exit">Выйти</button>
              </>
            ) : (
              <>
                <Link to={ROUTES.SIGN_IN} className="header__btn">Вход</Link>
                <Link to={ROUTES.SIGN_UP} className="header__btn">Регистрация</Link>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };