import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import './Main.css';
import img_1 from '../../images/tw.jpg';
import img_2 from '../../images/zi_photo.jpg';
import img_unknown from '../../images/photo_unknown.jpg';

function Main() {
  // Контекст
  const user = useContext(CurrentUserContext);

  //Функции
  const handleSchedule = (item, i) => {
    return (
      <div key={i} className='main__schedule-item'>
        <span>{item.date}</span>
        <span>Смена: {item.type}</span>
        <span>Часы: {item.hh}</span>
      </div>
    )
  }

  const handleIncome = (item, i) => {
    return (
      <div key={i} className='main__schedule-item'>
        <span>{item.mm}</span>
        <span>Период: {item.date}</span>
        <span>Часы: {item.hh}</span>
        <span>Начислено: {item.salary}</span>
      </div>
    )
  }

  // Эффекты
  useEffect(() => {

  }, [user]);

  return (
    <main className='main'>
      <Navigation />
      <div className='main__content'>
        <Link to='/profile' className='main__card main__card-profile'>
          <img
            className='main__photo'
            src={user.id === 1 ? img_1 :
              user.id === 2 ? img_2 : img_unknown}
            alt='Фото профиля'
          />
          <div className='main__bio'>
            <h2 className='main__bio-title'>{user.empl_name}</h2>
            <span className='main__bio-description'>Должность: {user.empl_role}</span>
            <span className='main__bio-description'>Доп. обязанности: {user.empl_add}</span>
            <span className='main__bio-description'>
              Telegram: {typeof user.empl_contacts === 'undefined' ? '' : user.empl_contacts.telegram}
            </span>
            <span className='main__bio-description'>
              Запрещенная в РФ сеть: {typeof user.empl_contacts === 'undefined' ? '' : user.empl_contacts.instagram}
            </span>
          </div>
        </Link>

        <div className='main__widgets'>
          <Link to='/schedule' className='main__card'>
            <div>
              <h2 className='main__bio-title'>Расписание</h2>
              <div className='main__schedule'>
                {typeof user.empl_schedule === 'undefined' ? '' : user.empl_schedule.map(handleSchedule)}
              </div>
            </div>
          </Link>
          <Link to='/income' className='main__card'>
            <div className='main__income'>
              <h2 className='main__bio-title'>Расчетный лист</h2>
              <div className='main__schedule'>
                {typeof user.empl_income === 'undefined' ? '' : user.empl_income.map(handleIncome)}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main >
  );
}

export default Main;
