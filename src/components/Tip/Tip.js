import ContentList from '../ContentList/ContentList';
import './Tip.css';

function Tip({ title, content }) {
  return (
    <article className='tip'>
      <ContentList
        title={title}
        titleClass='tip__title'
        items={content}
        listClass='tip__content-list'
        itemClass='tip__content-item'
      />
    </article>
  )
};

export default Tip;
