import React from "react";

import { StyledImg, StyledDiv, StyledWrapper } from "./styles";

import { IFilterTab } from "./types";

const FilterTab: React.FC<IFilterTab> = ({ data, active }: IFilterTab) => {
    return (
        <StyledWrapper>
            <StyledDiv active={active}>
                <StyledImg alt={data.imgAlt} src={data.imgSrc} />
            </StyledDiv>
            <p>{data.filterTitle}</p>
        </StyledWrapper>
    );
};

export default FilterTab;
