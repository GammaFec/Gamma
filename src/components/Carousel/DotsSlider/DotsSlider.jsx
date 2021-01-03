import React from 'react';
import Dot from './Dot/Dot';

const DotsSlider = ({ amountOfDots, click }) => {
  let dotsJsx = [];

  for (let i = 0; i < amountOfDots; i++) {
    const newDot = <Dot key={i} click={event => click(i)}></Dot>;
    dotsJsx.push(newDot);
  }

  return <ul>{dotsJsx}</ul>;
}; 

export default DotsSlider;
