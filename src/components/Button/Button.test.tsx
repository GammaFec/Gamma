import React from "react";
import Button from "./";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

describe("<Button />", () => {
    test("renders content", () => {
        const { getByText } = render(<Button variant="primary">Click</Button>);

        getByText("Click");
    });

    test("Click the button", () => {
        const mockHandler = jest.fn();

        const { getByText } = render(
            <Button handleClick={mockHandler} variant="primary">
                Click
            </Button>
        );

        const button = getByText("Click");
        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    test("Test disabled button", () => {
        const mockHandler = jest.fn();
        const { getByText } = render(
            <Button disabled handleClick={mockHandler} variant="primary">
                Click
            </Button>
        );

        const button = getByText("Click");
        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(0);
        expect(button).toHaveAttribute("disabled");
    });
});
