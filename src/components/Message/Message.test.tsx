import React from "react";
import Message from "./";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { TimeAgo } from "./utils";
import "@testing-library/jest-dom/extend-expect";

describe("<Message />", () => {
    const Name = "name";
    const Count = 1;
    const Text = "TextoOoOoOooOoOo";
    const creationDate = new Date("22/7/2020");

    test("Render", () => {
        const { getByText, getByTitle } = render(
            <Message
                count={Count}
                creationDate={creationDate}
                isRead={false}
                name={Name}
                text={Text}
            />
        );

        getByText("name");
        getByTitle("defaultUser");
        getByText(Count);
        getByText(Name);
        getByText(Text);
        getByText(TimeAgo(creationDate));
    });

    test("UserAvatar is show", () => {
        const { getByAltText } = render(
            <Message
                count={Count}
                creationDate={creationDate}
                isRead={false}
                name={Name}
                profileIcon="https://i.blogs.es/1a5c3a/finder-icon/450_1000.jpg"
                text={Text}
            />
        );

        getByAltText(Name);
    });

    test("NumberOfMessage NOT show", async () => {
        const { queryByText } = render(
            <Message
                count={Count}
                creationDate={creationDate}
                isRead={true}
                name={Name}
                text={Text}
            />
        );
        await waitFor(() => {
            expect(queryByText(Count)).not.toBeInTheDocument();
        });
    });

    test("HandleClick", () => {
        const mockHandler = jest.fn();

        const { container } = render(
            <Message
                count={Count}
                creationDate={creationDate}
                handleClick={mockHandler}
                isRead={false}
                name={Name}
                text={Text}
            />
        );

        fireEvent.click(container.firstChild);

        expect(mockHandler).toBeCalledTimes(1);
    });
});
