import PageHeader from '../PageHeader/PageHeader';
import './Income.css';

function Income({data}) {
  return (
    <main className='income'>
      <section className='income__content'>
        <PageHeader text='Финансы' />
        <p>{data ? '' : 'Данные об начислениях отсутствуют'}</p>
      </section>
    </main>
  );
}

export default Income;
