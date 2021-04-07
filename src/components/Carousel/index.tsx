import React, { useState } from "react";
import * as variantType from "../../common/styles/constants";

import DotSlider from "./DotsSlider/index";
import Button from "../Button/index";

import { StyledUl, StyledCarouselContainer } from "./styles";

import { carouselDataMapped } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ click, carouselData }: ICarousel) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number): void => setActiveTabIndex(index);

    return (
        <StyledCarouselContainer>
            <StyledUl>{carouselDataMapped(carouselData, activeTabIndex)}</StyledUl>
            <DotSlider
                activeTabIndex={activeTabIndex}
                carouselData={carouselData}
                handleClick={changeActiveTabHandler}
            />
            {activeTabIndex === carouselData.length - 1 && (
                <Button handleClick={(): void => click()} variant={variantType.PRIMARY}>
                    Continuar
                </Button>
            )}
        </StyledCarouselContainer>
    );
};

export default Carousel;
