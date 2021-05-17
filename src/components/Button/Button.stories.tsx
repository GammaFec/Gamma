/* eslint-disable no-console */
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
    handleClick: console.log
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Secondary",
    handleClick: console.log
};
