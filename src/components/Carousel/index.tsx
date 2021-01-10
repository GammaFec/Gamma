import React, { useState } from "react";

//Components

import DotSlider from "./DotsSlider/index";

// Styled Components

import { StyledButton } from "./styles";

//Utils

import { carouselData, carouselDataMapped } from "./utils";

const Carousel: React.FC = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number) => {
        return setActiveTabIndex(index);
    };

    return (
        <main id="carousel">
            {carouselDataMapped(activeTabIndex)}
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
