/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from ".";
import { IButton } from "./types";

export default {
    title: "Button",
    component: Button
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "Primary",
    handleClick: (): void => {}
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Secondary",
    handleClick: (): void => {}
};
