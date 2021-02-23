import { Story, Meta } from "@storybook/react/types-6-0";
import { PokeIconList, Props } from "@components/atoms/PokeIconList";
import { parameters } from "../../../.storybook/preview";

export default {
	title: "atoms/PokeIconList",
	component: PokeIconList,
	parameters
} as Meta;

const Template: Story<Props> = (args) => <PokeIconList {...args} />;

export const Bulbasaur = Template.bind({});
export const Chespin = Template.bind({});

Bulbasaur.args = {
	item: { name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
	pokeId: 1
};

Chespin.args = {
	item: { name: { ja: "ハリマロン", en: "Chespin" }, no: 650 },
	pokeId: 1
};
