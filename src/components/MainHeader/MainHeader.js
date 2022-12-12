import EmplSpot from '../EmplSpot/EmplSpot';
import './MainHeader.css'

function MainHeader({ data: { photo, name, role, birth, phone, email, spot } }) {
  return (
    <article className='main-header'>
      <img className='main-header__photo' src={photo} alt='Фото профиля' />
      <div className='main-header__data'>
        <h2 className='main-header__title'>
          {name}
          <EmplSpot spot={spot} size='big' />
        </h2>
        <span className='main-header__role'>{role}</span>
        <span className='main-header__birth'>
          <span className='main-header__bold'>Дата рождения: </span>{birth}
        </span>
        <div className='main-header__contacts'>
          <span className='main-header__phone'>{phone}</span>
          <span className='main-header__email'>{email}</span>
        </div>
      </div>
    </article>
  );
};

export default MainHeader;
