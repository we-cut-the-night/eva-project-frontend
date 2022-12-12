import PageHeader from '../PageHeader/PageHeader';
import './Vacaction.css';

function Vacation({data}) {
  return (
    <main className='vacation'>
      <PageHeader text='График отпусков' />
      <p>{data ? '' : 'Данные об отпусках отсутствуют'}</p>
    </main>
  );
}

export default Vacation;
