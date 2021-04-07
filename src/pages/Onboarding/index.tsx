import React from "react";

import Carrousel from "../../components/Carousel";
import data from "../../components/Carousel/CarouselData";
import { StyledMain } from "./styles";

const CarouselPage: React.FC = () => {
    const isAdopter = true; // useContext() To be determined, the logic was build using booleans
    const carrouselData = isAdopter ? data.adopterData : data.shelterData;

    const clickOnContinue = (): void => alert("clicked!!");

    return (
        <StyledMain>
            <Carrousel ButtonClick={clickOnContinue} carouselData={carrouselData} />
        </StyledMain>
    );
};

export default CarouselPage;
