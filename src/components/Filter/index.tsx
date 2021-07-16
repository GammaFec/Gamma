import React from "react";

import { StyledWrapper } from "./styles";
import { IFilter } from "./types";
import { filterDataMapped } from "./utils";

const Filter: React.FC<IFilter> = ({ data, clickHandler }: IFilter) => {
    return <StyledWrapper>{filterDataMapped(data, clickHandler)}</StyledWrapper>;
};

export default Filter;
