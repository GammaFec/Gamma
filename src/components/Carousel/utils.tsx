import React from "react";

import Jsondata from "./CarouselData.json";

import { StyledLi } from "./styles";

const carouselData = Jsondata.CarouselData;

/**Map the Data used in the carousel to build as many Tabs as nedded.
 * It is included the Img and P Tabs and they are fill with the data that we fetch from the Data (Json).
 */
const carouselDataMapped = (activeTabIndex: number): React.ReactNode =>
    carouselData.map((dataObj, index) => {
        return (
            <StyledLi key={dataObj.id} active={activeTabIndex === index}>
                <img alt={dataObj.imageAlt} src={dataObj.imageUrl} />
                <p>{dataObj.text}</p>
            </StyledLi>
        );
    });

export { carouselData, carouselDataMapped };
