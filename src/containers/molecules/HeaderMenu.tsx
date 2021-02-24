import { VFC } from "react";
import { useLocation } from "react-router-dom";
import { menuList } from "@constants/variables";
import { HeaderMenu } from "@components/molecules/HeaderMenu";

/**
 * Menu which have Link
 * @constructor
 */
export const EnhancedHeaderMenu: VFC = () => {
	const currentTab = useLocation().pathname;

	return <HeaderMenu currentTab={currentTab} menuList={menuList} />;
};
