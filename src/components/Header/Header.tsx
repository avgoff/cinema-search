import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import logo from '../../assets/logo/logo.svg'
import './Header.css';

export const Header: React.FC = () => {
    const navigate = useNavigate();
  
    const user = localStorage.getItem('user');
    const login = user ? JSON.parse(user).login : null;
  
    const handleLogout = () => {
      localStorage.removeItem('user');
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
                {/* добавлю после карточек, пока только кнопки */}
                {/* <Link to={ROUTES.FAVORITES} className="header__btn">Избранное</Link>
                <Link to={ROUTES.HISTORY} className="header__btn">История</Link> */}
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