import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__logo' />
      </Link>
      {loggedIn ?
        <div>
          <Navigation />
        </div>
        :
        <nav className='header__navigation'>
          <Link className='header__navigation-button' to='/signup'>Регистрация</Link>
          <Link className='header__navigation-button header__navigation-button_dark' to='/signin'>Войти</Link>
        </nav>
      }
    </header>
  );
};

export default Header;
