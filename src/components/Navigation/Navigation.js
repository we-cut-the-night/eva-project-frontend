import { Link, NavLink } from 'react-router-dom';
import img_calendar from '../../images/calendar.svg';
import img_employees from '../../images/employees.svg';
import img_chart from '../../images/chart.svg';
import img_exit from '../../images/exit.svg';
import './Navigation.css';

function Navigation({loggedIn, onSignout}) {
  return (
    <nav className={loggedIn ? 'nav' : 'nav_disabled'}>
      <ul className='nav__items'>
        <li className='nav__item'>
          <NavLink to='/schedule' className='nav__link'>
            <img className='nav__item-img' src={img_calendar} alt='Расписание' />
            Расписание
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to='/network' className='nav__link'>
            <img className='nav__item-img' src={img_employees} alt='Сотрудники' />
            Сотрудники
          </NavLink>
        </li>
        <li className='nav__item'>
          <Link to='/income' className='nav__link'>
            <img className='nav__item-img' src={img_chart} alt='Финансы' />
            Финансы
          </Link>
        </li>
      </ul>
      <button className='nav__item-signout' onClick={onSignout}>
        <img className='nav__item-img' src={img_exit} alt='Выйти' />
        Выйти
      </button>

    </nav>
  );
};

export default Navigation;
