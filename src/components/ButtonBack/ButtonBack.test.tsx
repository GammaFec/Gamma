import React from "react";
import ButtonBack from "./";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<ButtonBack />", () => {
    test("render content", () => {
        const { getByText } = render(<ButtonBack />);
        expect(getByText("Atras")).toBeInTheDocument();
    });
});
