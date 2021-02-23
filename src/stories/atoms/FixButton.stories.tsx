import { Story, Meta } from "@storybook/react/types-6-0";
import { FixButton, Props } from "@components/atoms/FixButton";
import { parameters } from "../../../.storybook/preview";

export default {
	title: "atoms/FixButton",
	component: FixButton,
	parameters
} as Meta;

const Template: Story<Props> = (args) => <FixButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	text: "決定",
	color: "primary",
	variant: "contained"
};
