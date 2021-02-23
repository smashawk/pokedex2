import { Story, Meta } from "@storybook/react/types-6-0";
import { PokeImg, Props } from "@components/atoms/PokeImg";

export default {
	title: "atoms/PokeImg",
	component: PokeImg
} as Meta;

const Template: Story<Props> = (args) => <PokeImg {...args} />;

export const Bulbasaur = Template.bind({});
export const Chespin = Template.bind({});

Bulbasaur.args = {
	no: 1
};
Chespin.args = {
	no: 650
};
