import { Story, Meta } from "@storybook/react/types-6-0";
import { StatsRadarChart, Props } from "@components/atoms/StatsRadarChart";

export default {
	title: "atoms/StatsRaderChart",
	component: StatsRadarChart
} as Meta;

const Template: Story<Props> = (args) => <StatsRadarChart {...args} />;

export const Bulbasaur = Template.bind({});
export const Chespin = Template.bind({});

Bulbasaur.args = {
	data: [45, 49, 49, 65, 65, 45]
};
Chespin.args = {
	data: [56, 61, 65, 48, 45, 38]
};
