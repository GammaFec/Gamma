import React from "react";

import Carrousel from "../../components/Carousel";
import data from "../../components/Carousel/CarouselData";
import { StyledMain } from "./styles";

const CarouselPage: React.FC = () => {
    let carrouselData;
    if (!carrouselData) {
        carrouselData = data.CarouselData;
    }

    return (
        <StyledMain>
            <Carrousel carouselData={carrouselData} click={(): void => console.log("clicked")} />
        </StyledMain>
    );
};

export default CarouselPage;
