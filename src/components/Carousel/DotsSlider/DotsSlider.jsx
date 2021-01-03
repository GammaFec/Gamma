import React from 'react';

import StyledUl from '../Styled/StyledUl/StyledUl'
import Dot from '../Styled/StyledDot/StyledDot';


const DotsSlider = ({ amountOfDots, click , activeTabIndex}) => {
  let dotsJsx = [];

  for (let i = 0; i < amountOfDots; i++) {
    const newDot = <Dot key={i} active={activeTabIndex === i ? true: false} onClick={event => click(i)}></Dot>;
    dotsJsx.push(newDot);
  }

  return <StyledUl>{dotsJsx}</StyledUl>;
}; 

export default DotsSlider;
