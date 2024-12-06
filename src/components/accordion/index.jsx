import { useState } from 'react';
import data from './data';
import style from './style.css';

export default function Accordion() {
  const [currentIndex, setCurrentIndex] = useState(null);
  function handleClick(showBox) {
    setCurrentIndex(currentIndex === showBox ? null : showBox);
  }
  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((item) => {
          <div className="accordion">
            <div className="item" key={item.id}>
              <div className="title" onClick={() => handleClick(item.id)}>
                {item.question}
                <span>{currentIndex === {item.id}? '-': '+'}</span>
              </div>
              (setCurrentIndex === {item.id} ?
              <div className="content">{item.answer}</div>)
            </div>
          </div>;
        })
      ) : (
        <div>No Data found !</div>
      )}
    </div>
  );
}
