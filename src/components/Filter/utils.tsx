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
    filterData.map(({ active, id, imgAlt, imgSrc, title }) => {
        return (
            <FilterTab
                active={active}
                clickHandler={(): void => clickHandler(id)}
                filterTitle={title}
                imgAlt={imgAlt}
                imgSrc={imgSrc}
                key={id}
            />
        );
    });

export { filterDataMapped };
