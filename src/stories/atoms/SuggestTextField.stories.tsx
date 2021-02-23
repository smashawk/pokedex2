import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { SuggestTextField, Props } from "@components/atoms/SuggestTextField";
import { parameters } from "../../../.storybook/preview";

export default {
	title: "atoms/SuggestTextField",
	component: SuggestTextField,
	parameters
} as Meta;

const Template: Story<Props> = (args) => <SuggestTextField {...args} />;

export const Main = Template.bind({});

Main.args = {
	suggestList: [
		{ value: "フシギダネ", label: "フシギダネ", no: 1 },
		{ value: "ハリマロン", label: "ハリマロン", no: 650 }
	],
	option: { value: "フシギダネ", label: "フシギダネ", no: 1 },
	onChange: action("changed")
};
