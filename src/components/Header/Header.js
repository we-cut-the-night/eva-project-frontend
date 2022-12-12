import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import gear from '../../images/gear.svg'

import './Header.css';

function Header({loggedIn}) {
  // Контекст
  const user = useContext(CurrentUserContext);
  const initials = loggedIn ? user.lastname[0] + user.firstname[0] : null;

  return (
    <header className={loggedIn ? 'header' : 'header header_disabled'}>
      <Link className='header__logo-link' to='/'>
        <div className='header__logo'>EVA sked</div>
      </Link>
      <div className='header__nav-settings'>
        <img className='header__nav-icon' src={gear} alt='Настройки'/>
        <Link className='header__nav-link' to='/'>Настройки</Link>
        <div className='header__account'>{initials}</div>
      </div>
    </header>
  );
};

export default Header;
