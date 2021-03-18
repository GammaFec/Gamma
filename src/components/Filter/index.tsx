import React from "react";

import { filterDataMapped } from "./utils";

import { IFilter } from "./types";

import { StyledWrapper } from "./styles";

const Filter: React.FC<IFilter> = ({ data }: IFilter) => {
    return <StyledWrapper>{filterDataMapped(data)}</StyledWrapper>;
};

export default Filter;
