import React from "react";
import Splash from "./";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-i18next", () => ({
    useTranslation: (): { t: (key: string) => string } => ({ t: (key: string): string => key })
}));

describe("<Splash />", () => {
    test("Render", () => {
        const { asFragment } = render(<Splash />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Render all childrens", () => {
        const { getByText, getByAltText } = render(<Splash />);

        getByAltText("ImageAlt");
        getByText("Adogtemos");
    });
});
