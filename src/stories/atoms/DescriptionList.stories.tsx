import { Story, Meta } from "@storybook/react/types-6-0";
import { DescriptionList, Props } from "@components/atoms/DescriptionList";

export default {
	title: "atoms/DescriptionList",
	component: DescriptionList
} as Meta;

const Template: Story<Props> = (args) => <DescriptionList {...args} />;

export const Bulbasaur = Template.bind({});
export const Chespin = Template.bind({});

Bulbasaur.args = {
	data: [
		{
			term: "No",
			description: 1
		},
		{
			term: "Name",
			description: "フシギダネ"
		},
		{
			term: "Species",
			description: "たねポケモン"
		},
		{
			term: "Type1",
			description: "grass"
		},
		{
			term: "Type2",
			description: "poison"
		},
		{
			term: "Text",
			description:
				"生まれたときから　背中に 不思議な　タネが　植えてあって 体と　ともに　育つという。"
		}
	]
};

Chespin.args = {
	data: [
		{
			term: "No",
			description: 650
		},
		{
			term: "Name",
			description: "ハリマロン"
		},
		{
			term: "Species",
			description: "いがぐりポケモン"
		},
		{
			term: "Type1",
			description: "grass"
		},
		{
			term: "Type2",
			description: ""
		},
		{
			term: "Text",
			description:
				"普段　やわらかい　頭の　トゲは 力を　こめると　鋭く　とがり 岩をも　つらぬくほど　硬くなる。"
		}
	]
};
