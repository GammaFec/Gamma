import React, { useState } from "react";
import { PRIMARY } from "../../common/constants";

import { useDrag } from "react-use-gesture";

import DotSlider from "./DotsSlider";

import { StyledUl, StyledButton } from "./styles";

import { carouselDataMapped, NumberIsPositive } from "./utils";

import { ICarousel } from "./types";

const Carousel: React.FC<ICarousel> = ({ handleClickOnContinue, carouselData }: ICarousel) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeActiveTabHandler = (index: number): void => setActiveTabIndex(index);

    const bind = useDrag(({ dragging, movement }) => {
        const X_axis = movement[0];

        // if axis is not 0 and the dragging end (false)
        if (X_axis && !dragging) {
            // The direction of gesture is left or Right
            const isLeft = NumberIsPositive(X_axis);

            const previousSlide = activeTabIndex - 1;
            const nextSlide = activeTabIndex + 1;

            if (!isLeft) {
                // if the previus slide is SMALLER than the limit, end the function
                if (previousSlide < 0) return;
            }
            if (isLeft) {
                // if the previus slide is BIGGER than the limit, end the function
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
                <StyledButton handleClick={handleClickOnContinue} variant={PRIMARY}>
                    Continuar
                </StyledButton>
            )}
        </>
    );
};

export default Carousel;
