import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import style from './styles.css';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [count, setCount] = useState(0);
  const highCount = () => {
    setTimeout(() => setCount(count + 1), 1000);
  };
  const lowCount = () => {
    setTimeout(() => setCount(count - 1), 1000);
  };

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}? page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  if (loading) {
    <div>Loading Data please wait ...</div>;
  }
  if (errorMsg !== null) {
    <div>Error occured ! {errorMsg}</div>;
  }
  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);
  console.log(images);
  return (
    <div className="container">
      <div style={{ display: 'block' }}>
        <h2>Count: {count}</h2>
        <button onClick={() => highCount()}>Increase Count</button>
        <button onClick={() => lowCount()}>Decrease Count</button>
      </div>
      <div className="image-slider">
        <BsArrowLeftCircleFill
          onClick={handlePrev}
          className="arrow arrow-left"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? 'current-image'
                    : 'current-image hide-current-image'
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? 'current-indicator'
                      : 'current-indicator inactive-indicator'
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
