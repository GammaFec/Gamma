import React from "react";
import Form from "./";
import { fireEvent, render } from "@testing-library/react";

describe("<Form />", () => {
    test("Render", () => {
        const placeholderText = "TestHolder";
        const { getByPlaceholderText } = render(
            <Form>
                <input placeholder={placeholderText} />
            </Form>
        );
        getByPlaceholderText(placeholderText);
    });

    test("Click handleSubmit", () => {
        const mockHandler = jest.fn();

        const { getByText } = render(
            <Form handleSubmit={mockHandler}>
                <button type="submit">Submit</button>
            </Form>
        );

        const submitButton = getByText("Submit");

        fireEvent.click(submitButton);

        expect(mockHandler).toBeCalledTimes(1);
    });
});
