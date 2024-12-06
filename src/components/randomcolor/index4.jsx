import React, { useState } from 'react';
import { useEffect } from 'react';

export default function RandomColor() {
  const [hex, setHexColor] = useState('');
  const [rgb, setRgbColor] = useState('');
  const [random, setRandom] = useState();

  function getHexColor() {
    //console.log('hex');
    const hexbox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
    let showHex = `# `;

    for (let i = 0; i < 6; i++) {
      showHex += Math.floor(Math.random() * hexbox.length);
    }
    setHexColor(showHex);
    console.log((showHex += Math.floor(Math.random() * hexbox.length)));
    console.log(setHexColor(showHex));
  }
  function getRgbColor() {
    //console.log('rgb');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`;
    setRgbColor(rgb);
    console.log(setRgbColor(rgb));
  }
  function getRandomColor() {
    console.log('random');
  }

  return (
    <div>
      <button onClick={getHexColor}> Create Hex Color</button>
      <button onClick={getRgbColor}>Create RGB Color </button>
      <button onClick={getRandomColor}>Create Random Color </button>
    </div>
  );
}
