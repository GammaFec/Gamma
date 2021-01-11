import React, { useState } from "react";

import DotSlider from "./DotsSlider/index";

import { StyledButton } from "./styles";

import { carouselDataMapped } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ click, carouselData }: ICarousel) => {
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
                amountOfDots={carouselData}
            />
            {activeTabIndex === carouselData.length - 1 ? (
                <StyledButton onClick={() => click()}>Continuar</StyledButton>
            ) : null}
        </main>
    );
};

export default Carousel;
