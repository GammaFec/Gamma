import React from "react";
import ButtonSocial from "./";
import { Icons } from "./icon";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<ButtonSocial />", () => {
    const ButtonText = "Test";
    const ListTitle = "Icon list";

    test("Render Paragraph", () => {
        const { getByText } = render(<ButtonSocial text={ButtonText} />);
        getByText(ButtonText);
    });

    test("Render List", () => {
        const { getByTitle } = render(<ButtonSocial text={ButtonText} />);
        getByTitle(ListTitle);
    });

    test("Render all items in the list", () => {
        const { getAllByRole } = render(<ButtonSocial text={ButtonText} />);

        const IconsUrl = Icons.map(({ url }) => url);
        const ItemsList = getAllByRole("link");

        const ItemListHrefValue = ItemsList.map(
            ({ attributes }) => attributes.getNamedItem("href").value
        );

        expect(ItemListHrefValue).toEqual(IconsUrl);
    });
});
