import React from "react";

import { IDotsSlider } from "./types";

import { StyledDot, StyledUl } from "./styles";

const DotsSlider: React.FC<IDotsSlider> = ({
    carouselData,
    handleClick,
    activeTabIndex
}: IDotsSlider) => {
    return (
        <StyledUl>
            {carouselData.map((eachObj, index) => {
                return (
                    <StyledDot
                        key={eachObj.id}
                        active={activeTabIndex === index}
                        onClick={() => handleClick(index)}></StyledDot>
                );
            })}
        </StyledUl>
    );
};

export default DotsSlider;
