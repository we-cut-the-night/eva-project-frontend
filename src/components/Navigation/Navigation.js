import { Link, NavLink } from 'react-router-dom';
import img_calendar from '../../images/calendar.svg';
import img_employees from '../../images/employees.svg';
import img_chart from '../../images/chart.svg';
import img_exit from '../../images/exit.svg';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className='nav__items'>
        <li className='nav__item'>
          <NavLink to='/schedule'
            className='nav__link'>
            <img className='nav__item-img' src={img_calendar} alt='Расписание' />
            Расписание
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to='/'
            className='nav__link'>
            <img className='nav__item-img' src={img_employees} alt='Сотрудники' />
            Сотрудники
          </NavLink>
        </li>
        <li className='nav__item'>
          <Link to='/income'
            className='nav__link'>
            <img className='nav__item-img' src={img_chart} alt='Расчетный лист' />
            Расчетный лист
          </Link>
        </li>
      </ul>
      <Link to='/'
        className='nav__link'>
        <img className='nav__item-img' src={img_exit} alt='Личный кабинет' />
        Личный кабинет
      </Link>
    </nav>
  );
};

export default Navigation;
