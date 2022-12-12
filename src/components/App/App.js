import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation'
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Schedule from '../Schedule/Schedule';
import Income from '../Income/Income';
import Vacation from '../Vacation/Vacation';
import Network from '../Network/Network';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Signin from '../Signin/Signin';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import * as api from '../../utils/MainApi';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [employeesList, setEmployeesList] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignin = ({ email, password }) => {
    api.signin(email, password)
      .then(data => {
        setCurrentUser(data);
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleSignout = () => {
    setCurrentUser({});
    setLoggedIn(false);
  };

  const getEmployeesData = () => {
    api.getEmployees()
      .then((data) => setEmployeesList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loggedIn && getEmployeesData();
  }, [loggedIn]);

  useEffect(() => {
    error && setTimeout(() => setError(''), 1000);
  }, [error]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Header loggedIn={loggedIn} />
        <main className='app__main'>
          <Navigation loggedIn={loggedIn} onSignout={handleSignout} />
          <Routes>
            <Route path='/signin' element={
              <Signin onSubmit={handleSignin} />
            } />
            <Route path='/' exact element={
              <ProtectedRoute
                component={Main}
                loggedIn={loggedIn}
              />
            } />
            <Route path='/profile/:id' element={
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
              />
            } />
            <Route path='/schedule' element={
              <ProtectedRoute
                component={Schedule}
                loggedIn={loggedIn}
              />
            } />
            <Route path='/income' element={
              <ProtectedRoute
                component={Income}
                loggedIn={loggedIn}
              />
            } />
            <Route path='/vacation' element={
              <ProtectedRoute
                component={Vacation}
                loggedIn={loggedIn}
              />
            } />
            <Route path='/network' element={
              <ProtectedRoute
                component={Network}
                loggedIn={loggedIn}
                employees={employeesList}
              />
            } />
          </Routes>
          <ErrorMessage message={error} />
        </main>
      </div>
    </CurrentUserContext.Provider >
  );
};

export default App;
