import { useState } from 'react';
import './style.css';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function starClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function starEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function starLeave() {
    setHover(rating);
  }
  return (
    <div>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => starClick(index)}
              onMouseMove={() => starEnter(index)}
              onMouseLeave={() => starLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
