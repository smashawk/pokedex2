import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputTextField, Props } from "@components/atoms/InputTextField";

export default {
	title: "atoms/InputTextField",
	component: InputTextField
} as Meta;

const Template: Story<Props> = (args): JSX.Element => (
	<InputTextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	label: "primary",
	type: "filled"
};
