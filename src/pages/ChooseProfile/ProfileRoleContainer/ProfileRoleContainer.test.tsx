/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import ProfileRoleContainer from ".";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import rolesData from "./rolesData.json";
import "jest-styled-components";

jest.mock("react-i18next", () => ({
    useTranslation: (): { t: (key: string) => string } => ({ t: (key: string): string => key })
}));

describe("<ProfileRoleContainer />", () => {
    const ContinueText = "continue";

    test("Render", () => {
        const { getByText } = render(
            <ProfileRoleContainer Data={rolesData} handleSubmit={(): void => {}} />
        );

        getByText(ContinueText);
    });

    test("Click the roles", () => {
        const mockHandler = jest.fn();

        const { getByRole, getByText } = render(
            <ProfileRoleContainer Data={rolesData} handleSubmit={mockHandler} />
        );

        const ContinueButton = getByText(ContinueText);
        const RolesList = getByRole("list");

        //Click the first role

        fireEvent.click(RolesList.firstChild);
        fireEvent.click(ContinueButton);

        expect(mockHandler).toBeCalledTimes(1);
        expect(mockHandler).toHaveBeenCalledWith(rolesData[0].path);

        //Click the last role

        fireEvent.click(RolesList.lastChild);
        fireEvent.click(ContinueButton);

        expect(mockHandler).toHaveBeenCalledWith(rolesData[rolesData.length - 1].path);
        expect(mockHandler).toBeCalledTimes(2);
    });

    test("Click the button without click a role", () => {
        const mockHandler = jest.fn();

        const { getByText } = render(
            <ProfileRoleContainer Data={rolesData} handleSubmit={mockHandler} />
        );

        fireEvent.click(getByText(ContinueText));
        expect(mockHandler).toBeCalledTimes(0);
    });
});
