/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Splash from ".";

export default {
    title: "Pages/Splash",
    component: Splash,
    parameters: {
        docs: {
            description: {
                component: "Splash page"
            }
        }
    }
} as Meta;

addDecorator(StoryRouter());

const Template: Story = () => <Splash />;

export const Primary = Template.bind({});
