function ContentList({ title, titleClass, listClass, items, itemClass }) {
  return (
    <>
      {
        title ? (<h3 className={titleClass}>{title}</h3>) : null
      }
      <ul className={listClass}>
        {
          items.map((item, i) => {
            return (<li key={i} className={itemClass}>{item}</li>)
          })
        }
      </ul>
    </>
  );
};

export default ContentList;
