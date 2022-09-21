import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="header__login">
      <ul className='header__nav-login'>
        <li className='header__nav-item'>
          <NavLink to='/'
            className='header__nav-link header__nav-link_active'>
            Профиль
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink to='/'
            className='header__nav-link'>
            График работы
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <Link to='/'
            className='header__nav-link'>
            Расчетный лист
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
