import React from "react";
import ButtonBack from "./";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<ButtonBack />", () => {
    let MyGetByText;
    const ButtonContent = "Atras";

    beforeEach(() => {
        const { getByText } = render(<ButtonBack />);
        MyGetByText = getByText;
    });
    test("render content", () => {
        MyGetByText(ButtonContent);
    });
});
