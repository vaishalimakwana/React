import React, { useState } from 'react';
import data from './data';
import style from './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (showbox) => {
    setSelected(selected === showbox ? null : showbox);
  };
  return (
    <div className="wrapper">
      <h1 className="headerStyl">Accordion</h1>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                {item.question}
                <span>+</span>
              </div>
              {selected === item.id && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>Data Not Found !!</div>
        )}
      </div>
    </div>
  );
}
