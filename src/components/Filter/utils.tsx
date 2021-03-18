import React from "react";

import FilterTab from "./FilterTab";

import { IFilterData } from "./types";

/**
 * Map the Data used in the Filter to build as many Tabs as nedded.
 */
const filterDataMapped = (filterData: IFilterData[]): React.ReactNode =>
    filterData.map((EachDataObj) => {
        return <FilterTab {...EachDataObj} key={EachDataObj.imgAlt} />;
    });

export { filterDataMapped };
