import { useEffect, useState } from 'react';
import data from './data';
import style from './style.css';

export default function Accordion() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (showBox) => {
    setCurrentIndex(currentIndex === showBox ? null : showBox);
    console.log(currentIndex);
    console.log(showBox);
    console.log(setCurrentIndex);
  };

  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="accordion" key={item.id}>
            <div className="item" onClick={() => handleClick(item.id)}>
              <div className="title">{item.question}</div>
              <span>{currentIndex === item.id ? '-' : '+'}</span>

              {currentIndex === item.id && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>Data Not Found !</div>
      )}
    </div>
  );
}
