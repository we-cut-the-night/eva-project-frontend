import { useState } from 'react';

export function useFindMovie(employees) {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [inputSearch, setInputSearch] = useState('');
  const [spot, setSpot] = useState('--Выберите точку--');
  const [depart, setDepart] = useState('--Выберите цех--');

  function updateFilteredEmployees(employees) {
    setFilteredEmployees(employees);
  };

  function updateInputSearch(inputSearch) {
    setInputSearch(inputSearch);
  };

  function updateSpot(spot) {
    setSpot(spot);
  };

  function updateDepart(depart) {
    setDepart(depart);
  };

  function handleInputChange(event) {
    const inputSearch = event.target.value.toLowerCase();
    updateInputSearch(inputSearch);
    filterEmployees(employees, inputSearch, spot, depart);
  };

  function filterEmployees(employeesList, input, spotSelected, departSelected) {
    updateFilteredEmployees(employeesList
      .filter(({
        firstname, middlename, lastname, phone, role, spot, depart
      }) => (
          input.length === 0 ? true : false
          || firstname?.toLowerCase().includes(input)
          || middlename?.toLowerCase().includes(input)
          || lastname?.toLowerCase().includes(input)
          || phone.includes(input)
          || role?.toLowerCase().includes(input)
        ) && (
          spotSelected === '--Выберите точку--' ? true : spot.name.toLowerCase().includes(spotSelected.toLowerCase())
        ) && (
          departSelected === '--Выберите цех--' ? true : depart.toLowerCase().includes(departSelected.toLowerCase())
        )
      ))
  };

  function handleSwitchSpot(event) {
    const inputSpotSelect = event.target.value;
    updateSpot(inputSpotSelect);
    filterEmployees(employees, inputSearch, inputSpotSelect, depart);
  };

  function handleSwitchDepart(event) {
    const inputDepartSelect = event.target.value;
    updateDepart(inputDepartSelect);
    filterEmployees(employees, inputSearch, spot, inputDepartSelect);
  };

  function onSubmitSearch(event) {
    event.preventDefault();
    filterEmployees(employees, inputSearch, spot, depart);
  };

  return {
    spot,
    depart,
    filteredEmployees,
    setFilteredEmployees,
    inputSearch,
    setInputSearch,
    setSpot,
    setDepart,
    handleSwitchSpot,
    handleSwitchDepart,
    handleInputChange,
    onSubmitSearch,
    updateFilteredEmployees,
    filterEmployees,
  };
};
