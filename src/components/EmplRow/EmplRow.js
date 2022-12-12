import { Link } from 'react-router-dom';
import linkIcon from '../../images/empl-list-icon.svg';
import EmplSpot from '../EmplSpot/EmplSpot';
import { getEmplFullName, getDate } from '../../utils/functions';
import './EmplRow.css';

function EmplRow({ empl, self }) {
  return (
    <li className={self ? 'empl-row empl-row_type_self' : 'empl-row'}>
      <EmplSpot spot={empl.spot?.name} size='small'/>
      <Link to={`/profile/${empl.id}`} className='empl-row__link'>
        <p className={self ? 'empl-row__name empl-row__name_type_self' : 'empl-row__name'}>{getEmplFullName(empl.firstname, null, empl.lastname)}</p>
      </Link>
      <p className='empl-row__role'>{empl.role}</p>
      <p className='empl-row__birth'>{getDate(empl.birth, '.')}</p>
      <p className='empl-row__phone'>{empl.phone}</p>
      <Link to={`/profile/${empl.id}`} className='empl-row__link'>
        <img className='empl-row__link-icon' src={linkIcon} alt='Перейти в профиль' />
      </Link>
    </li>
  )
};

export default EmplRow;
