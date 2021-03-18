import React from "react";

import { StyledImg, StyledDiv, StyledWrapper } from "./styles";

import { IFilterTab } from "./types";

const FilterTab: React.FC<IFilterTab> = ({ filterTitle, imgSrc, imgAlt }: IFilterTab) => {
    return (
        <StyledWrapper>
            <StyledDiv>
                <StyledImg alt={imgAlt} src={imgSrc} />
            </StyledDiv>
            <p>{filterTitle}</p>
        </StyledWrapper>
    );
};

export default FilterTab;
