import './ProfileHeader.css'

function ProfileHeader({ data: { photo, lastname, firstname, birth, location, datestart } }) {
  return (
    <section className='profile-header'>
        <img className='profile-header__photo' src={photo} alt='Фото профиля' />
      <div className='profile-header__description'>
        <h1 className='profile-header__description-lastname'>{lastname}</h1>
        <p className='profile-header__description-firstname'>{firstname}</p>
        <p className='profile-header__description-info'>{birth}</p>
        <p className='profile-header__description-info'>{location}</p>
        <p className='profile-header__description-info'>{datestart}</p>
      </div>
    </section>
  );
};

export default ProfileHeader;
