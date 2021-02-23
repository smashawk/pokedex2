import { VFC } from "react";
import { Checkbox } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

export type Props = {
	isSelected: boolean;
};

export const CheckBox: VFC<Props> = ({ isSelected }) => {
	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	return (
		<Checkbox
			icon={icon}
			checkedIcon={checkedIcon}
			style={{ marginRight: 8 }}
			checked={isSelected}
		/>
	);
};
