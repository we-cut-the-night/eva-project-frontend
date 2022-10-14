import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import './Profile.css';

function Profile() {

  // Контекст
  const user = useContext(CurrentUserContext);

  // Аккаунт
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [emplType, setEmplType] = useState('');
  const [userRole, setUserRole] = useState('');
  const [emplAdd, setEmplAdd] = useState('');
  const [emplGrade, setEmplGrade] = useState('');

  // Контакты
  const [contacts, setContacts] = useState({});

  // Документы
  const [docs, setDocs] = useState({});

  // Организация
  const [orgName, setOrgName] = useState(null);
  const [orgDepart, setOrgDepart] = useState(null);
  const [orgSpot, setOrgSpot] = useState(null);

  // Гранты
  const [grants, setGrants] = useState('');

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangeRole = (e) => {
    setUserRole(e.target.value);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit')
  };

  // Эффекты
  useEffect(() => {

    // Аккаунт
    setUserName(user.empl_name);
    setUserEmail(user.account_email);
    setDateBirth(user.empl_birth);
    setDateStart(user.empl_start);
    setEmplType(user.empl_type);
    setUserRole(user.empl_role);
    setEmplAdd(user.empl_add);
    setEmplGrade(user.empl_grade);

    // Контакты
    setContacts(user.empl_contacts);

    // Документы
    setDocs(user.empl_docs);

    // Организация
    setOrgName(user.org_name);
    setOrgDepart(user.org_depart);
    setOrgSpot(user.org_spot);

    // Гранты
    setGrants(user.empl_grants);

  }, [user]);

  return (
    <div className='profile'>
      <Navigation />
      <main className='profile__main'>
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
            <label htmlFor='date-birth' className='profile__form-label'>Дата рождения</label>
            <input
              id='date-birth'
              type='text'
              className='profile__form-input'
              placeholder={dateBirth}
              value={typeof dateBirth === 'undefined' ? '' : dateBirth}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='date-start' className='profile__form-label'>Дата трудоустройства</label>
            <input
              id='date-start'
              type='text'
              className='profile__form-input'
              placeholder={dateStart}
              value={typeof dateStart === 'undefined' ? '' : dateStart}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='empl-type' className='profile__form-label'>Тип занятости</label>
            <input
              id='empl-type'
              type='text'
              className='profile__form-input'
              placeholder={emplType}
              value={typeof emplType === 'undefined' ? '' : emplType}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='email' className='profile__form-label'>Должность</label>
            <input
              id='role'
              name='role'
              type='text'
              className='profile__form-input'
              placeholder={userRole}
              value={typeof userRole === 'undefined' ? '' : userRole}
              onChange={handleChangeRole}
              required
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label htmlFor='empl-add' className='profile__form-label'>Дополнительные обязанности</label>
            <input
              id='empl-add'
              type='text'
              className='profile__form-input'
              placeholder={emplAdd}
              value={typeof emplAdd === 'undefined' ? '' : emplAdd}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='profile__fieldset'>{console.log(contacts)}
            <label htmlFor='empl-address' className='profile__form-label'>Адрес</label>
            <input
              id='empl-address'
              type='text'
              className='profile__form-input'
              placeholder={contacts}
              value={typeof contacts === 'undefined' ? '' : contacts}
              onChange={handleChange}
            />
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Profile;
