import React, { useState } from 'react';
import DotSlider from './DotsSlider/DotsSlider';
import Jsondata from './CarouselData.json';

// Styled Components 

import StyledSection from './Styled/StyledSection/StyledSection';
import StyledButton from './Styled/StyledButton/StyledButton';


const Carousel = () => {
  const carouselData = Jsondata.CarouselData;

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const changeActiveTabHandler = (index = 0) => {
    return setActiveTabIndex(index);
  };

  const carouselDataMapped = carouselData.map((dataObj, index) => {
    return (
      <StyledSection
        key={index}
        active={activeTabIndex === index ? true : false}>
        <img src={dataObj.imageUrl}></img>
        <p>{dataObj.text}</p>
      </StyledSection>
    );
  });

  return (
    <main id='carousel'>
      {carouselDataMapped}
      <DotSlider
        activeTabIndex={activeTabIndex}
        click={changeActiveTabHandler}
        amountOfDots={carouselData.length}
      />
      {activeTabIndex === carouselData.length-1 ? <StyledButton>Continuar</StyledButton> : null}
    </main>
  );
};

export default Carousel;
