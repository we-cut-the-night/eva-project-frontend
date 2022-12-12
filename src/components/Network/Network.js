import { useContext } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import EmplRow from '../EmplRow/EmplRow';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFindMovie } from '../../utils/hooks/useFindEmployee';
import { FILTER_SPOT, FILTER_DEPART } from '../../utils/filter';
import filtersIcon from '../../images/filters.png';
import './Network.css';

function Network({ employees }) {
  const user = useContext(CurrentUserContext);
  const {
    spot,
    depart,
    filteredEmployees,
    inputSearch,
    handleSwitchSpot,
    handleSwitchDepart,
    handleInputChange,
    onSubmitSearch
  } = useFindMovie(employees);

  return (
    <main className='network'>
      <section className='network__content'>
        <div className='network__header'>
          <PageHeader text='Сотрудники' />
          <Filter
            name={FILTER_SPOT.name}
            options={FILTER_SPOT.options}
            initialValue={spot}
            onChange={handleSwitchSpot}
          />
          <Filter
            name={FILTER_DEPART.name}
            options={FILTER_DEPART.options}
            initialValue={depart}
            onChange={handleSwitchDepart}
          />
          <img className='network__filters-icon' src={filtersIcon} alt='Фильтры' />
          <p className='network__filters'>Фильтры</p>
        </div>
        <Search
          search={inputSearch}
          handleChange={handleInputChange}
          handleSubmit={onSubmitSearch}
        />
        <div className='network__employees'>
          <ul className='network__empl-list'>
            <EmplRow empl={user} self={true}/>
            {
              filteredEmployees.filter(({ id }) => (id !== user.id)
              ).map((empl, i) => <EmplRow key={i} empl={empl} self={false} index={i} />
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Network;
