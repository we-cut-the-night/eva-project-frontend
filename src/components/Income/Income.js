import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import './Income.css';

function Income() {

  // Контекст
  const user = useContext(CurrentUserContext);

  // Эффекты
  useEffect(() => {

  }, [user]);

  return (
      <main className='main'>
        <Navigation />
        <h2>Расчетный лист</h2>
      </main>
  );
}

export default Income;
