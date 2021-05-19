import React from "react";
import Home from "./";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { PATHS } from "../../routes/paths";
import "jest-styled-components";

jest.mock("react-i18next", () => ({
    useTranslation: (): { t: (key: string) => string } => ({ t: (key: string): string => key })
}));

describe("<Home />", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        history.push(PATHS.Home);
    });

    test("Render", () => {
        const { asFragment } = render(<Home />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Render all childrens", () => {
        const { getByAltText, getByText } = render(<Home />);

        getByAltText("ImageAlt");
        getByText("Title");
        getByText("SignUp");
        getByText("LogIn");
    });

    test("Handle go to Login", () => {
        const { getByText } = render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const Button = getByText("LogIn");

        fireEvent.click(Button);

        expect(history.location.pathname).toEqual(PATHS.Login);
    });

    test("Handle go to SignUp", () => {
        const { getByText } = render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const Button = getByText("SignUp");

        fireEvent.click(Button);

        expect(history.location.pathname).toEqual(PATHS.MovilAuth);
    });
});
