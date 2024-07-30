import data from './data';

const Accordion = () => {
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
