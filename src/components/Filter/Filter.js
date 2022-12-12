import './Filter.css';

function getClassName(name) {
  return name ? `filter__select filter__select_name_${name}` : 'filter__select';
};

function Filter({ name, options, initialValue, onChange }) {
  return (
    <select className={getClassName(name)} value={initialValue} onChange={onChange}>
      {options.map((item, i) => {
        return (
          <option key={i} value={item}>{item}</option>
        )
      })}
    </select>
  );
};

export default Filter;
