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
            {carouselData.map((eachObj, index) => {
                return (
                    <StyledDot
                        key={eachObj.id}
                        active={activeTabIndex === index}
                        onClick={() => click(index)}></StyledDot>
                );
            })}
        </StyledUl>
    );
};

export default DotsSlider;
