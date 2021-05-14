import React from "react";
import Nav from "./";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { PATHS } from "../../routes/paths";

jest.mock("react-i18next", () => ({
    useTranslation: (): { t: (key: string) => string } => ({ t: (key: string): string => key })
}));

describe("<Nav />", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        history.push(PATHS.Home);
    });

    test("Render", () => {
        const { getByAltText } = render(<Nav />);
        getByAltText("MenuAlt");
    });

    test("Handle go to splash", () => {
        const { getByAltText } = render(
            <Router history={history}>
                <Nav />
            </Router>
        );

        const Button = getByAltText("LogoAlt");

        fireEvent.click(Button);

        expect(history.location.pathname).toEqual(PATHS.Splash);
    });

    test("Handle go to messages", () => {
        const { getByAltText } = render(
            <Router history={history}>
                <Nav />
            </Router>
        );

        const Button = getByAltText("MessagesAlt");

        fireEvent.click(Button);

        expect(history.location.pathname).toEqual(PATHS.Messages);
    });
});
