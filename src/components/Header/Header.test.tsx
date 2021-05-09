import React from "react";
import Header from "./";
import { render } from "@testing-library/react";

describe("<Header />", () => {
    test("Render", () => {
        const { getByText } = render(
            <Header>
                <ul>
                    <li>Test</li>
                </ul>
            </Header>
        );
        getByText("Test");
    });
});
