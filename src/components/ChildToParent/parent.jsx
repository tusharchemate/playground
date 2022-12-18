import React, { useState } from 'react';
import Child from './child';

const Parent = () => {
  const [color, getColor] = useState('');

  const container = {
    backgroundColor: '#000',
    height: '330px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const box = {
    backgroundColor: color,
    width: '330px',
    height: '330px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <div style={container}>
        <div style={box}>{color}</div>
      </div>

      <Child getColor={getColor} />
    </>
  );
};

export default Parent;
