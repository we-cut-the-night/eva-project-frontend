import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { PHOTOS } from '../../utils/employees';
import { getEmplFullName, getDate } from '../../utils/functions';
import MainHeader from '../MainHeader/MainHeader';
import MainWidgetList from '../MainWidgetList/MainWidgetList';
import * as mainApi from '../../utils/MainApi';
import './Main.css';

function Main() {
  const user = useContext(CurrentUserContext);
  const [headerData, setHeaderData] = useState({});
  const [incomeData, setIncomeData] = useState({
    hours: null,
    extrahours: null,
    rate: null
  });

  const [widgetsData, setWidgetsData] = useState({
    id: null,
    description: [],
    income: [],
    moneyForPay: null,
    periodToPay: null
  });

  const getHeaderData = (user) => {
    const data = {
      photo: PHOTOS[user.id - 1],
      name: getEmplFullName(user.firstname, user.middlename, user.lastname),
      role: user.role,
      birth: getDate(user.birth, '/'),
      phone: user.phone,
      email: user.email,
      spot: user.spot?.name
    };

    setHeaderData(data);
  };

  const getIncomeData = (id) => {
    mainApi.getIncomeData(id)
      .then(data => setIncomeData(data))
      .catch((err) => console.log(err));
  };

  const getWidgetsData = (user, income) => {
    const count = income.hours ?
      income.hours.filter((hours) => hours !== null).length + ' смен'
      : 'Данные о сменах отсутствуют';

    const total = income.hours ?
      'Всего часов: ' + income.hours.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' ч'
      : 'Данные о часах отсутствуют';

    const overtime = income.extrahours ?
      'Сверхурочные: ' + income.extrahours.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' ч'
      : 'Данные о сверхурочных отсутствуют';

    const rate = income.rate ?
      'Ставка: ' + income.rate + ' ₽/час'
      : 'Данные о ставке отсутствуют';

    const period = income.periodToPay ?
      income.periodToPay : '';

    const data = {
      id: user.id,
      description: ['Точка: ' + user.spot?.address, ...user.profile],
      income: [count, total, overtime, rate],
      moneyForPay: income.rate * total,
      periodToPay: period
    };

    setWidgetsData(data);
  };

  useEffect(() => {
    user && getIncomeData(user.id);
  }, [user]);

  useEffect(() => {
    getHeaderData(user);
    getWidgetsData(user, incomeData);
  }, [user, incomeData]);

  return (
    <main className='main__content'>
      <MainHeader data={headerData} />
      <MainWidgetList data={widgetsData} />
    </main>
  );
};

export default Main;
