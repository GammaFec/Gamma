import React from "react";

// Data

import Jsondata from "./CarouselData.json";

// Styled Components

import { StyledSection } from "./styles";

const carouselData = Jsondata.CarouselData;

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
