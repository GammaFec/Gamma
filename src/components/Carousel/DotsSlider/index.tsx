import React from "react";

import { IDotsSlider } from "./types";

import { StyledDot, StyledUl } from "./styles";

const DotsSlider: React.FC<IDotsSlider> = ({
    carouselData,
    click,
    activeTabIndex
}: IDotsSlider) => {
    // const dotsJsx = [];

    // for (let i = 0; i < amountOfDots; i++) {
    //     const newDot = (
    //         <StyledDot key={i} active={activeTabIndex === i} onClick={() => click(i)}></StyledDot>
    //     );
    //     dotsJsx.push(newDot);
    // }
    console.log(carouselData);

    return (
        <StyledUl>
            <StyledDot key={1} active={activeTabIndex === 1} onClick={() => click(1)}></StyledDot>
        </StyledUl>
    );
};

export default DotsSlider;
