import { VFC } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";

export type Props = {
	currentTab: string;
	menuList: { label: string; value: string; id: number }[];
};

/**
 * Menu which have Link
 * @constructor
 */
export const HeaderMenu: VFC<Props> = ({ currentTab, menuList }) => {
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
