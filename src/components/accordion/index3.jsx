import React, { useState } from 'react';
import data from './data';
import style from './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p>Data Not Found </p>
        )}
      </div>
    </div>
  );
}
