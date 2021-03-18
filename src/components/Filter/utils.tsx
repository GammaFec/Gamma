import React from "react";

import FilterTab from "./FilterTab";

import { IFilterData } from "./types";

/**
 * Map the Data used in the Filter to build as many Tabs as nedded.
 */
const filterDataMapped = (
    filterData: IFilterData[],
    active: boolean,
    clickHandler: () => void
): React.ReactNode =>
    filterData.map((EachDataObj) => {
        return (
            <FilterTab
                active={active}
                clickHandler={clickHandler}
                data={EachDataObj}
                key={EachDataObj.imgAlt}
            />
        );
    });

export { filterDataMapped };
