import React from "react";
import Onboarding from "./";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Onboarding />", () => {
    test("Render", () => {
        const { asFragment } = render(<Onboarding />);

        expect(asFragment()).toMatchSnapshot();
    });
});
