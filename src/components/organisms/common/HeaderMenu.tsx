import { VFC } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "@constants/variables";

/**
 * Menu which have Link
 * @constructor
 */
export const HeaderMenu: VFC = () => {
	const currentTab = useLocation().pathname;

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
