import { SCHEDULE_11, TIP } from '../../utils/schedule';
import { FILTER_YEAR, FILTER_MONTH, FILTER_SPOT } from '../../utils/filter';
import PageHeader from '../PageHeader/PageHeader';
import Tableheader from '../TableHeader/Tableheader';
import TableRow from '../TableRow/TableRow';
import Filter from '../Filter/Filter';
import Tip from '../Tip/Tip';
import './Schedule.css';

function Schedule() {
  const tableHeaders = SCHEDULE_11.header ? SCHEDULE_11.header : null;
  const tableRows = SCHEDULE_11.rows ? SCHEDULE_11.rows : null;
  const renderDays = (count) => {
    const arr = Array(count).fill().map((e, i) => i + 1)
    return arr.map((header, i) => <Tableheader key={i} header={header} index={i} />)
  }

  return (
    <main className='schedule'>
      <section className='schedule__content'>
        <div className='schedule__header'>
          <PageHeader text='Расписание' />
          <Filter name={FILTER_YEAR.name} options={FILTER_YEAR.options}/>
          <Filter name={FILTER_MONTH.name} options={FILTER_MONTH.options}/>
          <Filter name={FILTER_SPOT.name} options={FILTER_SPOT.options}/>
        </div>
        <div className='schedule__tab'>
          <div className='schedule__tab-header'>
            {tableHeaders.map((header, i) => {
              return i < tableHeaders.length - 1
                ? <Tableheader key={i} header={header} index={i} />
                : renderDays(header)
            })}
          </div>
          <div className='schedule__tab-content'>
            {tableRows.map((row, i) => <TableRow key={i} row={row} index={i} />)}
          </div>
        </div>
        <Tip title={TIP.title} content={TIP.content}/>
      </section>
    </main>
  );
}

export default Schedule;
