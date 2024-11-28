import { useState } from 'react';
import { useEffect } from 'react';
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
  }
  function createRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === 'rgb') createRandomRgbColor();
    else createRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <h1 className="headerStyl">Random Color Generator</h1>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor
        }
      >
        Create Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1 style={{ margin: '0 auto' }}>{color}</h1>
      </div>
    </div>
  );
}
