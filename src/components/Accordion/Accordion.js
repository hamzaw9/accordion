import { useState } from 'react';
import data from './data';
import './Accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (currentid) => {
    setSelected(selected === currentid ? null : currentid);
  };

  const handleMultiSelection = (currentid) => {
    let cpyMultiSelected = [...multiSelected];
    const findIndexOfCurrentId = cpyMultiSelected.indexOf(currentid);

    if (findIndexOfCurrentId === -1) {
      cpyMultiSelected.push(currentid);
    } else {
      cpyMultiSelected.splice(findIndexOfCurrentId, 1);
    }
    setMultiSelected(cpyMultiSelected);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? 'Disable Multi Selection'
          : 'Enable Multi Selection'}
      </button>
      <div className="accordion">
        {data && data.length ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
              key={dataItem.id}
            >
              <div className="title">
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}
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
