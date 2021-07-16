import React from "react";

import { useHistory } from "react-router-dom";

import Carrousel from "../../components/Carousel";
import data from "../../components/Carousel/CarouselData";
import { PATHS } from "../../routes/paths";
import { StyledMain } from "./styles";

const CarouselPage: React.FC = () => {
    const history = useHistory();
    const isAdopter = true; // useContext() To be determined, the logic was build using booleans
    const carrouselData = isAdopter ? data.adopterData : data.shelterData;

    const clickOnContinue = (): void => {
        history.push(PATHS.Home);
    };

    return (
        <StyledMain>
            <Carrousel carouselData={carrouselData} handleClickOnContinue={clickOnContinue} />
        </StyledMain>
    );
};

export default CarouselPage;
