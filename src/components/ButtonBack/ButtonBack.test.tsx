import React from "react";
import ButtonBack from "./";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<ButtonBack />", () => {
    const ButtonContent = "Atras";

    test("render content", () => {
        const { getByText } = render(<ButtonBack />);
        getByText(ButtonContent);
    });
});
