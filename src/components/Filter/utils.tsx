import React from "react";

import FilterTab from "./FilterTab";

import { IFilterData } from "./types";

/**
 * Map the Data used in the Filter to build as many Tabs as nedded.
 */
const filterDataMapped = (
    filterData: IFilterData[],
    clickHandler: (id: number) => void
): React.ReactNode =>
    filterData.map((EachDataObj) => {
        return (
            <FilterTab
                active={EachDataObj.active}
                clickHandler={(): void => clickHandler(EachDataObj.id)}
                data={EachDataObj}
                key={EachDataObj.imgAlt}
            />
        );
    });

export { filterDataMapped };
