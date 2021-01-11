import React from "react";

import { IDotsSlider } from "./types";

import { StyledDot, StyledUl } from "./styles";

const DotsSlider: React.FC<IDotsSlider> = ({
    amountOfDots,
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

    return <StyledUl></StyledUl>;
};

export default DotsSlider;
