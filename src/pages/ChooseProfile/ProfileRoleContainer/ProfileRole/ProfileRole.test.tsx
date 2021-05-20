/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import ProfileRole from ".";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";

describe("<ProfileRole />", () => {
    const children = "¿Sabes como queda un mago despues de comer?, Magordito";
    const variant = "Primary";
    const selected = false;
    const key = 0;

    test("Render", () => {
        const { getByText } = render(
            <ProfileRole key={key} selected={selected} variant={variant}>
                {children}
            </ProfileRole>
        );
        getByText(children);
    });

    test("Handle click", () => {
        const mockHanlder = jest.fn();
        const { getByText } = render(
            <ProfileRole handleClick={mockHanlder} key={key} selected={selected} variant={variant}>
                {children}
            </ProfileRole>
        );

        fireEvent.click(getByText(children));

        expect(mockHanlder).toBeCalledTimes(1);
    });
});
