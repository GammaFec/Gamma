import React from 'react';

import StyledUl from '../Styled/StyledUl/StyledUl'
import Dot from '../Styled/StyledDot/StyledDot';


const DotsSlider = ({ amountOfDots, click }) => {
  let dotsJsx = [];

  for (let i = 0; i < amountOfDots; i++) {
    const newDot = <Dot key={i} onClick={event => click(i)}></Dot>;
    dotsJsx.push(newDot);
  }

  return <StyledUl>{dotsJsx}</StyledUl>;
}; 

export default DotsSlider;
