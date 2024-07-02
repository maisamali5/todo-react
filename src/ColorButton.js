import React from 'react';

function ColorButton() {
  const color = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
  return (
    <div className='container'>
    <button className='btn' onClick={color}>
      Change background Color
    </button>
    </div>
  );

}

export default ColorButton;