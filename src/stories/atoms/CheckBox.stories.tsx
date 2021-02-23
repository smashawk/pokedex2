import { Story, Meta } from "@storybook/react/types-6-0";
import { CheckBox, Props } from "@components/atoms/CheckBox";

export default {
	title: "atoms/CheckBox",
	component: CheckBox
} as Meta;

const Template: Story<Props> = (args) => <CheckBox {...args} />;

export const ON = Template.bind({});

ON.args = {
	isSelected: true
};

ON.parameters = {
	backgrounds: { default: "light" }
};
