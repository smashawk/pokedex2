import { Story, Meta } from "@storybook/react/types-6-0";
import { HeaderMenu, Props } from "@components/molecules/HeaderMenu";

export default {
	title: "molecules/HeaderMenu",
	component: HeaderMenu,
	decorators: [
		(StoryStyle) => (
			<div style={{ width: 960 }}>
				<StoryStyle />
			</div>
		)
	]
} as Meta;

const Template: Story<Props> = (args) => <HeaderMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	currentTab: "/",
	menuList: [
		{
			label: "TOP",
			value: "/",
			id: 0
		},
		{
			label: "名前検索",
			value: "/pokemon",
			id: 1
		},
		{
			label: "タイプ検索",
			value: "/type",
			id: 2
		},
		{
			label: "相棒検索",
			value: "/partner",
			id: 3
		}
	]
};
