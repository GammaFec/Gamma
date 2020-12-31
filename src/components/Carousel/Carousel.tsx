import React, { useState } from 'react';
import DotSlider from './DotsSlider/DotsSlider';
import Jsondata from './CarouselData.json';

const Carousel = () => {
  const carouselData = Jsondata.CarouselData;

  const [activeTabIndex , setActiveTabIndex] = useState(0)

  const changeActiveTabHandler = (index=0) => {
    console.log(index)
    return setActiveTabIndex(index)
  }



  return (
    <section id='Carousel'>
      <div>{carouselData[activeTabIndex].imageUrl}</div>

      <DotSlider click={changeActiveTabHandler} amountOfDots={carouselData.length} />
    </section>
  );
};

export default Carousel;
