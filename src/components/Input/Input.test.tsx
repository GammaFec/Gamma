import React from "react";
import Input from "./";
import { render, fireEvent } from "@testing-library/react";

describe("<Input />", () => {
    const MockHandler = jest.fn();
    const ID = "id";
    const NAME = "name";
    const TYPE = "text";
    const PLACEHOLDER = "placeholder";
    const ALTtext = "AltText";
    const IconSRC =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png";

    test("Render", () => {
        const { getByPlaceholderText } = render(
            <Input
                id={ID}
                name={NAME}
                onChange={MockHandler}
                placeholder={PLACEHOLDER}
                type={TYPE}
            />
        );
        getByPlaceholderText(PLACEHOLDER);
    });

    test("Icon is show", () => {
        const { getByAltText } = render(
            <Input
                alt={ALTtext}
                icon={IconSRC}
                id={ID}
                name={NAME}
                onChange={MockHandler}
                placeholder={PLACEHOLDER}
                type={TYPE}
            />
        );
        getByAltText(ALTtext);
    });
    test("On change value", () => {
        const InputValue = "Sabias que el 70% del aguacate es agua?, el resto es cate";
        const { getByPlaceholderText } = render(
            <Input
                id={ID}
                name={NAME}
                onChange={MockHandler}
                placeholder={PLACEHOLDER}
                type={TYPE}
            />
        );
        const input = getByPlaceholderText(PLACEHOLDER) as HTMLInputElement;

        fireEvent.change(input, { target: { value: InputValue } });

        expect(input.value).toEqual(InputValue);
    });
});
