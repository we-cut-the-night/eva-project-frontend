import { useState, useEffect } from 'react';
import img from '../../images/tw.jpg';
import './Profile.css';

function Profile({ user }) {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangeRole = (e) => {
    setUserRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit')
  };

  // Эффекты
  useEffect(() => {
    setUserName(user.name);
    setUserEmail(user.email);
    setUserRole(user.role)
  }, [user]);

  return (
    <div className='profile'>
      <main className='profile__main'>
        <h1 className='profile__header'>Привет, {user.name}!</h1>
        <img className='profile__photo' src={img} alt='Фото профиля'/>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <label htmlFor='name' className='profile__form-label'>ФИО</label>
            <input
              id='name'
              name='name'
              type='text'
              className='profile__form-input'
              placeholder={userName}
              value={typeof userName === 'undefined' ? '' : userName}
              onChange={handleChangeName}
              required
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='email' className='profile__form-label'>E-mail</label>
            <input
              id='email'
              name='email'
              type='email'
              className='profile__form-input'
              placeholder={userEmail}
              value={typeof userEmail === 'undefined' ? '' : userEmail}
              onChange={handleChangeEmail}
              required
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='email' className='profile__form-label'>Должность</label>
            <input
              id='role'
              name='role'
              type='role'
              className='profile__form-input'
              placeholder={userRole}
              value={typeof userRole === 'undefined' ? '' : userRole}
              onChange={handleChangeRole}
              required
            />
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Profile;
