import React from "react";
import Carousel from "./";
import CarouselData from "./CarouselData";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import "jest-styled-components";

describe("<Carousel />", () => {
    const mockHandler = jest.fn();

    const carouselData = CarouselData.adopterData;

    test("Render Carousel and childrens", () => {
        const { getByAltText, asFragment } = render(
            <Carousel carouselData={carouselData} handleClickOnContinue={mockHandler} />
        );

        getByAltText("Person with a cat");
        carouselData.forEach(({ imageAlt }) => {
            getByAltText(imageAlt);
        });

        expect(asFragment()).toMatchSnapshot();
    });

    test("Move carousel and click in continue", () => {
        const { getByRole, getAllByRole } = render(
            <Carousel carouselData={carouselData} handleClickOnContinue={mockHandler} />
        );

        const DotButtons = getAllByRole("button");

        carouselData.forEach((_data, i) => {
            DotButtons[i].click();
        });

        const ContinueButton = getByRole("button", { name: "Continuar" });

        expect(ContinueButton).toBeInTheDocument();

        fireEvent.click(ContinueButton);
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});
