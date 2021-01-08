import React, { useState } from 'react';

//Components

import DotSlider from './DotsSlider/index';

// Data

import Jsondata from './CarouselData.json';

// Styled Components

import { StyledSection, StyledButton } from './styles';

const Carousel = () => {
    const carouselData = Jsondata.CarouselData;

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index) => {
        return setActiveTabIndex(index);
    };

    const carouselDataMapped = carouselData.map((dataObj, index) => {
        return (
            <StyledSection key={index} active={activeTabIndex === index}>
                <img alt="carousel" src={dataObj.imageUrl}></img>
                <p>{dataObj.text}</p>
            </StyledSection>
        );
    });

    return (
        <main id="carousel">
            {carouselDataMapped}
            <DotSlider
                activeTabIndex={activeTabIndex}
                click={changeActiveTabHandler}
                amountOfDots={carouselData.length}
            />
            {activeTabIndex === carouselData.length - 1 ? (
                <StyledButton>Continuar</StyledButton>
            ) : null}
        </main>
    );
};

export default Carousel;
