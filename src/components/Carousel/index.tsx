import React, { useState } from "react";
import * as variantType from "../../common/styles/constants";

import DotSlider from "./DotsSlider";

import { StyledUl, StyledButton } from "./styles";

import { carouselDataMapped } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ ButtonClick, carouselData }: ICarousel) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number): void => setActiveTabIndex(index);

    return (
        <>
            <StyledUl>{carouselDataMapped(carouselData, activeTabIndex)}</StyledUl>
            <DotSlider
                activeTabIndex={activeTabIndex}
                carouselData={carouselData}
                handleClick={changeActiveTabHandler}
            />
            {activeTabIndex === carouselData.length - 1 && (
                <StyledButton handleClick={ButtonClick} variant={variantType.PRIMARY}>
                    Continuar
                </StyledButton>
            )}
        </>
    );
};

export default Carousel;
