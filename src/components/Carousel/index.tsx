import React, { useState } from "react";
import * as variantType from "../../common/constants/index";

import DotSlider from "./DotsSlider/index";
import Button from "../Button/index";

import { StyledUl } from "./styles";

import { carouselDataMapped } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ click, carouselData }: ICarousel) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number) => {
        return setActiveTabIndex(index);
    };

    return (
        <main id="carousel">
            <StyledUl>{carouselDataMapped(carouselData, activeTabIndex)}</StyledUl>
            <DotSlider
                activeTabIndex={activeTabIndex}
                carouselData={carouselData}
                handleClick={changeActiveTabHandler}
            />
            {activeTabIndex === carouselData.length - 1 ? (
                <Button handleClick={() => click()} variant={variantType.PRIMARY}>
                    Continuar
                </Button>
            ) : null}
        </main>
    );
};

export default Carousel;
