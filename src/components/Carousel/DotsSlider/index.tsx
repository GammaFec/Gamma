import React from "react";

import { props } from "./types";

import { StyledDot, StyledUl } from "./styles";

const DotsSlider: React.FC<props> = ({ amountOfDots, click, activeTabIndex }: props) => {
    const dotsJsx = [];

    for (let i = 0; i < amountOfDots; i++) {
        const newDot = (
            <StyledDot key={i} active={activeTabIndex === i} onClick={() => click(i)}></StyledDot>
        );
        dotsJsx.push(newDot);
    }

    return <StyledUl>{dotsJsx}</StyledUl>;
};

export default DotsSlider;
