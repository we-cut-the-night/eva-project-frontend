import Preloader from '../Preloader/Preloader';

function MainWidget({ widgetClass, isLoading, children }) {

  return (
    <article className={widgetClass}>
      {
        isLoading ? <Preloader /> : children
      }
    </article>
  );
}

export default MainWidget;
