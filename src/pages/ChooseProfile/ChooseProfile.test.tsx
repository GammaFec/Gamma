import React from "react";
import ChooseProfile from "./";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import "jest-styled-components";

jest.mock("react-i18next", () => ({
    useTranslation: (): { t: (key: string) => string } => ({ t: (key: string): string => key })
}));

describe("<ChooseProfile />", () => {
    test("Render", () => {
        const { asFragment } = render(<ChooseProfile />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Render all childrens", () => {
        const { getByText } = render(<ChooseProfile />);

        getByText("title");
        getByText("description");
        getByText("continue");
    });
});
