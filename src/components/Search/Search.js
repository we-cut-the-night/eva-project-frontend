import './Search.css';

function Search({ search, handleChange, handleSubmit }) {

  const handleFormSubmit = (e) => handleSubmit(e);

  return (
      <form className='search' onSubmit={handleFormSubmit}>
        <button className='search__button' />
        <input
          className='search__input'
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='Поиск по имени, телефону, должности'
        />
      </form>
  );
};

export default Search;
