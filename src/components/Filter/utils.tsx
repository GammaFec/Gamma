import React from "react";

import FilterTab from "./FilterTab";

import { IFilterData } from "./types";

/**
 * Map the Data used in the Filter to build as many Tabs as nedded.
 */
const filterDataMapped = (
    filterData: IFilterData[],
    activeFilter: boolean,
    clickHandler: (is: number) => void
): React.ReactNode =>
    filterData.map((EachDataObj) => {
        return (
            <FilterTab
                activeFilter={activeFilter}
                clickHandler={(): void => clickHandler(EachDataObj.id)}
                data={EachDataObj}
                key={EachDataObj.imgAlt}
            />
        );
    });

export { filterDataMapped };
