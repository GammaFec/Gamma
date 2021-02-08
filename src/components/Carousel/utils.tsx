import React from "react";

import { StyledLi } from "./styles";

import { ICarouselData } from "./types";

/**Map the Data used in the carousel to build as many Tabs as nedded.
 * It is included the Img and P Tabs and they are fill with the data that we fetch from the Data (Json).
 */
const carouselDataMapped = (
    carouselData: ICarouselData[],
    activeTabIndex: number
): React.ReactNode =>
    carouselData.map((dataObj, index) => {
        return (
            <StyledLi active={activeTabIndex === index} key={dataObj.id}>
                <img alt={dataObj.imageAlt} src={dataObj.imageUrl} />
                <p>{dataObj.text}</p>
            </StyledLi>
        );
    });

export { carouselDataMapped };
