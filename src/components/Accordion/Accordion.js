import { useState } from 'react';
import data from './data';
import './Accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSingleSelection = (currentid) => {
    setSelected(selected === currentid ? null : currentid);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length ? (
          data.map((dataItem) => (
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="item"
              key={dataItem.id}
            >
              <div className="title">
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
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
