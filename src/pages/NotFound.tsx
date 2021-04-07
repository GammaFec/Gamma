import React from "react";
import Carousel from "../components/Carousel";
import data from "../components/Carousel/CarouselData";

const NotFound: React.FC = () => {
    const { adopterData } = data;
    // eslint-disable-next-line no-console
    console.log(adopterData);
    return <Carousel carouselData={adopterData} click={(): void => alert("click")} />;
};

export default NotFound;
