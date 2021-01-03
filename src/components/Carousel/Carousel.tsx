import React, { useState } from 'react';
import DotSlider from './DotsSlider/DotsSlider';
import Jsondata from './CarouselData.json';

import StyledSection from './Styled/StyledSection/StyledSection';

// import './Carousel.css'

const Carousel = () => {
  const carouselData = Jsondata.CarouselData;

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const changeActiveTabHandler = (index = 0) => {
    return setActiveTabIndex(index);
  };

  const buildJsx = carouselData.map((dataObj, index) => {
    return (
      <StyledSection
        key={index}
        active={activeTabIndex === index ? true : null}>
        <img src={dataObj.imageUrl}></img>
        <p>{dataObj.text}</p>
      </StyledSection>

      // <section key={index} className={index === activeTabIndex ? 'carousel active' : 'carousel'}>
      //   <img src={dataObj.imageUrl}></img>
      //   <p>{dataObj.text}</p>
      //   {carouselData.length-1 === index ? (<button>CONTINUE</button>): null}
      // </section>
    );
  });

  // return (
  //   <section className= 'carousel active' >
  //       <img src={carouselData[activeTabIndex].imageUrl}></img>
  //       <p>{carouselData[activeTabIndex].text}</p>
  //       <DotSlider
  //       click={changeActiveTabHandler}
  //       amountOfDots={carouselData.length}
  //     />
  //   </section>
  // )

  return (
    <main id='carousel'>
      {buildJsx}
      <DotSlider
        click={changeActiveTabHandler}
        amountOfDots={carouselData.length}
      />
    </main>
  );
};

export default Carousel;
