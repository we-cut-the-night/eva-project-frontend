import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import './Schedule.css';

function Schedule() {

  // Контекст
  const user = useContext(CurrentUserContext);

  // Эффекты
  useEffect(() => {

  }, [user]);

  return (
    <main className='main'>
      <Navigation />
      <h2>Расписание</h2>

    </main>
  );
}

export default Schedule;
