/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { PRIMARY } from "../../common/styles/constants";

import { useDrag } from "react-use-gesture";

import DotSlider from "./DotsSlider";

import { StyledUl, StyledButton } from "./styles";

import { carouselDataMapped, NumberIsPositive } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ ButtonClick, carouselData }: ICarousel) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number): void => setActiveTabIndex(index);

    const bind = useDrag(({ dragging, movement }) => {
        const X_axis = movement[0];
        if (X_axis && !dragging) {
            const isLeft = NumberIsPositive(X_axis);

            const previousSlide = activeTabIndex - 1;
            const nextSlide = activeTabIndex + 1;

            if (!isLeft) {
                if (previousSlide < 0) return;
            }
            if (isLeft) {
                if (nextSlide >= carouselData.length) return;
            }
            changeActiveTabHandler(isLeft ? nextSlide : previousSlide);
        }
    });

    return (
        <>
            <StyledUl {...bind()}>{carouselDataMapped(carouselData, activeTabIndex)}</StyledUl>
            <DotSlider
                activeTabIndex={activeTabIndex}
                carouselData={carouselData}
                handleClick={changeActiveTabHandler}
            />
            {activeTabIndex === carouselData.length - 1 && (
                <StyledButton handleClick={ButtonClick} variant={PRIMARY}>
                    Continuar
                </StyledButton>
            )}
        </>
    );
};

export default Carousel;
