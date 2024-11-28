import React, { useState } from 'react';
import { useEffect } from 'react';

export default function RandomColor() {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const [randomColor, setRandomColor] = useState('');

  const getHexColor = () => {
    const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setHexColor(hex);
    document.body.style.backgroundColor = hex;
    //console.log(hex);
  };

  const getRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`;
    setRgbColor(rgb);
    document.body.style.backgroundColor = rgb;
  };
  const getRandomColor = () => {
    const randomType = Math.random() > 0.5 ? 'hex' : 'rgb';

    if (randomType === 'hex') {
      getHexColor();
    } else {
      getRgbColor();
    }
    setRandomColor(randomType === 'hex' ? hexColor : rgbColor); // Update randomColor state
  };
  return (
    <div>
      <button onClick={getHexColor}>HEX Color</button>
      <button onClick={getRgbColor}>RGB Color</button>
      <button onClick={getRandomColor}>Random Color</button>
      <div>Hex {hexColor}</div>
      <div>Rgb {rgbColor}</div>
      <div> Random {randomColor}</div>
    </div>
  );
}
