import React from "react";

import { StyledDot, StyledUl } from "./styles";
import { IDotsSlider } from "./types";

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
                        active={activeTabIndex === index}
                        key={eachObj.id}
                        onClick={(): void => handleClick(index)}></StyledDot>
                );
            })}
        </StyledUl>
    );
};

export default DotsSlider;
