import ContentList from '../ContentList/ContentList';
import './ProfileWidgetList.css'

function ProfileWidgetList({ data: { role, address, tags, todo, responsiblefor, workwidth, aboutme, contacts, socials } }) {
  return (
    <section className='profile-widgets'>
      <article className='profile-widgets__widget profile-widgets__widget_size_big profile-widgets__widget_theme_aqua'>
        <h2 className='profile-widget__title'>{role}</h2>
        <p>{address}</p>
        <ContentList
          items={tags}
          listClass='profile__todo'
          itemClass='profile__todo-item'
        />
        <ContentList
          items={todo}
          listClass='profile__todo'
          itemClass='profile__todo-item'
        />
        <div className='profile__role-description'>
          <article className='profile__role-description-item'>
            <ContentList
              title='Отвечает/ю за:'
              titleClass='profile__role-description-item-header'
              items={responsiblefor}
              listClass='profile__role-description-item-list'
              itemClass='profile__role-description-item-list-item'
            />
          </article>
          <article className='profile__role-description-item'>
            <ContentList
              title='Работает/ю с:'
              titleClass='profile__role-description-item-header'
              items={workwidth}
              listClass='profile__role-description-item-list'
              itemClass='profile__role-description-item-list-item'
            />
          </article>
        </div>
      </article>
      <article className='profile-widgets__widget profile-widgets__widget_theme_red'>
        <h2 className='profile-widget__title'>О себе</h2>
        <p className='profile__about-me'>{aboutme}</p>
      </article>
      <article className='profile-widgets__widget profile-widgets__widget_theme_grass'>
        <h2 className='profile-widget__title'>Контакты</h2>
        <ContentList
          items={contacts}
          listClass='profile__contacts'
          itemClass='profile__contact'
        />
        <ContentList
          items={socials}
          listClass='profile__socials'
          itemClass='profile__socials-item'
        />
      </article>
    </section>
  );
};

export default ProfileWidgetList;

