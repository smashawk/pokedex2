import { Story, Meta } from "@storybook/react/types-6-0";
import {
	SuggestMultiTextField,
	Props
} from "@components/atoms/SuggestMultiTextField";
import { parameters } from "../../../.storybook/preview";

export default {
	title: "atoms/SuggestMultiTextField",
	component: SuggestMultiTextField,
	parameters
} as Meta;

const Template: Story<Props> = (args) => <SuggestMultiTextField {...args} />;

export const Main = Template.bind({});

Main.args = {
	suggestList: [
		{ value: "grass", label: "くさ", no: 1 },
		{ value: "poison", label: "どく", no: 4 }
	],
	option: [{ value: "grass", label: "くさ", no: 1 }]
};
