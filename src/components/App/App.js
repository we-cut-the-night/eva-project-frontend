import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Schedule from '../Schedule/Schedule';
import Income from '../Income/Income';
import { USER_1, USER_2 } from '../../utils/users';
import './App.css';

function App() {

  // Состояние: данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // определение текущего пользователя
  const getUserData = () => {
    setCurrentUser(USER_1);
    setLoggedIn(true);
  };

  const changeUser = () => {
    currentUser === USER_1 ? setCurrentUser(USER_2) : setCurrentUser(USER_1);
  }

  // Эффекты
  useEffect(() => {
    getUserData();
    console.log('currentUser:', USER_1)
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Header changeUser={changeUser} />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/income' element={<Income />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
