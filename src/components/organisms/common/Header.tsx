import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

export const Header = (): JSX.Element => {
	const currentTab = useLocation().pathname;
	const menuList = [
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
	];

	return (
		<AppBar position="static" color="primary">
			<Tabs
				value={currentTab}
				indicatorColor="secondary"
				textColor="inherit"
				centered
			>
				{menuList.map((item) => {
					return (
						<Tab
							key={item.id}
							label={item.label}
							value={item.value}
							to={item.value}
							component={Link}
						/>
					);
				})}
			</Tabs>
		</AppBar>
	);
};
