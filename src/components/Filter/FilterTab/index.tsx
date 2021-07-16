import React from "react";

import { StyledImg, StyledDiv, StyledWrapper } from "./styles";
import { IFilterTab } from "./types";

const FilterTab: React.FC<IFilterTab> = ({
    imgAlt,
    imgSrc,
    filterTitle,
    active,
    clickHandler
}: IFilterTab) => {
    return (
        <StyledWrapper onClick={clickHandler}>
            <StyledDiv activeFilter={active}>
                <StyledImg alt={imgAlt} src={imgSrc} />
            </StyledDiv>
            <p>{filterTitle}</p>
        </StyledWrapper>
    );
};

export default FilterTab;
