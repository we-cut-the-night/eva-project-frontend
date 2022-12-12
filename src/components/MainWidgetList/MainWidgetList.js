import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentList from '../ContentList/ContentList';
import MainWidget from '../MainWidget/MainWidget';
import './MainWidgetList.css';

function MainWidgetList({ data: { id, description, income, moneyForPay, periodToPay } }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 400);
  }, []);

  return (
    <nav className='main__widgets'>
      <Link to={`profile/${id}`} className='main__widgets-link main__widgets-link_size_big'>
        <MainWidget widgetClass='main__widget main__widget_theme_red' isLoading={isLoading}>
          <h2 className='main__widget-title'>Должность</h2>
          <ContentList
            items={description}
            listClass='main__widgets-list'
            itemClass='main__widgets-content'
          />
        </MainWidget>
      </Link>
      <Link to='income' className='main__widgets-link main__widgets-link_size_big'>
        <MainWidget widgetClass='main__widget main__widget_theme_aqua' isLoading={isLoading}>
          <div className='main__widget-header'>
            <h2 className='main__widget-title'>Финансы</h2>
            <div className='main__widget-subtitle'>
              <p className='main__widget-subtitle-main'>{`К выдаче: ${moneyForPay ? moneyForPay + ' ₽' : '-'}`}</p>
              <p className='main__widget-subtitle-add'>{periodToPay}</p>
            </div>
          </div>
          <ContentList
            items={income}
            listClass='main__widgets-list'
            itemClass='main__widgets-content'
          />
        </MainWidget>
      </Link>
      <Link to='schedule' className='main__widgets-link main__widgets-link_size_big'>
        <MainWidget widgetClass={'main__widget main__widget_theme_cloud'} isLoading={isLoading}>
          <h2 className='main__widget-title'>Расписание</h2>
        </MainWidget>
      </Link>
      <Link to='vacation' className='main__widgets-link'>
        <MainWidget widgetClass='main__widget main__widget_theme_grass' isLoading={isLoading}>
          <h2 className='main__widget-title'>График отпусков</h2>
          <p>Подробнее »</p>
        </MainWidget>
      </Link>
      <Link to='network' className='main__widgets-link'>
        <MainWidget widgetClass='main__widget main__widget_theme_park' isLoading={isLoading}>
          <h2 className='main__widget-title'>Другие сотрудники</h2>
          <p>Подробнее »</p>
        </MainWidget>
      </Link>
    </nav>
  );
};

export default MainWidgetList;

