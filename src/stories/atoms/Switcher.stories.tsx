import { Story, Meta } from "@storybook/react/types-6-0";
import { Switcher, Props } from "@components/atoms/Switcher";
import { parameters } from "../../../.storybook/preview";

export default {
	title: "atoms/Switcher",
	component: Switcher,
	parameters
} as Meta;

const Template: Story<Props> = (args) => <Switcher {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	checked: false,
	label: "ON/OFF"
};
