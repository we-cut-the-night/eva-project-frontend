import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ changeUser }) {
  // Контекст
  const user = useContext(CurrentUserContext);

  return (
    <header className='header'>
      <Link className='header__logo-link' to='/'>
        <div className='header__logo'>EVA PROJECT LOGO</div>
      </Link>
      <div className='header__content'>
        <div className='header__nav-spot'>
          <span className=''>Заведение:</span>
          <select className='header__nav-select'>
            <option>Малышева 47а</option>
            <option>Аэропорт Кольцово</option>
          </select>
        </div>
        <div className='header__nav-settings'>
          <Link className='header__nav-link' to='/'>Помощь</Link>
          <Link className='header__nav-link' to='/'>Настройки</Link>
          <div className='header__account' onClick={changeUser}>{user.empl_initials}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
