import { EMPLOYEES } from './employees';
import { INCOME_MAIN } from './income';

export const signin = (email, password) => {
  const employee = EMPLOYEES.find(employee => employee.email === email);
  const error = 'Неверное имя пользователя или пароль';

  return new Promise(function(resolve, reject) {
    if(typeof employee !== 'undefined') {
      employee.password === password ? resolve(employee) : reject(error);
    } else {
      reject(error);
    }
  });
};

export const getEmployees = () => {
  const employee = EMPLOYEES;
  const error = 'Нет данных о сотрудниках организации';

  return new Promise(function(resolve, reject) {
    typeof employee !== 'undefined' ? resolve(employee) : reject(error);
  });
};

export const getEmployeeById = (id) => {
  const employee = EMPLOYEES.find(employee => employee.id === id);
  const error = `Работник с ID ${id} не найден`;

  return new Promise(function(resolve, reject) {
    typeof employee !== 'undefined' ? resolve(employee) : reject(error);
  });
};

export const getIncomeData = (id) => {
  const data = INCOME_MAIN.find(income => income.id === id);
  const error = 'Данные о начислениях отсутствуют';

  return new Promise(function(resolve, reject) {
    typeof data !== 'undefined' ? resolve(data) : reject(error);
  });
};
