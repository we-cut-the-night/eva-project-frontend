import { SHIFT_ICONS } from '../../utils/schedule';
import './TableRow.css';

function TableRow({ row }) {
  return (
    <div className='tablerow'>
      <div className='tablerow__info'>{row.employee.name}</div>
      <div className='tablerow__shifts-list'>{
        row.shifts?.map((shift, i) => {
          return shift === null ?
            (<p key={i} className='tablerow__shift'></p>)
            : (
              <p key={i} className='tablerow__shift'>
                <img className={
                  shift === 12 ? 'tablerow__shift-icon tablerow__shift-icon_type_late'
                  : 'tablerow__shift-icon'
                } src={shift === 11 ? SHIFT_ICONS[0] : SHIFT_ICONS[1]} alt='Смена' />
              </p>
            )
        })
      }</div>
    </div>
  )
};

export default TableRow;
