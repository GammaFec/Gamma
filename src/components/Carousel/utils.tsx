import React from "react";

// Data

import Jsondata from "./CarouselData.json";

// Styled Components

import { StyledSection } from "./styles";

const carouselData = Jsondata.CarouselData;

/**Map the Data used in the carousel to build as many Tabs as nedded.
 * Here it is included the Img and P Tabs and fill with the data that we fetch in a Json Format.
 */
const carouselDataMapped = (activeTabIndex: number) =>
    carouselData.map((dataObj, index) => {
        return (
            <StyledSection key={index} active={activeTabIndex === index}>
                <img alt={`carousel-${index}`} src={dataObj.imageUrl}></img>
                <p>{dataObj.text}</p>
            </StyledSection>
        );
    });

export { carouselData, carouselDataMapped };
