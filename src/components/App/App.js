import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import { USER_1 } from '../../utils/users';
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

  // Эффекты
  useEffect(() => {
    getUserData();
    console.log('currentUser:', USER_1)
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile user={currentUser}/>
              <Footer />
            </>
          } exact />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
