import React from "react";

import { StyledImg, StyledDiv, StyledWrapper } from "./styles";

import { IFilterTab } from "./types";

const FilterTab: React.FC<IFilterTab> = ({ data, active, clickHandler }: IFilterTab) => {
    return (
        <StyledWrapper onClick={clickHandler}>
            <StyledDiv activeFilter={active}>
                <StyledImg alt={data.imgAlt} src={data.imgSrc} />
            </StyledDiv>
            <p>{data.filterTitle}</p>
        </StyledWrapper>
    );
};

export default FilterTab;
