import React from "react";

import { StyledImg, StyledDiv, StyledWrapper } from "./styles";

import { IFilterData } from "../types";

const FilterTab: React.FC<IFilterData> = ({ filterTitle, imgSrc, imgAlt }: IFilterData) => {
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
