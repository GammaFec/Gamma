import React from "react";

//Types

import { props } from "./types";

// Styled Components

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
